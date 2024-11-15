import React from 'react';
import { GridCell as GridCellType, Worker as WorkerType } from '../../../types/game';
import { Worker } from '../Worker';
import { Lock } from 'lucide-react';

interface GridCellProps {
  cell: GridCellType;
  worker?: WorkerType;
  onClick: () => void;
  balance: number;
  isSelected?: boolean;
  canMerge?: boolean;
  isValidMove?: boolean;
  isLocked: boolean;
  onUnlock: () => void;
  unlockCost: number;
}

export function GridCell({ 
  cell, 
  worker, 
  onClick, 
  balance, 
  isSelected, 
  canMerge, 
  isValidMove,
  isLocked,
  onUnlock,
  unlockCost,
}: GridCellProps) {
  if (isLocked) {
    return <LockedCell cost={unlockCost} canUnlock={balance >= unlockCost} onClick={onUnlock} />;
  }

  return (
    <div
      onClick={onClick}
      className={`
        relative aspect-square rounded-xl
        transition-all duration-200
        ${cell.isOccupied 
          ? 'bg-gray-800/50' 
          : isValidMove
            ? 'bg-green-500/20 hover:bg-green-500/30 border-green-500/50'
            : 'bg-gray-800/30 hover:bg-gray-700/30'}
        cursor-pointer active:scale-95
        ${isSelected ? 'ring-2 ring-green-500' : ''}
        ${canMerge ? 'ring-2 ring-green-400' : ''}
        border border-green-500/10
        overflow-hidden
      `}
    >
      {worker ? (
        <Worker 
          worker={worker} 
          onClick={onClick}
          balance={balance}
          isSelected={isSelected}
          canMerge={canMerge}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          {isValidMove ? (
            <div className="text-green-400 animate-pulse">
              <div className="text-2xl">⟶</div>
            </div>
          ) : (
            <span className="text-gray-600 text-2xl group-hover:text-gray-500 transition-colors">+</span>
          )}
        </div>
      )}
    </div>
  );
}

interface LockedCellProps {
  cost: number;
  canUnlock: boolean;
  onClick: () => void;
}

function LockedCell({ cost, canUnlock, onClick }: LockedCellProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative aspect-square rounded-xl
        transition-all duration-200
        ${canUnlock 
          ? 'bg-gray-800/50 hover:bg-gray-700/50 cursor-pointer active:scale-95' 
          : 'bg-gray-800/20 cursor-not-allowed'}
        flex flex-col items-center justify-center gap-2
        border border-green-500/10
      `}
    >
      {canUnlock && (
        <div className="absolute inset-0 bg-green-500/10 rounded-xl animate-pulse" />
      )}
      <Lock className={`
        w-6 h-6 sm:w-7 sm:h-7
        ${canUnlock ? 'text-green-400' : 'text-gray-600'}
        transition-transform duration-200
      `} />
      <div className={`
        text-sm sm:text-base font-medium 
        ${canUnlock ? 'text-green-400' : 'text-gray-600'}
      `}>
        {cost} EMSX
      </div>
    </div>
  );
}