import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Clean Gradient Background - Primeloop style */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="font-rubik font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight px-4">
            Ready to Scale{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TheGenWorks Way?
            </span>
          </h2>
          
          <p className="font-inter text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Let's turn your complex workflows into simple growth engines.
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg"
              asChild
              className="group font-rubik font-semibold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://calendar.app.google/JqP12YySpBDSHQjcA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Schedule A Call
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
