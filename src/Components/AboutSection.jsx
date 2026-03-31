import { Target, Award, Users, Globe } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Countries Reached' },
  { value: '100%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue perfection in every frame, delivering cinema-quality results that exceed expectations.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Utilizing cutting-edge technology and creative techniques to push the boundaries of visual storytelling.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with our clients to understand their vision and bring it to life authentically.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with productions spanning from extreme sports to commercial campaigns.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium text-secondary border border-secondary/30 mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            PASSION FOR <span className="text-gradient">CINEMA</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            United Films has been at the forefront of motion picture production for over two decades. 
            From music videos to extreme sports documentaries, our passion drives us to capture 
            extraordinary moments with unparalleled technical expertise.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-300">
              <div className="font-display text-4xl sm:text-5xl text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};
