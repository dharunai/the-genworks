const ServicesMarquee = () => {
  const services = [
    "Web Development", "Digital Marketing", "Workflow Automation", 
    "Custom AI Tools", "RAG Chatbots", "Business Consulting"
  ];

  return (
    <section className="py-16 bg-card/40 border-y border-border overflow-hidden">
      <div className="mb-6 text-center">
        <h3 className="font-rubik font-semibold text-sm uppercase tracking-wider text-muted-foreground">Our Expertise</h3>
      </div>
      <div className="relative">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={index}
              className="mx-10 font-rubik font-semibold text-xl md:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
