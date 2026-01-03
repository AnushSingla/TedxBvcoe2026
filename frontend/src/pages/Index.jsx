import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Speakers from "@/components/Speakers";
import Tickets from "@/components/Tickets";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Merch from "@/components/Merch";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="flex flex-col bg-background">
        <InfoSection />
        <Speakers />
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
