import React from 'react';
import { GraduationCap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Certified Instructor',
    description:
      'Learn nail and lash techniques from a working artist: gel, acrylics, nail art, classic sets, volume, and more.',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description:
      'Hands-on practice in both nail and lash tracks with personalized feedback so every student leaves client-ready.',
  },
  {
    icon: BookOpen,
    title: 'Structured Curriculum',
    description:
      'Step-by-step modules for nails (prep, shaping, gel, acrylic) and lashes (mapping, isolation, styling, aftercare).',
  },
  {
    icon: Award,
    title: 'Career-Ready Skills',
    description:
      'Build technique, speed, and client communication. These are the essentials for launching or growing your beauty business.',
  },
];

const Teaching = () => {
  const scrollToClassBooking = () => {
    document.getElementById('class-booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="teaching"
      className="py-20 md:py-24 px-6 relative overflow-hidden bg-gradient-to-br from-rose-50/80 via-pink-50/50 to-purple-50/40"
    >
      <div
        className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23c084fc%22 fill-opacity=%220.08%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/svg%3E')]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-eyebrow text-purple-700 mb-3 flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4" aria-hidden="true" />
            We Train in Nails & Lashes
          </p>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">
            Professional Nail & Lash Training
          </h2>
          <div className="section-divider mb-6" aria-hidden="true" />
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Alongside our salon services, Dia&apos;s Nail Studio offers certified, hands-on instruction in
            both nail and lash disciplines for beginners and working technicians. Small classes, structured
            curriculum. Reserve your seat below; we confirm student bookings via WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article key={title} className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center mb-4 ring-1 ring-white/80">
                <Icon className="w-6 h-6 text-rose-600" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p className="font-sans text-gray-600 mb-6 leading-relaxed">
            Ready to learn? Reserve a spot in our next nail or lash training class. Submit your details and
            we will confirm availability via WhatsApp.
          </p>
          <button
            type="button"
            onClick={scrollToClassBooking}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            Book a Training Class
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
