"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!product) return <p className="p-10 text-center">Loading...</p>;

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <img src={product.image} alt={product.title} className="h-72 w-72 object-contain" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-3">{product.description}</p>
        <p className="text-lg font-semibold mt-3">${product.price}</p>
        <button className="bg-black text-white px-5 py-2 mt-3 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
