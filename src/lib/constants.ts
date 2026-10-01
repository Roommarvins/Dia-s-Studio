export const BUSINESS_NAME = "Dia's Nail Studio";
export const BUSINESS_TAGLINE = "Professional Nail Care";
export const BUSINESS_LOCATION = "Accra, Ghana";
export const WHATSAPP_NUMBER = "233504180130";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const TIKTOK_URL =
  "https://www.tiktok.com/@nanayaa_0000?_t=ZM-8y1mxTwIUI2&_r=1";
export const INSTAGRAM_URL = "https://www.instagram.com/nanayaa_000/";
export const LOGO_SRC = "/Naa.jpg";
export const LOGO_ALT = `${BUSINESS_NAME} logo`;

export const NAIL_SERVICES = [
  "Classic Manicure",
  "Gel Manicure",
  "Acrylic Extensions",
  "Nail Art & Design",
  "Luxury Pedicure",
  "Nail Repair & Restoration",
] as const;

export const LASH_SERVICES = [
  "Classic Lash Set",
  "Hybrid Lash Set",
  "Volume Lash Set",
  "Mega Volume Set",
  "Lash Fill / Maintenance",
  "Lash Removal & Aftercare",
] as const;

export const APPOINTMENT_SERVICES = [...NAIL_SERVICES, ...LASH_SERVICES] as const;

export const TRAINING_DISCIPLINES = ["Nail Training", "Lash Training"] as const;

export const NAIL_CLASS_OPTIONS = [
  "Beginner Manicure & Nail Prep",
  "Gel Polish Application",
  "Acrylic Extensions Basics",
  "Nail Art & Design Workshop",
] as const;

export const LASH_CLASS_OPTIONS = [
  "Beginner Lash Fundamentals",
  "Classic Set Mastery",
  "Volume & Hybrid Techniques",
  "Business & Client Care Workshop",
] as const;

export const TRAINING_CLASS_OPTIONS = [
  ...NAIL_CLASS_OPTIONS,
  ...LASH_CLASS_OPTIONS,
] as const;

export const CLASS_OPTIONS_BY_DISCIPLINE: Record<
  (typeof TRAINING_DISCIPLINES)[number],
  readonly string[]
> = {
  "Nail Training": NAIL_CLASS_OPTIONS,
  "Lash Training": LASH_CLASS_OPTIONS,
};

export const EXPERIENCE_LEVELS = [
  "Complete beginner",
  "Some practice / self-taught",
  "Working nail or lash tech",
] as const;

export const TIME_SLOTS = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
] as const;

export const COPYRIGHT_YEAR = new Date().getFullYear();

export const CAMPUS_FIRST_DATE = "17 October";
export const CAMPUS_SLOT_COUNT = 6;
export const CAMPUS_MIN_PAID_BOOKINGS = 5;

export const CAMPUS_WHATSAPP_MESSAGE = `Hi ${BUSINESS_NAME}, I would like to request a campus Saturday booking for ${CAMPUS_FIRST_DATE}. I understand campus appointments are Saturdays only, there are ${CAMPUS_SLOT_COUNT} slots, the trip happens only if at least ${CAMPUS_MIN_PAID_BOOKINGS} people book and pay, and payment locks the spot.`;

export const CAMPUS_WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CAMPUS_WHATSAPP_MESSAGE)}`;
