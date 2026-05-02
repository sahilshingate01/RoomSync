import React from 'react';
import { motion } from 'framer-motion';
import { Home, Play, DollarSign } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-bg-deep py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#1A3BFF] via-[#2563EB] to-violet-primary rounded-[48px] p-12 md:p-20 overflow-hidden shadow-[0_40px_80px_rgba(36,99,235,0.3)] text-center"
        >
          {/* Decorative Blurred Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.08] blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.08] blur-[80px] translate-y-1/2 -translate-x-1/2" />

          {/* Floating Coin Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 bottom-12 w-24 h-24 rounded-full border-4 border-white/10 bg-white/5 backdrop-blur-sm hidden md:flex items-center justify-center shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="text-white w-5 h-5 fill-white" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-8 top-12 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-violet-400 hidden md:flex items-center justify-center shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <DollarSign className="text-white w-8 h-8" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <div className="w-14 h-14 bg-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-400/20 mb-8">
              <Home className="text-white w-7 h-7" />
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-jakarta font-bold mb-6">
              Unlock your perfect <br /> living situation
            </h2>

            <p className="text-white/70 text-sm md:text-base font-dm max-w-sm mx-auto mb-10 leading-relaxed">
              Join the 10,000+ people currently finding their next home on RoomSync. Early access members get 6 months of Premium for free.
            </p>

            {/* Email Row */}
            <div className="flex items-center bg-white rounded-full p-1.5 shadow-2xl max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-6 py-2 text-gray-800 text-sm outline-none font-dm"
              />
              <button className="bg-bg-void text-white px-8 py-2.5 rounded-full text-xs font-bold font-jakarta leading-none flex flex-col items-center justify-center min-w-[100px] hover:bg-gray-900 transition-colors">
                <span>JOIN</span>
                <span className="text-[10px] opacity-70 mt-0.5 uppercase tracking-wider">Waitlist</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
