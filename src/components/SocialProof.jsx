import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const avatars = [
    'from-blue-400 to-indigo-500',
    'from-purple-400 to-pink-500',
    'from-green-400 to-teal-500',
    'from-yellow-400 to-orange-500',
    'from-red-400 to-pink-600',
  ];

  return (
    <section className="bg-white py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
      >
        {/* Avatars */}
        <div className="flex items-center">
          {avatars.map((gradient, i) => (
            <div 
              key={i}
              className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-tr ${gradient} ${i !== 0 ? '-ml-3' : ''} shadow-sm`}
            />
          ))}
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-yellow-400 text-lg">★</span>
            ))}
            <span className="text-gray-900 font-bold text-sm ml-2">4.9/5</span>
          </div>
          <p className="text-gray-500 text-xs font-dm">Average user rating</p>
        </div>

        {/* Text */}
        <div className="h-10 w-px bg-gray-200 hidden md:block" />
        
        <p className="text-gray-600 text-sm font-dm text-center md:text-left max-w-xs md:max-w-none">
          Trusted by <span className="text-gray-900 font-bold">10,000+ renters</span> across 50+ cities worldwide.
        </p>
      </motion.div>
    </section>
  );
};

export default SocialProof;
