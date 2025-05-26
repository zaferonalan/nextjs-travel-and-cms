import RecentProduct from "@/components/sections/recent/RecentProduct";
import Hero from "./_components/Hero/Hero";


export default function Home() {
  
  return (
    <div>
      <Hero/>
      <div className="min-h-96"></div>
      <RecentProduct/>
      <div className="min-h-96"></div>
    </div>
  );
}
