
import React from 'react';

interface ArticleWhyFinEdProps {
  onBack: () => void;
}

export const ArticleWhyFinEd: React.FC<ArticleWhyFinEdProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Educação Prática</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">O que é educação financeira e por que ela muda vidas</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">Mais do que números, é sobre liberdade</h2>
          <p>Muitas pessoas fogem da educação financeira porque acham que é matemática difícil. Na verdade, é sobre comportamento. Educação financeira é a arte de entender como o dinheiro funciona para que ele deixe de ser uma preocupação e passe a ser um aliado. Ela muda vidas porque retira o peso da incerteza e dá-te o poder de decidir o teu rumo.</p>
          <h2 className="text-2xl font-bold text-gray-800">O impacto na harmonia da família</h2>
          <p>Quando aprendes a gerir o teu dinheiro, a paz volta a entrar em casa. A maioria das discussões entre casais e famílias acontece por falta de dinheiro ou por má gestão. Ao dominares este conhecimento, passas a planear o futuro dos teus filhos e a tua reforma com clareza, eliminando o stress das noites sem dormir por causa de contas atrasadas.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500 italic">
            <strong>Conclusão Educativa:</strong> Educar-se financeiramente é o maior investimento que podes fazer em ti próprio. Não ocupa espaço e ninguém te pode tirar. É a chave que abre a porta da tua verdadeira liberdade de escolha.
          </div>
        </div>
      </div>
    </article>
  );
};
