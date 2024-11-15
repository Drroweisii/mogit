import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 animate-glow">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-xl opacity-20" />
        </div>
        <div className="text-center relative">
          <Loader2 className="h-16 w-16 animate-spin text-indigo-500 mx-auto" />
          <p className="mt-4 text-xl font-medium neon-text">Loading Web3 Experience...</p>
          <div className="mt-2 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}