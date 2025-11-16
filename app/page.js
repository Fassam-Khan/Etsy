import Image from "next/image";
import Hero from "@/components/mycomponent/Hero";
import Link from "next/link";
import ProductList from "@/components/mycomponent/ProductList";
import Header from "@/components/mycomponent/Header";
import Footer from "@/components/mycomponent/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="">
      <Hero/>
      <section className="mt-10">
        <h2 className="font-bold text-2xl text-center ">Buy Used Laptops In Karachi</h2>
      <ProductList/>
      </section>
      
      
    </div>
    <Footer/>
    </>
  );
}
