import React from 'react';

// Custom SVG Icons for Nail Services
export const ClassicManicureIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6H8V4Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M7 6H17C17.5523 6 18 6.44772 18 7V8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8V7C6 6.44772 6.44772 6 7 6Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <ellipse cx="12" cy="16" rx="6" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="10" cy="14" r="1" fill="currentColor"/>
    <circle cx="14" cy="14" r="1" fill="currentColor"/>
  </svg>
);

export const GelManicureIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6H8V4Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M7 6H17C17.5523 6 18 6.44772 18 7V8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8V7C6 6.44772 6.44772 6 7 6Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <ellipse cx="12" cy="16" rx="6" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Sparkle effects for gel shine */}
    <path d="M9 13L10 14L9 15L8 14Z" fill="currentColor"/>
    <path d="M15 13L16 14L15 15L14 14Z" fill="currentColor"/>
    <path d="M12 11L13 12L12 13L11 12Z" fill="currentColor"/>
  </svg>
);

export const AcrylicExtensionsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6H8V4Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M7 6H17C17.5523 6 18 6.44772 18 7V8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8V7C6 6.44772 6.44772 6 7 6Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    {/* Extended nail shape */}
    <path 
      d="M9 9V16C9 17.1046 9.89543 18 11 18H13C14.1046 18 15 17.1046 15 16V9" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M11 18L12 22L13 18" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="1" fill="currentColor"/>
  </svg>
);

export const NailArtIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6H8V4Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M7 6H17C17.5523 6 18 6.44772 18 7V8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8V7C6 6.44772 6.44772 6 7 6Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <ellipse cx="12" cy="16" rx="6" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Art brush */}
    <path 
      d="M18 2L20 4L14 10L12 8L18 2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    {/* Paint dots */}
    <circle cx="10" cy="14" r="0.5" fill="currentColor"/>
    <circle cx="12" cy="15" r="0.5" fill="currentColor"/>
    <circle cx="14" cy="14" r="0.5" fill="currentColor"/>
  </svg>
);

export const PedicureIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Foot outline */}
    <path 
      d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V12Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    {/* Toes */}
    <circle cx="10" cy="8" r="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="7" r="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="14" cy="8" r="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="15.5" cy="9" r="0.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="8.5" cy="9" r="0.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    {/* Spa elements */}
    <path d="M4 4C4 4 6 2 8 4C10 2 12 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const NailRepairIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6H8V4Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M7 6H17C17.5523 6 18 6.44772 18 7V8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8V7C6 6.44772 6.44772 6 7 6Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    <ellipse cx="12" cy="16" rx="6" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Crack line */}
    <path d="M10 14L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Repair tools */}
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 8L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);