import React from 'react';
import { GameState } from '../../../types/game';
import { ModernGameBoard } from './ModernGameBoard';
import { ModernGameStats } from './ModernGameStats';
import { ModernControls } from './ModernControls';
import { useGameState } from '../../../hooks/useGameState';

interface ModernGameLayoutProps {
  gameState: GameState;
}

export function ModernGameLayout({ gameState }: ModernGameLayoutProps) {
  const { 
    hireWorker, 
    handleWorkerClick,
    removeWorker,
    unlockSlot,
    canHireWorker,
    selectedWorkerId,
    canMergeWorkers,
  } = useGameState();

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 h-full overflow-hidden">
        <ModernGameBoard
          gridState={gameState.gridState}
          workers={gameState.workers}
          onCellClick={(pos) => {
            const worker = gameState.workers.find(w => w.position === pos);
            handleWorkerClick(worker?.id || '', pos);
          }}
          onRemoveWorker={removeWorker}
          onUnlockSlot={unlockSlot}
          balance={gameState.balances.emsx}
          selectedWorkerId={selectedWorkerId}
          canMergeWorkers={canMergeWorkers}
          unlockedSlots={gameState.unlockedSlots}
        />
      </div>
      <div className="h-full overflow-hidden flex flex-col gap-4">
        <div className="flex-shrink-0">
          <ModernGameStats gameState={gameState} />
        </div>
        <div className="flex-1 overflow-hidden">
          <ModernControls
            gameState={gameState}
            onHire={hireWorker}
            canHireWorker={canHireWorker}
          />
        </div>
      </div>
    </div>
  );
}