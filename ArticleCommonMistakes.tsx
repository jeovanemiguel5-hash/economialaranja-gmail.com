
import React from 'react';

interface ArticleCommonMistakesProps {
  onBack: () => void;
}

export const ArticleCommonMistakes: React.FC<ArticleCommonMistakesProps> = ({ onBack }) => {
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
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Finanças & Comportamento</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Erros financeiros mais comuns e como evitá-los
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed italic">
            Identifica as armadilhas do dia a dia e aprende a proteger o teu bolso com exemplos práticos.
          </h2>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
          <p>
            Muitas pessoas chegam ao fim do mês com uma pergunta recorrente: "Onde é que foi parar o meu dinheiro?". A sensação de que o salário simplesmente desapareceu é comum, mas raramente é obra do acaso. Na maioria das vezes, somos vítimas de pequenos erros de comportamento que, somados, criam um buraco gigante no nosso orçamento. Errar é humano, mas continuar a cometer os mesmos deslizes financeiros é o que impede a construção de uma vida tranquila.
          </p>

          <p>
            Um dos erros mais frequentes é o desprezo pelos pequenos gastos, o que chamamos de <strong>"gastos invisíveis"</strong>. Imagina aquele café diário na rua, o lanche rápido que compras por conveniência ou as taxas bancárias que nunca questionaste. Isoladamente, parecem valores insignificantes. No entanto, se gastares um valor pequeno todos os dias, ao fim de um ano terás gasto o equivalente a uma prestação de uma casa ou a uma viagem. O segredo para evitar isto não é deixar de viver, mas sim ter consciência. Regista tudo o que gastas por uma semana e vais ficar surpreendido com o "ralo" que vais encontrar.
          </p>

          <p>
            Outro erro clássico é cair na armadilha das <strong>promoções e do consumo por impulso</strong>. Quantas vezes compraste algo só porque estava com "50% de desconto", mesmo sem precisares realmente do objeto? O verdadeiro desconto é 100% quando não compras o que não precisas. O marketing é desenhado para criar urgência, mas a educação financeira ensina-te a pausar. Antes de passar o cartão, aplica a regra das 24 horas: espera um dia inteiro. Se no dia seguinte ainda achares que a compra é essencial, então avança. Na maioria das vezes, o desejo passa e o teu dinheiro fica na conta.
          </p>

          <p>
            A <strong>falta de um fundo de emergência</strong> é, talvez, o erro mais perigoso. A vida é imprevisível. Um telemóvel que se parte, uma avaria no cano da cozinha ou uma consulta médica urgente são situações que vão acontecer. Se não tens uma reserva guardada, a única solução será o crédito ou pedir emprestado a familiares, o que gera juros e stress. Começa a construir este fundo hoje, mesmo que seja com um valor muito baixo. O objetivo é ter a paz de saber que, se algo correr mal, tu tens o controlo.
          </p>

          <p>
            Por fim, <strong>confundir desejos com necessidades</strong> é o que leva muitos ao endividamento. Precisamos de comer, mas não precisamos de comer no restaurante mais caro todos os fins de semana. Precisamos de roupa, mas não precisamos da última coleção de marca. Aprender a priorizar o essencial permite que, no futuro, possas satisfazer os teus desejos com muito mais liberdade e sem culpa.
          </p>

          <p className="font-medium text-gray-900 bg-orange-50 p-8 rounded-3xl border-l-4 border-orange-500 italic">
            Em conclusão, evitar erros financeiros não exige que sejas um génio da economia. Exige apenas atenção, disciplina e a coragem de olhar para os teus hábitos de frente. Cada pequena poupança hoje é um tijolo na construção da tua liberdade de amanhã. Começa por um erro de cada vez e transforma a tua relação com o dinheiro.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-400">Por Jeovane Monteiro Miguel e equipa Economia Laranja</div>
          <button 
            onClick={onBack}
            className="px-6 py-2 bg-orange-100 text-orange-700 font-bold rounded-lg hover:bg-orange-200 transition-colors"
          >
            Voltar aos Artigos
          </button>
        </footer>
      </div>
    </article>
  );
};
