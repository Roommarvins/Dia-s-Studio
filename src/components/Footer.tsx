import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Instagram } from 'lucide-react';
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  BUSINESS_LOCATION,
  COPYRIGHT_YEAR,
  LOGO_ALT,
  LOGO_SRC,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  TIKTOK_URL,
} from '../lib/constants';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative text-white py-16 md:py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f472b6%22 fill-opacity=%220.12%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        aria-hidden="true"
      />
      <div className="ambient-orb w-64 h-64 bg-rose-600/30 -top-20 right-0" aria-hidden="true" />
      <div className="ambient-orb w-48 h-48 bg-purple-600/25 bottom-0 left-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="inline-flex h-20 w-20 shrink-0 overflow-hidden rounded-3xl bg-black ring-1 ring-white/15">
                <img
                  src={LOGO_SRC}
                  alt={LOGO_ALT}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
                  {BUSINESS_NAME}
                </h3>
                <p className="font-sans text-rose-300 text-sm">{BUSINESS_TAGLINE}</p>
              </div>
            </div>
            <p className="font-sans text-gray-300 leading-relaxed mb-6 max-w-md">
              Accra&apos;s home for expert nail care: manicures, gel, acrylics, and nail art. We also
              offer professional lash installation and nail & lash training classes. Book your appointment
              or reserve your seat in the next class.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500/90 hover:bg-green-500 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 hover:from-purple-500 hover:via-pink-400 hover:to-rose-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-lg border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h4 className="font-display text-lg font-semibold mb-5 text-rose-300 flex items-center gap-2">
              <Phone className="w-4 h-4" aria-hidden="true" />
              Contact Info
            </h4>
            <div className="space-y-4 font-sans">
              <div className="flex items-start gap-3">
                <Phone className="text-rose-400 mt-0.5 flex-shrink-0" size={18} aria-hidden="true" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="text-white hover:text-rose-300 transition-colors"
                  >
                    +233 50 418 0130
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-rose-400 mt-0.5 flex-shrink-0" size={18} aria-hidden="true" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">{BUSINESS_LOCATION}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h4 className="font-display text-lg font-semibold mb-5 text-rose-300 flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden="true" />
              Working Hours
            </h4>
            <div className="space-y-3 font-sans">
              <div className="flex items-start gap-3">
                <Clock className="text-rose-400 mt-0.5" size={18} aria-hidden="true" />
                <div>
                  <p className="text-gray-400 text-sm">Mon - Sat</p>
                  <p className="text-white">8:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="pl-9">
                <p className="text-gray-400 text-sm">Sunday</p>
                <p className="text-white">1:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-sans text-gray-400 text-sm">
            © {COPYRIGHT_YEAR} {BUSINESS_NAME}. All rights reserved. | Nail care, lashes & training
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
