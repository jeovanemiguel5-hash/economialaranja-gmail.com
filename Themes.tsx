
import React from 'react';

interface ThemeCardProps {
  title: string;
  icon: string;
  description: string;
  onClick: () => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ title, icon, description, onClick }) => (
  <button 
    onClick={onClick}
    className="text-left p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    <div className="mt-4 text-orange-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
      Ver mais <span>→</span>
    </div>
  </button>
);

interface ThemesProps {
  onNavigate: (page: 'home' | 'economy' | 'finance') => void;
}

export const Themes: React.FC<ThemesProps> = ({ onNavigate }) => {
  const themes = [
    {
      title: "Lidar com o Dinheiro",
      icon: "📖",
      description: "Aprende o básico para nunca mais te sentires perdido com as tuas contas.",
      page: 'finance' as const
    },
    {
      title: "O Mundo e o Bolso",
      icon: "📊",
      description: "Entende como as notícias e os preços afetam a tua vida de um jeito fácil.",
      page: 'economy' as const
    },
    {
      title: "Dicas Práticas",
      icon: "💰",
      description: "Jeitos espertos de poupar e fazer o teu dinheiro sobrar no fim do mês.",
      page: 'finance' as const
    },
    {
      title: "Talento e Negócio",
      icon: "🎨",
      description: "Descobre como ganhar dinheiro com as coisas que tu sabes criar e fazer.",
      page: 'economy' as const
    }
  ];

  return (
    <section id="temas" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que vais aprender aqui</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tudo o que precisas para ter uma vida financeira tranquila, explicado de forma clara.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <ThemeCard 
              key={index} 
              title={theme.title}
              icon={theme.icon}
              description={theme.description}
              onClick={() => onNavigate(theme.page)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
