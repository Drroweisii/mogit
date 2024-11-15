import React from 'react';
import { Layout, Wallet, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const isModern = location.pathname === '/modern';

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Layout className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold neon-text">Web3 Arena</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Link 
                to="/"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  !isModern ? 'bg-indigo-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Classic
              </Link>
              <Link 
                to="/modern"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  isModern ? 'bg-indigo-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Modern
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="btn-secondary hidden sm:flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </button>
            
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors sm:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}