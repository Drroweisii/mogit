import React from 'react';
import { UserPlus } from 'lucide-react';
import { WorkerTypeConfig } from '../../../types/workers';

interface HireControlsProps {
  onHire: () => void;
  disabled: boolean;
  workerType: WorkerTypeConfig;
}

export function HireControls({ onHire, disabled, workerType }: HireControlsProps) {
  return (
    <button
      onClick={onHire}
      disabled={disabled}
      className={`
        w-full py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg
        flex items-center justify-center gap-1.5 sm:gap-2
        transition-all duration-200
        ${disabled
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] text-white shadow-md hover:shadow-lg'
        }
        font-bold text-xs sm:text-sm
        touch-manipulation
      `}
    >
      <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      <span className="whitespace-nowrap">
        HIRE {workerType.name} MINER ({workerType.cost} EMSX)
      </span>
    </button>
  );
}