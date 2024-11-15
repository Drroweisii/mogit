import React from 'react';
import { GameState } from '../../../../types/game';
import { WorkerType } from '../../../../types/workers';
import { WORKER_TYPES } from '../../../../utils/workerTypes';
import { useWorkerSelection } from '../../../../hooks/useWorkerSelection';
import { Cpu } from 'lucide-react';
import { MinerButton } from './MinerButton';

interface ModernControlsProps {
  gameState: GameState;
  onHire: (type: WorkerType) => boolean;
  canHireWorker: (type: WorkerType) => boolean;
}

export function ModernControls({ gameState, onHire, canHireWorker }: ModernControlsProps) {
  const { selectedWorkerType, setSelectedWorkerType, handleHire } = useWorkerSelection(
    gameState,
    onHire
  );

  return (
    <div className="h-full bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 flex flex-col">
      <div className="flex items-center gap-4 mb-4 flex-shrink-0">
        <div className="bg-blue-500/10 rounded-2xl p-3 border border-blue-500/20">
          <Cpu className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Hire Miners</h2>
          <p className="text-blue-300">Select and hire new mining units</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto space-y-3 pr-2">
        {Object.entries(WORKER_TYPES).map(([type, config]) => (
          <MinerButton
            key={type}
            type={type}
            name={config.name}
            cost={config.cost}
            color={config.color}
            isSelected={selectedWorkerType === type}
            canAfford={gameState.balances.emsx >= config.cost}
            canHire={canHireWorker(type as WorkerType)}
            onSelect={() => setSelectedWorkerType(type as WorkerType)}
            onHire={handleHire}
          />
        ))}
      </div>
    </div>
  );
}