import React, { useState } from 'react';
import { ShieldCheck, Activity, HeartHandshake, CheckCircle2, CalendarPlus, Sparkles } from 'lucide-react';

interface DentalCareSectionProps {
  onEnquireDentalCare?: () => void;
}

export const DentalCareSection: React.FC<DentalCareSectionProps> = ({ onEnquireDentalCare }) => {
  const [selectedShade, setSelectedShade] = useState('A2');

  const shades = [
    { code: 'BL1', name: 'Bleach 1', bg: '#FAF9F5' },
    { code: 'A1', name: 'Natural Light', bg: '#F5F2E8' },
    { code: 'A2', name: 'Natural Medium', bg: '#EFECE0' },
    { code: 'B1', name: 'Warm Ivory', bg: '#E8E2D1' },
    { code: 'C1', name: 'Translucent Grey', bg: '#DFD9C5' },
  ];

  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onEnquireDentalCare) {
      onEnquireDentalCare();
    }
    const form = document.getElementById('appointment-booking');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="dental-care-details"
      data-scroll-section
      className="w-full bg-[#181b2a] py-20 lg:py-28 px-5 lg:px-12 relative border-t border-white/5"
      aria-labelledby="dentalcare-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Content Column */}
        <div data-scroll-item className="lg:col-span-7 flex flex-col items-start gap-5">
          <span className="px-3.5 py-1.5 rounded-full bg-[#00a0ab]/20 text-[#60d7e3] border border-[#60d7e3]/30 font-heading text-xs tracking-wider uppercase font-semibold">
            DENTAL CARE
          </span>

          <h2
            id="dentalcare-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f7] tracking-tight"
          >
            A More Thoughtful Approach to Your Smile.
          </h2>

          <p className="text-base sm:text-lg text-[#c8c4d7] leading-relaxed">
            Explore dental-care information and discover how to discuss your oral health needs with the hospital team in a clean, reassuring environment.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col gap-3.5 w-full pt-1">
            <div className="p-4 rounded-xl bg-[#1c1f2e] border border-white/5 flex items-start gap-4 transition-all hover:border-[#60d7e3]/30">
              <div className="w-10 h-10 rounded-lg bg-[#00a0ab]/20 flex items-center justify-center shrink-0 text-[#60d7e3]">
                <ShieldCheck className="w-5 h-5 text-[#60d7e3]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#e0e1f7]">
                  Preventive Oral Health Consultations
                </span>
                <p className="text-sm text-[#c8c4d7] leading-relaxed">
                  Early detection protocols for enamel wear, periodontal monitoring, and deep ultrasonic prophylaxis for sustainable dental hygiene.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1f2e] border border-white/5 flex items-start gap-4 transition-all hover:border-[#60d7e3]/30">
              <div className="w-10 h-10 rounded-lg bg-[#00a0ab]/20 flex items-center justify-center shrink-0 text-[#60d7e3]">
                <Activity className="w-5 h-5 text-[#60d7e3]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#e0e1f7]">
                  Restorative &amp; Aesthetic Dental Planning
                </span>
                <p className="text-sm text-[#c8c4d7] leading-relaxed">
                  Conservative tooth-colored restorations, cosmetic contouring consultations, and precision ceramic crown evaluations.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1c1f2e] border border-white/5 flex items-start gap-4 transition-all hover:border-[#60d7e3]/30">
              <div className="w-10 h-10 rounded-lg bg-[#00a0ab]/20 flex items-center justify-center shrink-0 text-[#60d7e3]">
                <HeartHandshake className="w-5 h-5 text-[#60d7e3]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#e0e1f7]">
                  Gentle, Modern Patient Experience
                </span>
                <p className="text-sm text-[#c8c4d7] leading-relaxed">
                  Quiet clinical operatories, attentive pain-minimized techniques, and transparent procedural roadmaps without surprises.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#appointment-booking"
              onClick={handleEnquire}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#60d7e3] text-[#00363b] font-heading font-semibold text-sm shadow-[0px_12px_32px_-4px_rgba(112,230,242,0.3)] hover:bg-[#83f3ff] transition-all transform active:scale-95"
            >
              <span>Enquire About Dental Care</span>
              <CalendarPlus className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Visual Column (Dental Shade Matrix & Smile Geometry Card) */}
        <div data-scroll-item className="lg:col-span-5 flex flex-col gap-4">
          <div className="relative w-full rounded-2xl bg-[#1c1f2e] border border-white/10 p-6 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="font-heading text-xs text-[#60d7e3] tracking-widest uppercase font-semibold">
                PROPHYLAXIS CALIBRATION
              </span>
              <span className="font-mono text-xs text-[#928ea1]">REF: DNT-2025</span>
            </div>

            {/* Dental Geometry & Shade Spectrum Visualizer */}
            <div className="relative h-64 my-4 rounded-xl bg-[#0a0d1c] border border-white/5 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm text-[#e0e1f7] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#60d7e3]" />
                  Enamel Shade Spectrum Standard
                </span>
                <span className="px-2 py-0.5 rounded bg-[#00a0ab]/30 text-[#60d7e3] text-[11px] font-mono font-semibold">
                  VITA-GRADE
                </span>
              </div>

              {/* Shade Spectrum Interactive Chips */}
              <div className="grid grid-cols-5 gap-2 my-auto">
                {shades.map((shade) => {
                  const isSelected = selectedShade === shade.code;
                  return (
                    <button
                      key={shade.code}
                      type="button"
                      onClick={() => setSelectedShade(shade.code)}
                      className="flex flex-col items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60d7e3] rounded-lg p-1 transition-transform hover:scale-105"
                      title={`${shade.code}: ${shade.name}`}
                    >
                      <div
                        style={{ backgroundColor: shade.bg }}
                        className={`w-full h-12 rounded-lg shadow-inner transition-all ${
                          isSelected
                            ? 'ring-2 ring-[#60d7e3] ring-offset-2 ring-offset-[#0a0d1c]'
                            : 'opacity-85 hover:opacity-100'
                        }`}
                      />
                      <span
                        className={`text-[10px] font-mono ${
                          isSelected ? 'text-[#60d7e3] font-bold' : 'text-[#928ea1]'
                        }`}
                      >
                        {shade.code}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[#c8c4d7] text-xs pt-1 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#60d7e3] animate-pulse" />
                  Autoclave Sterilized Unit
                </span>
                <span className="font-medium text-[#60d7e3]">100% Barrier Hygiene</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3 rounded-lg bg-[#262939] border border-white/5">
                <span className="text-[11px] text-[#928ea1]">Comfort Protocol</span>
                <p className="font-heading text-sm font-semibold text-[#e0e1f7]">Minimal Stress Delivery</p>
              </div>
              <div className="p-3 rounded-lg bg-[#262939] border border-white/5">
                <span className="text-[11px] text-[#928ea1]">Materials</span>
                <p className="font-heading text-sm font-semibold text-[#e0e1f7]">Bio-Inert Composites</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1c1f2e] border border-white/5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#60d7e3] shrink-0 mt-0.5" />
            <p className="text-xs text-[#c8c4d7] leading-relaxed">
              Safety note: All clinical instruments undergo hospital-standard multi-stage autoclave sterilization before every patient consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
