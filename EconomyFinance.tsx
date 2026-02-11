
import React from 'react';

interface EconomyFinanceProps {
  onBack: () => void;
}

export const EconomyFinance: React.FC<EconomyFinanceProps> = ({ onBack }) => {
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
            Entender o <span className="text-orange-600">Mundo</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light border-l-4 border-orange-200 pl-6 py-2">
            Saber como o dinheiro se move no mundo ajuda-te a tomar decisões melhores para a tua vida.
          </p>
        </header>

        <div className="space-y-16">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Economia e Finanças: Qual a diferença?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-orange-50 rounded-3xl">
                <h3 className="text-xl font-bold text-orange-700 mb-3">A Economia</h3>
                <p className="text-gray-700 leading-relaxed">
                  Não é sobre gráficos difíceis. É sobre como todos nós nos organizamos para viver. É como decidimos o que produzir, como ajudar os outros e como fazer as coisas chegarem a quem precisa.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">As Finanças</h3>
                <p className="text-gray-700 leading-relaxed">
                  Aqui o assunto é o teu bolso. É como geres o que recebes, como decides o que comprar, quanto guardar para depois e como fazer o teu dinheiro crescer com segurança.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">O dinheiro é como o sangue</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pensa no dinheiro como algo que precisa de estar sempre a circular. Quando compras algo na loja do teu vizinho, ele usa esse dinheiro para pagar aos fornecedores e aos filhos. O dinheiro nunca deve ficar parado; ele serve para fazer a vida acontecer.
            </p>
            <div className="p-1 w-full bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 rounded-full my-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Quando entendes este ciclo, percebes que o teu sucesso também ajuda o sucesso de quem está à tua volta.
            </p>
          </section>

          <section className="bg-orange-600 text-white p-10 lg:p-16 rounded-[3rem] space-y-6 shadow-xl shadow-orange-100">
            <h2 className="text-3xl font-bold">O Nosso Jeito de Fazer</h2>
            <p className="text-xl leading-relaxed opacity-90">
              Jeovane Monteiro Miguel acredita que temos uma força incrível na nossa cultura. Vemos isso na garra de quem trabalha nas ruas e na tradição de poupar em grupo, como no <strong>Kixikila</strong>. 
            </p>
            <p className="text-xl leading-relaxed opacity-90">
              A educação que trazemos aqui não quer mudar quem tu és, mas sim dar-te ferramentas para que o teu esforço valha cada vez mais a pena.
            </p>
          </section>

          <section className="text-center py-12">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-4xl text-orange-500 font-serif italic">"</div>
              <p className="text-2xl font-medium text-gray-800 leading-relaxed">
                Saber de dinheiro não é para ser rico de um dia para o outro. É para seres livre e não deixares que as contas decidam por ti.
              </p>
              <button onClick={onBack} className="mt-8 text-orange-600 font-bold hover:underline">
                Voltar ao Início
              </button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
