import React from 'react';
import { WorkerTypeConfig } from '../../../types/workers';
import { Pickaxe, DollarSign, Bitcoin } from 'lucide-react';

const IconMap = {
  Pickaxe,
  DollarSign,
  Bitcoin
};

interface WorkerTypeButtonProps {
  type: string;
  config: WorkerTypeConfig;
  isSelected: boolean;
  canAfford: boolean;
  onSelect: () => void;
}

export function WorkerTypeButton({ 
  type, 
  config, 
  isSelected, 
  canAfford, 
  onSelect 
}: WorkerTypeButtonProps) {
  const Icon = IconMap[config.icon as keyof typeof IconMap];
  const colorClass = `${config.color}-500`;

  return (
    <button
      onClick={() => canAfford && onSelect()}
      disabled={!canAfford}
      className={`
        relative flex-shrink-0 px-1.5 sm:px-2 py-1 sm:py-1.5 rounded-lg 
        flex items-center gap-1 sm:gap-1.5
        transition-all duration-200 min-w-[70px] sm:min-w-[80px]
        ${isSelected ? 'bg-indigo-50 ring-2 ring-indigo-500' : 'bg-gray-50'}
        ${canAfford ? 'hover:bg-gray-100 cursor-pointer active:scale-95' : 'opacity-50 cursor-not-allowed'}
        touch-manipulation
      `}
      title={config.description}
    >
      <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-${colorClass}`} />
      <div className="flex flex-col items-start">
        <span className="text-[10px] sm:text-xs font-medium text-gray-700">{config.name}</span>
        <span className="text-[8px] sm:text-[10px] text-gray-500">{config.cost} EMSX</span>
      </div>
      
      {isSelected && (
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full" />
      )}
    </button>
  );
}