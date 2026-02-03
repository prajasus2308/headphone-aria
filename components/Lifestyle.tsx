
import React from 'react';

const Lifestyle: React.FC = () => {
  return (
    <section id="lifestyle" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Large Card */}
        <div className="lg:col-span-7 relative group overflow-hidden rounded-[2.5rem] shadow-xl">
          <img 
            alt="Morning Serenity Lifestyle" 
            className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6G1IV9EMHMCJlsfp8Hl5JNngKbfkVkfbwohjCJDvrfhqE4vQFr4jTwaz8k5ZutqWOGU0ve9hM599Ls7_xsvABdMb4vLBLWkVWoLiksN-H40836-SOfsVxifhmF3mNdehuIsDdU3n3aqkwRxF7Mokh9Jiu5KhsxNI4bEqF1mgcQDl352CC-pq5C0GO4hT4yvJIedwhRq07BujKKICQEX39EwDQ_rXTcf6h34VPxN-JPl8PSdce6C54xsEvXDJ7eDE3KR9EZH3J9Rk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-10 left-10 text-warm-cream">
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-2">Aria Essentials</p>
            <h3 className="text-4xl font-serif">Morning Serenity</h3>
          </div>
        </div>

        {/* Sidebar Info & Small Image */}
        <div className="lg:col-span-5 space-y-8 h-full flex flex-col">
          <div className="bg-soft-sand p-12 rounded-[2.5rem] border border-earthy-brown/5 flex-grow flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-deep-taupe mb-6 leading-tight">The Art of Living</h2>
            <p className="text-earthy-brown leading-relaxed text-lg mb-8">
              We believe technology shouldn't feel cold. It should be an invitation to slow down, breathe, and enjoy the soundtrack of your day.
            </p>
            <button className="flex items-center text-deep-taupe font-bold group w-fit">
              Explore Comfort 
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          
          <div className="rounded-[2.5rem] overflow-hidden shadow-md h-[260px]">
            <img 
              alt="Detail of textures" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV1RO45bmKXBauLEHaGFCFUMOqeaOVpd6IZsPz2L9BXGXeqXsS5s7w4se2Q-BXDQHzQsAPR-vODzvflRd47D8_9Czc2TJtj7O_uGc7jQhAXEyf-Z7RjwzJVeRCifodrmkznejSu_4gZj9y-mUgcfBDOBk4-rwvMsOESftC834iNWz_h0DlOqqC5r5ejseICJX-aTPPGNvNP6F-XDLK0T39X2LeBmmNp_OK6rXqAOlO4CPMDklEQ2kmS2o-agQ2fKNXFPLD9UkZzkE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
