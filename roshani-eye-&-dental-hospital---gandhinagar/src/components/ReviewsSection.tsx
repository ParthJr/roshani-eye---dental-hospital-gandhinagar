import React from 'react';
import { ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { hospitalData } from '../config/hospitalData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews-information"
      data-scroll-section
      className="w-full bg-[#0a0d1c] py-20 lg:py-24 px-5 lg:px-12 relative border-t border-white/5"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div
          data-scroll-item
          className="rounded-3xl bg-[#262939] border border-white/10 p-7 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient subtle glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8c80ff] via-[#60d7e3] to-[#c6bfff]"
            aria-hidden="true"
          />

          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 text-center md:text-left">
            {/* Large Score Display Card */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0d1c] border border-white/5 shadow-xl shrink-0 w-44">
              <span className="font-heading text-5xl lg:text-6xl font-bold text-[#e0e1f7] leading-none">
                {hospitalData.reputation.rating}
              </span>
              <div className="flex text-amber-400 gap-1 pt-2.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-[#c8c4d7] pt-2">out of 5.0 score</span>
            </div>

            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#60d7e3]" />
                <span className="font-heading text-xs font-semibold text-[#60d7e3] tracking-widest uppercase">
                  {hospitalData.reputation.verifiedText}
                </span>
              </div>
              <h3
                id="reviews-heading"
                className="font-heading text-2xl lg:text-3xl font-semibold text-[#e0e1f7]"
              >
                Recognized for Reassuring Patient Satisfaction
              </h3>
              <p className="text-sm sm:text-base text-[#c8c4d7] leading-relaxed">
                {hospitalData.reputation.summary}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-center gap-2.5">
            <a
              href={hospitalData.links.googleMapsReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#353849] border border-white/10 text-[#e0e1f7] font-heading font-semibold text-sm shadow-md hover:bg-[#1c1f2e] hover:border-[#60d7e3]/40 transition-all"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#60d7e3]" />
            </a>
            <span className="text-xs text-[#928ea1]">
              {hospitalData.reputation.reviewCount} Total Verified Ratings
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
