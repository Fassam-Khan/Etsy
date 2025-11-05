import Image from "next/image";
import Hero from "@/components/mycomponent/Hero";
import Feature from "@/components/mycomponent/Feature";
import GiftCard from "@/components/mycomponent/GiftCard"
import Link from "next/link";
import ProductCard from "@/components/mycomponent/ProductCard";
import ProductList from "@/components/mycomponent/ProductList";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <section className="mt-10">
        <h2 className="font-bold text-2xl text-center ">Buy Used Laptops In Karachi</h2>
      <ProductList/>
      </section>
      
      
    </div>
  );
}
