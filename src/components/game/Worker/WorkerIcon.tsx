import React from 'react';
import { Cpu } from 'lucide-react';
import { ANIMATIONS } from '../../../utils/constants';
import { getLevelColor } from './utils';

interface WorkerIconProps {
  level: number;
}

export function WorkerIcon({ level }: WorkerIconProps) {
  const levelColors = getLevelColor(level);

  return (
    <>
      {level >= 30 && <ParticleEffects />}
      <div className={`
        w-12 h-12 sm:w-16 sm:h-16
        flex items-center justify-center
        transition-transform duration-300
        animate-pulse
      `}
        style={{
          animationDuration: `${ANIMATIONS.MINING_PULSE}ms`,
        }}
      >
        <Cpu 
          style={{ 
            color: levelColors.primary,
            filter: `drop-shadow(0 0 8px ${levelColors.secondary})`
          }}
          className="w-full h-full"
        />
      </div>
    </>
  );
}