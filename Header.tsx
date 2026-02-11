
import React from 'react';
import { Page } from '../App';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const isArticlesActive = [
    'articles', 
    'article-life', 
    'article-salary', 
    'article-mistakes',
    'article-saving',
    'article-orange',
    'article-business-family',
    'article-kixikila',
    'article-smart-shopping',
    'article-first-salary',
    'article-debt-stress',
    'article-organize-salary',
    'article-common-errors',
    'article-why-fined',
    'article-spend-save-invest',
    'article-healthy-habits'
  ].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 orange-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-800">Economia <span className="text-orange-600">Laranja</span></span>
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <button 
            onClick={() => onNavigate('home')} 
            className={`hover:text-orange-600 transition-colors ${currentPage === 'home' ? 'text-orange-600 font-bold' : ''}`}
          >
            Início
          </button>
          <button 
            onClick={() => onNavigate('calculator')} 
            className={`px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-all ${currentPage === 'calculator' ? 'bg-orange-600 text-white' : ''}`}
          >
            Simulador 50-30-20
          </button>
          <button 
            onClick={() => onNavigate('articles')} 
            className={`hover:text-orange-600 transition-colors ${isArticlesActive ? 'text-orange-600 font-bold' : ''}`}
          >
            Artigos
          </button>
          <button 
            onClick={() => onNavigate('about')} 
            className={`hover:text-orange-600 transition-colors ${currentPage === 'about' ? 'text-orange-600 font-bold' : ''}`}
          >
            Sobre
          </button>
        </nav>
      </div>
    </header>
  );
};
