import React from 'react';
import { Worker as WorkerType } from '../../../types/game';
import { WorkerIcon } from './WorkerIcon';
import { LevelBadge } from './LevelBadge';
import { UpgradeBadge } from './UpgradeBadge';

interface WorkerProps {
  worker: WorkerType;
  onClick: () => void;
  balance: number;
  isSelected?: boolean;
  canMerge?: boolean;
}

export function Worker({ worker, onClick, balance, isSelected, canMerge }: WorkerProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative w-full h-full flex items-center justify-center
        transition-all duration-200 p-1 sm:p-2
        ${balance ? 'cursor-pointer' : 'cursor-not-allowed'}
        ${isSelected ? 'scale-95' : ''}
        touch-manipulation
        group
      `}
    >
      <div className={`
        relative aspect-square w-full max-w-[80%] rounded-lg sm:rounded-xl
        flex items-center justify-center border-2
        ${isSelected ? 'bg-gray-900/60' : 'bg-gray-900/40'}
        ${canMerge ? 'border-green-500' : 'border-green-500/50'}
        transition-colors duration-200 shadow-md
        overflow-hidden backdrop-blur-sm
      `}>
        <WorkerIcon level={worker.level} />
        <LevelBadge level={worker.level} />
        {!isSelected && !canMerge && <UpgradeBadge worker={worker} balance={balance} />}
      </div>
    </div>
  );
}