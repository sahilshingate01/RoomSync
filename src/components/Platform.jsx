import React from 'react';
import { motion } from 'framer-motion';
import { User, Link2, Home } from 'lucide-react';

const Platform = () => {
  const features = [
    {
      id: 'Group 1',
      icon: <User className="text-blue-400 w-5 h-5" />,
      title: 'Nestly Profiles',
      text: 'Showcase your lifestyle, preferences, and deal-breakers in a beautiful, interactive card.'
    },
    {
      id: 'Group 2',
      icon: <Link2 className="text-violet-400 w-5 h-5" />,
      title: 'Connect',
      text: 'Smart scheduling for "vibe checks" and virtual apartment tours.'
    },
    {
      id: 'Group 3',
      icon: <Home className="text-teal-400 w-5 h-5" />,
      title: 'Listings',
      text: 'High-definition listings with verified photos and room dimensions.'
    }
  ];

  return (
    <section className="bg-bg-void py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left - Features */}
        <div className="text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-jakarta font-bold leading-tight mb-4"
          >
            The platform built <br />
            <span className="text-blue-primary">for your lifestyle</span>
          </motion.h2>

          <div className="space-y-12 mt-16">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  {f.icon}
                  <h3 className="text-white font-bold text-lg font-jakarta">{f.title}</h3>
                </div>
                <p className="text-gray-400 text-sm font-dm leading-relaxed max-w-sm">
                  {f.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right - Tablet Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            scale: { duration: 0.6 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative aspect-[3/4] max-w-[500px] mx-auto w-full"
        >
          {/* Outer Frame */}
          <div className="bg-[#1A1F35] rounded-[40px] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10 w-full h-full relative overflow-hidden">
            {/* Inner Screen */}
            <div className="bg-blue-primary rounded-[32px] w-full h-full flex overflow-hidden">
              {/* Left Panel */}
              <div className="w-[45%] bg-white p-8 flex flex-col gap-6">
                {['Profiles', 'Connect', 'Listings'].map((item, i) => (
                  <div key={item} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-lg ${i === 0 ? 'bg-blue-100 text-blue-600' : i === 1 ? 'bg-violet-100 text-violet-600' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                        <div className="w-3 h-3 rounded-sm bg-current" />
                      </div>
                      <span className="text-gray-900 font-bold text-[10px] uppercase tracking-wider">Nestly {item}</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full bg-current opacity-20 w-[${60 + (i * 15)}%]`} />
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3].map(d => <div key={d} className="w-1 h-1 rounded-full bg-gray-200" />)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Panel */}
              <div className="flex-1 bg-bg-deep relative overflow-hidden flex flex-col items-center justify-center p-8">
                {/* Rotating Glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-violet-600/20 to-blue-600/20 blur-3xl"
                />
                
                {/* Center Icon */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <Home className="text-white w-12 h-12" />
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-white' : 'bg-white/20'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;
