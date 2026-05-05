import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Logo slide-in animation
    setTimeout(() => setIsLogoVisible(true), 100);

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-background/80 backdrop-blur-sm border-b border-border/50'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with slide animation */}
          <div className={`flex items-center transition-all duration-700 z-50 ${isLogoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-2 md:mr-3 ml-1">
              <img 
                src="/thegenworks-logo.png" 
                alt="TheGenWorks" 
                className="absolute w-[300%] md:w-[350%] max-w-none h-auto object-contain mix-blend-screen pointer-events-none" 
              />
            </div>
            <span className="font-rubik font-bold text-lg md:text-xl text-foreground tracking-tight pt-1 relative z-10">The GenWorks</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-inter text-sm text-foreground hover:text-primary transition-colors font-medium relative group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button
              size="sm"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-semibold hover:scale-105 transition-all duration-300"
            >
              <a href="https://calendar.app.google/JqP12YySpBDSHQjcA" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 40, top: 0 }}
      >
        <div className="flex flex-col items-center space-y-6 mt-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-rubik text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-rubik font-semibold w-full max-w-[200px] mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a href="https://calendar.app.google/JqP12YySpBDSHQjcA" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
