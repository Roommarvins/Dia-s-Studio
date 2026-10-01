import React, { useState, useEffect } from 'react';
import { Clock, Heart, Sparkles, Star } from 'lucide-react';
import { LOGO_ALT, LOGO_SRC } from '../lib/constants';

interface CountdownTimerProps {
  onCountdownEnd?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ onCountdownEnd }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Target date: July 21st, 2025 at 00:00:00 UTC
  const targetDate = new Date('2025-07-21T00:00:00Z').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        if (onCountdownEnd) {
          onCountdownEnd();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onCountdownEnd]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 px-6 animate-fade-in">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="text-rose-300 w-8 h-8 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-200">
          <Heart className="text-pink-300 w-6 h-6 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-100">
          <Star className="text-purple-300 w-7 h-7 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-300">
          <Sparkles className="text-rose-300 w-5 h-5 opacity-60" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo and Brand */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="flex items-center space-x-4">
            <span className="inline-flex h-24 w-24 shrink-0 overflow-hidden rounded-3xl bg-black ring-1 ring-black/10">
              <img
                src={LOGO_SRC}
                alt={LOGO_ALT}
                className="h-full w-full object-contain"
              />
            </span>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Dia's Nail Studio
              </h1>
              <p className="text-rose-500 text-lg font-medium">Professional Nail Care</p>
            </div>
          </div>
        </div>
        
        {/* Coming Soon Title */}
        <div className="flex justify-center mb-6 animate-fade-in-up delay-100">
          <div className="flex space-x-3">
            <Clock className="text-indigo-500 w-10 h-10 animate-spin" />
            <Sparkles className="text-rose-500 w-10 h-10 animate-pulse" />
            <Heart className="text-pink-500 w-10 h-10 animate-bounce" />
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up delay-200">
          Coming Soon
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-up delay-300 max-w-2xl mx-auto leading-relaxed">
          Something beautiful is being crafted just for you. Get ready for the ultimate nail care experience!
        </p>
        
        {/* Countdown Cards */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-200 animate-fade-in-up delay-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up delay-100">
              <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2 animate-pulse">
                {timeLeft.days}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Days</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up delay-200">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2 animate-pulse">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Hours</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up delay-300">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 animate-pulse">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Minutes</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up delay-300">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2 animate-pulse">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Seconds</div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 mb-6 animate-fade-in-up delay-100">
            <div className="w-3 h-3 bg-rose-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200"></div>
          </div>
          
          <p className="text-gray-500 italic text-lg animate-fade-in-up delay-200">
            "Beauty is in the details, and we're perfecting every one..." ✨
          </p>
        </div>

        {/* Social Media Preview */}
        <div className="mt-12 animate-fade-in-up delay-100">
          <p className="text-gray-600 mb-4">Follow us for updates:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/233504180130"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@nanayaa_0000?_t=ZM-8y1mxTwIUI2&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 p-3 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;