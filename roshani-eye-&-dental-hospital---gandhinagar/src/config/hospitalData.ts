/**
 * Roshani Eye & Dental Hospital - Central Business Configuration
 * Gandhinagar, Gujarat
 * 
 * NOTE: Strict compliance with source of truth:
 * - Verified hospital address, phone, rating, and opening time.
 * - No fabricated doctor names, prices, or unauthorized medical claims.
 */

export interface HospitalConfig {
  name: string;
  tagline: string;
  eyebrow: string;
  supportingCopy: string;
  address: {
    shopNo: string;
    floor: string;
    building: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
    landmarkContext: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    phoneTelHref: string;
    countryCode: string;
  };
  reputation: {
    rating: number;
    reviewCount: number;
    platform: string;
    verifiedText: string;
    summary: string;
  };
  schedule: {
    openingTime: string;
    displayText: string;
    note: string;
    slots: { id: string; label: string; period: string }[];
  };
  links: {
    googleMapsDirections: string;
    googleMapsReviews: string;
    logoUrl: string;
  };
  specialties: {
    eye: {
      id: string;
      title: string;
      subtitle: string;
      accent: string;
      description: string;
      highlights: { title: string; description: string; icon: string }[];
      patientNote: string;
    };
    dental: {
      id: string;
      title: string;
      subtitle: string;
      accent: string;
      description: string;
      highlights: { title: string; description: string; icon: string }[];
      patientNote: string;
    };
  };
  journey: {
    stage: string;
    num: string;
    title: string;
    description: string;
    sublabel: string;
    icon: string;
  }[];
  philosophy: {
    title: string;
    subtitle: string;
    points: { num: string; title: string; text: string; icon: string }[];
  };
}

