import BestSeling from "@/components/BestSeling";
import Category from "@/components/Category";
import EventBanner from "@/components/EventBanner";
import ExploreAllProduct from "@/components/ExploreAllProduct";
import FlashSales from "@/components/FlashSales";
import Hero from "@/components/Hero";
import NewArrible from "@/components/NewArrible";
import WeProvaideCustomar from "@/components/WeProvaideCustomar";
import InitiakFatchClient from "@/redux/InitiakFatchClient";

export default function Home() {
  return (
    <div>
      <InitiakFatchClient />
      <Hero />
      <FlashSales />
      <Category/>
      <BestSeling/>
      <EventBanner/>
      <ExploreAllProduct/>
      <NewArrible/>
      <WeProvaideCustomar/>
    </div>
  );
}
