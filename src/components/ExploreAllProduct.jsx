"use client";
import Heading from "./shared/Heading";
import CountdownTimer from "./shared/CountdownTimer";
import { useSelector } from "react-redux";
import ProductCard from "./shared/ProductCard";
import Button from "./shared/Button";
import Link from "next/link";

const BestSeling = () => {
  const products = useSelector((state) => state.products);

if (products.loading) {
  return <div className="flex justify-center">Loading...</div>;
}
  return (
    <div className="py-20 bg-gray-50 ">
      <div className="container mx-auto px-24">
        {/* Heading */}
        <Heading title={"Our Products"} SectionHead={"Explore Our Products"} />

        {/* Product Grid */}
        <div className="pt-10 pb-16 grid grid-cols-5 gap-6">
          {products.items && products.items.length > 0 ? (
            products.items.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="flex justify-center items-center col-span-5">
              No Products Available
            </div>
          )}
        </div>

        {/* View All Button */}
        <Link href="/product" className="">
          <div className="flex justify-center">
            <Button className="cursor-pointer">View All Products</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BestSeling;
