
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Themes } from './components/Themes';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { EconomyFinance } from './components/EconomyFinance';
import { FinancialEducation } from './components/FinancialEducation';
import { Articles } from './components/Articles';
import { ArticleEducationLife } from './components/ArticleEducationLife';
import { ArticleSalaryOrganization } from './components/ArticleSalaryOrganization';
import { ArticleCommonMistakes } from './components/ArticleCommonMistakes';
import { ArticleSavingInvesting } from './components/ArticleSavingInvesting';
import { ArticleOrangeEconomy } from './components/ArticleOrangeEconomy';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Assistant } from './components/Assistant';
import { Calculator503020 } from './components/Calculator503020';
import { ArticleBusinessFamily } from './components/ArticleBusinessFamily';
import { ArticleKixikila } from './components/ArticleKixikila';
import { ArticleSmartShopping } from './components/ArticleSmartShopping';
import { ArticleFirstSalary } from './components/ArticleFirstSalary';
import { ArticleDebtStress } from './components/ArticleDebtStress';
import { ArticleOrganizeSalary } from './components/ArticleOrganizeSalary';
import { ArticleCommonErrors } from './components/ArticleCommonErrors';
import { ArticleWhyFinEd } from './components/ArticleWhyFinEd';
import { ArticleSpendSaveInvest } from './components/ArticleSpendSaveInvest';
import { ArticleHealthyHabits } from './components/ArticleHealthyHabits';

export type Page = 
  | 'home' 
  | 'about' 
  | 'contact' 
  | 'articles' 
  | 'economy' 
  | 'finance' 
  | 'calculator'
  | 'privacy' 
  | 'terms'
  | 'article-life'
  | 'article-salary'
  | 'article-mistakes'
  | 'article-saving'
  | 'article-orange'
  | 'article-business-family'
  | 'article-kixikila'
  | 'article-smart-shopping'
  | 'article-first-salary'
  | 'article-debt-stress'
  | 'article-organize-salary'
  | 'article-common-errors'
  | 'article-why-fined'
  | 'article-spend-save-invest'
  | 'article-healthy-habits';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <div className="relative z-10">
              <About />
              <Themes onNavigate={setCurrentPage} />
              <CTA onExplore={() => setCurrentPage('articles')} />
            </div>
          </>
        );
      case 'calculator':
        return <Calculator503020 onBack={() => setCurrentPage('home')} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'articles':
        return <Articles onBack={() => setCurrentPage('home')} onReadMore={setCurrentPage} />;
      case 'economy':
        return <EconomyFinance onBack={() => setCurrentPage('home')} />;
      case 'finance':
        return <FinancialEducation onBack={() => setCurrentPage('home')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      case 'terms':
        return <TermsOfUse onBack={() => setCurrentPage('home')} />;
      case 'article-life':
        return <ArticleEducationLife onBack={() => setCurrentPage('articles')} />;
      case 'article-salary':
        return <ArticleSalaryOrganization onBack={() => setCurrentPage('articles')} />;
      case 'article-mistakes':
        return <ArticleCommonMistakes onBack={() => setCurrentPage('articles')} />;
      case 'article-saving':
        return <ArticleSavingInvesting onBack={() => setCurrentPage('articles')} />;
      case 'article-orange':
        return <ArticleOrangeEconomy onBack={() => setCurrentPage('articles')} />;
      case 'article-business-family':
        return <ArticleBusinessFamily onBack={() => setCurrentPage('articles')} />;
      case 'article-kixikila':
        return <ArticleKixikila onBack={() => setCurrentPage('articles')} />;
      case 'article-smart-shopping':
        return <ArticleSmartShopping onBack={() => setCurrentPage('articles')} />;
      case 'article-first-salary':
        return <ArticleFirstSalary onBack={() => setCurrentPage('articles')} />;
      case 'article-debt-stress':
        return <ArticleDebtStress onBack={() => setCurrentPage('articles')} />;
      case 'article-organize-salary':
        return <ArticleOrganizeSalary onBack={() => setCurrentPage('articles')} />;
      case 'article-common-errors':
        return <ArticleCommonErrors onBack={() => setCurrentPage('articles')} />;
      case 'article-why-fined':
        return <ArticleWhyFinEd onBack={() => setCurrentPage('articles')} />;
      case 'article-spend-save-invest':
        return <ArticleSpendSaveInvest onBack={() => setCurrentPage('articles')} />;
      case 'article-healthy-habits':
        return <ArticleHealthyHabits onBack={() => setCurrentPage('articles')} />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] relative selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* Background System - Profissional e Multinível */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Camada 1: Mesh Geométrico Sutil */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        {/* Camada 2: Luzes Suaves de Gradiente */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[150px] opacity-20 translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Assistant />
    </div>
  );
};

export default App;
