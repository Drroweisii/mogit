import React from 'react';
import { StatIcon } from './StatIcon';
import { StatContent } from './StatContent';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  rate: string;
}

export function StatCard({ icon, label, value, rate }: StatCardProps) {
  return (
    <div className="glass-panel rounded-lg sm:rounded-xl p-2 sm:p-3 group hover:bg-gray-800/40 transition-all duration-300">
      <div className="flex items-center gap-2 sm:gap-3">
        <StatIcon>{icon}</StatIcon>
        <StatContent label={label} value={value} rate={rate} />
      </div>
    </div>
  );
}