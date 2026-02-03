
import React from 'react';

const Comfort: React.FC = () => {
  return (
    <section id="comfort" className="py-32 bg-soft-sand/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-muted-clay/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl bg-warm-cream p-4">
              <img 
                alt="Headphone Detail" 
                className="w-full rounded-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV1RO45bmKXBauLEHaGFCFUMOqeaOVpd6IZsPz2L9BXGXeqXsS5s7w4se2Q-BXDQHzQsAPR-vODzvflRd47D8_9Czc2TJtj7O_uGc7jQhAXEyf-Z7RjwzJVeRCifodrmkznejSu_4gZj9y-mUgcfBDOBk4-rwvMsOESftC834iNWz_h0DlOqqC5r5ejseICJX-aTPPGNvNP6F-XDLK0T39X2LeBmmNp_OK6rXqAOlO4CPMDklEQ2kmS2o-agQ2fKNXFPLD9UkZzkE"
              />
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <span className="text-muted-clay font-bold tracking-widest uppercase text-sm block">Everyday Elegance</span>
            <h2 className="text-5xl font-serif text-deep-taupe leading-tight">Like a gentle embrace for your ears.</h2>
            <p className="text-lg text-earthy-brown leading-relaxed">
              Crafted with buttery-soft vegan leather and weightless alloys, Aria is built for all-day wear. Whether you're commuting through the city or curling up with a book, you'll forget you're even wearing them.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
              <div className="group">
                <span className="material-symbols-outlined text-muted-clay mb-4 text-4xl block group-hover:scale-110 transition-transform">eco</span>
                <h4 className="font-bold text-deep-taupe text-lg mb-2">Sustainable</h4>
                <p className="text-earthy-brown/70 leading-relaxed">Recycled earth-friendly materials crafted with care.</p>
              </div>
              <div className="group">
                <span className="material-symbols-outlined text-muted-clay mb-4 text-4xl block group-hover:scale-110 transition-transform">nest_eco_leaf</span>
                <h4 className="font-bold text-deep-taupe text-lg mb-2">Breathable</h4>
                <p className="text-earthy-brown/70 leading-relaxed">Cool-touch memory foam tech for extended comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comfort;
