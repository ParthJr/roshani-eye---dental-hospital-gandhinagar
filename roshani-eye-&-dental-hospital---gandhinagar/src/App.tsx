/**
 * Roshani Eye & Dental Hospital - Gandhinagar, Gujarat
 * Master Production Implementation
 * 
 * Source of Truth: Approved Google Stitch Design
 * Features:
 * - GSAP & ScrollTrigger scoped React animation pipeline
 * - Accessible reduced-motion fallback (@media prefers-reduced-motion)
 * - Central verified hospital configuration (Gandhinagar, Gujarat)
 * - React Hook Form appointment enquiry validation
 * - High-contrast obsidian canvas, electric violet & ice cyan accents
 */

import React, { useRef, useState } from 'react';
import { useGsapContext } from './hooks/useGsapAnimation';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecialtySelection } from './components/SpecialtySelection';
import { EyeCareSection } from './components/EyeCareSection';
import { DentalCareSection } from './components/DentalCareSection';
import { CareJourney } from './components/CareJourney';
import { HospitalIntroduction } from './components/HospitalIntroduction';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentForm, SpecialtyType } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { MotionSpecsDrawer } from './components/MotionSpecsDrawer';
import { Footer } from './components/Footer';
import { PolicyModals } from './components/PolicyModals';

export default function App() {
  const appContainerRef = useRef<HTMLDivElement>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyType>('Eye Care');
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | null>(null);

  // Initialize GSAP animation and ScrollTrigger contexts
  useGsapContext(appContainerRef);

  const handleSelectSpecialtyAndScroll = (specialty: SpecialtyType) => {
    setSelectedSpecialty(specialty);
    const formElement = document.getElementById('appointment-booking');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={appContainerRef}
      className="min-h-screen bg-[#0f1221] text-[#e0e1f7] flex flex-col font-sans selection:bg-[#8c80ff] selection:text-[#22008e]"
    >
      {/* 1. Accessible Fixed Navigation */}
      <Header
        onSelectSpecialty={(specialty) => {
          setSelectedSpecialty(specialty);
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* 2. Cinematic Hero Section */}
        <HeroSection
          onExploreCare={() => {
            document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onBookConsultation={() => {
            document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Dual Specialty Navigation Panels */}
        <SpecialtySelection
          onSelectEye={() => setSelectedSpecialty('Eye Care')}
          onSelectDental={() => setSelectedSpecialty('Dental Care')}
        />

        {/* 4. Eye Care Information Section */}
        <EyeCareSection
          onEnquireEyeCare={() => handleSelectSpecialtyAndScroll('Eye Care')}
        />

        {/* 5. Dental Care Information Section */}
        <DentalCareSection
          onEnquireDentalCare={() => handleSelectSpecialtyAndScroll('Dental Care')}
        />

        {/* 6. Consultation Workflow & Patient Journey */}
        <CareJourney />

        {/* 7. Clinical Philosophy & Hospital Layout Architecture */}
        <HospitalIntroduction />

        {/* 8. 4.9★ Google Reviews Reputation */}
        <ReviewsSection />

        {/* 9. Validated Appointment Booking Form */}
        <AppointmentForm initialSpecialty={selectedSpecialty} />

        {/* 10. Local Connectivity & Location in Gandhinagar */}
        <LocationSection />

        {/* 11. Motion-Design Architectural Specifications Drawer */}
        <MotionSpecsDrawer />
      </main>

      {/* 12. Footer */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* 13. Privacy & Terms Accessible Modals */}
      <PolicyModals type={activePolicy} onClose={() => setActivePolicy(null)} />
    </div>
  );
}
