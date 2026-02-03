
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:pt-44 md:pb-24">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-earthy-brown font-bold tracking-[0.2em] uppercase text-sm block mb-6">
          The New Standard of Ease
        </span>
        <h1 className="text-5xl md:text-[5.5rem] font-serif italic text-deep-taupe leading-[1.1] mb-10">
          Beautifully quiet, <br />
          <span className="not-italic font-bold">perfectly yours.</span>
        </h1>
        <p className="text-lg md:text-2xl text-earthy-brown/80 max-w-2xl mx-auto font-medium leading-relaxed">
          Designed for those who find beauty in the everyday. Experience audio that fits into your life as naturally as a favorite sweater.
        </p>
      </div>
    </section>
  );
};

export default Hero;
