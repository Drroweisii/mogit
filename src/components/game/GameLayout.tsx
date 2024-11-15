import React from 'react';
import { GameBoard } from './GameBoard';
import { GameStatement } from './GameStatement';
import { GameControls } from './GameControls';
import { useGameState } from '../../hooks/useGameState';
import { GameState } from '../../types/game';

interface GameLayoutProps {
  gameState: GameState;
}

export function GameLayout({ gameState }: GameLayoutProps) {
  const { 
    hireWorker, 
    handleWorkerClick,
    removeWorker,
    unlockSlot,
    canHireWorker,
    selectedWorkerId,
    canMergeWorkers,
  } = useGameState();

  const handleCellClick = (position: number) => {
    const worker = gameState.workers.find(w => w.position === position);
    handleWorkerClick(worker?.id || '', position);
  };

  return (
    <div className="responsive-container h-[calc(100dvh-3.5rem)] sm:h-[calc(100dvh-4rem)] flex flex-col">
      <div className="flex-1 min-h-0 grid grid-rows-[auto_1fr_auto] gap-1.5 sm:gap-3 py-1.5 sm:py-4">
        <GameStatement gameState={gameState} />
        
        <div className="min-h-0">
          <GameBoard
            gridState={gameState.gridState}
            workers={gameState.workers}
            onCellClick={handleCellClick}
            onRemoveWorker={removeWorker}
            onUnlockSlot={unlockSlot}
            balance={gameState.balances.emsx}
            selectedWorkerId={selectedWorkerId}
            canMergeWorkers={canMergeWorkers}
            unlockedSlots={gameState.unlockedSlots}
          />
        </div>

        <GameControls
          gameState={gameState}
          onHire={hireWorker}
          canHireWorker={canHireWorker}
        />
      </div>
    </div>
  );
}