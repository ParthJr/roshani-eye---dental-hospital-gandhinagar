import React, { useState } from 'react';
import { Film, ChevronDown, ChevronUp, Cpu, Eye, Sparkles, Activity } from 'lucide-react';

export const MotionSpecsDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-[#1c1f2e] py-10 px-5 lg:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="rounded-2xl bg-[#0a0d1c] border border-white/10 p-6 shadow-xl flex flex-col gap-4">
          <div
            className="flex items-center justify-between cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(!isOpen);
              }
            }}
            aria-expanded={isOpen}
            aria-controls="motion-specs-body"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8c80ff]/20 text-[#c6bfff] flex items-center justify-center">
                <Film className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-sm sm:text-base font-semibold text-[#e0e1f7]">
                  GSAP Motion-Design Architectural Specifications
                </span>
                <span className="text-xs text-[#c8c4d7]">
                  Engineering parameters for production stage transitions &amp; accessible motion
                </span>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#262939] text-[#c8c4d7] hover:text-[#e0e1f7] text-xs font-heading font-medium transition-colors"
            >
              <span>{isOpen ? 'Collapse Details' : 'View Blueprint'}</span>
              {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {isOpen && (
            <div
              id="motion-specs-body"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/5 animate-in fade-in duration-300"
            >
              <div className="p-4 rounded-xl bg-[#181b2a] border border-white/5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#c6bfff]" />
                  <span className="font-heading text-xs text-[#c6bfff] uppercase font-semibold">
                    1. Hero Entrance
                  </span>
                </div>
                <p className="text-xs text-[#c8c4d7] leading-relaxed">
                  Staggered reveal: Eyebrow <code className="text-[#60d7e3]">(y: 16, alpha: 0, 0.4s)</code> → Space Grotesk headline <code className="text-[#60d7e3]">(lines, y: 32, ease: "power3.out", stagger: 0.12s)</code> → Dual CTA fade.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#181b2a] border border-white/5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#60d7e3]" />
                  <span className="font-heading text-xs text-[#60d7e3] uppercase font-semibold">
                    2. Spatial Parallax
                  </span>
                </div>
                <p className="text-xs text-[#c8c4d7] leading-relaxed">
                  Refraction rays &amp; optical rings layered at variable depth factors <code className="text-[#c6bfff]">(0.04 to 0.12)</code> with hardware-accelerated transforms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#181b2a] border border-white/5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#dee1fb]" />
                  <span className="font-heading text-xs text-[#dee1fb] uppercase font-semibold">
                    3. Card Ambient Glow
                  </span>
                </div>
                <p className="text-xs text-[#c8c4d7] leading-relaxed">
                  Card mouseover creates subtle -4px elevation lift with simultaneous radial glow ramp in violet (Eye) and cyan (Dental).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#181b2a] border border-white/5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#c2c5de]" />
                  <span className="font-heading text-xs text-[#c2c5de] uppercase font-semibold">
                    4. Reduced Motion Fallback
                  </span>
                </div>
                <p className="text-xs text-[#c8c4d7] leading-relaxed">
                  Full <code className="text-[#928ea1]">@media (prefers-reduced-motion)</code> compliance setting duration to 0s, preserving complete structural clarity.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
