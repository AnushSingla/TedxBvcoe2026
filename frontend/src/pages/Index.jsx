import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Speakers from "@/components/Speakers";
import Tickets, { scrollToElement } from "@/components/Tickets"; // import scrollToElement
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Merch from "@/components/Merch";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Date from "@/components/Date";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="flex flex-col bg-background">
        <br></br>
        <Date scrollToElement={scrollToElement} />
        <InfoSection />
        <br></br>
        <br></br>
        <Speakers />
        <br></br>
        <br></br>
        <br></br>
        <Tickets />
        <Partners />
        <Team />
        <Merch />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
