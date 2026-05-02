import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  const pins = [
    { price: '$2,400/mo', top: '30%', left: '40%', delay: 0.2 },
    { price: '$1,800/mo', top: '55%', left: '60%', delay: 0.4 },
    { price: '$3,100/mo', top: '70%', left: '65%', delay: 0.6 },
  ];

  const filters = ['Budget', 'Location', 'Gender Preference', 'Furnished', 'Pet-Friendly'];

  return (
    <section className="bg-gradient-to-b from-bg-void to-bg-deep py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-white text-4xl md:text-5xl font-jakarta font-bold leading-tight">
            Explore your next <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-electric to-violet-primary">
              neighborhood
            </span>
          </h2>
        </motion.div>

        {/* Map Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] bg-[#0D1020] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)
            `
          }}
        >
          {/* Subtle City Blocks */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { w: '120px', h: '80px', t: '20%', l: '10%', r: '12deg' },
              { w: '100px', h: '120px', t: '40%', l: '30%', r: '-5deg' },
              { w: '150px', h: '60px', t: '15%', l: '50%', r: '8deg' },
              { w: '80px', h: '100px', t: '60%', l: '15%', r: '15deg' },
              { w: '140px', h: '90px', t: '50%', l: '75%', r: '-10deg' },
              { w: '110px', h: '110px', t: '75%', l: '45%', r: '2deg' },
            ].map((block, i) => (
              <div 
                key={i}
                className="absolute bg-blue-primary/10 rounded-xl"
                style={{
                  width: block.w,
                  height: block.h,
                  top: block.t,
                  left: block.l,
                  transform: `rotate(${block.r})`
                }}
              />
            ))}
          </div>

          {/* Price Pins */}
          {pins.map((pin, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 15, delay: pin.delay }}
              className="absolute group cursor-pointer"
              style={{ top: pin.top, left: pin.left }}
            >
              <div className="relative bg-white text-gray-900 font-bold text-xs px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-transform group-hover:-translate-y-1">
                {pin.price}
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar"
        >
          {filters.map((filter, i) => (
            <div
              key={filter}
              className={`shrink-0 px-6 py-2.5 rounded-full text-sm font-dm border transition-all cursor-pointer ${
                i === 0 
                  ? 'bg-blue-primary border-transparent text-white shadow-lg shadow-blue-primary/20' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {filter}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
