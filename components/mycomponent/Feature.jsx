"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Feature = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="mt-12 p-2">
      <h2 className="text-2xl font-semibold mb-6">Today's Big Deals</h2>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 overflow-auto">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
