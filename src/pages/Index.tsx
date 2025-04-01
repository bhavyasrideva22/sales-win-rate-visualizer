
import React from 'react';
import Header from '@/components/Header';
import WinRateCalculator from '@/components/WinRateCalculator';
import InfoSection from '@/components/InfoSection';
import SEOContent from '@/components/SEOContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-white">
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-b from-primary/90 to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              B2B Sales Win Rate Calculator
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              Calculate, analyze, and improve your sales team's performance with our professional win rate calculator
            </p>
            <a 
              href="#calculator" 
              className="inline-block bg-accent text-charcoal font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-accent/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>
        
        <InfoSection />
        <WinRateCalculator />
        <SEOContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
