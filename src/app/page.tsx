import Blogs from "@/components/ui/home/blogs";
import CTA from "@/components/ui/home/callToAction";
import Destinations from "@/components/ui/home/destinations";
import Hero from "@/components/ui/home/hero";
import Reviews from "@/components/ui/home/reviews";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Destinations />
      <CTA />
      <Reviews />
      <Blogs />
    </main>
  );
}
