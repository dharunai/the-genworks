import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Instagram, MessageCircle, CheckCircle2, X } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Submit to Supabase
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message
          }
        ]);

      if (supabaseError) throw supabaseError;

      // 2. Submit to Email (FormSubmit.co)
      try {
        await fetch(`https://formsubmit.co/ajax/${import.meta.env.VITE_CONTACT_EMAIL || 'sales@thegenworks.com'}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            _subject: `New Lead: ${formData.name}`,
            _template: 'table',
            _autoresponse: `Hi ${formData.name},\n\nThank you for reaching out to GenWorks! We have received your message and will get back to you within 24 hours.\n\nLet's build something amazing together.\n\nBest,\nThe GenWorks Team`
          })
        });
      } catch (emailError) {
        console.error("Email submission failed:", emailError);
        // We don't block success if email fails, as DB is primary source of truth
      }

      setShowPopup(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      toast.success("Message sent successfully!");

      // Auto-hide popup after 4 seconds
      setTimeout(() => setShowPopup(false), 4000);

    } catch (error: any) {
      console.error("Form submission failed:", error);
      toast.error("Failed to send message: " + (error.message || "Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/the-genworks/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/thegenworks" },
    { icon: MessageCircle, label: "Email", href: "mailto:sales@thegenworks.com" }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-rubik font-bold text-4xl md:text-5xl mb-6">
              Let's <span className="text-glow-blue text-primary">Connect</span>
            </h2>
            <p className="font-poppins text-lg text-muted-foreground">
              Ready to transform your business? Get in touch with us today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-glow-blue focus:glow-blue transition-all font-poppins"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-glow-blue focus:glow-blue transition-all font-poppins"
                />
              </div>
            </div>

            <div>
              <Input
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-card border-glow-green focus:glow-green transition-all font-poppins"
              />
            </div>

            <div>
              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card border-glow-blue focus:glow-blue transition-all font-poppins resize-none"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="font-rubik font-semibold px-12 py-6 glow-green bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Let's Build Together"}
              </Button>
            </div>
          </form>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-4 rounded-full border-glow-blue bg-card/50 hover:glow-blue transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />

          {/* Popup Content */}
          <div className="relative bg-gradient-to-br from-card via-card to-muted border-2 border-primary/50 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <CheckCircle2 className="relative w-20 h-20 text-primary animate-bounce" />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-rubik font-bold text-3xl md:text-4xl text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Message Sent!
            </h3>

            {/* Description */}
            <p className="font-inter text-center text-muted-foreground text-base md:text-lg leading-relaxed">
              Thank you for reaching out! We'll get back to you within 24 hours.
            </p>

            {/* Decorative Element */}
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
