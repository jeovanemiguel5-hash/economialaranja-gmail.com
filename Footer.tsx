
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate?: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-800">Economia Laranja</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Jeovane Monteiro Miguel. Todos os direitos reservados.</p>
            {onNavigate && (
              <div className="flex gap-4">
                <button 
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-orange-600 transition-colors underline decoration-orange-200 underline-offset-4"
                >
                  Privacidade
                </button>
                <button 
                  onClick={() => onNavigate('terms')}
                  className="hover:text-orange-600 transition-colors underline decoration-orange-200 underline-offset-4"
                >
                  Termos
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-xs">
            Um compromisso de Jeovane Monteiro Miguel com a literacia financeira em Angola.
          </p>
        </div>
      </div>
    </footer>
  );
};
