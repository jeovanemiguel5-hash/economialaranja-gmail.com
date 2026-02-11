
import React from 'react';

interface FinancialEducationProps {
  onBack: () => void;
}

export const FinancialEducation: React.FC<FinancialEducationProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-orange-600 font-medium mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <span>←</span> Voltar ao Início
        </button>

        <header className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Cuidar do <span className="text-orange-600">Dinheiro</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light border-l-4 border-orange-200 pl-6 py-2">
            Mudar a tua vida financeira não depende de quanto ganhas, mas sim do que fazes com o que tens.
          </p>
        </header>

        <div className="space-y-20">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">O que é, afinal, Educação Financeira?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              É apenas aprender a tomar decisões espertas. É saber quando comprar, quando esperar e como garantir que nunca falte o essencial. É mandar no teu dinheiro, em vez de deixar que ele mande em ti.
            </p>
          </section>

          <section className="bg-gray-50 p-10 lg:p-16 rounded-[3rem] space-y-6 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800">O Teu Mapa para o Sucesso</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Planear é como desenhar um mapa antes de começar uma viagem. Ajuda-te a não te perderes pelo caminho.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-orange-600 font-bold mb-2">Para Agora</div>
                <p className="text-sm text-gray-600">Pagar as contas em dia e ter um valor guardado para emergências.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-orange-600 font-bold mb-2">Para Breve</div>
                <p className="text-sm text-gray-600">Comprar algo que precisas ou fazer um curso para ganhar mais.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-orange-600 font-bold mb-2">Para o Futuro</div>
                <p className="text-sm text-gray-600">Garantir uma vida tranquila e sem preocupações lá na frente.</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Três Passos que mudam tudo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Anota as tuas contas</h3>
                <p className="text-gray-600">Até aquele lanche na rua. Se não sabes para onde o dinheiro vai, não consegues pará-lo.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Pensa antes de comprar</h3>
                <p className="text-gray-600">Pergunta sempre: "Eu preciso mesmo disto agora?". O impulso é o maior inimigo da poupança.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Guarda um pouco sempre</h3>
                <p className="text-gray-600">Não esperes sobrar dinheiro para guardar. Separa um pouco assim que receberes.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-xl font-bold mb-2">Aprende um pouco todo dia</h3>
                <p className="text-gray-600">Conhecimento é como uma semente: tu plantas hoje para colher frutos o resto da vida.</p>
              </div>
            </div>
          </section>

          <section className="bg-orange-600 text-white p-10 lg:p-16 rounded-[3rem] text-center space-y-6 shadow-2xl shadow-orange-100">
            <h2 className="text-4xl font-bold">Mais Paz, Menos Aperto</h2>
            <p className="text-xl leading-relaxed opacity-95 max-w-2xl mx-auto">
              Cuidar do dinheiro tira um peso enorme das tuas costas. Menos discussões em casa, menos noites sem dormir e mais liberdade para seres feliz.
            </p>
          </section>

          <footer className="text-center pt-8">
             <button onClick={onBack} className="px-8 py-4 bg-orange-100 text-orange-700 font-bold rounded-xl hover:bg-orange-200 transition-colors">
                Voltar ao Início
              </button>
          </footer>
        </div>
      </div>
    </article>
  );
};
