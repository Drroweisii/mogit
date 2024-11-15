import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/layout/Navbar';
import { useGameState } from './hooks/useGameState';
import { ModernDashboard } from './split/components/ModernDashboard';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const { gameState } = useGameState();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-100 hex-pattern">
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-900 pointer-events-none" />
        <div className="relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard gameState={gameState} />} />
            <Route path="/modern" element={<ModernDashboard gameState={gameState} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}