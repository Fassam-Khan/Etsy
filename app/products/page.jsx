"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <Link key={product._id} href={`/products/${product._id}`}>
          <div className="border rounded-xl p-4 shadow hover:shadow-lg cursor-pointer">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-gray-600">Rs:{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
