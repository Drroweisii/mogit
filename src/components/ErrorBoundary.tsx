import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { AlertTriangle } from 'lucide-react';

function ErrorFallback({ error, resetErrorBoundary }: { 
  error: Error; 
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full p-6 rounded-xl space-y-4">
        <div className="flex items-center gap-3 text-red-500">
          <AlertTriangle className="w-8 h-8" />
          <h2 className="text-xl font-bold">Something went wrong</h2>
        </div>
        
        <p className="text-gray-300">
          {error.message || 'An unexpected error occurred'}
        </p>
        
        <pre className="bg-gray-800 p-3 rounded-lg text-sm text-gray-300 overflow-auto">
          {error.stack}
        </pre>
        
        <button
          onClick={resetErrorBoundary}
          className="w-full btn-primary bg-red-500 hover:bg-red-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the app state here if needed
        window.location.reload();
      }}
      onError={(error) => {
        // Log the error to your error reporting service
        console.error('Application Error:', error);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}