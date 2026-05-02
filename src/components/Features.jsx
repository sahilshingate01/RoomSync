import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, Building2 } from 'lucide-react';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-full px-4 py-1 border border-gray-200 mb-6"
          >
            Welcome to Nestly
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-jakarta font-bold text-[#1E293B]"
          >
            Designed for the modern dweller
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* CARD 1 - Dark UI Mockup */}
          <motion.div 
            variants={cardVariants}
            className="bg-[#0F1629] rounded-[32px] p-8 overflow-hidden relative group h-[320px]"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="text-white/40 text-xs font-jakarta">Harmony</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-[80%] self-start backdrop-blur-sm">
                  <p className="text-white text-xs leading-relaxed">Hey! I saw your profile. I think we'd be a great match for the 2BR in Brooklyn.</p>
                </div>
                <div className="bg-blue-primary rounded-2xl p-4 max-w-[80%] self-end">
                  <p className="text-white text-xs leading-relaxed">That's awesome! Let's schedule a vibe check for this weekend?</p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gray-700" />
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0F1629]" 
                    />
                  </div>
                  <span className="text-white/60 text-xs font-dm">Jordan is typing...</span>
                </div>
                <button className="bg-blue-primary text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider hover:bg-blue-vivid transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 - Verified Only */}
          <motion.div 
            variants={cardVariants}
            className="bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] rounded-[32px] p-8 flex flex-col justify-end group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <ShieldCheck className="text-white w-12 h-12 mb-6" />
            <h3 className="text-white font-jakarta font-bold text-2xl mb-3">Verified Only</h3>
            <p className="text-white/70 text-sm font-dm leading-relaxed">
              Every member undergoes a multi-step background and identity check for total peace of mind.
            </p>
          </motion.div>

          {/* CARD 3 - Instant Chat */}
          <motion.div 
            variants={cardVariants}
            className="bg-gradient-to-br from-[#0F2A2A] to-[#134E4A] rounded-[32px] p-8 flex flex-col justify-end group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <MessageCircle className="text-teal-400 w-10 h-10 mb-6" />
            <h3 className="text-white font-jakarta font-bold text-2xl mb-3">Instant Chat</h3>
            <p className="text-white/60 text-sm font-dm leading-relaxed mb-6">
              Secure, encrypted messaging built into the platform.
            </p>
            <div className="flex items-center">
              {['bg-teal-400', 'bg-violet-400', 'bg-blue-400'].map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0F2A2A] ${color} ${i !== 0 ? '-ml-2' : ''}`} />
              ))}
            </div>
          </motion.div>

          {/* CARD 4 - Premium Listings */}
          <motion.div 
            variants={cardVariants}
            className="bg-gradient-to-br from-[#4C1D95] to-[#6D28D9] rounded-[32px] p-8 flex flex-col justify-end group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <Building2 className="text-violet-300 w-10 h-10 mb-6" />
            <h3 className="text-white font-jakarta font-bold text-2xl mb-3">Premium Listings</h3>
            <p className="text-white/60 text-sm font-dm leading-relaxed">
              Access exclusive apartments that never hit the public market.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
