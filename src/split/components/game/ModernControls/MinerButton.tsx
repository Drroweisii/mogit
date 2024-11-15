import React from 'react';
import { WorkerType } from '../../../../types/workers';
import { Cpu, ArrowRight } from 'lucide-react';

interface MinerButtonProps {
  type: string;
  name: string;
  cost: number;
  color: string;
  isSelected: boolean;
  canAfford: boolean;
  canHire: boolean;
  onSelect: () => void;
  onHire: () => void;
}

export function MinerButton({
  type,
  name,
  cost,
  color,
  isSelected,
  canAfford,
  canHire,
  onSelect,
  onHire,
}: MinerButtonProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => canAfford && onSelect()}
      onKeyDown={(e) => e.key === 'Enter' && canAfford && onSelect()}
      className={`
        relative w-full p-3 rounded-2xl border transition-all duration-200
        ${isSelected 
          ? 'bg-blue-500/20 border-blue-500/40' 
          : canAfford
            ? 'bg-white/5 border-white/10 hover:bg-white/10'
            : 'bg-white/5 border-white/10 opacity-50 cursor-not-allowed'
        }
        ${canAfford ? 'cursor-pointer' : 'cursor-not-allowed'}
        focus:outline-none focus:ring-2 focus:ring-blue-500/50
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`bg-${color}-500/20 rounded-xl p-2`}>
            <Cpu className={`w-5 h-5 text-${color}-400`} />
          </div>
          <div className="text-left">
            <p className="font-bold text-white">{name} Miner</p>
            <p className="text-sm text-gray-400">{cost} EMSX</p>
          </div>
        </div>
        {isSelected && canHire && (
          <div
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              onHire();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.stopPropagation();
                onHire();
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
                     bg-blue-500 hover:bg-blue-600 text-white
                     transition-all duration-200 cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>Hire</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );
}