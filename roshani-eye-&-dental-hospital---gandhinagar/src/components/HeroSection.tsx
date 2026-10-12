import React, { useState } from 'react';
import { hospitalData } from '../config/hospitalData';
import { ArrowRight, Calendar, Eye, Sparkles, MapPin, Clock, Stethoscope } from 'lucide-react';

interface HeroSectionProps {
  onExploreCare?: () => void;
  onBookConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCare,
  onBookConsultation,
}) => {
  const [hudHovered, setHudHovered] = useState(false);

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreCare) {
      onExploreCare();
    } else {
      document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBook = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBookConsultation) {
      onBookConsultation();
    } else {
      document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#0f1221] text-[#e0e1f7] pt-28 pb-20 lg:pt-36 lg:pb-32 px-5 lg:px-12"
      aria-label="Welcome and Overview"
    >
      {/* Ambient Optical Glow Orbs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#8c80ff]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-[#00a0ab]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[48rem] h-64 bg-[#262939]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Reputation & Status Badge */}
          <div
            data-animate="hero-badge"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#262939] border border-white/10 shadow-md flex-wrap"
          >
            <span className="font-heading text-xs text-[#c6bfff] tracking-widest uppercase font-semibold">
              {hospitalData.eyebrow}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#60d7e3]" aria-hidden="true" />
            <div className="flex items-center gap-1.5 text-xs text-[#e0e1f7]">
              <span className="text-amber-400 font-bold">★</span>
              <span className="font-bold text-[#e0e1f7]">{hospitalData.reputation.rating}</span>
              <span className="text-[#c8c4d7] font-normal">
                · {hospitalData.reputation.reviewCount} Google reviews
              </span>
            </div>
          </div>

          {/* Hero Headline */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1
              data-animate="hero-title"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e0e1f7] tracking-tight leading-[1.08]"
            >
              See Clearly.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60d7e3] via-[#e4dfff] to-[#c6bfff]">
                Smile Confidently.
              </span>
            </h1>
            <p
              data-animate="hero-copy"
              className="text-base sm:text-lg text-[#c8c4d7] max-w-xl pt-1 leading-relaxed"
            >
              {hospitalData.supportingCopy}
            </p>
          </div>

          {/* Dual CTA Row */}
          <div data-animate="hero-ctas" className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#specialties"
              onClick={handleExplore}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-[0px_12px_32px_-4px_rgba(120,104,255,0.35)] hover:bg-[#8c80ff] hover:text-white transition-all transform active:scale-95"
            >
              <span>Explore Our Care</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#appointment-booking"
              onClick={handleBook}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#262939]/90 text-[#e0e1f7] font-heading font-semibold text-sm border border-white/10 shadow-md hover:bg-[#353849] hover:border-[#60d7e3]/40 transition-all"
            >
              <Calendar className="w-4 h-4 text-[#60d7e3]" />
              <span>Book a Consultation</span>
            </a>
          </div>

          {/* Verified Quick Meta */}
          <div
            data-animate="hero-stats"
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 w-full max-w-xl border-t border-white/5"
          >
            <div className="flex flex-col gap-0.5">
              <span className="font-heading font-semibold text-base sm:text-lg text-[#60d7e3] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#60d7e3] shrink-0" />
                Sector 21 &amp; Aaradhyam
              </span>
              <span className="text-xs text-[#c8c4d7]">Central Gandhinagar location</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-heading font-semibold text-base sm:text-lg text-[#c6bfff] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#c6bfff] shrink-0" />
                09:00 AM
              </span>
              <span className="text-xs text-[#c8c4d7]">Daily opening consultations</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-0.5">
              <span className="font-heading font-semibold text-base sm:text-lg text-[#dee1fb] flex items-center gap-1">
                <Stethoscope className="w-3.5 h-3.5 text-[#dee1fb] shrink-0" />
                Dual Clinic
              </span>
              <span className="text-xs text-[#c8c4d7]">Eye + Dental unified wing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Optical & Smile Geometry Visualizer (SVG/CSS Composition) */}
        <div
          data-animate="hero-visual"
          className="lg:col-span-5 relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center"
          onMouseEnter={() => setHudHovered(true)}
          onMouseLeave={() => setHudHovered(false)}
        >
          {/* Backing Ambient Disc */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#8c80ff]/20 via-[#1c1f2e] to-[#00a0ab]/20 blur-2xl" />

          {/* Interactive HUD Container Card */}
          <div
            className={`relative w-full h-full rounded-2xl bg-[#1c1f2e]/80 backdrop-blur-2xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 ${
              hudHovered ? 'ring-1 ring-[#c6bfff]/30 shadow-[#7868FF]/10' : ''
            }`}
          >
            {/* Top Telemetry Header */}
            <div className="flex items-center justify-between z-10 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#60d7e3] animate-pulse" />
                <span className="font-heading text-xs text-[#c8c4d7] tracking-wider uppercase font-semibold">
                  OPTICAL &amp; DENTAL REFRACTION HUD
                </span>
              </div>
              <span className="font-mono text-xs text-[#60d7e3] tracking-wider">SYS.OK · GUJ-382419</span>
            </div>

            {/* Central Generative Graphic (Lens Concentrics & Calibrated Smile Curve) */}
            <div className="relative w-full h-64 my-auto flex items-center justify-center">
              <svg
                data-animate="lens-pulse"
                className="w-full h-full max-w-[320px] text-[#e0e1f7] transition-transform duration-700"
                fill="none"
                viewBox="0 0 400 400"
                aria-label="Diagnostic lens optical crosshairs and dental arch diagram"
              >
                {/* Outer Eye Focal Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="170"
                  stroke="currentColor"
                  strokeDasharray="6 6"
                  strokeOpacity="0.15"
                  strokeWidth="1.5"
                />
                {/* Calibrated Violet Optic Lens Contour */}
                <circle cx="200" cy="200" r="125" stroke="#c6bfff" strokeOpacity="0.35" strokeWidth="2" />
                <circle cx="200" cy="200" r="85" stroke="#7868FF" strokeOpacity="0.55" strokeWidth="1.5" />

                {/* Crosshair Lines */}
                <line
                  stroke="currentColor"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                  x1="200"
                  x2="200"
                  y1="30"
                  y2="370"
                />
                <line
                  stroke="currentColor"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                  x1="30"
                  x2="370"
                  y1="200"
                  y2="200"
                />

                {/* Retinal Convergence Beam (Violet Gradient) */}
                <circle cx="200" cy="200" fill="url(#violet-gradient)" fillOpacity="0.35" r="38" />
                <circle cx="200" cy="200" fill="#c6bfff" r="12" />

                {/* Luminescent Dental Arch Wave (Ice Cyan Refraction) */}
                <path
                  d="M 90 230 C 130 310, 270 310, 310 230"
                  filter="url(#cyan-glow)"
                  stroke="#60d7e3"
                  strokeDasharray="2 0"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
                <path
                  d="M 120 230 C 150 280, 250 280, 280 230"
                  stroke="#83f3ff"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                />

                {/* Micro Calibration Ticks */}
                <circle cx="90" cy="230" fill="#60d7e3" r="4" />
                <circle cx="310" cy="230" fill="#60d7e3" r="4" />
                <circle cx="200" cy="285" fill="#83f3ff" r="4" />

                <defs>
                  <radialGradient cx="50%" cy="50%" id="violet-gradient" r="50%">
                    <stop offset="0%" stopColor="#8c80ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#181b2a" stopOpacity="0" />
                  </radialGradient>
                  <filter height="140%" id="cyan-glow" width="140%" x="-20%" y="-20%">
                    <feGaussianBlur result="blur" stdDeviation="4" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
              </svg>

              {/* Floating Overlay Badge: Eye Precision */}
              <div className="absolute top-2 left-2 px-3 py-1.5 rounded-lg bg-[#262939]/90 border border-[#c6bfff]/30 shadow-md backdrop-blur-md">
                <span className="font-heading text-xs text-[#c6bfff] font-semibold flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#c6bfff]" />
                  Refraction: Optimal
                </span>
              </div>

              {/* Floating Overlay Badge: Dental Harmony */}
              <div className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg bg-[#262939]/90 border border-[#60d7e3]/30 shadow-md backdrop-blur-md">
                <span className="font-heading text-xs text-[#60d7e3] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#60d7e3]" />
                  Prophylaxis: Clean
                </span>
              </div>
            </div>

            {/* Bottom Telemetry Footer */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[#c8c4d7] text-xs z-10">
              <span>{hospitalData.address.building}, Gandhinagar</span>
              <span className="font-semibold text-[#e0e1f7] tracking-wider uppercase">Dual Care Matrix</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
