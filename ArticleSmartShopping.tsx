
import React from 'react';

interface ArticleSmartShoppingProps {
  onBack: () => void;
}

export const ArticleSmartShopping: React.FC<ArticleSmartShoppingProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-orange-600 font-medium mb-10 flex items-center gap-2"><span>←</span> Voltar</button>
        <header className="mb-12">
          <span className="text-orange-600 font-bold uppercase text-sm">Consumo Inteligente</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Compras Inteligentes: Como Fazer o Teu Dinheiro Render Mais no Mercado</h1>
        </header>
        <div className="prose prose-lg text-gray-700 space-y-8 text-justify">
          <h2 className="text-2xl font-bold text-gray-800">O planeamento começa antes de sair de casa</h2>
          <p>Com a subida dos preços, ir ao mercado ou ao supermercado sem uma lista é um perigo para o bolso. Acabamos por comprar por impulso ou levar coisas que já temos em casa. O planeamento é a tua melhor arma contra a inflação.</p>
          <h2 className="text-2xl font-bold text-gray-800">Compara preços e evita o desperdício</h2>
          <p>Aprende a olhar para o preço por quilo ou por unidade. Às vezes, a embalagem maior parece mais cara, mas rende muito mais tempo. Outra dica prática é evitar as marcas mais famosas só pelo nome; muitas vezes, marcas menos conhecidas têm a mesma qualidade por um preço mais baixo.</p>
          <div className="p-8 bg-orange-50 rounded-3xl border-l-4 border-orange-500">
            <strong>Conclusão Educativa:</strong> Gastar menos não é ser "mão-fechada", é ser inteligente. Cada cêntimo que poupas no mercado é um cêntimo que sobra para a tua paz de espírito.
          </div>
        </div>
      </div>
    </article>
  );
};
