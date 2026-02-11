
import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Entre em Contato</h1>
          
          <div className="bg-white border border-orange-100 rounded-[2.5rem] p-10 lg:p-16 shadow-xl shadow-orange-50/50">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Para dúvidas, sugestões ou parcerias, entre em contacto pelo email:
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:economialaranja@gmail.com" 
                className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-orange-600 transition-colors break-all underline decoration-orange-200 underline-offset-8"
              >
                economialaranja@gmail.com
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-50">
              <p className="text-gray-400 text-sm">
                Respondemos normalmente num prazo de 24 a 48 horas úteis.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-gray-500">
            <p>Siga-nos também nas redes sociais para conteúdos diários.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
