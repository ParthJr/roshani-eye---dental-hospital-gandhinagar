import React from 'react';
import { MessageSquare, Compass, Building2, MapPin } from 'lucide-react';
import { hospitalData } from '../config/hospitalData';

export const HospitalIntroduction: React.FC = () => {
  return (
    <section
      id="our-approach"
      data-scroll-section
      className="w-full bg-[#1c1f2e] py-20 lg:py-28 px-5 lg:px-12 relative"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Editorial Content */}
        <div data-scroll-item className="lg:col-span-6 flex flex-col items-start gap-5">
          <span className="font-heading text-xs font-semibold text-[#60d7e3] tracking-widest uppercase">
            OUR CLINICAL PHILOSOPHY
          </span>

          <h2
            id="philosophy-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f7] tracking-tight"
          >
            {hospitalData.philosophy.title}
          </h2>

          <p className="text-base sm:text-lg text-[#c8c4d7] leading-relaxed">
            {hospitalData.philosophy.subtitle}
          </p>

          {/* 3 Core Principles Cards */}
          <div className="grid grid-cols-1 gap-3.5 w-full pt-1">
            <div className="p-4 rounded-xl bg-[#262939] border border-white/5 flex flex-col gap-1.5 transition-all hover:border-[#8c80ff]/30">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#c6bfff]" />
                <h3 className="font-heading text-base font-semibold text-[#e0e1f7]">
                  1. Clear Communication
                </h3>
              </div>
              <p className="text-sm text-[#c8c4d7] leading-relaxed pl-7">
                Transparent explanations of your health parameters, examination findings, and recommended diagnostic options without medical jargon.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#262939] border border-white/5 flex flex-col gap-1.5 transition-all hover:border-[#60d7e3]/30">
              <div className="flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#60d7e3]" />
                <h3 className="font-heading text-base font-semibold text-[#e0e1f7]">
                  2. Patient-Focused Guidance
                </h3>
              </div>
              <p className="text-sm text-[#c8c4d7] leading-relaxed pl-7">
                Dedicated support through every phase of your consultation journey, from initial check-in to post-consultation scheduling.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#262939] border border-white/5 flex flex-col gap-1.5 transition-all hover:border-[#c6bfff]/30">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#c6bfff]" />
                <h3 className="font-heading text-base font-semibold text-[#e0e1f7]">
                  3. A Welcoming Environment
                </h3>
              </div>
              <p className="text-sm text-[#c8c4d7] leading-relaxed pl-7">
                Designed for calmness, dignity, and pristine hygiene at Keshav Aaradhyam, ensuring each visit is calm and orderly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural & Hospital Ambience Visual Card */}
        <div data-scroll-item className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative w-full rounded-2xl bg-[#0a0d1c] border border-white/10 p-6 shadow-2xl flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#60d7e3]" />
                <span className="font-heading text-xs font-semibold text-[#e0e1f7] uppercase tracking-wider">
                  Gandhinagar Clinical Wing
                </span>
              </div>
              <span className="text-xs font-mono text-[#928ea1]">First Floor Suite</span>
            </div>

            {/* Architectural Diagram Silhouette SVG */}
            <div className="h-64 rounded-xl bg-[#262939] border border-white/5 p-4 flex flex-col justify-center items-center relative overflow-hidden">
              <svg
                className="w-full h-full text-[#e0e1f7]"
                fill="none"
                viewBox="0 0 360 180"
                aria-label="Integrated Consultative Layout Blueprint for Ophthalmic and Dental wings"
              >
                {/* Ophthalmic Wing Bay */}
                <rect
                  height="120"
                  rx="8"
                  stroke="#474555"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                  width="145"
                  x="20"
                  y="30"
                  fill="#1c1f2e"
                  fillOpacity="0.5"
                />
                <text className="text-[11px] font-sans font-semibold tracking-wider" fill="#c6bfff" x="35" y="55">
                  OPHTHALMIC WING
                </text>
                <text className="text-[9px] font-mono" fill="#c8c4d7" x="35" y="75">
                  Exam 01 · Refraction
                </text>
                <text className="text-[9px] font-mono" fill="#c8c4d7" x="35" y="92">
                  Exam 02 · Slit Lamp
                </text>
                <text className="text-[9px] font-mono" fill="#928ea1" x="35" y="109">
                  Exam 03 · Retinal Screen
                </text>

                {/* Dental Operatory Bay */}
                <rect
                  height="120"
                  rx="8"
                  stroke="#474555"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                  width="145"
                  x="195"
                  y="30"
                  fill="#1c1f2e"
                  fillOpacity="0.5"
                />
                <text className="text-[11px] font-sans font-semibold tracking-wider" fill="#60d7e3" x="210" y="55">
                  DENTAL OPERATORY
                </text>
                <text className="text-[9px] font-mono" fill="#c8c4d7" x="210" y="75">
                  Suite A · Prophylaxis
                </text>
                <text className="text-[9px] font-mono" fill="#c8c4d7" x="210" y="92">
                  Suite B · Restorative
                </text>
                <text className="text-[9px] font-mono" fill="#928ea1" x="210" y="109">
                  Suite C · Sterilization
                </text>

                {/* Central Reception Corridor */}
                <line stroke="#8c80ff" strokeWidth="2" strokeDasharray="2 2" x1="180" x2="180" y1="20" y2="160" />
                <circle cx="180" cy="90" fill="#101322" r="14" stroke="#8c80ff" strokeWidth="2" />
                <text className="text-[10px] font-bold" fill="#c6bfff" x="176" y="94">
                  R
                </text>
              </svg>

              <div className="absolute bottom-2 font-mono text-[10px] text-[#928ea1] tracking-wider uppercase">
                Integrated Consultative Layout Blueprint
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#e0e1f7]">Dual Suite</span>
                <span className="text-xs text-[#c8c4d7]">Eye &amp; Dental adjacent bays</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading text-base font-semibold text-[#60d7e3] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#60d7e3]" />
                  Aaradhyam
                </span>
                <span className="text-xs text-[#c8c4d7]">Opposite Radhe 111 Landmark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
