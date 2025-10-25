import Image from "next/image";
import Hero from "@/components/mycomponent/Hero";
import Feature from "@/components/mycomponent/Feature";
import GiftCard from "@/components/mycomponent/GiftCard"

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Feature/>
      <GiftCard/>
      
      
    </div>
  );
}
