import React from 'react';
import { Glasses, Microscope, Sparkles, Info, CalendarPlus } from 'lucide-react';

interface EyeCareSectionProps {
  onEnquireEyeCare?: () => void;
}

export const EyeCareSection: React.FC<EyeCareSectionProps> = ({ onEnquireEyeCare }) => {
  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onEnquireEyeCare) {
      onEnquireEyeCare();
    }
    const form = document.getElementById('appointment-booking');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="eye-care-details"
      data-scroll-section
      className="w-full bg-[#1c1f2e] py-20 lg:py-28 px-5 lg:px-12 relative"
      aria-labelledby="eyecare-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Visual Column (Optical Refractions & Diagnostics Graphic) */}
        <div data-scroll-item className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4">
          <div className="relative w-full rounded-2xl bg-[#313444] border border-white/10 p-6 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="font-heading text-xs text-[#c6bfff] tracking-widest uppercase font-semibold">
                DIAGNOSTIC VISUALIZATION
              </span>
              <span className="font-mono text-xs text-[#928ea1]">REF: OPT-2025</span>
            </div>

            {/* Refraction Illustration Frame */}
            <div className="relative h-64 my-4 rounded-xl bg-[#0a0d1c] border border-white/5 flex items-center justify-center overflow-hidden">
              <svg
                className="w-full h-full p-4"
                fill="none"
                viewBox="0 0 320 200"
                aria-label="Refraction light rays through optical lens"
              >
                {/* Grid Backdrop */}
                <path d="M0 40 H320 M0 80 H320 M0 120 H320 M0 160 H320" stroke="#313444" strokeWidth="0.75" />
                <path d="M60 0 V200 M120 0 V200 M180 0 V200 M240 0 V200" stroke="#313444" strokeWidth="0.75" />

                {/* Refractive Light Rays */}
                <path d="M 20 70 L 140 100 L 290 85" stroke="#c6bfff" strokeLinecap="round" strokeWidth="2.5" />
                <path d="M 20 100 L 140 100 L 290 100" stroke="#8c80ff" strokeLinecap="round" strokeWidth="2" />
                <path d="M 20 130 L 140 100 L 290 115" stroke="#7868FF" strokeLinecap="round" strokeWidth="2.5" />

                {/* Optical Lens Biconvex Element */}
                <ellipse cx="140" cy="100" fill="#262939" rx="14" ry="70" stroke="#c6bfff" strokeWidth="1.5" />

                {/* Focal Point Indicator */}
                <circle cx="290" cy="100" fill="#60d7e3" r="5" />
                <circle cx="290" cy="100" stroke="#60d7e3" strokeWidth="1.5" r="10" className="animate-ping opacity-75" />
                <text className="text-[10px] font-mono" fill="#c6bfff" x="200" y="50">
                  FOCAL POINT (0.00)
                </text>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3 rounded-lg bg-[#181b2a] border border-white/5">
                <span className="text-[11px] text-[#928ea1]">Refractive Analysis</span>
                <p className="font-heading text-sm font-semibold text-[#e0e1f7]">Computerized Mapping</p>
              </div>
              <div className="p-3 rounded-lg bg-[#181b2a] border border-white/5">
                <span className="text-[11px] text-[#928ea1]">Retinal Review</span>
                <p className="font-heading text-sm font-semibold text-[#e0e1f7]">Non-Invasive Screening</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#181b2a] border border-white/5 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#c6bfff] shrink-0 mt-0.5" />
            <p className="text-xs text-[#c8c4d7] leading-relaxed">
              Patient note: Complete refractive examinations typically require 30–45 minutes for detailed pupil relaxation and accurate calibration.
            </p>
          </div>
        </div>

        {/* Content Column */}
        <div data-scroll-item className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start gap-5">
          <span className="px-3.5 py-1.5 rounded-full bg-[#8c80ff]/20 text-[#c6bfff] border border-[#8c80ff]/30 font-heading text-xs tracking-wider uppercase font-semibold">
            EYE CARE
          </span>

          <h2
            id="eyecare-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f7] tracking-tight"
          >
            Clarity Begins With Understanding.
          </h2>

          <p className="text-base sm:text-lg text-[#c8c4d7] leading-relaxed">
            Find information about eye-care consultations and the next steps for discussing your vision concerns with our clinical team in Gandhinagar.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col gap-3.5 w-full pt-1">
            <div className="p-4 rounded-xl bg-[#262939] border border-white/5 flex items-start gap-4 transition-all hover:border-[#8c80ff]/30">
              <div className="w-10 h-10 rounded-lg bg-[#8c80ff]/20 flex items-center justify-center shrink-0 text-[#c6bfff]">
                <Glasses className="w-5 h-5 text-[#c6bfff]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#e0e1f7]">
                  Consultative Vision Assessment
                </span>
                <p className="text-sm text-[#c8c4d7] leading-relaxed">
                  Comprehensive evaluation of near, distance, and astigmatic visual acuity tailored to individual daily work habits.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#262939] border border-white/5 flex items-start gap-4 transition-all hover:border-[#8c80ff]/30">
              <div className="w-10 h-10 rounded-lg bg-[#8c80ff]/20 flex items-center justify-center shrink-0 text-[#c6bfff]">
                <Microscope className="w-5 h-5 text-[#c6bfff]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#e0e1f7]">
                  Advanced Optical Diagnostics Planning
                </span>
                <p className="text-sm text-[#c8c4d7] leading-relaxed">
                  Detailed anterior segment review, corneal contour analysis, and intraocular pressure checks using modern hospital equipment.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#262939] border border-white/5 flex items-start gap-4 transition-all hover:border-[#8c80ff]/30">
              <div className="w-10 h-10 rounded-lg bg-[#8c80ff]/20 flex items-center justify-center shrink-0 text-[#c6bfff]">
                <Sparkles className="w-5 h-5 text-[#c6bfff]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#e0e1f7]">
                  Patient-First Retinal &amp; Lens Care Consultations
                </span>
                <p className="text-sm text-[#c8c4d7] leading-relaxed">
                  Structured clinical counsel for cataract screening, diabetic ocular reviews, and age-related optical maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#appointment-booking"
              onClick={handleEnquire}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-[0px_12px_32px_-4px_rgba(120,104,255,0.3)] hover:bg-[#8c80ff] hover:text-white transition-all transform active:scale-95"
            >
              <span>Enquire About Eye Care</span>
              <CalendarPlus className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
