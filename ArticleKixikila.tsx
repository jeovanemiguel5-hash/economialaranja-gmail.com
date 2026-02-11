
import React from 'react';

interface ArticleKixikilaProps {
  onBack: () => void;
}

export const ArticleKixikila: React.FC<ArticleKixikilaProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Tradição & Poupança</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Kixikila Moderno: Usar a Tradição para Realizar Sonhos com Disciplina</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">A força da poupança em grupo</h2>
          <p>O Kixikila faz parte da nossa cultura e é uma das formas mais bonitas de entreajuda em Angola. No entanto, para que ele funcione a teu favor, precisas de ter um objetivo claro para quando chegar a tua vez de receber o valor total.</p>
          <h2 className="text-2xl font-bold text-gray-800">Não gastes a tua vez em futilidades</h2>
          <p>Muitas vezes, as pessoas recebem o Kixikila e gastam tudo em festas ou roupas que não precisam. O segredo é usar esse valor para algo que te traga mais tranquilidade, como pagar um curso, comprar uma ferramenta de trabalho ou fazer aquela reparação em casa que vai evitar gastos maiores no futuro.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500">
            <strong>Conclusão Educativa:</strong> O Kixikila é uma ferramenta de disciplina. Quando recebes o valor, lembra-te do esforço que fizeste para pagar as tuas quotas. Honra o teu sacrifício investindo em algo que dure.
          </div>
        </div>
      </div>
    </article>
  );
};
