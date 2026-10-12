import React from 'react';
import { hospitalData } from '../config/hospitalData';
import { MapPin, Phone, ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0a0d1c] border-t border-white/5 text-[#e0e1f7]">
      <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Roshani Hospital Logo"
                className="h-8 w-auto object-contain"
                src={hospitalData.links.logoUrl}
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-heading font-semibold text-lg text-[#e0e1f7] tracking-tight">
                ROSHANI HOSPITAL
              </span>
            </div>

            <p className="text-sm text-[#c8c4d7] max-w-md leading-relaxed">
              Advanced dual-specialty clinical institution delivering laser ophthalmology and restorative dental excellence in Gandhinagar, Gujarat.
            </p>

            <div className="flex items-start gap-2 text-[#c8c4d7] text-xs pt-1">
              <MapPin className="w-4 h-4 text-[#60d7e3] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {hospitalData.address.fullFormatted}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#c8c4d7]">
              <Phone className="w-4 h-4 text-[#c6bfff] shrink-0" />
              <a href={hospitalData.contact.phoneTelHref} className="hover:text-[#60d7e3] transition-colors">
                Helpline: {hospitalData.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Clinical Disciplines */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-heading text-xs font-semibold text-[#c6bfff] tracking-wider uppercase">
              Clinical Disciplines
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="#eye-care-details"
                onClick={scrollTo('eye-care-details')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Refractive Ophthalmology
              </a>
              <a
                href="#eye-care-details"
                onClick={scrollTo('eye-care-details')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Cataract &amp; Retinal Screenings
              </a>
              <a
                href="#dental-care-details"
                onClick={scrollTo('dental-care-details')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Aesthetic &amp; Restorative Dentistry
              </a>
              <a
                href="#dental-care-details"
                onClick={scrollTo('dental-care-details')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Ultrasonic Prophylaxis Suite
              </a>
              <a
                href="#eye-care-details"
                onClick={scrollTo('eye-care-details')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Diagnostic Pre-Screening
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-heading text-xs font-semibold text-[#60d7e3] tracking-wider uppercase">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="#home"
                onClick={scrollTo('home')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Home
              </a>
              <a
                href="#specialties"
                onClick={scrollTo('specialties')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Dual Specialties
              </a>
              <a
                href="#our-approach"
                onClick={scrollTo('our-approach')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Our Approach
              </a>
              <a
                href="#reviews-information"
                onClick={scrollTo('reviews-information')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Patient Information
              </a>
              <a
                href="#contact-location"
                onClick={scrollTo('contact-location')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors"
              >
                Contact &amp; Location
              </a>
            </div>
          </div>

          {/* Legal & Policy */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-heading text-xs font-semibold text-[#e0e1f7] tracking-wider uppercase">
              Legal &amp; Policy
            </span>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onOpenPolicy('privacy')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors text-left"
              >
                Privacy Notice
              </button>
              <button
                type="button"
                onClick={() => onOpenPolicy('terms')}
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors text-left"
              >
                Terms of Use
              </button>
              <a
                href={hospitalData.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#c8c4d7] hover:text-[#e0e1f7] transition-colors flex items-center gap-1"
              >
                <span>Directions GPS</span>
                <ExternalLink className="w-3 h-3 text-[#60d7e3]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#928ea1]">
          <span>
            © {new Date().getFullYear()} Roshani Eye &amp; Dental Hospital. Gandhinagar, Gujarat. All healthcare rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#60d7e3] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              NABH Compliant Standards
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[#c6bfff]">Advanced Diagnostic Suite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
