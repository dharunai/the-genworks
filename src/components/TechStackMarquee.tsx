const TechStackMarquee = () => {
  const technologies = [
    "React", "Next.js", "Python", "OpenAI", "ChatGPT", "Claude AI",
    "n8n", "Make.com", "Zapier", "Firebase", "Supabase",
    "Vercel", "Google Analytics", "Meta Ads", "HubSpot"
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="mb-6 text-center">
        <h3 className="font-rubik font-semibold text-sm uppercase tracking-wider text-muted-foreground">Technologies We Master</h3>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="mx-10 font-inter font-medium text-xl md:text-2xl text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
