import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { WelcomeSection } from '../components/WelcomeSection';
import { ThreePillars } from '../components/ThreePillars';
import { ServicesSection } from '../components/ServicesSection';
import { DeliveryMethodology } from '../components/DeliveryMethodology';
import { CoreValues } from '../components/CoreValues';
import { MissionVisionSection } from '../components/MissionVisionSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CtaBanner } from '../components/CtaBanner';
import { MapSection } from '../components/MapSection';
import type { DivisionItem, ProjectItem } from '../data/topekData';

interface HomePageProps {
  onImageClick: (image: string, title: string) => void;
  onSelectDivision?: (division: DivisionItem) => void;
  onOpenContact: (service?: string) => void;
  onProjectSelect: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onImageClick,
  onSelectDivision,
  onOpenContact,
  onProjectSelect
}) => {
  return (
    <div>
      {/* 1. Kinetic Hero Slider with Live Metric Counters */}
      <HeroSlider />

      {/* 2. Welcome & Executive Narrative (RC 1946874) */}
      <WelcomeSection onImageClick={onImageClick} />

      {/* 3. 3 Split Strategic Pillars (Zero Harm, Design & Build, Engineering Health) */}
      <ThreePillars />

      {/* 4. 8 Integrated Service Divisions Showcase */}
      <ServicesSection
        onSelectDivision={onSelectDivision}
        limit={8}
      />

      {/* 5. Interactive 6-Stage Project Delivery Methodology */}
      <DeliveryMethodology />

      {/* 6. Core Values: T-O-P-E-K */}
      <CoreValues />

      {/* 7. Mission & Vision with Capability Skill Bars */}
      <MissionVisionSection />

      {/* 8. 11 Verified Projects Showcase (Ongoing vs Completed) */}
      <ProjectsSection
        onImageClick={onImageClick}
        onProjectSelect={onProjectSelect}
        limit={6}
      />

      {/* 9. Why Choose Us: Equipment Fleet & Safety Track Record */}
      <WhyChooseUs />

      {/* 10. Call to Action Banner */}
      <CtaBanner onContactClick={() => onOpenContact()} />

      {/* 11. Google Map & Head Office Coordinates */}
      <MapSection />
    </div>
  );
};
