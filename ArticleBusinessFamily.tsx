
import React from 'react';

interface ArticleBusinessFamilyProps {
  onBack: () => void;
}

export const ArticleBusinessFamily: React.FC<ArticleBusinessFamilyProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Gestão de Negócio</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Gestão do 'Kumbú' Extra: Como Separar as Contas do Negócio e de Casa</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">O erro de misturar as notas no mesmo bolso</h2>
          <p>Muitos angolanos têm o seu pequeno negócio ou fazem trabalhos extras para aumentar a renda. O maior erro é usar o dinheiro que entra das vendas para pagar o pão de casa ou a conta da luz imediatamente. Quando fazes isto, perdes o controlo e não sabes se o teu esforço está a dar lucro ou prejuízo.</p>
          <h2 className="text-2xl font-bold text-gray-800">Cria uma barreira entre o negócio e a vida pessoal</h2>
          <p>A regra de ouro de Jeovane Monteiro Miguel é simples: o dinheiro do negócio pertence ao negócio. Deves definir um valor fixo para ti (como se fosse um pequeno salário) e o resto deve ficar guardado para comprar mais mercadoria ou melhorar o serviço. Usa cadernos diferentes ou contas separadas para que os números não se misturem na tua cabeça.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500">
            <strong>Conclusão Educativa:</strong> Separar as contas não é falta de confiança na família, é respeito pelo futuro do teu sustento. Um negócio organizado cresce, um negócio misturado desaparece.
          </div>
        </div>
      </div>
    </article>
  );
};
