"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GiftCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="mt-12 p-2 relative">
      <h2 className="text-2xl font-semibold mb-6">Gifts Deals</h2>

      <Carousel className="w-full">
        <CarouselContent className="gap-4">
          {products.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 md:basis-1/4 lg:basis-1/5 p-2"
            >
              <ProductCard product={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};

export default GiftCard;
