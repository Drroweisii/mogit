import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  name: string;
  value: string;
  rate: string;
  color: string;
}

export function StatCard({ icon, name, value, rate, color }: StatCardProps) {
  return (
    <div className={`bg-${color}-500/10 rounded-2xl p-3 border border-${color}-500/20`}>
      <div className="flex items-center gap-3">
        <div className={`bg-${color}-500/20 rounded-xl p-2`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-400">{name}</p>
          <p className="text-lg font-bold text-white">{value}</p>
          <p className="text-xs text-gray-400">+{rate}/s</p>
        </div>
      </div>
    </div>
  );
}