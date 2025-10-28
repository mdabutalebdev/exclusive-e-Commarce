"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { CategoryFetch } from "@/redux/categorySlice";
import { fetchProducts } from "@/redux/productSlice";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ProductPage = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Fetch products and categories on mount
  useEffect(() => {
    if (!products.items?.length) dispatch(fetchProducts());
    if (!categories.items?.length) dispatch(CategoryFetch());
  }, [dispatch]);

  // Initialize filtered products when products arrive
  useEffect(() => {
    if (products.items) setFilteredProducts(products.items);
  }, [products.items]);

  // Filter by category (case-insensitive)
  const handleCategoryClick = (categoryName) => {
    setCurrentPage(1); // reset page to 1 on category change
    if (categoryName === "All") {
      setFilteredProducts(products.items);
    } else {
      const filtered = products.items.filter(
        (product) =>
          product.category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  if (products.loading || categories.loading) {
    return <div className="flex justify-center mt-20">Loading...</div>;
  }

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto px-8">
      <div className="flex gap-10">
        {/* Categories */}
        <div className="w-1/5 border h-[400px] border-gray-200 mt-10 p-4">
          <h2 className="font-bold mb-4">Categories</h2>
          <ul>
            <li
              onClick={() => handleCategoryClick("All")}
              className="cursor-pointer mb-2 hover:text-[#DB4444]"
            >
              All
            </li>
            {categories.items?.map((cat) => (
              <li
                key={cat.id}
                onClick={() => handleCategoryClick(cat.name)}
                className="cursor-pointer mb-2 hover:text-[#DB4444]"
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="pt-10 pb-16 grid grid-cols-4 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="flex justify-center items-center col-span-4">
                No Products Available
              </div>
            )}
          </div>

          <div className="flex pl-80 items-center mt-6 gap-2 pb-10">
            {/* Previous Button */}
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 py-1 rounded hover:text-[#DB4444]"
              >
                <GrPrevious />
              </button>
            )}

            {/* Page Numbers */}
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-3 py-1 rounded ${
                  currentPage === number
                    ? "bg-[#DB4444] text-white font-bold"
                    : "bg-white text-black"
                }`}
              >
                {number}
              </button>
            ))}

            {/* Next Button */}
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
