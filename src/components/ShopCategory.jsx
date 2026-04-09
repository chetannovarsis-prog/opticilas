import React from 'react';
import { motion } from 'framer-motion';

const ShopCategory = () => {
  const cards = [
    { title: 'Elegant Frames', subtitle: 'Timeless optical styles', image: '/elegent.png', size: 'md:col-span-2' },
    { title: 'Luxury Shades', subtitle: 'UV protection in style', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop', size: 'md:col-span-1' },
    { title: '2026 Trends', subtitle: 'Limited Edition pieces', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop', size: 'md:col-span-3' },
  ];

  return (
    <section className="py-20 bg-brand-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary mb-4">Shop by Collection</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group h-[400px] ${card.size}`}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-4 transition-transform duration-500">
                <p className="text-brand-secondary font-medium text-sm mb-2">{card.subtitle}</p>
                <h3 className="text-3xl font-heading font-bold text-white mb-6 tracking-tight">{card.title}</h3>
                <button className="px-6 py-3 bg-white text-brand-charcoal rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-secondary">
                  Explore Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