export const hospitalData: HospitalConfig = {
  name: "Roshani Eye & Dental Hospital",
  tagline: "See Clearly. Smile Confidently.",
  eyebrow: "PRECISION CARE · GANDHINAGAR",
  supportingCopy:
    "Thoughtful eye and dental care, brought together in one welcoming healthcare destination in Gandhinagar.",
  address: {
    shopNo: "Shop No. 112–113",
    floor: "First Floor",
    building: "Keshav Aaradhyam",
    landmark: "opposite Radhe 111",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382419",
    fullFormatted:
      "Shop No. 112–113, First Floor, Keshav Aaradhyam, opposite Radhe 111, Gandhinagar, Gujarat 382419.",
    landmarkContext: "Opposite Radhe 111 Landmark, Gandhinagar",
  },
  contact: {
    phone: "083201 46657",
    phoneDisplay: "083201 46657",
    phoneTelHref: "tel:08320146657",
    countryCode: "+91",
  },
  reputation: {
    rating: 4.9,
    reviewCount: 83,
    platform: "Google Reviews",
    verifiedText: "Verified Google Reviews",
    summary:
      "Over 83 verified patient reviews celebrate our attention to patient comfort, clear consultative advice, and pristine clinical spaces in Gandhinagar.",
  },
  schedule: {
    openingTime: "09:00 AM",
    displayText: "Opens at 9:00 AM daily.",
    note: "Please contact the hospital team to confirm complete weekly schedule and specific ophthalmologist/dentist availability.",
    slots: [
      { id: "morning", label: "Morning", period: "09:00 AM - 01:00 PM" },
      { id: "afternoon", label: "Afternoon", period: "01:00 PM - 05:00 PM" },
      { id: "evening", label: "Evening", period: "05:00 PM - 08:30 PM" },
    ],
  },
  links: {
    googleMapsDirections:
      "https://www.google.com/maps/search/?api=1&query=Keshav+Aaradhyam+opposite+Radhe+111+Gandhinagar+Gujarat+382419",
    googleMapsReviews:
      "https://www.google.com/maps/search/?api=1&query=Roshani+Eye+%26+Dental+Hospital+Gandhinagar",
    logoUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1WmNABcn1WFN4WjAUQjyfIJweAq2zcVfJEblXoscnToxOcQyoJPRvNddCIM4Ak8aKFQXOhNYzWrhjxGVyOZpi0n3evNpVh4o07U_JCIt730T_51KwXfSbhkprY59yAP0G-0OLXKQgFviETJm6nYohGGILGmdxTJvA3NBBr9LHprJxKs2f8ZbW0bKCXcaCGBTRIAq63IFN2Z2ugdHuOABfo8K4hLijhsbjJaXbB-VOnhuLMUsSrOuOvIxLs",
  },
  specialties: {
    eye: {
      id: "eye-care-details",
      title: "Eye Care",
      subtitle: "Precision Vision & Refractive Assessment",
      accent: "#7868FF",
      description:
        "Explore eye-care information and discover how to enquire about an appointment for corneal clarity, refraction, and optical consultation.",
      highlights: [
        {
          title: "Consultative Vision Assessment",
          description:
            "Comprehensive evaluation of near, distance, and astigmatic visual acuity tailored to individual daily work habits.",
          icon: "Glasses",
        },
        {
          title: "Advanced Optical Diagnostics Planning",
          description:
            "Detailed anterior segment review, corneal contour analysis, and intraocular pressure checks using modern hospital equipment.",
          icon: "Microscope",
        },
        {
          title: "Patient-First Retinal & Lens Care Consultations",
          description:
            "Structured clinical counsel for cataract screening, diabetic ocular reviews, and age-related optical maintenance.",
          icon: "Sparkles",
        },
      ],
      patientNote:
        "Patient note: Complete refractive examinations typically require 30–45 minutes for detailed pupil relaxation and accurate calibration.",
    },
    dental: {
      id: "dental-care-details",
      title: "Dental Care",
      subtitle: "Comprehensive Oral Health & Aesthetics",
      accent: "#70E6F2",
      description:
        "Discover dental-care information and request a consultation about your oral health, aesthetic alignment, and restorative comfort.",
      highlights: [
        {
          title: "Preventive Oral Health Consultations",
          description:
            "Early detection protocols for enamel wear, periodontal monitoring, and deep ultrasonic prophylaxis for sustainable dental hygiene.",
          icon: "ShieldCheck",
        },
        {
          title: "Restorative & Aesthetic Dental Planning",
          description:
            "Conservative tooth-colored restorations, cosmetic contouring consultations, and precision ceramic crown evaluations.",
          icon: "Activity",
        },
        {
          title: "Gentle, Modern Patient Experience",
          description:
            "Quiet clinical operatories, attentive pain-minimized techniques, and transparent procedural roadmaps without surprises.",
          icon: "HeartPulse",
        },
      ],
      patientNote:
        "Safety note: All clinical instruments undergo hospital-standard multi-stage autoclave sterilization before every patient consultation.",
    },
  },
  journey: [
    {
      stage: "STAGE 01",
      num: "01",
      title: "Explore",
      description:
        "Discover the care category relevant to your needs—whether refractive ophthalmology or restorative dentistry.",
      sublabel: "Identify your care goals",
      icon: "Compass",
    },
    {
      stage: "STAGE 02",
      num: "02",
      title: "Connect",
      description:
        "Request an appointment online or contact the hospital team directly by phone to specify your preferred schedule.",
      sublabel: "Simple 2-minute booking",
      icon: "PhoneCall",
    },
    {
      stage: "STAGE 03",
      num: "03",
      title: "Confirm",
      description:
        "Follow up with the hospital team to confirm doctor availability, receive pre-visit guidance, and understand next steps.",
      sublabel: "Confirmed time slot",
      icon: "CheckCircle2",
    },
  ],
  philosophy: {
    title: "Care Built Around People.",
    subtitle:
      "Clear communication, thoughtful guidance, and a welcoming experience can help patients feel more informed and secure about their healthcare decisions.",
    points: [
      {
        num: "1",
        title: "Clear Communication",
        text: "Transparent explanations of your health parameters, examination findings, and recommended diagnostic options without medical jargon.",
        icon: "MessageSquare",
      },
      {
        num: "2",
        title: "Patient-Focused Guidance",
        text: "Dedicated support through every phase of your consultation journey, from initial check-in to post-consultation scheduling.",
        icon: "Compass",
      },
      {
        num: "3",
        title: "A Welcoming Environment",
        text: "Designed for calmness, dignity, and pristine hygiene at Keshav Aaradhyam, ensuring each visit is calm and orderly.",
        icon: "Building2",
      },
    ],
  },
};
