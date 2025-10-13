import { Megaphone, Code, Workflow, Brain, MessageSquare, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Data-driven campaigns that reach the right audience and convert."
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Fast, responsive, and beautiful websites built with modern tech."
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline operations and save hours with smart automation."
    },
    {
      icon: Brain,
      title: "Custom Gen AI Tools",
      description: "Tailored AI solutions that solve your unique business challenges."
    },
    {
      icon: MessageSquare,
      title: "RAG Chatbots & Internal Trainers",
      description: "AI assistants that understand your data and empower your team."
    },
    {
      icon: TrendingUp,
      title: "Business Strategy & Consulting",
      description: "Strategic guidance to scale smarter with AI and automation."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff05_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h2 className="font-rubik font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 mb-4 md:mb-6 px-4 relative inline-block group cursor-default">
            What We Do
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-32 transition-all duration-500" />
            {/* Side brackets */}
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-l-2 border-t-2 border-b-2 border-primary/0 group-hover:w-3 group-hover:h-8 group-hover:border-primary/40 transition-all duration-500" />
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-r-2 border-t-2 border-b-2 border-primary/0 group-hover:w-3 group-hover:h-8 group-hover:border-primary/40 transition-all duration-500" />
          </h2>
          <p className="font-inter text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            End-to-end automation solutions that scale with your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="mb-4 md:mb-6">
                    <div className="inline-flex p-2.5 md:p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="font-rubik font-bold text-lg md:text-xl mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
