import React from 'react';
import { Calendar, MapPin, Users, CreditCard, MessageCircle } from 'lucide-react';
import {
  BUSINESS_NAME,
  CAMPUS_FIRST_DATE,
  CAMPUS_MIN_PAID_BOOKINGS,
  CAMPUS_SLOT_COUNT,
  CAMPUS_WHATSAPP_LINK,
} from '../lib/constants';

const details = [
  {
    icon: MapPin,
    title: 'Still on campus',
    text: `${BUSINESS_NAME} has moved, but she still comes to campus.`,
  },
  {
    icon: Calendar,
    title: 'Saturdays only',
    text: `Campus appointments are on Saturdays only. The first date is ${CAMPUS_FIRST_DATE}.`,
  },
  {
    icon: Users,
    title: `${CAMPUS_SLOT_COUNT} slots`,
    text: `Only ${CAMPUS_SLOT_COUNT} slots are available each Saturday.`,
  },
  {
    icon: CreditCard,
    title: 'Payment locks the spot',
    text: `The trip happens only if at least ${CAMPUS_MIN_PAID_BOOKINGS} people book and pay. Payment locks the spot. No payment, no booking.`,
  },
];

const CampusSaturday = () => {
  return (
    <section
      id="campus"
      className="relative scroll-mt-24 py-16 md:py-20 px-6 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"
      aria-labelledby="campus-heading"
    >
      <div
        className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f9a8d4%22 fill-opacity=%220.18%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        aria-hidden="true"
      />
      <div className="ambient-orb w-64 h-64 bg-rose-300 -top-16 -left-16" aria-hidden="true" />
      <div className="ambient-orb w-72 h-72 bg-purple-300 -bottom-20 -right-16" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="glass-panel rounded-3xl px-6 py-10 md:px-12 md:py-14">
          <div className="text-center mb-10">
            <p className="section-eyebrow text-rose-600 mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Campus Saturdays
            </p>
            <h2 id="campus-heading" className="heading-display text-3xl md:text-4xl mb-4">
              She still comes to campus
            </h2>
            <div className="section-divider mb-6" aria-hidden="true" />
            <p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Dia has moved, but campus appointments continue on Saturdays. The first visit is{' '}
              {CAMPUS_FIRST_DATE}. Message on WhatsApp to request a slot.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {details.map(({ icon: Icon, title, text }) => (
              <article key={title} className="glass-card rounded-2xl p-6 text-left">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center mb-4 ring-1 ring-white/80">
                  <Icon className="w-6 h-6 text-rose-600" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">{text}</p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href={CAMPUS_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Request {CAMPUS_FIRST_DATE} on WhatsApp
            </a>
            <p className="font-sans text-sm text-gray-500 mt-4 max-w-xl mx-auto">
              {CAMPUS_SLOT_COUNT} slots each Saturday. The trip runs only when at least{' '}
              {CAMPUS_MIN_PAID_BOOKINGS} people book and pay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSaturday;
