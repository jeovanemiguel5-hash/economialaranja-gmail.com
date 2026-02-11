
import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Imagem de Fundo Profissional (Edifícios Modernos/Negócios) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Business Architecture" 
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradiente Premium (Preto -> Transparente -> Laranja Sutil) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-orange-900/30"></div>
        {/* Camada de Textura Geométrica Sutil */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Educação de Elite • Angola</span>
          </div>

          <h1 className="text-6xl lg:text-[110px] font-black text-white mb-8 tracking-tighter leading-[0.85] lg:leading-[0.8]">
            Estratégia para <br />
            <span className="text-orange-500">o teu Sucesso.</span>
          </h1>
          
          <p className="text-xl lg:text-3xl text-slate-300 font-medium max-w-2xl leading-tight mb-12">
            Domina o teu salário e constrói um futuro sólido com a orientação de <span className="text-white font-bold italic border-b-2 border-orange-500 pb-1">Jeovane Monteiro Miguel.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button 
              onClick={() => onNavigate('calculator')} 
              className="w-full sm:w-auto px-12 py-6 bg-orange-600 text-white font-black text-xl rounded-2xl shadow-[0_0_50px_rgba(234,88,12,0.3)] hover:bg-orange-500 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              SIMULAR SALÁRIO
            </button>
            <button 
              onClick={() => document.getElementById('temas')?.scrollIntoView({behavior: 'smooth'})} 
              className="w-full sm:w-auto px-12 py-6 bg-white/5 backdrop-blur-xl text-white border-2 border-white/20 font-bold text-xl rounded-2xl hover:bg-white/10 hover:border-orange-500 transition-all duration-300"
            >
              EXPLORAR GUIAS
            </button>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-12 border-t border-white/10 pt-10">
          <div className="opacity-50">
            <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">Mentoria Especializada</p>
            <p className="text-white font-bold">Jeovane Miguel</p>
          </div>
          <div className="opacity-50">
            <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">Impacto Regional</p>
            <p className="text-white font-bold">Angola & Diáspora</p>
          </div>
        </div>
      </div>
    </section>
  );
};
