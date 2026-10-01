import React from 'react';
import { Sparkles, Heart, Star, Calendar, GraduationCap, Palette, MapPin, ArrowDown } from 'lucide-react';
import { CAMPUS_FIRST_DATE } from '../lib/constants';

const MARQUEE_ITEMS = [
  'Gel & Acrylic Nails',
  'Custom Nail Art',
  'Classic & Volume Lashes',
  'Nail & Lash Training',
  'Luxury Pedicures',
  'Small-Class Instruction',
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 pt-32 md:pt-28 pb-16 px-6 overflow-hidden bg-mesh-hero"
    >
      <div
        className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f9a8d4%22 fill-opacity=%220.15%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        aria-hidden="true"
      />

      <div className="ambient-orb w-72 h-72 bg-rose-300 -top-20 -left-20 animate-float" aria-hidden="true" />
      <div
        className="ambient-orb w-96 h-96 bg-purple-300 top-1/3 -right-32 animate-float animate-delay-200"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-64 h-64 bg-amber-200 bottom-10 left-1/3 animate-float animate-delay-300"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <button
          type="button"
          onClick={() => scrollTo('campus')}
          className="group inline-flex items-center gap-2 mb-6 max-w-full rounded-full border border-rose-200/90 bg-white/80 px-4 py-2 text-sm font-medium text-rose-800 shadow-sm backdrop-blur-sm transition hover:bg-rose-50 hover:border-rose-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 opacity-0 animate-fade-in-up"
        >
          <MapPin className="w-4 h-4 shrink-0 text-rose-500" aria-hidden="true" />
          <span className="text-left">
            Campus Saturdays — she still comes to campus from {CAMPUS_FIRST_DATE}
          </span>
          <ArrowDown
            className="w-4 h-4 shrink-0 text-rose-500 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">Jump to Campus Saturdays</span>
        </button>

        <div className="glass-panel rounded-3xl px-6 py-10 md:px-12 md:py-14 max-w-4xl mx-auto mb-10">
          <div className="flex justify-center mb-6 gap-3" aria-hidden="true">
            <Sparkles className="text-rose-500 w-8 h-8 animate-float" />
            <Heart className="text-pink-500 w-8 h-8 animate-float animate-delay-100" />
            <Star className="text-purple-500 w-8 h-8 animate-float animate-delay-200" />
          </div>

          <p className="section-eyebrow text-rose-600 mb-4 opacity-0 animate-fade-in-up">
            Dia&apos;s Nail Studio · Accra
          </p>

          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            Beautiful Nails,
            <span className="text-gradient-brand block sm:inline">
              {' '}
              Plus Lashes & Training
            </span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animate-delay-200">
            Your go-to nail studio in Accra for manicures, gel, acrylics, and nail art. We also offer
            professional lash installation and hands-on nail & lash training for students.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <button type="button" onClick={() => scrollTo('booking')} className="btn-primary inline-flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book Appointment
            </button>

            <button
              type="button"
              onClick={() => scrollTo('class-booking')}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" aria-hidden="true" />
              Book Training Class
            </button>

            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <Palette className="w-5 h-5" aria-hidden="true" />
              View Services
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden mask-fade py-2" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-2 text-sm font-medium text-rose-700/80 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
