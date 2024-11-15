import React from 'react';
import { GameState } from '../../types/game';
import { ModernGameLayout } from './game/ModernGameLayout';

interface ModernDashboardProps {
  gameState: GameState;
}

export function ModernDashboard({ gameState }: ModernDashboardProps) {
  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="h-full max-w-7xl mx-auto px-4 py-4">
        <ModernGameLayout gameState={gameState} />
      </div>
    </div>
  );
}