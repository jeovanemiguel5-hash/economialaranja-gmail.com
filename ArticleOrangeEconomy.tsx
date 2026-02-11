
import React from 'react';

interface ArticleOrangeEconomyProps {
  onBack: () => void;
}

export const ArticleOrangeEconomy: React.FC<ArticleOrangeEconomyProps> = ({ onBack }) => {
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
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Conceito Central</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight text-left">
            O que é Economia Laranja e por que ela importa
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed italic text-left">
            Descubra como a criatividade, a cultura e o conhecimento se tornaram os motores da nova economia global.
          </h2>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
          <p>
            O termo "Economia Laranja" pode parecer moderno ou até misterioso para muitos, mas ele descreve algo que já está presente em quase todos os aspetos da nossa vida contemporânea. Cunhado originalmente por consultores do Banco Interamericano de Desenvolvimento (BID), o conceito refere-se ao conjunto de atividades económicas que têm como base a criatividade, a cultura e a propriedade intelectual. O nome "laranja" foi escolhido por ser uma cor historicamente associada à criatividade, ao entretenimento e ao aprendizado em diversas culturas.
          </p>

          <p>
            Diferente da economia tradicional, que se foca na extração de recursos naturais ou na manufatura industrial massiva, a Economia Laranja coloca o talento humano no centro do palco. Aqui, o valor não vem do peso de uma mercadoria, mas sim da ideia que ela carrega. Estamos a falar de um espetro vasto que inclui as artes visuais, o design, a moda, a arquitetura, a publicidade, o software, os videojogos, a música e até a gastronomia. É uma economia baseada no conhecimento, onde o capital mais valioso não está num cofre, mas dentro da mente das pessoas.
          </p>

          <p>
            Porque é que isto importa tanto para o desenvolvimento? Primeiro, porque a Economia Laranja é uma fonte inesgotável de recursos. Enquanto o petróleo e os minerais acabam, a criatividade humana é renovável e infinita. Em segundo lugar, este setor tem uma capacidade única de gerar emprego, especialmente entre os jovens. Num mundo cada vez mais automatizado por robôs e inteligência artificial, as competências criativas — a empatia, a imaginação e a capacidade de contar histórias — são as mais difíceis de replicar, tornando-se altamente competitivas no mercado de trabalho.
          </p>

          <p>
            Além disso, a Economia Laranja tem um papel social crucial. Ela permite que países e comunidades valorizem a sua identidade cultural única, transformando tradições, sons e imagens locais em produtos e serviços que podem ser exportados para o mundo inteiro. Isto não só gera rendimento, mas também fortalece o orgulho nacional e a coesão social. Em regiões como a nossa, em África, onde o talento criativo abunda em cada esquina, este modelo económico representa uma oportunidade de ouro para saltar etapas de desenvolvimento e construir um futuro baseado na inovação e na sustentabilidade.
          </p>

          <p className="font-medium text-gray-900 bg-orange-50 p-8 rounded-3xl border-l-4 border-orange-500 italic">
            Em conclusão, a Economia Laranja não é apenas um nicho para artistas; é uma estratégia robusta para o crescimento económico do século XXI. Ela convida-nos a olhar para a nossa cultura não apenas como algo a ser preservado em museus, mas como um ativo vivo e vibrante que pode sustentar famílias e transformar nações. Importa porque humaniza o mercado e prova que as nossas melhores ideias são, de facto, a nossa maior riqueza.
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
