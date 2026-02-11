
import React from 'react';

interface CTAProps {
  onExplore?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onExplore }) => {
  return (
    <section id="artigos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-orange-600 rounded-[3rem] px-8 py-16 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-300">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Pronto para transformar sua vida financeira?</h2>
            <p className="text-orange-50 text-xl mb-10 leading-relaxed">
              Temos uma biblioteca completa de artigos e guias práticos esperando por você. Aprenda no seu ritmo e comece a aplicar hoje mesmo.
            </p>
            <button 
              onClick={onExplore}
              className="px-10 py-5 bg-white text-orange-600 text-lg font-bold rounded-2xl hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explorar Artigos e Guias
            </button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-700 rounded-full opacity-30 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};
