
import React from 'react';

interface ArticleDebtStressProps {
  onBack: () => void;
}

export const ArticleDebtStress: React.FC<ArticleDebtStressProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Superação</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Dívidas e Stress: Como Negociar e Voltar a Dormir Tranquilo</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">O peso da dívida na saúde mental</h2>
          <p>Estar a dever a alguém ou ao banco causa um stress que afeta a família e o trabalho. O primeiro passo para sair deste buraco é parar de cavar: não faças novas dívidas para pagar as antigas. Isso é uma armadilha que só aumenta os juros.</p>
          <h2 className="text-2xl font-bold text-gray-800">Enfrenta o problema de frente</h2>
          <p>Faz uma lista de todas as tuas dívidas, das mais pequenas às maiores. Depois, procura as pessoas ou instituições a quem deves e propõe um plano de pagamento que consigas cumprir. A maioria dos credores prefere receber aos poucos do que não receber nada. Mostra que tens intenção de pagar e sê honesto sobre a tua situação.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500">
            <strong>Conclusão Educativa:</strong> Sair das dívidas exige paciência e cortes temporários no estilo de vida. A recompensa não é apenas o nome limpo, mas a liberdade de voltar a mandar no teu próprio dinheiro.
          </div>
        </div>
      </div>
    </article>
  );
};
