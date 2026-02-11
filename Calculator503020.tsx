
import React, { useState } from 'react';

interface Calculator503020Props {
  onBack: () => void;
}

export const Calculator503020: React.FC<Calculator503020Props> = ({ onBack }) => {
  const [salary, setSalary] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const formatKwanza = (val: number) => {
    return new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(val);
  };

  const essentials = salary * 0.5;
  const wants = salary * 0.3;
  const savings = salary * 0.2;

  const handleShare = () => {
    const text = `💰 Meu Plano Economia Laranja (50-30-20):\n\nSalário: ${formatKwanza(salary)}\n🏠 Essencial: ${formatKwanza(essentials)}\n🎮 Desejos: ${formatKwanza(wants)}\n🏦 Futuro: ${formatKwanza(savings)}\n\nOrganiza o teu kumbú em: economialaranja.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-orange-600 font-bold mb-10 transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Voltar
        </button>

        <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl shadow-slate-200 border border-slate-100">
          <header className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">Calculadora Inteligente</span>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tighter">Regra <span className="text-orange-600">50-30-20</span></h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Divide o teu salário conforme ensinado no vídeo do Jeovane.</p>
          </header>

          <div className="max-w-xl mx-auto mb-20">
            <div className="relative group">
              <label className="absolute -top-3 left-8 px-2 bg-white text-xs font-bold text-gray-400 group-focus-within:text-orange-600 transition-colors">Teu Salário Mensal (Kz)</label>
              <input 
                type="number" 
                value={salary || ''}
                onChange={(e) => setSalary(Number(e.target.value))}
                placeholder="0"
                className="w-full text-5xl lg:text-7xl font-black text-center py-10 rounded-[2rem] bg-slate-50 border-4 border-transparent focus:border-orange-200 focus:bg-white transition-all outline-none text-orange-600 placeholder:text-slate-200"
              />
            </div>
          </div>

          {/* Gráfico Visual */}
          <div className="mb-20">
            <div className="h-6 w-full bg-slate-100 rounded-full flex overflow-hidden p-1 gap-1">
              <div style={{ width: salary ? '50%' : '33.3%' }} className="h-full bg-orange-500 rounded-full transition-all duration-500 shadow-inner"></div>
              <div style={{ width: salary ? '30%' : '33.3%' }} className="h-full bg-blue-500 rounded-full transition-all duration-500 shadow-inner"></div>
              <div style={{ width: salary ? '20%' : '33.3%' }} className="h-full bg-green-500 rounded-full transition-all duration-500 shadow-inner"></div>
            </div>
            <div className="flex justify-between mt-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span className="text-orange-600">50% Essencial</span>
              <span className="text-blue-600">30% Desejos</span>
              <span className="text-green-600">20% Poupança</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-orange-50 rounded-[2.5rem] border border-orange-100">
              <h3 className="text-orange-900 font-bold mb-1 uppercase text-xs tracking-widest">Essencial</h3>
              <p className="text-3xl font-black text-orange-700">{formatKwanza(essentials)}</p>
              <p className="text-xs text-orange-800/60 mt-4 leading-relaxed italic">Renda, comida, táxi, luz e água.</p>
            </div>

            <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
              <h3 className="text-blue-900 font-bold mb-1 uppercase text-xs tracking-widest">Desejos</h3>
              <p className="text-3xl font-black text-blue-700">{formatKwanza(wants)}</p>
              <p className="text-xs text-blue-800/60 mt-4 leading-relaxed italic">Saídas, mambos e lazer.</p>
            </div>

            <div className="p-8 bg-green-50 rounded-[2.5rem] border border-green-100">
              <h3 className="text-green-900 font-bold mb-1 uppercase text-xs tracking-widest">Investir</h3>
              <p className="text-3xl font-black text-green-700">{formatKwanza(savings)}</p>
              <p className="text-xs text-green-800/60 mt-4 leading-relaxed italic">Kixikila, dívidas e futuro.</p>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <button 
              onClick={handleShare}
              className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all active:scale-95"
            >
              {copied ? '✅ COPIADO!' : '💾 COPIAR RESUMO DO PLANO'}
            </button>
            <p className="text-xs text-gray-400">Podes colar isto no teu WhatsApp para guardares o teu plano.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
