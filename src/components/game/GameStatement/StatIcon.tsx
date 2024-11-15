import React from 'react';

interface StatIconProps {
  children: React.ReactNode;
}

export function StatIcon({ children }: StatIconProps) {
  return (
    <div className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-gray-800/80 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-5 sm:w-6 sm:h-6 text-gray-100 group-hover:text-white transition-colors duration-300">
          {children}
        </div>
      </div>
    </div>
  );
}