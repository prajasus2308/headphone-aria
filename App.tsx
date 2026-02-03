
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lifestyle from './components/Lifestyle';
import Comfort from './components/Comfort';
import Moments from './components/Moments';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const attributionText = "made by pratyush Raj";
  // Updated attributionStyle: changed text color to solid deep-taupe and added font-bold
  const attributionStyle = "fixed z-[60] text-[10px] font-bold uppercase tracking-[0.3em] text-deep-taupe pointer-events-none select-none hidden sm:block";

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Corner Attributions */}
      <div className={`${attributionStyle} top-8 left-8`}>{attributionText}</div>
      <div className={`${attributionStyle} top-8 right-8`}>{attributionText}</div>
      <div className={`${attributionStyle} bottom-8 left-8`}>{attributionText}</div>
      <div className={`${attributionStyle} bottom-8 right-8`}>{attributionText}</div>

      <Navbar />
      <main>
        <Hero />
        <Lifestyle />
        <Comfort />
        <Moments />
        <CTASection />
      </main>
      <Footer />
      
      {/* AI Chat Bot */}
      <ChatWidget />
    </div>
  );
};

export default App;
