
import React from 'react';

interface ArticleSalaryOrganizationProps {
  onBack: () => void;
}

export const ArticleSalaryOrganization: React.FC<ArticleSalaryOrganizationProps> = ({ onBack }) => {
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
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Guia de Gestão Mensal</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Como organizar o salário mensal de forma inteligente
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed italic">
            Estratégias práticas para fazer o dinheiro chegar ao fim do mês e ainda garantir a tua poupança.
          </h2>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
          <p>
            Para muitos trabalhadores, o dia do pagamento é um misto de alívio e ansiedade. O alívio de ver o saldo da conta subir é rapidamente substituído pela preocupação de como fazer esse valor esticar até ao próximo mês. Organizar o salário de forma inteligente não é uma tarefa impossível, nem requer conhecimentos avançados de contabilidade. Requer, acima de tudo, planeamento antecipado e uma mudança consciente de hábitos.
          </p>

          <p>
            O primeiro passo fundamental é o <strong>planeamento antes do gasto</strong>. Muitas pessoas cometem o erro de começar a gastar assim que recebem, pensando que "depois logo se vê o que sobra". A organização inteligente funciona ao contrário: tu deves decidir o destino de cada cêntimo antes mesmo de o gastar. Uma técnica simples e muito eficaz é a regra dos 50-30-20. Nela, tentas dedicar 50% do teu salário a necessidades básicas (renda, luz, água, alimentação), 30% a desejos pessoais (lazer, pequenos luxos) e, crucialmente, 20% a poupança ou pagamento de dívidas.
          </p>

          <p>
            No entanto, sabemos que para o trabalhador comum, muitas vezes as necessidades básicas consomem mais do que metade do rendimento. Nestes casos, o foco deve ser o <strong>controlo rigoroso das despesas variáveis</strong>. Pequenos gastos diários, como lanches fora de casa ou assinaturas de serviços que mal utilizas, agem como "ralos" por onde o teu salário escorre silenciosamente. Ao registares estes gastos durante um mês, terás uma visão clara de onde podes cortar sem sacrificar o teu bem-estar essencial.
          </p>

          <p>
            Outro hábito transformador é o de <strong>"pagar-te a ti primeiro"</strong>. Em vez de esperares pelo fim do mês para ver o que sobrou para poupar, retira uma pequena quantia assim que o salário cai na conta. Mesmo que comeces com um valor simbólico, este gesto cria a mentalidade de que o teu futuro e a tua segurança financeira são uma prioridade, e não um resto. É este hábito que permite construir um fundo de emergência, essencial para que qualquer imprevisto não se transforme numa dívida sufocante.
          </p>

          <p>
            Na nossa realidade angolana e africana, onde a entreajuda familiar é comum, organizar o salário também envolve saber gerir as expectativas dos outros. É importante incluir no teu planeamento mensal uma categoria para o apoio familiar, se for o caso, mas garantindo que isso não compromete a tua própria subsistência. Um gestor inteligente sabe que, para ajudar os outros a longo prazo, precisa de estar com as suas próprias contas em ordem.
          </p>

          <p className="font-medium text-gray-900 bg-orange-50 p-8 rounded-3xl border-l-4 border-orange-500 italic">
            Organizar o salário não é sobre privação, mas sobre liberdade. Quando controlas o teu dinheiro, deixas de ser um passageiro da tua própria vida financeira e passas a ser o condutor. Lembra-te: o segredo não está na quantidade de dinheiro que recebes, mas na qualidade das decisões que tomas com ele todos os dias.
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
