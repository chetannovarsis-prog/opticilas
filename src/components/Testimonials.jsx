import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jennifer',
      role: 'Fashion Designer',
      text: 'The quality of the frames from Visionix is unparalleled. They are lightweight yet sturdy, and the design is truly contemporary.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Creative Director',
      text: "I've tried many brands, but the vision clarity and the fit I got here are exceptional. Plus, the premium feel is real.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Marketing Executive',
      text: 'Their customer service is top-notch. I used the "Enquire Now" feature and got a response within minutes. Highly recommended!',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 bg-white/10 rounded-full mb-6"
          >
            <Quote className="w-8 h-8 text-brand-accent" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">What Our Clients Say</h2>
          <p className="text-white/60 max-w-lg mx-auto">Trusted by thousands of style enthusiasts worldwide.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'fill-brand-accent text-brand-accent' : 'text-white/20'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-body italic mb-10 leading-relaxed text-white/90">
                    "{review.text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-brand-accent/30 mb-4"
                    />
                    <h4 className="text-lg font-heading font-bold">{review.name}</h4>
                    <p className="text-sm text-brand-accent font-medium uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* CSS for custom Swiper pagination colors in this section */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: white !important; opacity: 0.3; }
        .swiper-pagination-bullet-active { background: #A68A64 !important; opacity: 1; }
      `}} />
    </section>
  );
};

export default Testimonials;
