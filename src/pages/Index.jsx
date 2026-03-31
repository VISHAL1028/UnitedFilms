import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServiceSection } from '@/components/ServiceSection';
import { EquipmentSection } from '@/components/EquipmentSection';
import { WorkshopSection } from '@/components/WorkshopSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Use setTimeout to ensure the DOM has painted before scrolling
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <EquipmentSection />
      <WorkshopSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
