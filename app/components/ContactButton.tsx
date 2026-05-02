'use client';

import React from 'react';

interface ContactButtonProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ContactButton({ className = "btn btn-primary", children, style }: ContactButtonProps) {
  return (
    <button
      className={className}
      style={style}
      onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}
    >
      {children}
    </button>
  );
}
