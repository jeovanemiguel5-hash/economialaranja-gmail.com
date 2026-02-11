
import React from 'react';

interface ArticleOrganizeSalaryProps {
  onBack: () => void;
}

export const ArticleOrganizeSalary: React.FC<ArticleOrganizeSalaryProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Gestão Mensal</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">Como organizar o salário mesmo ganhando pouco</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">O mito de que só poupa quem ganha muito</h2>
          <p>Muitas vezes ouvimos que a gestão financeira é apenas para quem tem salários altos. Em Angola, onde o custo de vida é um desafio constante, a verdade é o oposto: quanto menos ganhamos, mais precisamos de ser mestres na organização do nosso dinheiro. Organizar o salário não é sobre a quantidade de Kwanzas que entram, mas sobre a inteligência com que eles saem.</p>
          <h2 className="text-2xl font-bold text-gray-800">A técnica das prioridades reais</h2>
          <p>Para quem ganha pouco, o segredo está em dividir o salário mal ele chega. A primeira regra de Jeovane Monteiro Miguel é: protege o essencial. Antes de qualquer desejo, garante o pão, a renda e a luz. O passo seguinte é aprender a dizer "não" a gastos que não acrescentam valor à tua vida. Se conseguires guardar nem que sejam 500 ou 1000 Kwanzas por mês, já estás a criar um hábito de vencedor.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500 italic">
            <strong>Conclusão Educativa:</strong> A organização financeira é uma semente. Mesmo que a terra seja pouca, se cuidares dela todos os meses com disciplina, ela vai crescer e dar-te a sombra de que precisas nos momentos de dificuldade.
          </div>
        </div>
      </div>
    </article>
  );
};
