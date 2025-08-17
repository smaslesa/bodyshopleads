import Hero from "@/components/home/Hero";
import GoogleSearchLive from "@/components/home/GoogleSearchLive";
import WebsiteShowcase from "@/components/home/WebsiteShowcase";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <GoogleSearchLive />
      <WebsiteShowcase />
      <Services />
      <CTA />
    </>
  );
}