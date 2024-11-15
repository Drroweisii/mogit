import React from 'react';

interface StatContentProps {
  label: string;
  value: string;
  rate: string;
}

export function StatContent({ label, value, rate }: StatContentProps) {
  return (
    <div className="min-w-0 flex-1">
      <p className="text-gray-400 text-[10px] sm:text-xs font-medium tracking-wide">
        {label}
      </p>
      <p className="text-sm sm:text-lg font-bold tracking-tight truncate text-white group-hover:text-white/90 transition-colors duration-300">
        {value}
      </p>
      <p className="text-[10px] sm:text-xs text-gray-300 font-medium">
        +{rate}/s
      </p>
    </div>
  );
}