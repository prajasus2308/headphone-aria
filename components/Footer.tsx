
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 bg-deep-taupe text-warm-cream/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center space-x-2 mb-8">
              <span className="material-symbols-outlined text-warm-cream text-3xl">filter_vintage</span>
              <span className="font-bold tracking-widest text-2xl uppercase">ARIA</span>
            </div>
            <p className="text-warm-cream/60 max-w-sm leading-relaxed text-lg mb-8">
              Redefining the relationship between technology and comfort. We create tools for the mindful listener who values both sound and soul.
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-8">
            <h5 className="font-bold mb-8 text-warm-cream uppercase tracking-widest text-xs">Explore</h5>
            <ul className="space-y-4 text-warm-cream/60 text-sm font-medium">
              <li><a className="hover:text-warm-cream transition-colors" href="#">The Collection</a></li>
              <li><a className="hover:text-warm-cream transition-colors" href="#">Sustainability</a></li>
              <li><a className="hover:text-warm-cream transition-colors" href="#">Retailers</a></li>
              <li><a className="hover:text-warm-cream transition-colors" href="#">Support</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-11">
            <h5 className="font-bold mb-8 text-warm-cream uppercase tracking-widest text-xs">Connect</h5>
            <ul className="space-y-4 text-warm-cream/60 text-sm font-medium">
              <li><a className="hover:text-warm-cream transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-warm-cream transition-colors" href="#">Journal</a></li>
              <li><a className="hover:text-warm-cream transition-colors" href="#">Contact</a></li>
              <li><a className="hover:text-warm-cream transition-colors" href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-warm-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-warm-cream/40">© 2024 Aria Soundworks. All rights reserved.</p>
          <div className="flex space-x-12 text-sm text-warm-cream/40 font-medium">
            <a className="hover:text-warm-cream transition-colors" href="#">Ethics Policy</a>
            <a className="hover:text-warm-cream transition-colors" href="#">Terms of Use</a>
            <a className="hover:text-warm-cream transition-colors" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
