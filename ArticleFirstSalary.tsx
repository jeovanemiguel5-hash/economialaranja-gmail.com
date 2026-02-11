
import React from 'react';

interface ArticleFirstSalaryProps {
  onBack: () => void;
}

export const ArticleFirstSalary: React.FC<ArticleFirstSalaryProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Carreira & Início</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">O Primeiro Salário: O Que Fazer Para Não Ficar Sem Nada no Dia 10</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">A euforia do primeiro ordenado</h2>
          <p>Receber o primeiro salário é uma sensação maravilhosa de vitória. Dá vontade de celebrar com os amigos e comprar tudo o que sempre desejámos. Mas atenção: se gastares tudo na primeira semana, vais passar o resto do mês a pedir emprestado ou a passar dificuldades.</p>
          <h2 className="text-2xl font-bold text-gray-800">Cria o hábito desde o início</h2>
          <p>Jeovane Monteiro Miguel sugere que comeces logo com o pé direito: assim que o dinheiro cair na conta, retira uma pequena parte para a tua reserva de emergência. Trata essa poupança como se fosse a conta mais importante que tens para pagar. Se te habituares a viver com 90% do que ganhas desde o primeiro dia, nunca sentirás falta dos outros 10%.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500">
            <strong>Conclusão Educativa:</strong> O teu salário é o fruto do teu tempo. Não o desperdices todo em desejos momentâneos. Guarda uma parte para garantir que o teu esforço te traga segurança a longo prazo.
          </div>
        </div>
      </div>
    </article>
  );
};
