"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded-xl shadow hover:shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="h-40 w-full object-contain"
          />
          <h2 className="font-semibold mt-3 text-sm">{item.title}</h2>
          <p className="text-gray-600">${item.price}</p>

          {/* 👇 Link to single product page */}
          <Link href={`/products/${item.id}`}>
            <button className="bg-black text-white w-full mt-2 rounded py-1">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
