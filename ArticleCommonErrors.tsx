
import React from 'react';

interface ArticleCommonErrorsProps {
  onBack: () => void;
}

export const ArticleCommonErrors: React.FC<ArticleCommonErrorsProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Prevenção</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">Erros financeiros mais comuns que impedem o progresso</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">O perigo dos pequenos gastos invisíveis</h2>
          <p>O maior inimigo do teu progresso financeiro não é a conta grande que pagas uma vez por mês, mas sim os pequenos gastos diários que parecem não custar nada. Aquele lanche extra na rua, o saldo de dados gasto sem necessidade ou as pequenas gorjetas constantes somam um valor que, no final do mês, faz uma falta enorme nas tuas metas.</p>
          <h2 className="text-2xl font-bold text-gray-800">Viver um degrau acima das possibilidades</h2>
          <p>Outro erro grave é tentar mostrar um estilo de vida que o teu salário ainda não pode sustentar. Comprar o telemóvel da moda ou roupas caras para impressionar os outros é uma armadilha que te mantém preso em dívidas. O verdadeiro progresso é silencioso: é ter dinheiro guardado enquanto os outros apenas aparentam ter.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500 italic">
            <strong>Conclusão Educativa:</strong> Errar com o dinheiro é humano, mas insistir nos mesmos erros é uma escolha. Identifica onde o teu dinheiro está a "escorrer" e fecha essa torneira hoje mesmo para o teu futuro agradecer.
          </div>
        </div>
      </div>
    </article>
  );
};
