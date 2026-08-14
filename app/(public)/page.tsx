import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Guarantee from "@/components/sections/Guarantee";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import VideoProofs from "@/components/sections/VideoProofs";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Guarantee />
      <div className="section-divider" />
      <VideoProofs />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <Portfolio />
      <div className="section-divider" />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
