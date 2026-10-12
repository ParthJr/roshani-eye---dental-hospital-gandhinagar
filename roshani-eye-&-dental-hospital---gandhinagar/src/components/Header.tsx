import React, { useState, useEffect } from 'react';
import { hospitalData } from '../config/hospitalData';
import { Menu, X, Phone, Calendar, User, Eye, Smile } from 'lucide-react';

interface HeaderProps {
  onSelectSpecialty?: (specialty: 'Eye Care' | 'Dental Care' | 'General Enquiry') => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectSpecialty }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'specialties', 'eye-care-details', 'dental-care-details', 'our-approach', 'appointment-booking', 'contact-location'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Eye Care', href: '#eye-care-details', id: 'eye-care-details' },
    { label: 'Dental Care', href: '#dental-care-details', id: 'dental-care-details' },
    { label: 'Our Approach', href: '#our-approach', id: 'our-approach' },
    { label: 'Patient Information', href: '#reviews-information', id: 'reviews-information' },
    { label: 'Contact', href: '#contact-location', id: 'contact-location' },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1221]/85 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="h-20 w-full max-w-[1440px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-4">
        {/* Hospital Branding */}
        <a
          href="#home"
          onClick={(e) => handleNavClick('#home', e)}
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c80ff] rounded-lg p-1"
          aria-label="Roshani Eye & Dental Hospital Home"
        >
          <img
            alt="Roshani Hospital Logo"
            className="h-8 w-auto object-contain"
            src={hospitalData.links.logoUrl}
            onError={(e) => {
              // Fallback SVG icon if external logo fails
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-lg sm:text-xl text-[#e0e1f7] tracking-tight leading-tight">
              ROSHANI
            </span>
            <span className="font-heading text-[11px] sm:text-xs text-[#60d7e3] tracking-widest font-semibold uppercase leading-none">
              EYE &amp; DENTAL HOSPITAL
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-1 bg-[#181b2a]/60 px-3 py-1.5 rounded-xl border border-white/5"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#262939] text-[#e0e1f7] font-semibold shadow-sm'
                    : 'text-[#c8c4d7] hover:text-[#e0e1f7] hover:bg-[#1c1f2e]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Quick Call for Emergency/Direct */}
          <a
            href={hospitalData.contact.phoneTelHref}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-[#c8c4d7] hover:text-[#60d7e3] hover:bg-[#1c1f2e] border border-white/5 transition-all"
            title="Call hospital directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#60d7e3]" />
            <span>{hospitalData.contact.phoneDisplay}</span>
          </a>

          {/* Book Consultation Button */}
          <a
            href="#appointment-booking"
            onClick={(e) => handleNavClick('#appointment-booking', e)}
            className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-[0px_12px_32px_-4px_rgba(120,104,255,0.25)] hover:bg-[#8c80ff] hover:text-white transition-all transform active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </a>

          {/* User profile icon placeholder matching Stitch */}
          <div
            className="w-8 h-8 rounded-full bg-[#c6bfff] flex items-center justify-center shrink-0 text-[#2700a0]"
            title="Hospital Care Portal"
          >
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="xl:hidden p-2 rounded-lg text-[#c8c4d7] hover:text-[#e0e1f7] hover:bg-[#262939] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c80ff]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden fixed inset-0 top-20 bg-[#0f1221]/95 backdrop-blur-2xl flex flex-col p-6 gap-6 overflow-y-auto border-t border-white/10 z-50 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Quick Specialty Shortcuts */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                if (onSelectSpecialty) onSelectSpecialty('Eye Care');
                setMobileMenuOpen(false);
                document.getElementById('eye-care-details')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#1c1f2e] border border-[#7868FF]/30 text-left"
            >
              <Eye className="w-5 h-5 text-[#c6bfff]" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#e0e1f7]">Eye Care</span>
                <span className="text-[10px] text-[#8D96AB]">Optics &amp; Retina</span>
              </div>
            </button>
            <button
              onClick={() => {
                if (onSelectSpecialty) onSelectSpecialty('Dental Care');
                setMobileMenuOpen(false);
                document.getElementById('dental-care-details')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#1c1f2e] border border-[#70E6F2]/30 text-left"
            >
              <Smile className="w-5 h-5 text-[#60d7e3]" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#e0e1f7]">Dental Care</span>
                <span className="text-[10px] text-[#8D96AB]">Oral Prophylaxis</span>
              </div>
            </button>
          </div>

          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`px-4 py-3 rounded-xl text-base font-heading font-medium transition-all ${
                    isActive
                      ? 'bg-[#313444] text-[#e0e1f7] font-semibold'
                      : 'text-[#c8c4d7] hover:text-[#e0e1f7] hover:bg-[#1c1f2e]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 flex flex-col gap-3 border-t border-white/10">
            <a
              href="tel:08320146657"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1c1f2e] text-[#60d7e3] font-medium text-sm border border-[#60d7e3]/30"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: 083201 46657</span>
            </a>
            <a
              href="#appointment-booking"
              onClick={(e) => handleNavClick('#appointment-booking', e)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-[0px_12px_32px_-4px_rgba(120,104,255,0.25)]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
