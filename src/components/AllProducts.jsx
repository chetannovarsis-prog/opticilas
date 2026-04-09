import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {
  const products = [
    {
      id: 5,
      name: 'Retro Round Gold',
      category: 'Frames',
      price: 95,
      originalPrice: 190,
      discount: '50%',
      image: '/3.png',
      isNew: true
    },
    {
      id: 6,
      name: 'Midnight Wayfarer',
      category: 'Sunglasses',
      price: 115,
      originalPrice: 230,
      discount: '50%',
      image: '/4.png',
      isNew: false
    },
    {
      id: 7,
      name: 'Cat Eye Azure',
      category: 'Sunglasses',
      price: 135,
      originalPrice: 270,
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop',
      isNew: true
    },
    {
      id: 8,
      name: 'Minimalist Titan',
      category: 'Frames',
      price: 155,
      originalPrice: 310,
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop',
      isNew: false
    }
  ];

  return (
    <section className="py-20 bg-brand-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-primary mb-4">Our Full Collection</h2>
          <p className="text-brand-primary/60 max-w-lg mx-auto">Explore our wide range of premium eyewear, from classic opticals to trendy sunglasses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border-2 border-brand-primary text-brand-primary rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all duration-500 shadow-xl">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
