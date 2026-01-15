import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-start md:col-span-2">
            <img src="/thegenworks-logo.png" alt="TheGenWorks" className="h-14 mb-4" />
            <p className="font-inter text-sm text-muted-foreground leading-relaxed max-w-md">
              Where Next-Gen Marketing Works. AI-powered digital ecosystems for smarter business growth.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/the-genworks/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/thegenworks" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:sales@thegenworks.com" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-rubik font-bold text-base mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-rubik font-bold text-base mb-4 text-foreground">Connect</h3>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Ready to transform your business?
              <br />
              <a href="#contact" className="text-primary hover:underline mt-2 inline-block">
                Let's talk →
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="font-inter text-sm text-muted-foreground">
            © {currentYear} TheGenWorks. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
