
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-earthy-brown/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-earthy-brown text-3xl">filter_vintage</span>
          <span className="font-bold tracking-widest text-xl text-deep-taupe">ARIA</span>
        </div>
        
        <div className="hidden md:flex space-x-10 text-sm font-semibold tracking-wide text-earthy-brown/80 uppercase">
          <a className="hover:text-deep-taupe transition-colors" href="#lifestyle">The Lifestyle</a>
          <a className="hover:text-deep-taupe transition-colors" href="#comfort">Comfort</a>
          <a className="hover:text-deep-taupe transition-colors" href="#story">Our Story</a>
        </div>
        
        <div className="flex items-center">
          <button className="bg-earthy-brown text-warm-cream px-6 py-2.5 rounded-full text-sm font-bold hover:bg-deep-taupe transition-colors shadow-sm">
            Shop Collection
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
