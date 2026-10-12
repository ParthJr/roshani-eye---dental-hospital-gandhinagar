import React from 'react';
import {
  Eye,
  Smile,
  ArrowDown,
  ShieldCheck,
  Disc,
  Sparkles,
  CalendarPlus,
  Clock,
  Layers,
  CheckCircle2,
  Stethoscope,
  Building2,
  Phone,
} from 'lucide-react';
import { hospitalData } from '../config/hospitalData';

interface SpecialtySelectionProps {
  onSelectEye?: () => void;
  onSelectDental?: () => void;
}

export const SpecialtySelection: React.FC<SpecialtySelectionProps> = ({
  onSelectEye,
  onSelectDental,
}) => {
  const handleScrollTo = (id: string, callback?: () => void) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (callback) {
      callback();
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireWithPreset = (specialty: 'Eye Care' | 'Dental Care') => (e: React.MouseEvent) => {
    e.preventDefault();
    if (specialty === 'Eye Care' && onSelectEye) onSelectEye();
    if (specialty === 'Dental Care' && onSelectDental) onSelectDental();
    const el = document.getElementById('appointment-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="specialties"
      className="w-full bg-[#0a0d1c] py-20 lg:py-28 px-5 lg:px-12 relative border-t border-b border-white/5"
      aria-labelledby="specialties-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-heading text-xs font-semibold text-[#60d7e3] tracking-widest uppercase">
              DUAL CLINICAL ARCHITECTURE
            </span>
            <h2
              id="specialties-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f7] tracking-tight"
            >
              Two Specialties. One Focus on Your Well-being.
            </h2>
          </div>
          <p className="text-base text-[#c8c4d7] max-w-md leading-relaxed">
            Explore the care options available at Roshani Eye &amp; Dental Hospital, designed for patients seeking clarity and confident dental care under one roof.
          </p>
        </div>

        {/* Specialty Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: Eye Care */}
          <div className="group relative rounded-2xl bg-[#181b2a] border border-white/10 p-7 lg:p-9 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300 hover:bg-[#1c1f2e] hover:border-[#8c80ff]/40 hover:-translate-y-1">
            {/* Ambient Violet Lens Glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#8c80ff]/10 blur-3xl pointer-events-none group-hover:bg-[#8c80ff]/20 transition-all duration-500"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#8c80ff]/20 text-[#c6bfff] border border-[#8c80ff]/30 font-heading text-xs tracking-wider uppercase font-semibold">
                  Precision Vision &amp; Refractive Assessment
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#8c80ff]/20 flex items-center justify-center text-[#c6bfff] group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-[#c6bfff]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-[#e0e1f7]">
                  Eye Care
                </h3>
                <p className="text-base text-[#c8c4d7] leading-relaxed">
                  Explore eye-care information and discover how to enquire about an appointment for corneal clarity, refraction, and optical consultation.
                </p>
              </div>

              {/* Visual Refraction Graphic Preview */}
              <div className="h-44 w-full rounded-xl bg-[#0a0d1c] border border-white/5 p-5 flex items-center justify-between relative overflow-hidden">
                <div className="flex flex-col gap-1 z-10 max-w-[65%]">
                  <span className="font-heading text-xs text-[#c6bfff] uppercase font-semibold tracking-wider">
                    Specialty Focus
                  </span>
                  <span className="font-heading text-lg font-semibold text-[#e0e1f7]">
                    Refractive &amp; Ophthalmic Checks
                  </span>
                  <span className="text-xs text-[#928ea1]">
                    State-of-the-art diagnostic screening flow
                  </span>
                </div>
                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#8c80ff]/10 animate-ping" />
                  <div className="w-16 h-16 rounded-full bg-[#262939] border border-[#c6bfff]/40 flex items-center justify-center shadow-lg group-hover:rotate-45 transition-transform duration-500">
                    <Disc className="w-8 h-8 text-[#c6bfff]" />
                  </div>
                </div>
              </div>

              {/* 3 Key Clinical Pillars with Checkmarks */}
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-[#c8c4d7]">
                  <CheckCircle2 className="w-4 h-4 text-[#c6bfff] shrink-0 mt-0.5" />
                  <span><strong>Computerized Refraction:</strong> Visual acuity, myopia, hyperopia &amp; astigmatism calibration.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#c8c4d7]">
                  <CheckCircle2 className="w-4 h-4 text-[#c6bfff] shrink-0 mt-0.5" />
                  <span><strong>Anterior Segment Review:</strong> High-magnification slit lamp and corneal contour screening.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#c8c4d7]">
                  <CheckCircle2 className="w-4 h-4 text-[#c6bfff] shrink-0 mt-0.5" />
                  <span><strong>Retinal &amp; Lens Consultations:</strong> Structured clinical review for cataract screening.</span>
                </div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-3 relative z-10 border-t border-white/5 mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#eye-care-details"
                  onClick={handleScrollTo('eye-care-details', onSelectEye)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-xs shadow-md hover:bg-[#8c80ff] hover:text-white transition-all"
                >
                  <span>Explore Eye Care</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#appointment-booking"
                  onClick={handleEnquireWithPreset('Eye Care')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#262939] text-[#e0e1f7] border border-white/10 font-heading font-semibold text-xs hover:bg-[#353849] hover:border-[#8c80ff]/40 transition-all"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-[#c6bfff]" />
                  <span>Enquire</span>
                </a>
              </div>
              <span className="text-xs text-[#928ea1] font-mono">30–45 Min Exam Flow</span>
            </div>
          </div>

          {/* Panel 2: Dental Care */}
          <div className="group relative rounded-2xl bg-[#181b2a] border border-white/10 p-7 lg:p-9 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300 hover:bg-[#1c1f2e] hover:border-[#60d7e3]/40 hover:-translate-y-1">
            {/* Ambient Cyan Porcelain Glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#00a0ab]/10 blur-3xl pointer-events-none group-hover:bg-[#00a0ab]/20 transition-all duration-500"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#00a0ab]/20 text-[#60d7e3] border border-[#60d7e3]/30 font-heading text-xs tracking-wider uppercase font-semibold">
                  Comprehensive Oral Health &amp; Aesthetics
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#00a0ab]/20 flex items-center justify-center text-[#60d7e3] group-hover:scale-110 transition-transform">
                  <Smile className="w-6 h-6 text-[#60d7e3]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-[#e0e1f7]">
                  Dental Care
                </h3>
                <p className="text-base text-[#c8c4d7] leading-relaxed">
                  Discover dental-care information and request a consultation about your oral health, aesthetic alignment, and restorative comfort.
                </p>
              </div>

              {/* Visual Dental Arch Graphic Preview */}
              <div className="h-44 w-full rounded-xl bg-[#0a0d1c] border border-white/5 p-5 flex items-center justify-between relative overflow-hidden">
                <div className="flex flex-col gap-1 z-10 max-w-[65%]">
                  <span className="font-heading text-xs text-[#60d7e3] uppercase font-semibold tracking-wider">
                    Specialty Focus
                  </span>
                  <span className="font-heading text-lg font-semibold text-[#e0e1f7]">
                    Prophylaxis &amp; Restoration
                  </span>
                  <span className="text-xs text-[#928ea1]">
                    Gentle sterilization and restorative suite
                  </span>
                </div>
                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#262939] border border-[#60d7e3]/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-[#60d7e3]" />
                  </div>
                </div>
              </div>

              {/* 3 Key Clinical Pillars with Checkmarks */}
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-[#c8c4d7]">
                  <CheckCircle2 className="w-4 h-4 text-[#60d7e3] shrink-0 mt-0.5" />
                  <span><strong>Preventive Ultrasonic Prophylaxis:</strong> Enamel plaque scaling and periodontal maintenance.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#c8c4d7]">
                  <CheckCircle2 className="w-4 h-4 text-[#60d7e3] shrink-0 mt-0.5" />
                  <span><strong>Restorative &amp; Aesthetic Planning:</strong> Tooth-colored composite fillings &amp; ceramic crown reviews.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#c8c4d7]">
                  <CheckCircle2 className="w-4 h-4 text-[#60d7e3] shrink-0 mt-0.5" />
                  <span><strong>Gentle Operatory Care:</strong> Pain-minimized protocols in sanitized, private clinical operatories.</span>
                </div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-3 relative z-10 border-t border-white/5 mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#dental-care-details"
                  onClick={handleScrollTo('dental-care-details', onSelectDental)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#60d7e3] text-[#00363b] font-heading font-semibold text-xs shadow-md hover:bg-[#83f3ff] transition-all"
                >
                  <span>Explore Dental Care</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#appointment-booking"
                  onClick={handleEnquireWithPreset('Dental Care')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#262939] text-[#e0e1f7] border border-white/10 font-heading font-semibold text-xs hover:bg-[#353849] hover:border-[#60d7e3]/40 transition-all"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-[#60d7e3]" />
                  <span>Enquire</span>
                </a>
              </div>
              <span className="text-xs text-[#928ea1] font-mono">100% Autoclave Sterilized</span>
            </div>
          </div>
        </div>

        {/* Dual Care Synergy Matrix Banner */}
        <div className="rounded-2xl bg-[#181b2a] border border-white/10 p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#8c80ff]/30 to-[#00a0ab]/30 flex items-center justify-center shrink-0 border border-white/10">
              <Layers className="w-6 h-6 text-[#c6bfff]" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading text-xs font-semibold text-[#60d7e3] uppercase tracking-wider">
                Why Dual Care Under One Roof?
              </span>
              <p className="font-heading text-base font-semibold text-[#e0e1f7]">
                Unified Healthcare Wing at Keshav Aaradhyam, Gandhinagar
              </p>
              <p className="text-xs text-[#c8c4d7]">
                Save travel time by synchronizing your optical evaluation and dental cleaning into a single visit.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:08320146657"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#262939] border border-white/10 text-xs font-heading font-medium text-[#c8c4d7] hover:text-[#60d7e3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#60d7e3]" />
              <span>083201 46657</span>
            </a>
            <a
              href="#appointment-booking"
              onClick={handleScrollTo('appointment-booking')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c6bfff] text-[#22008e] text-xs font-heading font-semibold hover:bg-[#8c80ff] hover:text-white transition-all shadow-md"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>Book Joint Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
