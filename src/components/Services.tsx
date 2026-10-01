import React from 'react';
import { Eye, Layers, Sparkles, Wind, RefreshCw, Heart, Scissors } from 'lucide-react';
import {
  ClassicManicureIcon,
  GelManicureIcon,
  AcrylicExtensionsIcon,
  NailArtIcon,
  PedicureIcon,
  NailRepairIcon,
} from './ServiceIcons';

const nailServices = [
  {
    name: 'Classic Manicure',
    description:
      'Traditional shaping, cuticle care, and polish for a clean, polished everyday look.',
    icon: ClassicManicureIcon,
    gradient: 'from-rose-100 to-pink-100',
    iconColor: 'text-rose-600',
  },
  {
    name: 'Gel Manicure',
    description:
      'Long-lasting gel polish with a high-shine, chip-resistant finish that stays flawless for weeks.',
    icon: GelManicureIcon,
    gradient: 'from-pink-100 to-purple-100',
    iconColor: 'text-pink-600',
  },
  {
    name: 'Acrylic Extensions',
    description:
      'Custom acrylic extensions shaped to your preferred length and style with durable, salon-quality results.',
    icon: AcrylicExtensionsIcon,
    gradient: 'from-purple-100 to-rose-100',
    iconColor: 'text-purple-600',
  },
  {
    name: 'Nail Art & Design',
    description:
      'Creative designs, accents, and custom artistry, from subtle elegance to statement looks.',
    icon: NailArtIcon,
    gradient: 'from-rose-100 to-pink-100',
    iconColor: 'text-rose-700',
  },
  {
    name: 'Luxury Pedicure',
    description:
      'Relaxing foot care with exfoliation, massage, and flawless toes for a complete pampering experience.',
    icon: PedicureIcon,
    gradient: 'from-pink-100 to-rose-100',
    iconColor: 'text-pink-700',
  },
  {
    name: 'Nail Repair & Restoration',
    description:
      'Expert repair for breaks, splits, or damaged nails to restore strength and beauty.',
    icon: NailRepairIcon,
    gradient: 'from-rose-100 to-purple-100',
    iconColor: 'text-rose-600',
  },
];

const lashServices = [
  {
    name: 'Classic Lash Set',
    description: 'Natural, one-extension-per-lash look for everyday elegance and soft definition.',
    icon: Eye,
    gradient: 'from-rose-100 to-pink-100',
    iconColor: 'text-rose-600',
  },
  {
    name: 'Hybrid Lash Set',
    description: 'A balanced blend of classic and volume fans for fuller texture without heaviness.',
    icon: Layers,
    gradient: 'from-pink-100 to-amber-100',
    iconColor: 'text-pink-600',
  },
  {
    name: 'Volume Lash Set',
    description: 'Lightweight volume fans for a fluffy, glamorous lash line with custom density.',
    icon: Sparkles,
    gradient: 'from-amber-100 to-rose-100',
    iconColor: 'text-amber-700',
  },
  {
    name: 'Mega Volume Set',
    description: 'Ultra-full drama for special occasions, crafted with precision and lash-safe technique.',
    icon: Wind,
    gradient: 'from-rose-100 to-stone-100',
    iconColor: 'text-rose-700',
  },
  {
    name: 'Lash Fill / Maintenance',
    description: 'Keep your set fresh with expert infills that protect natural lashes and retention.',
    icon: RefreshCw,
    gradient: 'from-stone-100 to-rose-100',
    iconColor: 'text-stone-600',
  },
  {
    name: 'Lash Removal & Aftercare',
    description: 'Gentle, professional removal plus aftercare guidance for healthy natural lashes.',
    icon: Heart,
    gradient: 'from-pink-100 to-rose-100',
    iconColor: 'text-pink-700',
  },
];

type ServiceCard = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  iconColor: string;
};

const ServiceGrid = ({
  items,
  variant = 'nail',
}: {
  items: ServiceCard[];
  variant?: 'nail' | 'lash';
}) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {items.map(({ name, description, icon: Icon, gradient, iconColor }) => (
      <article
        key={name}
        className={`rounded-2xl p-6 group ${variant === 'lash' ? 'glass-card-lash' : 'glass-card'}`}
      >
        <div
          className={`w-14 h-14 p-3 bg-gradient-to-r ${gradient} rounded-2xl group-hover:scale-110 transition-transform duration-200 flex items-center justify-center mb-4 ring-1 ring-white/80`}
        >
          <Icon className={`w-7 h-7 ${iconColor}`} aria-hidden="true" />
        </div>

        <h3 className="font-display text-xl font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-200">
          {name}
        </h3>
        <p className="font-sans text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
      </article>
    ))}
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-eyebrow text-rose-600 mb-3 flex items-center justify-center gap-2">
            <Scissors className="w-4 h-4" aria-hidden="true" />
            Nail Services
          </p>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">Our Nail Services</h2>
          <div className="section-divider mb-6" aria-hidden="true" />
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From classic manicures to custom nail art, every service is tailored with meticulous care
            and salon-quality products.
          </p>
        </div>

        <ServiceGrid items={nailServices} variant="nail" />

        <div
          className="my-20 md:my-24 flex items-center gap-4"
          role="separator"
          aria-label="Lash services section"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent" />
          <span className="section-eyebrow text-amber-700/90 shrink-0">Also Available</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent" />
        </div>

        <div className="text-center mb-14 rounded-3xl glass-panel py-10 px-6 border-amber-100/50">
          <p className="section-eyebrow text-amber-700 mb-3 flex items-center justify-center gap-2">
            <Eye className="w-4 h-4" aria-hidden="true" />
            Lash Installation
          </p>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">Lash Installation Services</h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional lash sets alongside our nail services, from soft classics to bold volume,
            tailored to your eye shape and lifestyle.
          </p>
        </div>

        <ServiceGrid items={lashServices} variant="lash" />
      </div>
    </section>
  );
};

export default Services;
