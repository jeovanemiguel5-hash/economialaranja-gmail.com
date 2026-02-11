
import React from 'react';

interface ArticleEducationLifeProps {
  onBack: () => void;
}

export const ArticleEducationLife: React.FC<ArticleEducationLifeProps> = ({ onBack }) => {
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
            Educação Financeira: A Chave para Transformares o Teu Futuro
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed italic">
            Descobre por que saber gerir o teu dinheiro é a competência mais importante para uma vida equilibrada e livre.
          </h2>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
          <p>
            Muitos acreditam que a educação financeira é um tema exclusivo para quem trabalha em bancos ou para quem já tem muito dinheiro acumulado. No entanto, a verdade é que ela é uma ferramenta essencial para todos nós, independentemente da nossa profissão ou de quanto ganhamos mensalmente. Na sua essência, a educação financeira não é apenas sobre fórmulas matemáticas ou folhas de cálculo complexas; é sobre a liberdade de fazer escolhas conscientes e sobre a segurança de saber que o teu amanhã está devidamente protegido.
          </p>

          <p>
            Quando falamos em educação financeira, referimo-nos à capacidade de entender como o dinheiro funciona no mundo e, mais importante ainda, como ele deve funcionar na nossa vida pessoal. Muitas pessoas vivem num ciclo vicioso de trabalhar arduamente apenas para pagar contas, sentindo que o dinheiro desaparece mal chega à conta bancária. Este estado de "sobrevivência" constante gera uma ansiedade profunda que afecta não só a saúde mental, mas também as relações familiares e a produtividade no trabalho. Educar-se financeiramente permite quebrar estas correntes invisíveis, transformando o dinheiro de um "mestre cruel" num "servidor eficiente".
          </p>

          <p>
            Um dos pilares fundamentais desta mudança é o controlo. Saber exactamente para onde vai cada cêntimo dá-te o poder de decidir onde ele será mais útil. Não se trata de uma dieta financeira rigorosa onde deixas de gastar em lazer ou em coisas que te dão prazer, mas sim de gastar com propósito. Quando aprendes a planear, começas a distinguir entre necessidades fundamentais e desejos momentâneos. Esta clareza mental evita as compras por impulso, que são frequentemente as grandes vilãs de qualquer orçamento saudável, permitindo que os teus recursos sejam canalizados para o que realmente importa.
          </p>

          <p>
            Além disso, a educação financeira ensina a importância vital da reserva de emergência. Ter um valor guardado para imprevistos — como uma avaria no carro, uma infiltração em casa ou uma necessidade urgente de saúde — traz uma paz de espírito que não tem preço. Em vez de recorreres a empréstimos com juros altos que te endividam por anos, passas a ter a tua própria rede de segurança. Esta base sólida permite que, eventualmente, deixes de pensar apenas em poupar para não faltar e comeces a pensar em investir, fazendo com que o teu património cresça de forma sustentada ao longo do tempo.
          </p>

          <p>
            O impacto real desta aprendizagem reflecte-se directamente na tua qualidade de vida diária. Uma pessoa financeiramente educada dorme melhor, tem menos conflitos em casa e consegue planear férias, estudos ou a reforma sem entrar em pânico. A educação financeira muda vidas porque retira o peso sufocante da incerteza constante. Em vez de seres levado pelas marés instáveis da economia, passas a ser o capitão da tua própria embarcação, decidindo o rumo com confiança.
          </p>

          <p className="font-medium text-gray-900 bg-orange-50 p-8 rounded-3xl border-l-4 border-orange-500">
            Em resumo, a educação financeira é o caminho mais curto para a autonomia e para a liberdade de escolha. Ela não promete riqueza mágica de um dia para o outro, mas oferece um mapa seguro para construíres uma vida com dignidade e paz. Começar hoje, mesmo que seja com um pequeno passo de organização, é o maior gesto de carinho que podes ter pelo teu "eu" do futuro. Conhecimento é poder, e no mundo das finanças, esse poder chama-se liberdade.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-400">Por Jeovane Monteiro Miguel e equipa Economia Laranja</div>
          <button 
            onClick={onBack}
            className="px-6 py-2 bg-orange-100 text-orange-700 font-bold rounded-lg hover:bg-orange-200 transition-colors"
          >
            Voltar
          </button>
        </footer>
      </div>
    </article>
  );
};
