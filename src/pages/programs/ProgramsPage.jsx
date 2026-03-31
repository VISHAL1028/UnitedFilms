import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import workshopImage from '@/assets/workshop1.avif';

const programs = [
  {
    id: 'desert-canyon',
    title: 'Desert & Canyon Documentary Expedition',
    location: 'American Southwest',
    duration: '10 Days',
    spots: '6 spots',
    description:
      'Capture red-rock canyons, golden-hour vistas, and local stories while you co-create a cinematic short documentary with your crew.',
    highlights: ['Red Rock Canyon filming', 'Golden-hour cinematography', 'Local story access', 'Phantom Flex 4K use'],
  },
  {
    id: 'coastal-documentary',
    title: 'Coastal Documentary: Oceans, Cities & Stories',
    location: 'Pacific Coast',
    duration: '8 Days',
    spots: '6 spots',
    description:
      'Follow the coastline from working harbors to dramatic cliffs. Film environmental stories, street life, and interviews with local characters.',
    highlights: ['Harbor & cliff locations', 'Environmental storytelling', 'Street documentary', 'Interview techniques'],
  },
  {
    id: 'mountain-wildlife',
    title: 'Mountain & Wildlife Film Immersion',
    location: 'Rocky Mountains',
    duration: '12 Days',
    spots: '5 spots',
    description:
      'Shoot wildlife, sunrise ridge lines, and night-sky timelapses while practicing Phantom Flex 4K and advanced low-light techniques.',
    highlights: ['Wildlife tracking shots', 'Timelapse & low-light', 'Phantom Flex training', 'Sunrise ridge access'],
  },
];

const whoItsFor = [
  'Aspiring filmmakers and content creators',
  'Actors seeking screen credits and footage',
  'Students considering film school',
  'Professionals pivoting into film & TV',
];

const faqs = [
  {
    q: 'Do I need prior film experience?',
    a: 'No. We welcome beginners and intermediate filmmakers. We teach from the ground up and adapt to your level.',
  },
  {
    q: 'Will I really get a credit on a documentary film?',
    a: 'Yes. Every participant receives on-screen credit based on their role — acting, camera, sound, producing, or editing.',
  },
  {
    q: 'How do residuals work?',
    a: 'If the film is sold, licensed, or monetized, you may receive residual payments according to the agreement you review before the tour.',
  },
  {
    q: 'How much cheaper is this than a National Geographic tour?',
    a: 'Our programs are designed to be up to 50% more affordable while adding film training, credits, and income-generating footage.',
  },
  {
    q: 'What equipment is provided?',
    a: 'All professional cinema equipment is provided including cameras, lenses, audio gear, and lighting. You just bring your creativity.',
  },
  {
    q: 'How many people are in each group?',
    a: 'We keep crews small and professional — typically 5–6 participants per expedition to ensure quality mentorship and collaboration.',
  },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <Link
            to="/#workshop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Workshop
          </Link>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-xl pr-4">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium text-secondary border border-secondary/30 mb-4">
                Destinations
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
                FEATURED FILM <span className="text-gradient">TOURS</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Travel to breathtaking locations, learn from masters, create meaningful content,
                and build your professional film portfolio — all in one expedition.
              </p>
            </div>

            {/* Right Image Card */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="relative rounded-3xl overflow-hidden glass-card w-full h-[400px] flex items-end p-6 lg:p-10 group shadow-2xl">
                <img
                  src={workshopImage}
                  alt="Filmmaking Workshop"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                
                <div className="relative z-10 w-full">
                  <h3 className="font-display text-xl lg:text-2xl mb-2 leading-snug text-white">
                    Travel the World. Make a Film. Launch Your Career.
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    Professional documentary film tours at 50% less than National Geographic trips. 
                    Learn with working motion picture professionals, shoot on specialty cameras, 
                    and leave with real screen credits and potential residuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group glass-card rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 flex flex-col"
              >
                {/* Meta */}
                <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    {program.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    {program.duration}
                  </span>
                </div>

                <h3 className="font-display text-xl lg:text-2xl mb-4 group-hover:text-secondary transition-colors leading-snug">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                  {program.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{program.spots}</span>
                  <a href="#get-started">
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* See Dates CTA */}
          <div className="text-center">
            <a href="#get-started">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary px-10">
                See Dates & Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">
            Who it's for
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mb-12">
            IS THIS PROGRAM <span className="text-gradient">RIGHT FOR YOU?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left — audience list */}
            <div className="glass-card rounded-2xl p-8">
              <ul className="space-y-4">
                {whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — description */}
            <div className="glass-card rounded-2xl p-8 flex items-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                If you want your next trip to{' '}
                <span className="text-foreground font-medium">give you more than photos</span> — if you
                want a film, credits, and a real step toward the motion picture industry —{' '}
                <span className="text-secondary font-medium">this program is designed for you.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl mb-12">
            FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Form */}
      <section id="get-started" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">
            Get Started
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mb-4">
            READY TO TURN YOUR TRIP <span className="text-gradient">INTO A FILM?</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Spots are limited to keep our crews small and professional. Tell us a bit about your goals
            and we'll match you with the right destination and dates.
          </p>

          <form className="glass-card rounded-2xl p-8 lg:p-10 space-y-5">
            <Input
              placeholder="Full Name"
              className="bg-background/50 border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-background/50 border-border focus:border-primary"
            />
            <Input
              placeholder="Where do you want to travel?"
              className="bg-background/50 border-border focus:border-primary"
            />
            <Textarea
              placeholder="Tell us about your film goals"
              rows={5}
              className="bg-background/50 border-border focus:border-primary resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Interest
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
