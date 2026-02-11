
import React from 'react';
import { Page } from '../App';

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ category, title, excerpt, onClick }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full text-left">
    <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">{category}</span>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{excerpt}</p>
    <button 
      onClick={onClick}
      className="text-orange-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
    >
      Ler Artigo Completo <span>→</span>
    </button>
  </div>
);

interface ArticlesProps {
  onBack: () => void;
  onReadMore: (page: Page) => void;
}

export const Articles: React.FC<ArticlesProps> = ({ onBack, onReadMore }) => {
  const articleList = [
    {
      category: "Gestão Mensal",
      title: "Como organizar o salário mesmo ganhando pouco",
      excerpt: "O segredo não é quanto ganhas, mas como divides o que tens para proteger o essencial.",
      target: 'article-organize-salary' as const
    },
    {
      category: "Educação Prática",
      title: "O que é educação financeira e por que ela muda vidas",
      excerpt: "Descobre como o conhecimento sobre dinheiro traz paz à família e liberdade de escolha.",
      target: 'article-why-fined' as const
    },
    {
      category: "Prevenção",
      title: "Erros financeiros mais comuns que impedem o progresso",
      excerpt: "Identifica os pequenos gastos invisíveis e a armadilha de viver acima das possibilidades.",
      target: 'article-common-errors' as const
    },
    {
      category: "Conceitos Fundamentais",
      title: "Diferença entre gastar, poupar e investir",
      excerpt: "Entende o tempo do dinheiro e como passar do consumo à construção de património.",
      target: 'article-spend-save-invest' as const
    },
    {
      category: "Estilo de Vida",
      title: "Como criar hábitos financeiros saudáveis no dia a dia",
      excerpt: "Dicas práticas para manter a consistência no registo e nas poupanças mensais.",
      target: 'article-healthy-habits' as const
    },
    {
      category: "Tradição & Poupança",
      title: "Kixikila Moderno: Usar a Tradição com Disciplina",
      excerpt: "Como transformar o valor recebido no kixikila em investimentos que duram para o futuro.",
      target: 'article-kixikila' as const
    }
  ];

  return (
    <section className="py-12 lg:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-6 max-w-5xl">
        <button 
          onClick={onBack}
          className="text-gray-500 hover:text-orange-600 font-medium mb-10 flex items-center gap-2 transition-colors"
        >
          <span>←</span> Início
        </button>

        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Artigos <span className="text-orange-600">Educativos</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Explora o nosso arquivo de conhecimento prático. Aqui encontras guias rápidos adaptados à nossa realidade sobre como gerir o teu dinheiro.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleList.map((article, index) => (
            <ArticleCard 
              key={index}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              onClick={() => onReadMore(article.target)}
            />
          ))}
        </div>

        <div className="mt-20 p-8 bg-orange-50 rounded-[2rem] text-center border border-orange-100">
          <p className="text-orange-800 font-medium italic">"O conhecimento é o único bem que ninguém nos pode tirar." — Jeovane Monteiro Miguel</p>
        </div>
      </div>
    </section>
  );
};
