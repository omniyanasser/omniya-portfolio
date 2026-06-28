import About from "@/components/shared/About";
//import Blogs from "@/components/shared/Blog";
//import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Portfolio from "@/components/shared/Portfolio";
import Services from "@/components/shared/Services";
import Skills from "@/components/shared/Skills";
//import Works from "@/components/shared/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        {/* <Works /> */}
        {/* <Blogs /> */}
        {/* <FAQ /> */}
      </div>
      {/* Final CTA Section */}
      <Footer />
    </div>
  );
}
