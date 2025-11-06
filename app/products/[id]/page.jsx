"use client";
import { productData } from "@/data/product";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const params = useParams(); // ✅ move this to the top
  const [data, setData] = useState(null);

  const fetchProductData = () => {
    const foundProduct = productData.find(
      (item) => Number(params.id) === item.id
    );
    if (foundProduct) {
      setData(foundProduct);
      console.log(foundProduct);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="md:p-4 p-2">
      {/* Breadcrumb */}
      <div>
        <ul>
          <li className="text-sm">Homepage <span>/</span> {data.title}</li>
        </ul>
      </div>

      {/* Product Page */}
      <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
        {/* Left box */}
        <div className="w-full flex gap-4">
          <div className="md:flex flex-col gap-6">
            <div className="w-24 h-24 hidden md:block border">
              <img src={data.image} alt={data.title} />
            </div>
          </div>
          <div className="border rounded-xl p-1 w-full">
            <img
              src={data.image}
              alt={data.title}
              className="object-fill w-full"
            />
          </div>
        </div>

        {/* Right box */}
        <div className="p-4 flex flex-col gap-4">
          <h2 className="font-semibold text-xl">{data.title}</h2>
          <p>{data.shortDescription}</p>

          {/* ✅ Sale Price Logic */}
          <div className="flex gap-2 items-center">
            {data.salePrice ? (
              <>
                <p className="font-semibold text-red-500 text-3xl">
                  PKR {data.salePrice}
                </p>
                <p className="line-through text-gray-400 text-xl">
                  PKR {data.price}
                </p>
              </>
            ) : (
              <p className="font-semibold text-orange-500 text-3xl">
                PKR {data.price}
              </p>
            )}
          </div>

          <Link href={data.link} target="_blank" className="cursor-pointer">
            <button className="bg-orange-400 text-white p-2 w-[250px] rounded">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="md:w-[60%] w-full mt-4">
        <h2 className="font-semibold text-xl">Description</h2>
        <div className="w-[95%] mt-4">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
