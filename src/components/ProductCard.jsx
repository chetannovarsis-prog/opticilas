import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-brand-cream/50 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] rounded-2xl bg-brand-cream/30 overflow-hidden mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-brand-charcoal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">New</span>
          )}
          {product.discount && (
            <span className="bg-brand-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{product.discount} OFF</span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-brand-secondary transition-colors">
            <Heart className="w-5 h-5 text-brand-primary" />
          </button>
        </div>

        {/* Bottom Action */}
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <button className="w-full py-3 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-charcoal shadow-lg">
            <ShoppingBag className="w-4 h-4" />
            Enquire Now
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-2 space-y-1">
        <p className="text-xs text-brand-primary/40 font-medium uppercase tracking-widest">{product.category}</p>
        <h4 className="text-lg font-heading font-bold text-brand-primary truncate">{product.name}</h4>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-brand-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-brand-primary/30 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
