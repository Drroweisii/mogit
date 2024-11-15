import React from 'react';
import { GridCell as GridCellType, Worker as WorkerType } from '../../../types/game';
import { Grid } from './Grid';
import { BoardHeader } from './BoardHeader';

interface GameBoardProps {
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

export function GameBoard({ 
  gridState, 
  workers, 
  onCellClick,
  onRemoveWorker,
  onUnlockSlot,
  balance,
  selectedWorkerId,
  canMergeWorkers,
  unlockedSlots,
}: GameBoardProps) {
  const selectedWorker = workers.find(w => w.id === selectedWorkerId);

  return (
    <div className="h-full flex flex-col bg-gray-900/40 backdrop-blur-[2px] rounded-2xl p-2 sm:p-4 relative overflow-hidden border-2 border-green-500/20">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5" />

      <BoardHeader
        workerCount={workers.length}
        unlockedSlots={unlockedSlots}
        selectedWorker={selectedWorker}
        onRemoveWorker={onRemoveWorker}
      />

      <Grid
        gridState={gridState}
        workers={workers}
        onCellClick={onCellClick}
        onRemoveWorker={onRemoveWorker}
        onUnlockSlot={onUnlockSlot}
        balance={balance}
        selectedWorkerId={selectedWorkerId}
        canMergeWorkers={canMergeWorkers}
        unlockedSlots={unlockedSlots}
      />
    </div>
  );
}