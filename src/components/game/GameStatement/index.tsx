import React from 'react';
import { StatCard } from './StatCard';
import { useGameStatement } from '../../../hooks/useGameStatement';
import { GameState } from '../../../types/game';
import { Coins, DollarSign, Bitcoin } from 'lucide-react';

interface GameStatementProps {
  gameState: GameState;
}

export function GameStatement({ gameState }: GameStatementProps) {
  const { formattedBalances, formattedRates } = useGameStatement(gameState);

  return (
    <div className="glass-panel rounded-2xl p-2 sm:p-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50" />
      <div className="grid grid-cols-3 gap-2 sm:gap-3 relative">
        <StatCard
          icon={<Coins strokeWidth={1.5} />}
          label="EMSX"
          value={formattedBalances.emsx}
          rate={formattedRates.emsx}
        />
        <StatCard
          icon={<DollarSign strokeWidth={1.5} />}
          label="USDT"
          value={formattedBalances.usdt}
          rate={formattedRates.usdt}
        />
        <StatCard
          icon={<Bitcoin strokeWidth={1.5} />}
          label="BTC"
          value={formattedBalances.btc}
          rate={formattedRates.btc}
        />
      </div>
    </div>
  );
}