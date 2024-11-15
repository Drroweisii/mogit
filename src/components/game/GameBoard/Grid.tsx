import React from 'react';
import { GRID_SIZE } from '../../../utils/constants';
import { GridCell as GridCellType, Worker as WorkerType } from '../../../types/game';
import { GridCell } from './GridCell';

interface GridProps {
  gridState: GridCellType[];
  workers: WorkerType[];
  onCellClick: (position: number) => void;
  onRemoveWorker: (id: string) => void;
  onUnlockSlot: (position: number) => void;
  balance: number;
  selectedWorkerId: string | null;
  canMergeWorkers: (worker1: WorkerType, worker2: WorkerType) => boolean;
  unlockedSlots: number;
}

export function Grid({ 
  gridState, 
  workers, 
  onCellClick,
  onRemoveWorker,
  onUnlockSlot,
  balance,
  selectedWorkerId,
  canMergeWorkers,
  unlockedSlots,
}: GridProps) {
  const selectedWorker = workers.find(w => w.id === selectedWorkerId);

  return (
    <div className="relative flex-1 grid gap-2 sm:gap-3 h-full"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE.COLS}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${GRID_SIZE.ROWS}, minmax(0, 1fr))`,
      }}
    >
      {gridState.map((cell, index) => {
        const worker = workers.find(w => w.id === cell.workerId);
        const selectedWorker = workers.find(w => w.id === selectedWorkerId);
        const canMerge = worker && selectedWorker && worker.id !== selectedWorker.id && 
                        canMergeWorkers(worker, selectedWorker);
        const isValidMove = selectedWorker && !worker;
        const isLocked = index >= unlockedSlots;

        return (
          <GridCell
            key={cell.position}
            cell={cell}
            worker={worker}
            onClick={() => onCellClick(cell.position)}
            balance={balance}
            isSelected={worker?.id === selectedWorkerId}
            canMerge={canMerge}
            isValidMove={isValidMove}
            isLocked={isLocked}
            onUnlock={() => balance >= getSlotCost(index) && onUnlockSlot(index)}
            unlockCost={getSlotCost(index)}
          />
        );
      })}
    </div>
  );
}

function getSlotCost(position: number): number {
  const costs = {
    6: 100,
    7: 250,
    8: 500,
    9: 1000,
    10: 2500,
    11: 5000,
    12: 10000,
  };
  return costs[position + 1 as keyof typeof costs] || 0;
}