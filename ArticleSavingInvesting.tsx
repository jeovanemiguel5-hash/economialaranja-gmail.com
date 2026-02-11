
import React from 'react';

interface ArticleSavingInvestingProps {
  onBack: () => void;
}

export const ArticleSavingInvesting: React.FC<ArticleSavingInvestingProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button 
          onClick={onBack}
          className="text-orange-600 font-medium mb-10 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
        >
          <span>←</span> Todos os Artigos
        </button>

        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Conceitos Educativos</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight text-left">
            Poupar e Investir: Entende os conceitos para te organizares
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed italic text-left">
            Aprende a diferença entre guardar para o hoje e planear para o amanhã através de conceitos simples.
          </h2>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
          <p>
            No mundo das finanças, ouvimos muito as palavras "poupar" e "investir". Embora pareçam iguais, elas servem para momentos diferentes da nossa vida. Entender estas diferenças ajuda-te a criar um plano que faça sentido para a tua realidade, sem pressas e com os pés no chão.
          </p>

          <p>
            <strong>Poupar é, essencialmente, o hábito de guardar.</strong> Significa não gastar tudo o que recebes hoje para teres uma reserva disponível caso algo inesperado aconteça. É o que chamamos de "colchão de segurança". O foco da poupança é a tranquilidade: saber que, se precisares do dinheiro amanhã, ele estará lá, pronto para ser usado sem complicações.
          </p>

          <p>
            <strong>Investir é o passo seguinte e exige mais estudo.</strong> Investir significa colocar recursos em algo que pode, ao longo do tempo, ajudar o teu património a não perder valor para a inflação. É importante notar que todo investimento envolve riscos e não existem ganhos garantidos. Por isso, a educação é fundamental antes de qualquer decisão. Investir não é uma fórmula mágica para ficar rico, mas sim uma estratégia de longo prazo para quem já tem as contas em ordem.
          </p>

          <p>
            O segredo de uma boa organização financeira está no equilíbrio. Não faz sentido tentar investir o que podes precisar para a renda do mês. A ordem lógica que muitos educadores sugerem é: primeiro, organiza as tuas dívidas; segundo, cria a tua reserva de segurança; e só depois, com calma e estudo, começa a aprender sobre como investir.
          </p>

          <p className="font-medium text-gray-900 bg-orange-50 p-8 rounded-3xl border-l-4 border-orange-500 italic">
            Importante: O conteúdo desta página é meramente informativo. Cada pessoa tem uma realidade diferente, por isso, antes de tomar decisões financeiras importantes, deves informar-te bem e, se necessário, consultar um especialista certificado.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-400">Escrito por Jeovane Monteiro Miguel para fins educativos.</div>
          <button 
            onClick={onBack}
            className="px-6 py-2 bg-orange-100 text-orange-700 font-bold rounded-lg hover:bg-orange-200 transition-colors"
          >
            Voltar
          </button>
        </footer>
      </div>
    </article>
  );
};
