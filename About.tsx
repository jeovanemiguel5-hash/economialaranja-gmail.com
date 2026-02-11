
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white border border-slate-100 p-12 lg:p-20 rounded-[4rem] shadow-xl shadow-slate-200/50 relative">
          {/* Elemento decorativo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
          
          <div className="relative z-10 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 text-sm font-bold uppercase tracking-widest rounded-full mb-4">
              O Nosso Propósito
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">Educação que <span className="text-orange-600">Liberta.</span></h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
              A <strong>Economia Laranja</strong> é um espaço de partilha criado por <strong>Jeovane Monteiro Miguel</strong> para simplificar as tuas escolhas financeiras. Acreditamos que entender o dinheiro não é privilégio, é uma ferramenta de sobrevivência e sucesso.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed italic">
              Todo o conteúdo é focado na clareza angolana, para que possas olhar para o teu futuro com consciência e estratégia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
