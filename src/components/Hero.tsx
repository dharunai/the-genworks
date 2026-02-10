import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff10_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-5xl">
        <div className="space-y-6 md:space-y-8">

          <h1 className={`font-rubik font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              Smarter.{" "}
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default" style={{ transitionDelay: '0.1s' }}>
              Faster.{" "}
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default" style={{ transitionDelay: '0.2s' }}>
              Scalable.
            </span>
            <br />
            <span className="relative inline-block group cursor-default">
              <span className="relative bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                TheGenWorks Way.
              </span>
            </span>
          </h1>

          <p className={`font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block hover:text-foreground transition-colors duration-300">
              Custom SaaS, AI Automation & Intelligent Business Systems built to scale startups and modern enterprises.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              asChild
              className="group font-rubik font-semibold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://calendar.app.google/JqP12YySpBDSHQjcA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule A Call
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="font-rubik font-semibold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Explore More
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;

