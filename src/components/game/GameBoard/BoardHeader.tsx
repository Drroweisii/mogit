import React from 'react';
import { Sparkles, Trash2 } from 'lucide-react';
import { Worker } from '../../../types/game';

interface BoardHeaderProps {
  workerCount: number;
  unlockedSlots: number;
  selectedWorker: Worker | undefined;
  onRemoveWorker: (id: string) => void;
}

export function BoardHeader({ 
  workerCount, 
  unlockedSlots, 
  selectedWorker, 
  onRemoveWorker 
}: BoardHeaderProps) {
  return (
    <div className="relative bg-gray-800/30 rounded-xl p-3 sm:p-4 mb-3 border border-green-500/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gray-900/50 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group hover:bg-gray-800/50 transition-all duration-300 border border-green-500/10">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-green-300" />
            <span className="ml-1 text-green-400 font-bold text-base sm:text-lg">{workerCount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-100 font-bold text-sm sm:text-base tracking-wide">Active Miners</span>
            <span className="text-green-400 text-xs">{unlockedSlots} slots available</span>
          </div>
        </div>
        
        {selectedWorker && (
          <button
            onClick={() => onRemoveWorker(selectedWorker.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                     bg-red-500/80 hover:bg-red-500 text-white 
                     text-sm font-medium transition-all duration-200
                     active:scale-95 border border-red-400/20"
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Remove Selected</span>
            <span className="sm:hidden">Remove</span>
          </button>
        )}
      </div>
    </div>
  );
}