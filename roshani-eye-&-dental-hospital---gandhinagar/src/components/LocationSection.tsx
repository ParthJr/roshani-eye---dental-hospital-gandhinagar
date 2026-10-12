import React from 'react';
import { MapPin, Clock, Phone, Navigation, Calendar, Send } from 'lucide-react';
import { hospitalData } from '../config/hospitalData';

export const LocationSection: React.FC = () => {
  const mapImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAN9FCztQPMmstMb48dp6X_xr6DLY0IC9VWBD7kxxEqWjJcFzaAwIKI1aludwDctSPgkYwb0QqrS1OiqDhBNNjrGEYrHnJmclzrzvyOeHpp3GEb5BcVfOfh5E60o7ZuQsIwoYGUkGT_hD3WFO33XFo5qnfDUxJyocHoeO0DUZm35QefxnIc4motwy6jryGV7LLD1qAES-pMbS4ul6ubq1yxQDjFDnPhgX_Nx_heEEwXmLyGU6KtnHhf';

  return (
    <section
      id="contact-location"
      data-scroll-section
      className="w-full bg-[#0a0d1c] py-20 lg:py-28 px-5 lg:px-12 relative border-t border-white/5"
      aria-labelledby="location-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-12">
        <div data-scroll-title className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-heading text-xs font-semibold text-[#60d7e3] tracking-widest uppercase">
              LOCAL CONNECTIVITY
            </span>
            <h2
              id="location-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f7] tracking-tight"
            >
              Find Roshani in Gandhinagar.
            </h2>
          </div>
          <p className="text-base text-[#c8c4d7] max-w-md leading-relaxed">
            Conveniently located at Keshav Aaradhyam with dedicated parking and first-floor elevator accessibility for patients of all ages.
          </p>
        </div>

        {/* Location Grid: Verified Details & Map Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Address & Action Cards */}
          <div data-scroll-item className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-7 rounded-2xl bg-[#181b2a] border border-white/5 flex flex-col gap-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8c80ff]/20 text-[#c6bfff] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#c6bfff]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-xs text-[#c6bfff] uppercase font-semibold tracking-wider">
                    Hospital Address
                  </span>
                  <p className="font-heading text-base sm:text-lg font-semibold text-[#e0e1f7] leading-snug">
                    {hospitalData.address.fullFormatted}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2 border-t border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#00a0ab]/20 text-[#60d7e3] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#60d7e3]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-xs text-[#60d7e3] uppercase font-semibold tracking-wider">
                    Operating Timing
                  </span>
                  <p className="text-sm font-semibold text-[#e0e1f7]">
                    {hospitalData.schedule.displayText}
                  </p>
                  <p className="text-xs text-[#c8c4d7] leading-relaxed">
                    {hospitalData.schedule.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={hospitalData.contact.phoneTelHref}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#60d7e3] text-[#00363b] font-heading font-semibold text-sm shadow-md hover:bg-[#83f3ff] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {hospitalData.contact.phoneDisplay}</span>
              </a>

              <a
                href={hospitalData.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#262939] border border-white/10 text-[#e0e1f7] font-heading font-semibold text-sm shadow-md hover:bg-[#353849] hover:border-[#8c80ff]/40 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#c6bfff]" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href="#appointment-booking"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('appointment-booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-md hover:bg-[#8c80ff] hover:text-white transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>

          {/* Visual Map Section */}
          <div data-scroll-item className="lg:col-span-7 flex flex-col">
            <div
              className="bg-cover bg-center w-full h-80 lg:h-full min-h-[380px] rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-end p-6"
              style={{
                backgroundImage: `url('${mapImageUrl}')`,
                backgroundColor: '#181b2a',
              }}
              data-location={hospitalData.address.fullFormatted}
            >
              {/* Scrim gradient for contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0f1221] via-[#0f1221]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 p-5 rounded-xl bg-[#1c1f2e]/90 backdrop-blur-md border border-white/10 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading text-base font-semibold text-[#e0e1f7]">
                    Keshav Aaradhyam Complex
                  </span>
                  <span className="text-xs text-[#c8c4d7]">
                    {hospitalData.address.landmarkContext}
                  </span>
                </div>
                <a
                  href={hospitalData.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#c6bfff] text-[#22008e] hover:bg-[#8c80ff] hover:text-white transition-all shadow-md shrink-0"
                  title="Open GPS navigation in Google Maps"
                  aria-label="Open GPS navigation"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
