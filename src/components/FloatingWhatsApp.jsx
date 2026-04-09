import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:opacity-90 transition-opacity"
    >
      <FaWhatsapp className="w-6 h-6 fill-white" />
      <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">1</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
