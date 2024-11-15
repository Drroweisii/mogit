import React from 'react';
import { WorkerSelector } from './WorkerSelector';
import { HireControls } from './HireControls';
import { WORKER_TYPES } from '../../../utils/workerTypes';
import { WorkerType } from '../../../types/workers';
import { GameState } from '../../../types/game';
import { useWorkerSelection } from '../../../hooks/useWorkerSelection';

interface GameControlsProps {
  gameState: GameState;
  onHire: (type: WorkerType) => boolean;
  canHireWorker: (type: WorkerType) => boolean;
}

export function GameControls({ gameState, onHire, canHireWorker }: GameControlsProps) {
  const { selectedWorkerType, setSelectedWorkerType, handleHire } = useWorkerSelection(
    gameState,
    onHire
  );

  return (
    <div className="flex flex-col gap-1.5 sm:gap-3">
      <WorkerSelector
        selectedType={selectedWorkerType}
        onSelect={setSelectedWorkerType}
        gameState={gameState}
      />

      <HireControls
        onHire={handleHire}
        disabled={!canHireWorker(selectedWorkerType)}
        workerType={WORKER_TYPES[selectedWorkerType]}
      />
    </div>
  );
}