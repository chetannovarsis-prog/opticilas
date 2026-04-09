import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
  const categories = [
    { name: 'Frames', image: '/cat-frames.png', count: '120+ Styles' },
    { name: 'Sunglasses', image: '/cat-sunglasses.png', count: '80+ Styles' },
    { name: 'New Collection', image: '/cat-new.png', count: '2026 Edition' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer text-center"
            >
              <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 mx-auto">
                <div className="absolute inset-0 bg-brand-accent/10 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-cream shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
                  />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                {cat.name}
              </h3>
              <p className="text-sm text-brand-primary/50 font-body mt-1">
                {cat.count}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
