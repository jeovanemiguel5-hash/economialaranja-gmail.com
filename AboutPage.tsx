
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="bg-orange-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Educar para Prosperar</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Conhece a visão por trás da Economia Laranja e o nosso compromisso com a informação acessível.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">A Missão da Economia Laranja</h2>
              <p>
                A <strong>Economia Laranja</strong> nasceu do desejo de tornar a linguagem do dinheiro mais próxima das pessoas. Sabemos que termos técnicos podem afastar quem mais precisa de ajuda. Por isso, decidimos criar um portal onde a clareza e a simplicidade são as regras principais.
              </p>
              <p>
                Este é um projeto independente focado em <strong>literacia financeira</strong>. Não vendemos produtos financeiros nem fazemos recomendações de investimento. O nosso papel é fornecer a base teórica e prática para que tu possas entender as tuas próprias finanças com autonomia.
              </p>
            </div>

            <div className="bg-orange-600 text-white p-10 lg:p-16 rounded-[3rem] shadow-xl">
              <h2 className="text-3xl font-bold mb-6">O Nosso Compromisso Ético</h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Toda a informação partilhada aqui é fruto de pesquisa e dedicação. Comprometemo-nos a nunca prometer resultados impossíveis. Acreditamos no esforço, na paciência e no estudo constante como os únicos caminhos reais para a organização financeira duradoura.
              </p>
            </div>

            <div className="space-y-8 pt-10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 bg-orange-100 rounded-full flex items-center justify-center text-6xl shadow-inner mx-auto">
                    👨🏽‍💻
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Jeovane Monteiro Miguel</h3>
                  <p>
                    O criador e curador deste projeto é <strong>Jeovane Monteiro Miguel</strong>. Como entusiasta da educação e da economia criativa, Jeovane vê no conhecimento a ferramenta mais poderosa para a mudança social.
                  </p>
                  <p>
                    A sua visão para a Economia Laranja é criar uma comunidade informada, onde cada pessoa se sinta capaz de olhar para as suas contas sem medo e planear o seu caminho com esperança e inteligência.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-16 border-t border-gray-100 space-y-4">
              <p className="text-2xl font-medium text-gray-800 italic">
                "A educação financeira não é sobre ter mais dinheiro, é sobre ter mais opções na vida."
              </p>
              <p className="text-orange-600 font-bold">— Jeovane Monteiro Miguel</p>
              <div className="text-xs text-gray-400 mt-8">
                Aviso: Este site não fornece aconselhamento financeiro profissional. Consulte sempre um especialista antes de decisões de investimento.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
