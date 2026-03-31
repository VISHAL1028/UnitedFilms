import { Check, Zap, Gauge, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import phantomCamera from '@/assets/phantom-camera.jpg';

const features = [
  'Phantom Flex 4K camera',
  'Recorder + Preview monitor',
  'Tripod + Remote control',
  'Lenses: 50mm, 100mm, 300mm',
  'Vintage lens set available',
  'Underwater housing (custom)',
  'Splash bag camera protection',
  'Flame relighting workstation',
];

const specs = [
  { icon: Zap, label: 'Up to 2000 FPS', desc: 'High-speed capture' },
  { icon: Gauge, label: 'Dual Format', desc: 'Two channels simultaneously' },
  { icon: Film, label: '4K Resolution', desc: 'Cinema-quality output' },
];

export const EquipmentSection = () => {
  return (
    <section id="equipment" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src={phantomCamera}
                alt="Phantom Flex 4K Camera"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:top-6 sm:right-6 glass-card rounded-xl px-4 py-3 animate-float">
                <div className="text-xs text-muted-foreground">Special Offer</div>
                <div className="font-display text-2xl text-primary">50% OFF</div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium text-primary border border-primary/30 mb-4">
              Featured Equipment
            </span>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              PHANTOM FLEX <span className="text-gradient">4K</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Give your production the edge with our Phantom Flex camera. Capture both high-speed 
              and standard-speed movements with precision and clarity—two formats at the same time.
            </p>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {specs.map((spec) => (
                <div key={spec.label} className="glass-card rounded-xl p-4 text-center">
                  <spec.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="font-semibold text-sm">{spec.label}</div>
                  <div className="text-xs text-muted-foreground">{spec.desc}</div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price Info */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <div className="flex items-end gap-4 mb-3">
                <span className="text-muted-foreground line-through text-lg">₹3,000/day</span>
                <span className="font-display text-4xl text-primary">₹1,500</span>
                <span className="text-muted-foreground">/day</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Includes camera technician, equipment, and on-set support
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                View Full Specs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
