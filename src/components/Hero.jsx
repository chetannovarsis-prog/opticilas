import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 mt-25 overflow-hidden bg-brand-cream/30">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/40 rounded-full blur-[100px] -mr-64 -mt-32 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[80px] -ml-32 -mb-16 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-12 z-10">
        {/* Left: Model Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 md:order-1"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/hero-model.png" 
              alt="Premium Eyewear Model" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Abstract Decorations */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-brand-accent rounded-tl-3xl z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-brand-accent rounded-br-3xl z-0"></div>
          <div className="absolute top-1/2 -right-4 w-12 h-12 bg-brand-accent/20 rounded-full blur-xl animate-pulse"></div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:order-2 space-y-6 md:space-y-8"
        >
          <div className="inline-block px-4 py-1.5 bg-brand-accent/10 rounded-full border border-brand-accent/20">
            <span className="text-brand-accent text-sm font-semibold tracking-wider uppercase">New Arrival 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-brand-primary leading-[1.1] tracking-tight">
            Unlock Your <br />
            <span className="text-gradient">Style Potential</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-primary/70 font-body max-w-lg leading-relaxed">
            Discover premium eyewear crafted for modern lifestyles. Precision engineering meets timeless aesthetics for the perfect vision.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold shadow-xl hover:bg-brand-charcoal transition-all duration-300 hover:scale-105 active:scale-95">
              Enquire Now
            </button>
            <button className="px-8 py-4 border-2 border-brand-primary/20 text-brand-primary rounded-full font-bold hover:bg-brand-primary/5 transition-all duration-300">
              Browse Collection
            </button>
          </div>

          {/* Floaters/Dots */}
          <div className="flex gap-2 pt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-brand-accent' : 'bg-brand-accent/20'}`}></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
