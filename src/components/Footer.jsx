import React from 'react';  
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-extrabold tracking-tighter">
              VISIONIX<span className="text-brand-accent">.</span>
            </h3>
            <p className="text-white/60 font-body leading-relaxed max-w-xs">
              Defining the future of eyewear with timeless designs and modern precision. Join the Visionix revolution.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all duration-300 transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-brand-accent">Shop Collections</h4>
            <ul className="space-y-4 text-white/60 font-body">
              {['Reading Frames', 'Blue Light Glasses', 'Designer Sunglasses', 'Sport Eyewear', 'Accessories'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-accent rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-brand-accent">Company</h4>
            <ul className="space-y-4 text-white/60 font-body">
              {['About Our Brand', 'Store Locator', 'Track Order', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-brand-accent">Get in Touch</h4>
            <ul className="space-y-6 text-white/60 font-body">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/30 uppercase font-bold tracking-widest">Phone</p>
                  <p className="text-white font-medium">+1 (234) 567-890</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/30 uppercase font-bold tracking-widest">WhatsApp</p>
                  <p className="text-white font-medium">+1 (234) 999-000</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/30 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white font-medium">hello@visionix.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © 2026 Visionix Eyewear. All rights reserved. Designed with ❤️ for style.
          </p>
          <div className="flex gap-8 text-white/30 text-sm italic">
            <span>Secure SSL Encryption</span>
            <span>Worldwide Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
