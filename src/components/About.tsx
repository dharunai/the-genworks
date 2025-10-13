import { Lightbulb, Target, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    {
      value: "100%",
      label: "Commitment"
    },
    {
      value: "5+",
      label: "Projects Delivered"
    },
    {
      value: "24/7",
      label: "Support"
    }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge AI solutions"
    },
    {
      icon: Target,
      title: "Strategy",
      description: "Data-driven approach"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Measurable results"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 md:p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 hover:border-primary/50 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-rubik font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Who We Are Section with unique animations */}
          <div className="text-center mb-12 md:mb-16 relative">
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-rubik font-bold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 relative inline-block group cursor-default">
                <span className="relative z-10">Who We Are</span>
                {/* Bottom accent lines */}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-1/3 transition-all duration-500" />
                <div className="absolute -bottom-2 right-0 w-0 h-0.5 bg-secondary group-hover:w-1/3 transition-all duration-500" />
                {/* Corner accents */}
                <span className="absolute -top-2 -left-2 w-0 h-0 border-t-2 border-l-2 border-primary/0 group-hover:w-4 group-hover:h-4 group-hover:border-primary/50 transition-all duration-500" />
                <span className="absolute -top-2 -right-2 w-0 h-0 border-t-2 border-r-2 border-secondary/0 group-hover:w-4 group-hover:h-4 group-hover:border-secondary/50 transition-all duration-500" />
              </h2>
            </div>
            <p className="font-inter text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              At <span className="font-semibold text-foreground relative inline-block group cursor-default">
                TheGenWorks
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              </span>, we blend creativity, automation, and AI to help businesses scale faster, save time, 
              and connect smarter. Our mission is to make innovation practical and powerful.
            </p>
          </div>

          {/* Features Grid with unique perspective effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl cursor-pointer animate-slide-up overflow-hidden"
                  style={{ 
                    animationDelay: `${0.4 + index * 0.1}s`,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Diagonal animated stripe */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rotate-45 group-hover:scale-150 transition-transform duration-700 ease-out" />
                  
                  {/* Side accent bar */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary via-secondary to-primary group-hover:h-2/3 transition-all duration-500" />
                  
                  <div className="relative transform group-hover:translate-x-1 transition-transform duration-500">
                    <div className="mb-4 md:mb-6">
                      <div className="inline-flex p-3 md:p-4 rounded-xl bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:rotate-6 transition-transform duration-500" />
                      </div>
                    </div>
                    <h3 className="font-rubik font-bold text-xl md:text-2xl mb-2 md:mb-3 text-foreground group-hover:text-primary transition-all duration-300 relative">
                      {feature.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
                    </h3>
                    <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
