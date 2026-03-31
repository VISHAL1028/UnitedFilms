import { MapPin, Calendar, Users, Award, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import workshopBg from '@/assets/workshop-bg.jpg';

const benefits = [
  {
    icon: MapPin,
    title: 'On Location',
    description: 'Learn filmmaking in stunning real-world locations around the globe.',
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    description: 'Work directly with industry professionals and experienced filmmakers.',
  },
  {
    icon: Award,
    title: 'Get Paid',
    description: 'Create real content for clients while learning—earn learn.',
  },
  {
    icon: Calendar,
    title: 'Flexible Programs',
    description: 'Choose from various workshop durations and specializations.',
  },
];

export const WorkshopSection = () => {
  return (
    <section id="workshop" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={workshopBg}
          alt="Workshop on Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-5 py-2 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Film className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">School of Documentary Film</div>
              <div className="font-semibold text-secondary">Workshops on Location</div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl mb-4">
            TRAVEL • LEARN
          </h2>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-gradient mb-8">
            CREATE • GET PAID
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Join our immersive documentary filmmaking workshops. Travel to breathtaking locations, 
            learn from masters, create meaningful content, and build your professional portfolio.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold glow-secondary">
              Apply Now
            </Button>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="border-foreground/30 hover:bg-foreground/10">
                View Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
