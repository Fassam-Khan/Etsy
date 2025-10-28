"use client";
import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  if (!product) return null; // safety check in case product is undefined

  return (
    <Link
      href={`/products/${product.id}`}
      className="outline outline-gray-300 md:w-[260px] rounded-2xl hover:shadow-xl cursor-pointer relative group focus:shadow-2xl block"
    >
      <div className="bg-cover md:h-[270px] h-[200px] rounded-t-2xl p-2">
        <img
          src={product.image || product.images?.[0]}
          alt={product.title || "Product image"}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-2">
        <p>{product.title}</p>
        <p className="text-xl text-orange-400">Rs {product.price}</p>
        <button
          type="button"
          onClick={(e) => e.preventDefault()} // prevent Link navigation
          className="bg-black text-white p-1 w-full rounded-2xl"
        >
          Add to cart
        </button>
      </div>
      <span className="hidden group-hover:inline transition-all group-focus:inline bg-white rounded-full p-2 absolute top-2 right-2">
        <img src="heart.svg" alt="Wishlist" width={16} />
      </span>
    </Link>
  );
};

export default ProductCard;
