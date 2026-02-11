
import React from 'react';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button 
          onClick={onBack}
          className="text-orange-600 font-medium mb-10 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
        >
          <span>←</span> Voltar para o Início
        </button>

        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Termos de Uso</h1>
          <p className="text-gray-500 italic">Estes termos regem o uso informativo do site Economia Laranja.</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">1. Natureza Educativa</h2>
            <p>
              O site <strong>Economia Laranja</strong> é uma plataforma de conteúdo puramente educativo e informativo. O objetivo é auxiliar na compreensão de conceitos básicos de finanças e economia. Nenhuma informação aqui presente deve ser interpretada como uma promessa de lucro ou resultado financeiro.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">2. Isenção de Responsabilidade</h2>
            <p>
              <strong>Não prestamos aconselhamento financeiro.</strong> O conteúdo deste site não substitui o parecer de consultores financeiros, contabilistas ou advogados certificados. O utilizador é o único responsável pelas decisões que toma com base nas informações lidas.
            </p>
            <p>
              Embora nos esforcemos para manter a informação atualizada e correta, não garantimos a exatidão absoluta ou a aplicação universal de todos os conceitos, uma vez que as leis e os mercados financeiros mudam constantemente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">3. Uso Aceitável</h2>
            <p>
              Ao utilizar este site, o utilizador concorda em não usar as informações para fins ilegais ou para tomar decisões críticas sem a devida consulta profissional. A aceitação destes termos é automática ao navegar pelas nossas páginas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">4. Autoria e Direitos</h2>
            <p>
              Todo o conteúdo original é de autoria de Jeovane Monteiro Miguel e da equipa Economia Laranja. A reprodução parcial para fins educativos é permitida desde que seja citada a fonte original.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-100"
          >
            Compreendo e Aceito
          </button>
        </footer>
      </div>
    </article>
  );
};
