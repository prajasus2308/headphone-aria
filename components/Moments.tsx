
import React from 'react';

const Moments: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-deep-taupe mb-8">Moments Made Better</h2>
        <p className="text-earthy-brown max-w-xl mx-auto text-lg leading-relaxed">
          From focused work hours to quiet sunsets, Aria seamlessly integrates into every chapter of your life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Item 1 */}
        <div className="md:col-span-4 aspect-[4/5] bg-soft-sand rounded-[2.5rem] overflow-hidden shadow-sm">
          <img 
            alt="Life Moment" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6G1IV9EMHMCJlsfp8Hl5JNngKbfkVkfbwohjCJDvrfhqE4vQFr4jTwaz8k5ZutqWOGU0ve9hM599Ls7_xsvABdMb4vLBLWkVWoLiksN-H40836-SOfsVxifhmF3mNdehuIsDdU3n3aqkwRxF7Mokh9Jiu5KhsxNI4bEqF1mgcQDl352CC-pq5C0GO4hT4yvJIedwhRq07BujKKICQEX39EwDQ_rXTcf6h34VPxN-JPl8PSdce6C54xsEvXDJ7eDE3KR9EZH3J9Rk"
          />
        </div>

        {/* Item 2 - Text + Image Combo */}
        <div className="md:col-span-8 bg-soft-sand rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-muted-clay/10">
            <h3 className="text-3xl font-serif text-deep-taupe mb-6 leading-tight">A Slower Pace</h3>
            <p className="text-earthy-brown text-lg leading-relaxed mb-8">
              Active noise cancellation that doesn't feel isolating—just a gentle reduction of the world's sharp edges.
            </p>
            <a href="#" className="text-deep-taupe font-bold underline decoration-muted-clay underline-offset-[12px] hover:text-earthy-brown transition-colors">
              Learn about Transparency Mode
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              alt="Nature Background" 
              className="w-full h-full object-cover min-h-[300px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV1RO45bmKXBauLEHaGFCFUMOqeaOVpd6IZsPz2L9BXGXeqXsS5s7w4se2Q-BXDQHzQsAPR-vODzvflRd47D8_9Czc2TJtj7O_uGc7jQhAXEyf-Z7RjwzJVeRCifodrmkznejSu_4gZj9y-mUgcfBDOBk4-rwvMsOESftC834iNWz_h0DlOqqC5r5ejseICJX-aTPPGNvNP6F-XDLK0T39X2LeBmmNp_OK6rXqAOlO4CPMDklEQ2kmS2o-agQ2fKNXFPLD9UkZzkE"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moments;
