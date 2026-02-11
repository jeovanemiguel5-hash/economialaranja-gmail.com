
import React from 'react';

interface ArticleSpendSaveInvestProps {
  onBack: () => void;
}

export const ArticleSpendSaveInvest: React.FC<ArticleSpendSaveInvestProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Conceitos Fundamentais</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">Diferença entre gastar, poupar e investir</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">Entender o tempo do dinheiro</h2>
          <p>Gastar é o presente, poupar é o futuro próximo e investir é o longo prazo. Gastar é trocar o teu dinheiro por algo hoje. É necessário para viver, mas deve ser feito com consciência. Poupar é guardar uma parte do que ganhas para teres uma reserva. É a tua segurança contra imprevistos, como uma doença ou uma avaria em casa.</p>
          <h2 className="text-2xl font-bold text-gray-800">Do consumo imediato à construção de património</h2>
          <p>Investir é o passo seguinte: é colocar o dinheiro a trabalhar para ti. Enquanto a poupança serve para segurança, o investimento serve para crescimento. No entanto, em Angola, antes de investir em negócios ou ativos, o melhor investimento é sempre na tua própria formação. Aprender uma nova habilidade pode render muito mais do que qualquer outro negócio.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500 italic">
            <strong>Conclusão Educativa:</strong> Gastar é fácil, poupar é um hábito e investir é uma estratégia. O equilíbrio entre estes três é o que constrói uma vida financeira sólida e sem sustos.
          </div>
        </div>
      </div>
    </article>
  );
};
