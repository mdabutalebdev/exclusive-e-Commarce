"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { CategoryFetch } from "@/redux/categorySlice";
import { fetchProducts } from "@/redux/productSlice";
import { GrNext, GrPrevious } from "react-icons/gr";

const ProductPage = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 }); // Updated
  const [stockFilter, setStockFilter] = useState("all");
  const productsPerPage = 8;

  // Fetch data
  useEffect(() => {
    if (!products.items?.length) dispatch(fetchProducts());
    if (!categories.items?.length) dispatch(CategoryFetch());
  }, [dispatch]);

  // Initialize products & price range
  useEffect(() => {
    if (products.items) {
      setFilteredProducts(products.items);

      // Set min/max price based on data
      const prices = products.items.map((p) => p.discountPrice || p.mainPrice);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange({ min: minPrice, max: maxPrice });
    }
  }, [products.items]);

  // Handle category selection (multi-select)
  const handleCategoryClick = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
      setFilteredProducts(products.items);
    } else {
      setSelectedCategories((prev) => {
        const updated = prev.includes(category)
          ? prev.filter((cat) => cat !== category)
          : [...prev.filter((c) => c !== "All"), category];
        return updated;
      });
    }
  };

  const removeChip = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  const clearAll = () => setSelectedCategories([]);

  // Filter logic
  useEffect(() => {
    let filtered = products.items || [];

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes("All")) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // Stock filter
    if (stockFilter === "in") {
      filtered = filtered.filter((p) => p.inStock === true);
    } else if (stockFilter === "out") {
      filtered = filtered.filter((p) => p.inStock === false);
    }

    // Price filter using range slider
    filtered = filtered.filter((p) => {
      const price = p.discountPrice || p.mainPrice;
      return price >= priceRange.min && price <= priceRange.max;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategories, stockFilter, priceRange, products.items]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (products.loading || categories.loading) {
    return <div className="flex justify-center mt-20">Loading...</div>;
  }

  // Extract min and max for slider
  const allPrices = products.items.map((p) => p.discountPrice || p.mainPrice);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  return (
    <div className="container mx-auto px-8">
      <div className="flex gap-10">
        {/* Sidebar Filters */}
        <div className="w-1/5 border h-auto border-gray-200 mt-10 p-4 flex flex-col">
          <h2 className="font-bold mb-4 text-xl text-[#DB4444]">Filters</h2>
          {/* price range filter */}
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="mb-4">
            <input
              type="range"
              min={Math.min(...products.items.map((p) => p.mainPrice))}
              max={Math.max(...products.items.map((p) => p.mainPrice))}
              value={
                priceRange.max ||
                Math.max(...products.items.map((p) => p.mainPrice))
              }
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: Number(e.target.value) })
              }
              className="w-full  h-2 rounded-lg bg-[#DB4444]  cursor-pointer"
              style={{
                accentColor: "#DB4444",
              }}
            />
            <div className="flex justify-between text-sm mt-1">
              <span>
                ${Math.min(...products.items.map((p) => p.mainPrice))}
              </span>
              <span>
                $
                {priceRange.max ||
                  Math.max(...products.items.map((p) => p.mainPrice))}
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2 mb-4">
            <li
              onClick={() => handleCategoryClick("All")}
              className="flex items-center gap-2 cursor-pointer hover:text-[#DB4444]"
            >
              <input
                type="checkbox"
                readOnly
                checked={selectedCategories.includes("All")}
                className="accent-[#DB4444] cursor-pointer"
              />
              <span>All</span>
            </li>
            {categories.items?.map((cat) => (
              <li
                key={cat.id}
                onClick={() => handleCategoryClick(cat.name)}
                className="flex items-center gap-2 cursor-pointer hover:text-[#DB4444]"
              >
                <input
                  type="checkbox"
                  readOnly
                  checked={selectedCategories.includes(cat.name)}
                  className="accent-[#DB4444] cursor-pointer"
                />
                <span>{cat.name}</span>
              </li>
            ))}
          </ul>

          {/* Stock Filter */}
          <h3 className="font-semibold mb-2">Stock</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="stock"
                value="all"
                checked={stockFilter === "all"}
                onChange={(e) => setStockFilter(e.target.value)}
                className="accent-[#DB4444]"
              />
              All
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="stock"
                value="in"
                checked={stockFilter === "in"}
                onChange={(e) => setStockFilter(e.target.value)}
                className="accent-[#DB4444]"
              />
              In Stock
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="stock"
                value="out"
                checked={stockFilter === "out"}
                onChange={(e) => setStockFilter(e.target.value)}
                className="accent-[#DB4444]"
              />
              Out of Stock
            </label>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="pt-10 pb-16 grid grid-cols-4 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="flex justify-center items-center col-span-4">
                No Products Found
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 gap-2 pb-10">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 py-1 rounded hover:text-[#DB4444]"
              >
                <GrPrevious />
              </button>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded ${
                  currentPage === num
                    ? "bg-[#DB4444] text-white font-bold"
                    : "bg-white text-black"
                }`}
              >
                {num}
              </button>
            ))}

            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 py-1 rounded hover:text-[#DB4444]"
              >
                <GrNext />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
