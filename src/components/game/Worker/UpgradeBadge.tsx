import React from 'react';
import { Worker } from '../../../types/game';
import { calculateUpgradeCost } from '../../../utils/calculations';

interface UpgradeBadgeProps {
  worker: Worker;
  balance: number;
}

export function UpgradeBadge({ worker, balance }: UpgradeBadgeProps) {
  const upgradeCost = calculateUpgradeCost(worker.level);
  const canUpgrade = balance >= upgradeCost;

  if (!canUpgrade) return null;

  return (
    <div className="absolute -top-1 -right-1 
                  bg-green-500 text-white px-1 sm:px-1.5 py-0.5 
                  rounded-full text-[8px] sm:text-[10px] font-bold shadow-md
                  whitespace-nowrap border border-green-600">
      +{upgradeCost}
    </div>
  );
}