
import React from 'react';

interface ArticleHealthyHabitsProps {
  onBack: () => void;
}

export const ArticleHealthyHabits: React.FC<ArticleHealthyHabitsProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Estilo de Vida</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">Como criar hábitos financeiros saudáveis no dia a dia</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">Pequenas mudanças, grandes resultados</h2>
          <p>Hábitos saudáveis não se criam da noite para o dia. Começa por anotar tudo o que gastas, mesmo que seja num pedaço de papel ou numa mensagem no telemóvel. Quando vês para onde o dinheiro vai, ganhas consciência. Outro hábito importante é comparar preços antes de comprar. No mercado ou na loja, dez Kwanzas aqui e ali fazem diferença no final do ano.</p>
          <h2 className="text-2xl font-bold text-gray-800">O poder da consistência e do registo</h2>
          <p>A consistência é mais importante do que o valor. É melhor poupar um pouco todos os meses do que tentar poupar muito apenas uma vez por ano. Cria o hábito de ter um "dia da revisão": uma vez por semana, olha para as tuas contas e vê se estás a cumprir o teu plano. Se falhares num dia, não desistas; volta ao caminho no dia seguinte.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500 italic">
            <strong>Conclusão Educativa:</strong> A tua vida financeira é o reflexo dos teus hábitos diários. Se mudares o que fazes hoje, o teu futuro será inevitavelmente diferente e muito mais próspero.
          </div>
        </div>
      </div>
    </article>
  );
};
