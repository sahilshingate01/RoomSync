import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield } from 'lucide-react';

const Solution = () => {
  return (
    <section className="relative bg-[#1A3BFF] py-24 px-6 md:px-16 overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 text-white fill-current">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-[#000014]/40 backdrop-blur-md border border-white/10 rounded-[40px] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden aspect-[4/3] flex flex-col">
            <div className="bg-[#0F1629] h-12 flex items-center justify-between px-6 rounded-t-[36px]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-primary" />
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Nestly</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-b from-blue-primary/20 to-transparent p-12 flex flex-col items-center justify-center text-center">
              <p className="text-white text-sm md:text-lg font-jakarta max-w-xs mb-12 leading-relaxed">
                Our Solution streamlines roommate matching, ensuring effortless connections for all renters.
              </p>
              
              {/* 3D Cloud Icon (CSS) */}
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-white/10 rounded-3xl rotate-12 blur-sm" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl -rotate-6 shadow-2xl" />
                <div className="absolute inset-2 bg-gradient-to-br from-white to-blue-200 rounded-2xl flex items-center justify-center shadow-inner">
                  <div className="w-10 h-3 bg-blue-primary/20 rounded-full blur-md absolute bottom-4" />
                  <Zap className="text-blue-primary w-10 h-10" />
                </div>
              </div>

              <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">Our Solution</span>
                <span className="text-blue-electric">◆</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-white text-4xl md:text-5xl font-jakarta font-bold leading-tight mb-12">
            Effortless matching, <br />
            zero stress.
          </h2>

          <div className="space-y-10">
            {/* Row 1 */}
            <div className="flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-bg-void rounded-2xl flex items-center justify-center shadow-xl">
                <Zap className="text-yellow-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xl font-jakarta mb-2">Rapid Results</h4>
                <p className="text-white/60 text-sm font-dm leading-relaxed">
                  Our users find their match 4x faster than on traditional classified sites.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-bg-void rounded-2xl flex items-center justify-center shadow-xl">
                <Shield className="text-blue-300 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xl font-jakarta mb-2">Protected Privacy</h4>
                <p className="text-white/60 text-sm font-dm leading-relaxed">
                  Your contact info remains hidden until you decide to share it.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 text-bg-void fill-current">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Solution;
