"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { CategoryFetch } from "@/redux/categorySlice";
import { fetchProducts } from "@/redux/productSlice";
import { GrNext, GrPrevious } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

const ProductPage = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [stockFilter, setStockFilter] = useState("all");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
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
      const prices = products.items.map((p) => p.discountPrice || p.mainPrice);
      setPriceRange({ min: Math.min(...prices), max: Math.max(...prices) });
    }
  }, [products.items]);

  // Category selection
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

  // Clear category chip
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
    if (stockFilter === "in") filtered = filtered.filter((p) => p.inStock);
    if (stockFilter === "out") filtered = filtered.filter((p) => !p.inStock);

    // Price filter
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

  // All prices for slider
  const allPrices = products.items.map((p) => p.discountPrice || p.mainPrice);

  // Filter JSX (can reuse for mobile & desktop)
  const FilterContent = () => (
    <div className="flex flex-col gap-4">
      {/* Price */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <input
          type="range"
          min={Math.min(...allPrices)}
          max={Math.max(...allPrices)}
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: Number(e.target.value) })
          }
          className="w-full h-2 rounded-lg bg-[#DB4444] cursor-pointer"
          style={{ accentColor: "#DB4444" }}
        />
        <div className="flex justify-between text-sm mt-1">
          <span>${Math.min(...allPrices)}</span>
          <span>${priceRange.max}</span>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
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
      </div>

      {/* Stock */}
      <div>
        <h3 className="font-semibold mb-2">Stock</h3>
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
  );

  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end my-4">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="bg-[#DB4444] text-white px-4 py-2 rounded-md"
        >
          Filter
        </button>
      </div>

      <div className="flex gap-10">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-1/5 border border-gray-200 mt-10 p-4 flex-col">
          <FilterContent />
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileFilterOpen(false)}
            ></div>
            <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 p-6 transform transition-transform duration-300 translate-x-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#DB4444]">Filters</h2>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-gray-500"
                >
                  <RxCross2 />
                </button>
              </div>
              <FilterContent />
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="bg-[#DB4444] text-white py-2 mt-4 rounded w-full"
              >
                Apply Filters
              </button>
            </div>
          </>
        )}

        {/* Products Section */}
        <div className="flex-1">
          <div className="pt-10 pb-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
