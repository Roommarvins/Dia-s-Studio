import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Menu,
  X,
  Home,
  Sparkles,
  GraduationCap,
  Calendar,
  BookOpen,
} from 'lucide-react';
import {
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  LOGO_ALT,
  LOGO_SRC,
  WHATSAPP_LINK,
  TIKTOK_URL,
} from '../lib/constants';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'services', label: 'Services', icon: Sparkles },
  { id: 'teaching', label: 'Training', icon: GraduationCap },
  { id: 'booking', label: 'Book Appointment', icon: Calendar },
  { id: 'class-booking', label: 'Book Class', icon: BookOpen },
] as const;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/60 shadow-lg shadow-rose-100/20'
          : 'bg-white/40 backdrop-blur-md border-b border-white/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1.5">
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
            aria-label={`${BUSINESS_NAME} home`}
          >
            <span className="inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-black ring-1 ring-black/15">
              <img
                src={LOGO_SRC}
                alt={LOGO_ALT}
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <span className="font-display text-base md:text-lg font-bold text-gradient-brand block leading-none">
                {BUSINESS_NAME}
              </span>
              <span className="font-sans text-rose-600 text-[10px] md:text-xs font-medium block leading-none mt-0.5">
                {BUSINESS_TAGLINE}
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-gray-700 hover:text-rose-600 hover:bg-rose-50/60 font-medium text-xs transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              >
                <Icon className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle size={14} aria-hidden="true" />
              <span className="hidden sm:inline text-xs font-medium">WhatsApp</span>
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white px-2.5 py-1 rounded-full transition-all duration-200 hover:scale-105 shadow-sm border border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              aria-label="Follow on TikTok"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="text-xs font-medium">TikTok</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-white/50 backdrop-blur-sm border border-rose-100 hover:bg-rose-50/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="lg:hidden mt-4 py-4 px-4 rounded-2xl glass-panel animate-fade-in"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="flex items-center gap-3 text-left text-gray-700 hover:text-rose-600 hover:bg-rose-50/50 font-medium py-3 px-3 rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                >
                  <Icon className="w-5 h-5 text-rose-400" aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
