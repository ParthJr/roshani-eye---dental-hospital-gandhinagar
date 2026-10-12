import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { hospitalData } from '../config/hospitalData';
import {
  Calendar,
  Clock,
  Phone,
  CheckCircle2,
  AlertCircle,
  Send,
  RotateCcw,
  ListFilter,
  Check,
  Shield,
  Trash2,
} from 'lucide-react';

export type SpecialtyType = 'Eye Care' | 'Dental Care' | 'General Enquiry';

export interface AppointmentFormData {
  fullName: string;
  mobileNumber: string;
  specialty: SpecialtyType;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  privacyConsent: boolean;
}

interface StoredRequest extends AppointmentFormData {
  id: string;
  createdAt: string;
  status: 'Pending Hospital Confirmation';
}

interface AppointmentFormProps {
  initialSpecialty?: SpecialtyType;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialSpecialty = 'Eye Care',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [showStoredRequests, setShowStoredRequests] = useState(false);
  const [savedRequests, setSavedRequests] = useState<StoredRequest[]>([]);

  // Load existing requests from localStorage
  useEffect(() => {
    try {
      const data = localStorage.getItem('roshani_appointment_requests');
      if (data) {
        setSavedRequests(JSON.parse(data));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      specialty: initialSpecialty,
      preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
      preferredTime: 'Morning (09:00 AM - 01:00 PM)',
      notes: '',
      privacyConsent: false,
    },
  });

  const selectedSpecialty = watch('specialty');

  // Update specialty when prop changes
  useEffect(() => {
    if (initialSpecialty) {
      setValue('specialty', initialSpecialty);
    }
  }, [initialSpecialty, setValue]);

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmissionError(null);

    // Check duplicate requests for same mobile number and date
    const isDuplicate = savedRequests.some(
      (r) =>
        r.mobileNumber === data.mobileNumber.trim() &&
        r.preferredDate === data.preferredDate &&
        r.specialty === data.specialty
    );

    if (isDuplicate) {
      setSubmissionError(
        'An appointment request with this mobile number and date for this specialty is already registered. The hospital team will reach out to you shortly.'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulated secure submission dispatch
      await new Promise((resolve) => setTimeout(resolve, 600));

      const newRequest: StoredRequest = {
        ...data,
        id: `REQ-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        status: 'Pending Hospital Confirmation',
      };

      const updated = [newRequest, ...savedRequests];
      setSavedRequests(updated);
      try {
        localStorage.setItem('roshani_appointment_requests', JSON.stringify(updated));
      } catch {
        // quota exceeded or private mode
      }

      setLastSubmittedId(newRequest.id);
      setSubmissionSuccess(true);
    } catch {
      setSubmissionError('Unable to transmit request at this time. Please call the hospital at 083201 46657.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset({
      fullName: '',
      mobileNumber: '',
      specialty: initialSpecialty,
      preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      preferredTime: 'Morning (09:00 AM - 01:00 PM)',
      notes: '',
      privacyConsent: false,
    });
    setSubmissionSuccess(false);
    setSubmissionError(null);
  };

  const deleteRequest = (id: string) => {
    const updated = savedRequests.filter((r) => r.id !== id);
    setSavedRequests(updated);
    try {
      localStorage.setItem('roshani_appointment_requests', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Min date is today
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment-booking"
      data-scroll-section
      className="w-full bg-[#1c1f2e] py-20 lg:py-28 px-5 lg:px-12 relative border-t border-white/5"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Form Explanatory Column */}
        <div data-scroll-item className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-5">
            <span className="font-heading text-xs font-semibold text-[#c6bfff] tracking-widest uppercase">
              CONSULTATION SCHEDULING
            </span>

            <h2
              id="booking-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e0e1f7] tracking-tight"
            >
              Let's Plan Your Visit.
            </h2>

            <p className="text-base sm:text-lg text-[#c8c4d7] leading-relaxed">
              Send an appointment request and let the hospital team help you with the next steps. Our team will verify doctor rosters and contact you promptly.
            </p>

            {/* Next Steps Card */}
            <div className="p-5 rounded-2xl bg-[#262939] border border-white/5 flex flex-col gap-3">
              <span className="font-heading text-xs font-semibold text-[#60d7e3] uppercase tracking-wider">
                What happens next?
              </span>
              <ul className="flex flex-col gap-2.5 text-sm text-[#c8c4d7]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c6bfff] shrink-0 mt-0.5" />
                  <span>We match your needs with our Eye or Dental consultation wing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c6bfff] shrink-0 mt-0.5" />
                  <span>Our receptionist calls you to lock in an exact arrival time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c6bfff] shrink-0 mt-0.5" />
                  <span>You receive pre-examination guidance directly via phone/SMS.</span>
                </li>
              </ul>
            </div>

            {/* Saved requests badge if any exist */}
            {savedRequests.length > 0 && (
              <button
                type="button"
                onClick={() => setShowStoredRequests(!showStoredRequests)}
                className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[#60d7e3] hover:underline p-1 text-left"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>
                  {showStoredRequests ? 'Hide' : 'View'} My Active Requests ({savedRequests.length})
                </span>
              </button>
            )}

            {/* Stored requests accordion */}
            {showStoredRequests && savedRequests.length > 0 && (
              <div className="p-4 rounded-xl bg-[#181b2a] border border-white/10 flex flex-col gap-3 text-xs">
                <span className="font-heading font-semibold text-[#e0e1f7]">
                  Recently Submitted Requests (Local Records):
                </span>
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                  {savedRequests.map((req) => (
                    <div
                      key={req.id}
                      className="p-2.5 rounded-lg bg-[#262939] border border-white/5 flex items-center justify-between"
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="font-semibold text-[#e0e1f7]">{req.fullName} ({req.specialty})</span>
                        <span className="text-[#928ea1]">Date: {req.preferredDate} · {req.preferredTime.split(' ')[0]}</span>
                        <span className="text-[10px] text-[#60d7e3]">{req.status}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteRequest(req.id)}
                        className="p-1 text-[#928ea1] hover:text-[#ffb4ab] transition-colors"
                        title="Remove record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Direct Phone Helpline Card */}
          <div className="p-4 rounded-xl bg-[#0a0d1c] border border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-[#928ea1]">Prefer speaking right now?</span>
              <a
                href={hospitalData.contact.phoneTelHref}
                className="font-heading text-lg font-bold text-[#60d7e3] hover:underline"
              >
                {hospitalData.contact.phoneDisplay}
              </a>
            </div>
            <a
              href={hospitalData.contact.phoneTelHref}
              className="w-10 h-10 rounded-full bg-[#00a0ab]/20 border border-[#00a0ab]/30 flex items-center justify-center text-[#60d7e3] hover:bg-[#00a0ab]/40 transition-colors"
              aria-label="Call Hospital"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Form Column */}
        <div data-scroll-item className="lg:col-span-7">
          <div className="rounded-2xl bg-[#181b2a] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col gap-6 relative">
            {submissionSuccess ? (
              /* Success Overlay with Honest Hospital Copy */
              <div
                className="flex flex-col items-center justify-center text-center gap-5 py-8"
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-[#00a0ab]/20 border border-[#60d7e3]/40 text-[#60d7e3] flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-9 h-9 text-[#60d7e3]" />
                </div>

                <div className="flex flex-col gap-2 max-w-lg">
                  <span className="text-xs font-mono text-[#c6bfff] uppercase tracking-wider">
                    Reference: {lastSubmittedId}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#e0e1f7]">
                    Appointment Request Received
                  </h3>
                  <p className="text-base text-[#c8c4d7] leading-relaxed">
                    Your appointment request has been received. The hospital team will contact you to confirm availability.
                  </p>
                  <p className="text-xs text-[#928ea1] pt-2">
                    Our reception at Keshav Aaradhyam, Gandhinagar opens at 9:00 AM daily.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#353849] text-[#e0e1f7] font-heading font-semibold text-sm hover:bg-[#262939] border border-white/10 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Submit Another Request</span>
                  </button>
                  <a
                    href={hospitalData.contact.phoneTelHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#60d7e3] text-[#00363b] font-heading font-semibold text-sm hover:bg-[#83f3ff] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                {submissionError && (
                  <div
                    className="p-4 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/40 text-[#ffb4ab] text-sm flex items-start gap-3"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{submissionError}</span>
                  </div>
                )}

                {/* Full Name & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="font-heading text-xs font-semibold text-[#e0e1f7]">
                      Full Name <span className="text-[#ffb4ab]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      className={`w-full px-4 py-3 rounded-lg bg-[#0a0d1c] text-[#e0e1f7] placeholder:text-[#928ea1] border ${
                        errors.fullName ? 'border-[#ffb4ab]' : 'border-white/10'
                      } focus:outline-none focus:ring-2 focus:ring-[#8c80ff] text-sm shadow-inner transition-all`}
                      {...register('fullName', {
                        required: 'Full name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      })}
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-[#ffb4ab]">{errors.fullName.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mobileNumber" className="font-heading text-xs font-semibold text-[#e0e1f7]">
                      Mobile Number <span className="text-[#ffb4ab]">*</span>
                    </label>
                    <input
                      id="mobileNumber"
                      type="tel"
                      placeholder="10-digit mobile number"
                      className={`w-full px-4 py-3 rounded-lg bg-[#0a0d1c] text-[#e0e1f7] placeholder:text-[#928ea1] border ${
                        errors.mobileNumber ? 'border-[#ffb4ab]' : 'border-white/10'
                      } focus:outline-none focus:ring-2 focus:ring-[#8c80ff] text-sm shadow-inner transition-all`}
                      {...register('mobileNumber', {
                        required: 'Mobile number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit mobile number',
                        },
                      })}
                      aria-invalid={errors.mobileNumber ? 'true' : 'false'}
                    />
                    {errors.mobileNumber && (
                      <span className="text-[11px] text-[#ffb4ab]">{errors.mobileNumber.message}</span>
                    )}
                  </div>
                </div>

                {/* Specialty of Interest (Pills Selection) */}
                <div className="flex flex-col gap-2">
                  <label className="font-heading text-xs font-semibold text-[#e0e1f7]">
                    Specialty of Interest <span className="text-[#ffb4ab]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" role="radiogroup" aria-label="Specialty Selection">
                    {(['Eye Care', 'Dental Care', 'General Enquiry'] as SpecialtyType[]).map((spec) => {
                      const isSelected = selectedSpecialty === spec;
                      return (
                        <button
                          key={spec}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setValue('specialty', spec)}
                          className={`px-4 py-2.5 rounded-lg font-heading text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5 ${
                            isSelected
                              ? spec === 'Eye Care'
                                ? 'bg-[#c6bfff] text-[#22008e] shadow-md ring-2 ring-[#8c80ff]'
                                : spec === 'Dental Care'
                                ? 'bg-[#60d7e3] text-[#00363b] shadow-md ring-2 ring-[#00a0ab]'
                                : 'bg-[#dee1fb] text-[#161b2d] shadow-md ring-2 ring-[#c2c5de]'
                              : 'bg-[#262939] text-[#c8c4d7] hover:bg-[#353849] hover:text-[#e0e1f7] border border-white/5'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                          <span>{spec}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="preferredDate" className="font-heading text-xs font-semibold text-[#e0e1f7] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#c6bfff]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      min={todayStr}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0a0d1c] text-[#e0e1f7] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c80ff] text-sm shadow-inner"
                      {...register('preferredDate', { required: 'Please select a date' })}
                    />
                    {errors.preferredDate && (
                      <span className="text-[11px] text-[#ffb4ab]">{errors.preferredDate.message}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="preferredTime" className="font-heading text-xs font-semibold text-[#e0e1f7] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#60d7e3]" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      id="preferredTime"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0a0d1c] text-[#e0e1f7] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c80ff] text-sm shadow-inner"
                      {...register('preferredTime')}
                    >
                      {hospitalData.schedule.slots.map((slot) => (
                        <option key={slot.id} value={`${slot.label} (${slot.period})`}>
                          {slot.label} ({slot.period})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="notes" className="font-heading text-xs font-semibold text-[#e0e1f7]">
                    Optional Health Note or Specific Concern
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly describe your optical or dental concern..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0a0d1c] text-[#e0e1f7] placeholder:text-[#928ea1] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#8c80ff] text-sm shadow-inner resize-none"
                    {...register('notes', { maxLength: { value: 300, message: 'Max 300 characters' } })}
                  />
                  {errors.notes && (
                    <span className="text-[11px] text-[#ffb4ab]">{errors.notes.message}</span>
                  )}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="privacyConsent"
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded bg-[#0a0d1c] border-white/20 text-[#8c80ff] focus:ring-[#8c80ff] focus:ring-offset-0 cursor-pointer"
                    {...register('privacyConsent', {
                      required: 'Consent is required to submit consultation request',
                    })}
                  />
                  <label htmlFor="privacyConsent" className="text-xs text-[#c8c4d7] leading-relaxed cursor-pointer">
                    I consent to Roshani Eye &amp; Dental Hospital contacting me via phone call or SMS regarding scheduling, clinic hours, and consultation preparation.
                  </label>
                </div>
                {errors.privacyConsent && (
                  <span className="text-[11px] text-[#ffb4ab] -mt-3">{errors.privacyConsent.message}</span>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#c6bfff] text-[#22008e] font-heading font-semibold text-sm shadow-[0px_12px_32px_-4px_rgba(120,104,255,0.3)] hover:bg-[#8c80ff] hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-98"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#22008e] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>Request an Appointment</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#928ea1] pt-1">
                  <Shield className="w-3.5 h-3.5 text-[#60d7e3]" />
                  <span>Confidential patient details. No unsolicited communications.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
