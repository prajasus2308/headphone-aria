
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-44 px-6 text-center bg-soft-sand relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] border-[1px] border-earthy-brown rounded-full"></div>
        <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] border-[1px] border-earthy-brown rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-8xl font-serif text-deep-taupe mb-12 leading-tight">
          Bring elegance <br />
          <span className="italic">to your ears.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button className="w-full sm:w-auto bg-deep-taupe text-warm-cream px-14 py-6 rounded-full text-xl font-bold hover:bg-earthy-brown transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
            Order Aria — $349
          </button>
          <button className="w-full sm:w-auto px-14 py-6 rounded-full text-xl font-bold border-2 border-deep-taupe text-deep-taupe hover:bg-deep-taupe/5 transition-all">
            View Lookbook
          </button>
        </div>

        <div className="flex items-center justify-center space-x-3 text-earthy-brown font-medium">
          <span className="material-symbols-outlined text-xl">verified</span>
          <p>Complimentary gifting wrap and 45-day home trial.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
