
import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <article className="py-12 lg:py-20 animate-in fade-in duration-700">
      <div className="container mx-auto px-6 max-w-3xl">
        <button 
          onClick={onBack}
          className="text-orange-600 font-medium mb-10 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
        >
          <span>←</span> Voltar para o Início
        </button>

        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>
          <p className="text-gray-500 italic">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 text-justify">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">1. Respeito à sua Privacidade</h2>
            <p>
              No site Economia Laranja, a privacidade dos nossos visitantes é de extrema importância para nós. Esta política de privacidade descreve os tipos de informações pessoais que são recebidas e coletadas e como as utilizamos. Garantimos que qualquer informação fornecida voluntariamente, como através de formulários de contacto, será tratada com o máximo sigilo e profissionalismo.
            </p>
          </section>

          <section className="space-y-4 text-left">
            <h2 className="text-2xl font-bold text-gray-900">2. Uso de Cookies</h2>
            <p>
              Utilizamos cookies para armazenar informações sobre as preferências dos visitantes, registar informações específicas do utilizador sobre quais as páginas que o utilizador acede ou visita e personalizar o conteúdo da nossa página web com base no tipo de navegador dos visitantes ou outras informações que o visitante envia através do seu navegador. O objetivo é puramente melhorar a sua experiência de navegação e oferecer conteúdos mais relevantes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">3. Google AdSense e Cookies de Terceiros</h2>
            <p>
              O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no site Economia Laranja. O uso do cookie DART pelo Google permite que ele exiba anúncios para os utilizadores com base na sua visita ao nosso site e a outros sites na Internet.
            </p>
            <p>
              Os utilizadores podem optar por não utilizar o cookie DART visitando a política de privacidade da rede de anúncios e conteúdo do Google. Alguns dos nossos parceiros publicitários podem utilizar cookies e web beacons no nosso site. Os nossos parceiros publicitários incluem o Google AdSense.
            </p>
            <p className="text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
              Nota: O Economia Laranja não tem acesso ou controlo sobre estes cookies que são utilizados por anunciantes de terceiros. Você deve consultar as respetivas políticas de privacidade desses servidores de anúncios de terceiros para obter informações mais detalhadas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">4. Consentimento do Utilizador</h2>
            <p>
              Ao utilizar o nosso website, você concorda com a nossa política de privacidade e aceita os seus termos. Se você deseja desativar os cookies, poderá fazê-lo através das opções do seu navegador individual. Informações mais detalhadas sobre a gestão de cookies com navegadores específicos podem ser encontradas nos sites dos respetivos navegadores.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">5. Contacto</h2>
            <p>
              Se precisar de mais informações ou tiver alguma dúvida sobre a nossa política de privacidade, não hesite em contactar-nos através do e-mail oficial disponível na nossa página de contacto.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-100"
          >
            Entendido
          </button>
        </footer>
      </div>
    </article>
  );
};
