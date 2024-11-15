import React from 'react';
import { WORKER_TYPES } from '../../../utils/workerTypes';
import { WorkerType } from '../../../types/workers';
import { GameState } from '../../../types/game';
import { WorkerTypeButton } from './WorkerTypeButton';

interface WorkerSelectorProps {
  selectedType: WorkerType;
  onSelect: (type: WorkerType) => void;
  gameState: GameState;
}

export function WorkerSelector({ selectedType, onSelect, gameState }: WorkerSelectorProps) {
  return (
    <div className="flex gap-1.5 p-1.5 sm:p-2 bg-white rounded-lg shadow-md overflow-x-auto">
      {Object.entries(WORKER_TYPES).map(([type, config]) => (
        <WorkerTypeButton
          key={type}
          type={type}
          config={config}
          isSelected={selectedType === type}
          canAfford={gameState.balances.emsx >= config.cost}
          onSelect={() => onSelect(type as WorkerType)}
        />
      ))}
    </div>
  );
}