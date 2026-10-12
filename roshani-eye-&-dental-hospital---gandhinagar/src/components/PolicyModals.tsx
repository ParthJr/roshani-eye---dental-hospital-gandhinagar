import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { hospitalData } from '../config/hospitalData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#181b2a] border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-[#e0e1f7]">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            {type === 'privacy' ? (
              <Shield className="w-6 h-6 text-[#60d7e3]" />
            ) : (
              <FileText className="w-6 h-6 text-[#c6bfff]" />
            )}
            <h2 id="modal-title" className="font-heading text-xl font-bold">
              {type === 'privacy' ? 'Privacy & Data Protection Notice' : 'Terms of Healthcare Consultation'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#928ea1] hover:text-[#e0e1f7] hover:bg-[#262939] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c80ff]"
            aria-label="Close Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="flex flex-col gap-4 text-sm text-[#c8c4d7] leading-relaxed">
            <p>
              At <strong>{hospitalData.name}</strong>, safeguarding patient confidentiality is paramount. This policy clarifies how enquiry data is handled.
            </p>
            <h3 className="font-heading font-semibold text-base text-[#e0e1f7]">1. Data Collection Scope</h3>
            <p>
              When submitting an appointment enquiry through this website, we collect only your full name, 10-digit mobile number, preferred consultation specialty (Eye Care or Dental Care), preferred timing, and any voluntary health note.
            </p>
            <h3 className="font-heading font-semibold text-base text-[#e0e1f7]">2. Use of Information</h3>
            <p>
              Your contact details are strictly utilized to coordinate appointments, confirm doctor schedules, and provide directions to our clinical suite at Keshav Aaradhyam, Gandhinagar.
            </p>
            <h3 className="font-heading font-semibold text-base text-[#e0e1f7]">3. No Marketing or Third-Party Disclosures</h3>
            <p>
              We do not sell, rent, or distribute patient contact details to commercial advertisers or data brokers. All communication is exclusively between the hospital reception desk and the patient.
            </p>
            <h3 className="font-heading font-semibold text-base text-[#e0e1f7]">4. Contact & Inquiries</h3>
            <p>
              For data privacy inquiries or to update your contact record, please reach our reception team directly at {hospitalData.contact.phoneDisplay}.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-sm text-[#c8c4d7] leading-relaxed">
            <p>
              These terms govern the use of the informational and appointment enquiry platform of <strong>{hospitalData.name}</strong>.
            </p>
            <h3 className="font-heading font-semibold text-base text-[#e0e1f7]">1. Preliminary Consultation Enquiry Only</h3>
            <p>
              Submitting a form through this website constitutes an initial enquiry. Official appointment times are finalized only when the hospital administrative desk contacts you and confirms specialist slot availability.
            </p>
            <h3 className="font-heading font-semibold text-base text-[#e0e1f7]">2. Emergency Medical Protocol</h3>
            <p>
              This website is not monitored for critical ocular trauma or acute dental emergencies. In the event of an urgent clinical emergency, please proceed immediately to an emergency care facility or call {hospitalData.contact.phoneDisplay}.
            </p>
            <h3 className="font-heading font-semibold text-base text-[#e0e1f7]">3. Accuracy of Hospital Information</h3>
            <p>
              Our clinic operates from {hospitalData.address.fullFormatted}. Clinic opens at {hospitalData.schedule.openingTime} daily. Please verify specific specialist availability prior to travel.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#262939] text-[#e0e1f7] font-heading font-semibold text-sm hover:bg-[#353849] border border-white/10 transition-colors"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
