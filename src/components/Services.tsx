import { Megaphone, Code, Workflow, Brain, MessageSquare, TrendingUp, Users, Server, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "CRM & Lead Management Systems",
      description: "Enterprise-grade CRM systems built for scaling teams. From intelligent lead capture and automated follow-ups to real-time dashboards and pipeline tracking, our systems streamline your customer journey. Integrate email automation, WhatsApp sync, internal team workflows, and performance analytics into one centralized business engine built for growth."
    },
    {
      icon: Server,
      title: "API Integrations & Backend Systems",
      description: "API-first backend systems engineered for performance. We build secure, scalable backend architectures powered by REST APIs and modern frameworks. Seamlessly connect payment gateways, third-party platforms, CRMs, marketing tools, and internal systems into one unified infrastructure. Our API-first approach ensures flexibility, automation, and long-term scalability for your digital ecosystem."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Instagram Automation",
      description: "AI-powered automation across messaging platforms. Automate customer engagement with intelligent chat workflows across WhatsApp and Instagram. We develop AI-driven lead qualification bots, automated responses, CRM synchronization, broadcast systems, and sales funnel automation. Turn conversations into conversions with real-time automation and data-driven marketing intelligence."
    },
    {
      icon: CreditCard,
      title: "FinTech & Business Web Apps",
      description: "Secure financial-grade web applications built for scale. We develop secure financial dashboards, payment processing systems, analytics engines, and custom business web applications. Built with scalability, compliance, and performance in mind, our FinTech solutions empower startups and enterprises to manage transactions, data, and growth with confidence."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "We create data-driven digital marketing strategies that combine SEO, performance advertising, content marketing, and conversion-focused funnels to generate qualified leads and measurable growth. From search engine optimization and Google Ads to social media campaigns and retargeting systems, our approach ensures your brand reaches the right audience and converts consistently across digital channels."
    },
    {
      icon: Code,
      title: "Website Development",
      description: "We design and develop fast, responsive, and SEO-optimized websites using modern frameworks and scalable architectures. From corporate websites and landing pages to dynamic web applications and CMS platforms, our development process prioritizes performance, user experience, and search visibility to help businesses build a strong digital presence."
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "We build intelligent workflow automation systems that integrate APIs, CRM platforms, marketing tools, and internal processes to eliminate repetitive tasks and improve efficiency. By automating operations, approvals, notifications, and customer journeys, we help businesses save time, reduce manual errors, and scale operations with structured automation infrastructure."
    },
    {
      icon: Brain,
      title: "Custom Gen AI Tools",
      description: "We develop custom generative AI tools and AI-powered applications tailored to your business needs. From intelligent document processing and automated content systems to predictive analytics and smart decision-support tools, our AI solutions enhance productivity, streamline workflows, and unlock data-driven innovation across your organization."
    },
    {
      icon: MessageSquare,
      title: "RAG Chatbots & Internal Trainers",
      description: "We build advanced RAG-based chatbots and AI knowledge assistants that integrate with your internal data, documents, and systems. These intelligent bots provide accurate responses, support teams in real time, automate customer interactions, and transform your knowledge base into an accessible, AI-driven training and support system."
    },
    {
      icon: TrendingUp,
      title: "Business Strategy & Consulting",
      description: "We provide technology-driven business strategy and digital transformation consulting focused on AI, automation, and scalable infrastructure. By aligning technology implementation with business objectives, we help startups and enterprises optimize operations, increase efficiency, and build sustainable growth systems for long-term success."
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
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

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="font-inter text-muted-foreground mb-6 text-lg">
            Need a fully customized solution? We build tailored systems based on your business model.
          </p>
          <Button
            size="lg"
            asChild
            className="group font-rubik font-semibold text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://calendar.app.google/JqP12YySpBDSHQjcA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
