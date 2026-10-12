import React, { useState } from 'react';
import {
  Compass,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Eye,
  Smile,
  FileText,
  Phone,
} from 'lucide-react';
import { hospitalData } from '../config/hospitalData';

interface StageDetail {
  num: string;
  stageName: string;
  badge: string;
  title: string;
  summary: string;
  accentColor: string;
  accentBorder: string;
  accentBg: string;
  keyPoints: string[];
  preparationTip: string;
  timingEstimate: string;
}

export const CareJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: StageDetail[] = [
    {
      num: '01',
      stageName: 'STAGE 01',
      badge: 'Discovery & Selection',
      title: 'Explore Your Care Goals',
      summary:
        'Discover the clinical discipline relevant to your needs—whether laser refraction, ophthalmic screening, or restorative dentistry.',
      accentColor: '#c6bfff',
      accentBorder: 'border-[#8c80ff]/40',
      accentBg: 'bg-[#8c80ff]/20',
      keyPoints: [
        'Identify whether you need refractive evaluation, lens checks, or dental prophylaxis',
        'Review transparent consultation options without medical jargon',
        'Direct access to both specialties under one roof at Keshav Aaradhyam',
      ],
      preparationTip:
        'Bring your current glasses or recent prescriptions if you are seeking a vision evaluation.',
      timingEstimate: 'Self-guided · Instant access',
    },
    {
      num: '02',
      stageName: 'STAGE 02',
      badge: 'Quick Connection',
      title: 'Request Preferred Schedule',
      summary:
        'Submit a simple 2-minute online enquiry or phone our Gandhinagar reception directly to pick your preferred consultation window.',
      accentColor: '#60d7e3',
      accentBorder: 'border-[#60d7e3]/40',
      accentBg: 'bg-[#00a0ab]/20',
      keyPoints: [
        'Select Morning (9am–1pm), Afternoon (1pm–5pm), or Evening (5pm–8:30pm) slots',
        'Share optional notes regarding specific ocular or dental concerns',
        'Direct helpline available at 083201 46657 during clinic hours',
      ],
      preparationTip:
        'Ensure your 10-digit mobile number is entered accurately for telephone confirmation.',
      timingEstimate: 'Takes ~2 minutes to submit',
    },
    {
      num: '03',
      stageName: 'STAGE 03',
      badge: 'Personalized Care',
      title: 'Confirm & Consult with Team',
      summary:
        'Our hospital desk confirms specialist roster availability and welcomes you into our modern clinical suites at Keshav Aaradhyam.',
      accentColor: '#dee1fb',
      accentBorder: 'border-[#c2c5de]/40',
      accentBg: 'bg-[#8c80ff]/20',
      keyPoints: [
        'Receptionist calls to confirm exact doctor availability and arrival time',
        'Receive pre-examination guidance directly via phone/SMS',
        'Pristine first-floor facility with elevator access and dedicated patient parking',
      ],
      preparationTip:
        'Complete optical dilation typically requires 30–45 mins. Plan arrival 10 minutes prior.',
      timingEstimate: 'Confirmed via phone/SMS',
    },
  ];

  const current = stages[activeStage];

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSpecialties = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="patient-journey"
      data-scroll-section
      className="w-full bg-[#0a0d1c] py-20 lg:py-28 px-5 lg:px-12 relative border-t border-b border-white/5"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-12">
        {/* Header with Title and Value Proposition */}
        <div data-scroll-title className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#181b2a] border border-white/10 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#60d7e3]" />
            <span className="font-heading text-xs font-semibold text-[#c6bfff] tracking-widest uppercase">
              CONSULTATION WORKFLOW
            </span>
          </div>

          <h2
            id="journey-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f7] tracking-tight"
          >
            Your Next Step, Made Simpler.
          </h2>

          <p className="text-base sm:text-lg text-[#c8c4d7] leading-relaxed">
            We have designed a frictionless, transparent path from your first enquiry to meeting our clinical team in Gandhinagar. Click any stage below to view full pre-visit guidance.
          </p>
        </div>

        {/* 3-Stage Interactive Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting Line for Tablet/Desktop */}
          <div
            data-journey-line
            className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-[#7868FF] via-[#70E6F2] to-[#c6bfff] z-0 opacity-40 pointer-events-none"
            aria-hidden="true"
          />

          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <div
                key={stage.num}
                data-scroll-item
                onClick={() => setActiveStage(idx)}
                className={`relative z-10 flex flex-col gap-5 p-7 rounded-2xl bg-[#181b2a] border transition-all duration-300 cursor-pointer shadow-xl text-left ${
                  isActive
                    ? `${stage.accentBorder} ring-2 ring-offset-2 ring-offset-[#0a0d1c] bg-[#1c1f2e] -translate-y-1`
                    : 'border-white/5 hover:bg-[#1c1f2e] hover:border-white/20'
                }`}
                style={{
                  boxShadow: isActive ? `0 12px 30px -4px ${stage.accentColor}25` : undefined,
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStage(idx);
                  }
                }}
                aria-pressed={isActive}
                aria-label={`Select ${stage.stageName}: ${stage.title}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl font-heading text-xl font-bold flex items-center justify-center transition-all ${
                      idx === 0
                        ? 'bg-[#c6bfff] text-[#22008e] shadow-[0px_8px_20px_rgba(120,104,255,0.3)]'
                        : idx === 1
                        ? 'bg-[#60d7e3] text-[#00363b] shadow-[0px_8px_20px_rgba(112,230,242,0.3)]'
                        : 'bg-[#8c80ff] text-white shadow-[0px_8px_20px_rgba(140,128,255,0.3)]'
                    }`}
                  >
                    {stage.num}
                  </div>
                  <span
                    className="font-heading text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#0a0d1c] border border-white/5"
                    style={{ color: stage.accentColor }}
                  >
                    {stage.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl font-semibold text-[#e0e1f7] flex items-center justify-between">
                    <span>{stage.title}</span>
                  </h3>
                  <p className="text-sm text-[#c8c4d7] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs font-heading font-medium mt-auto">
                  <span className="flex items-center gap-1.5" style={{ color: stage.accentColor }}>
                    {idx === 0 ? (
                      <Compass className="w-4 h-4" />
                    ) : idx === 1 ? (
                      <PhoneCall className="w-4 h-4" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                    <span>{idx === 0 ? 'Explore Categories' : idx === 1 ? '2-Minute Booking' : 'Confirmed Slot'}</span>
                  </span>
                  <span className="text-[#928ea1] text-[11px]">{stage.timingEstimate}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Details Box for Active Stage */}
        <div
          className={`rounded-2xl bg-[#181b2a] border ${current.accentBorder} p-6 sm:p-8 shadow-2xl flex flex-col lg:flex-row gap-8 items-start justify-between relative overflow-hidden transition-all`}
        >
          {/* Ambient Glow */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: current.accentColor }}
            aria-hidden="true"
          />

          {/* Left Details */}
          <div className="flex-1 flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider"
                style={{ backgroundColor: `${current.accentColor}20`, color: current.accentColor }}
              >
                {current.stageName} Deep Dive
              </span>
              <span className="text-xs text-[#928ea1] font-mono">• {current.timingEstimate}</span>
            </div>

            <h4 className="font-heading text-2xl font-bold text-[#e0e1f7]">
              {current.title} — What to Expect
            </h4>

            {/* Key Action Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {current.keyPoints.map((point, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#0a0d1c] border border-white/5 flex items-start gap-2.5 text-xs text-[#c8c4d7] leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: current.accentColor }} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Preparation Tip Banner */}
            <div className="p-4 rounded-xl bg-[#262939] border border-white/5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-[#60d7e3]" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-heading font-semibold text-[#e0e1f7]">
                  Clinical Preparation Guidance:
                </span>
                <p className="text-xs text-[#c8c4d7] leading-relaxed">
                  {current.preparationTip}
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Prompts */}
          <div className="lg:w-72 shrink-0 flex flex-col gap-3 w-full relative z-10 pt-2 lg:pt-0">
            <span className="text-xs font-heading font-semibold text-[#928ea1] uppercase tracking-wider">
              Quick Action
            </span>

            {activeStage === 0 && (
              <a
                href="#specialties"
                onClick={scrollToSpecialties}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-md hover:bg-[#8c80ff] hover:text-white transition-all"
              >
                <span>Browse Specialties</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}

            {activeStage === 1 && (
              <a
                href="#appointment-booking"
                onClick={scrollToBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#60d7e3] text-[#00363b] font-heading font-semibold text-sm shadow-md hover:bg-[#83f3ff] transition-all"
              >
                <span>Book This Slot</span>
                <Calendar className="w-4 h-4" />
              </a>
            )}

            {activeStage === 2 && (
              <a
                href={hospitalData.contact.phoneTelHref}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-md hover:bg-[#8c80ff] hover:text-white transition-all"
              >
                <span>Call 083201 46657</span>
                <Phone className="w-4 h-4" />
              </a>
            )}

            <a
              href="#appointment-booking"
              onClick={scrollToBooking}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#262939] text-[#e0e1f7] font-heading font-semibold text-sm border border-white/10 hover:bg-[#353849] transition-all"
            >
              <Clock className="w-4 h-4 text-[#60d7e3]" />
              <span>Opens Daily at 9:00 AM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
