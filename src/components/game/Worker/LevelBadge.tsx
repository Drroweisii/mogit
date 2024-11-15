import React from 'react';
import { getLevelColor } from './utils';

interface LevelBadgeProps {
  level: number;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  const levelColors = getLevelColor(level);

  return (
    <div className={`
      absolute -bottom-1 left-1/2 transform -translate-x-1/2 
      px-1.5 sm:px-2 py-0.5 
      rounded-full text-[10px] sm:text-xs font-bold shadow-md
      whitespace-nowrap min-w-[2rem] sm:min-w-[2.5rem] text-center
      border glass-panel
      ${levelColors.text}
    `}
      style={{
        borderColor: levelColors.primary,
        backgroundColor: `${levelColors.secondary}40`,
      }}
    >
      Lvl {level}
    </div>
  );
}