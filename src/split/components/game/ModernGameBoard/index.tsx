import React from 'react';
import { GridCell, Worker } from '../../../../types/game';
import { ModernGrid } from '../ModernGrid';
import { BoardHeader } from './BoardHeader';

interface ModernGameBoardProps {
  gridState: GridCell[];
  workers: Worker[];
  onCellClick: (position: number) => void;
  onRemoveWorker: (id: string) => void;
  onUnlockSlot: (position: number) => void;
  balance: number;
  selectedWorkerId: string | null;
  canMergeWorkers: (worker1: Worker, worker2: Worker) => boolean;
  unlockedSlots: number;
}

export function ModernGameBoard({
  gridState,
  workers,
  onCellClick,
  onRemoveWorker,
  onUnlockSlot,
  balance,
  selectedWorkerId,
  canMergeWorkers,
  unlockedSlots,
}: ModernGameBoardProps) {
  const selectedWorker = workers.find(w => w.id === selectedWorkerId);

  return (
    <div className="h-full bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 flex flex-col">
      <BoardHeader
        workerCount={workers.length}
        unlockedSlots={unlockedSlots}
        selectedWorker={selectedWorker}
        onRemoveWorker={onRemoveWorker}
      />

      <div className="flex-1 overflow-hidden">
        <ModernGrid
          gridState={gridState}
          workers={workers}
          onCellClick={onCellClick}
          balance={balance}
          selectedWorkerId={selectedWorkerId}
          canMergeWorkers={canMergeWorkers}
          unlockedSlots={unlockedSlots}
          onUnlockSlot={onUnlockSlot}
        />
      </div>
    </div>
  );
}