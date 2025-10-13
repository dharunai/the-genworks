import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechStackMarquee from "@/components/TechStackMarquee";
import ServicesMarquee from "@/components/ServicesMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter scroll-smooth">
      <Navigation />
      <Hero />
      <TechStackMarquee />
      <ServicesMarquee />
      <About />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
