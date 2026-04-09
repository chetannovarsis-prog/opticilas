import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Modern Aviator Rose',
      category: 'Sunglasses',
      price: 129,
      originalPrice: 258,
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop',
      isNew: true
    },
    {
      id: 2,
      name: 'Classic Urban Matte',
      category: 'Frames',
      price: 89,
      originalPrice: 178,
      discount: '50%',
      image: '/1.png',
      isNew: false
    },
    {
      id: 3,
      name: 'Crystal Clear Limited',
      category: 'Top Picks',
      price: 145,
      originalPrice: 290,
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop',
      isNew: true
    },
    {
      id: 4,
      name: 'Tortoise Shell Heritage',
      category: 'Frames',
      price: 110,
      originalPrice: 220,
      discount: '50%',
      image: '2.png',
      isNew: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary mb-4 italic tracking-tight">
              In the <span className="text-brand-accent">Spotlight</span>
            </h2>
            <p className="text-brand-primary/60 font-body max-w-sm">Handpicked styles that are currently making waves in the design world.</p>
          </div>
          <button className="text-brand-primary font-bold border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
