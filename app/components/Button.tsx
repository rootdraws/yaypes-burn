'use client'
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className = 'pixel-button' }: ButtonProps) {
  return (
    <button 
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
