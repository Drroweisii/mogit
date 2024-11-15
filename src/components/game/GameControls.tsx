import React, { useState, useEffect } from 'react';
import { WorkerSelector } from './GameControls/WorkerSelector';
import { HireControls } from './GameControls/HireControls';
import { WORKER_TYPES } from '../../utils/workerTypes';
import { WorkerType } from '../../types/workers';
import { GameState } from '../../types/game';

interface GameControlsProps {
  gameState: GameState;
  onHire: (type: WorkerType) => boolean;
  canHireWorker: (type: WorkerType) => boolean;
}

export function GameControls({ gameState, onHire, canHireWorker }: GameControlsProps) {
  const [selectedWorkerType, setSelectedWorkerType] = useState<WorkerType>('emsx');

  useEffect(() => {
    const affordableTypes = Object.entries(WORKER_TYPES)
      .filter(([_, config]) => gameState.balances.emsx >= config.cost)
      .sort((a, b) => b[1].cost - a[1].cost);

    const currentConfig = WORKER_TYPES[selectedWorkerType];
    if (!currentConfig || gameState.balances.emsx < currentConfig.cost) {
      if (affordableTypes.length > 0) {
        setSelectedWorkerType(affordableTypes[0][0] as WorkerType);
      }
    }
  }, [gameState.balances.emsx, selectedWorkerType]);

  const handleHire = () => {
    if (onHire(selectedWorkerType)) {
      const currentConfig = WORKER_TYPES[selectedWorkerType];
      if (gameState.balances.emsx < currentConfig.cost) {
        const affordableType = Object.entries(WORKER_TYPES)
          .filter(([_, config]) => gameState.balances.emsx >= config.cost)
          .sort((a, b) => b[1].cost - a[1].cost)[0];
          
        if (affordableType) {
          setSelectedWorkerType(affordableType[0] as WorkerType);
        }
      }
    }
  };

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