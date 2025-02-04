import Image from "next/image";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import OurProducts from "./components/home/OurProducts";
import CEOMessage from "./components/home/CEOMessage";

export default function Home() {
  return (
   <>
    <Hero/>
    <About/>
    <OurProducts/>
    <CEOMessage/>
   </>
  );
}
