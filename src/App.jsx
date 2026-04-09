import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ShopCategory from './components/ShopCategory';
import FeaturedProducts from './components/FeaturedProducts';
import AllProducts from './components/AllProducts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-body selection:bg-brand-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Categories />
        <ShopCategory />
        <FeaturedProducts />
        <AllProducts />
        <Testimonials />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
