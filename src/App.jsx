import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Solution from './components/Solution';
import Platform from './components/Platform';
import MapSection from './components/MapSection';
import CTA from './components/CTA';
import Footer from './components/Footer';

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  useLenis();

  return (
    <main className="bg-[#04060F] font-dm overflow-x-hidden selection:bg-blue-primary selection:text-white">
      <Navbar />
      
      {/* Hero has its own entry animation in the component */}
      <Hero />
      
      <SectionWrapper>
        <SocialProof />
      </SectionWrapper>
      
      <SectionWrapper>
        <Features />
      </SectionWrapper>
      
      <SectionWrapper>
        <Solution />
      </SectionWrapper>
      
      <SectionWrapper>
        <Platform />
      </SectionWrapper>
      
      <SectionWrapper>
        <MapSection />
      </SectionWrapper>
      
      <SectionWrapper>
        <CTA />
      </SectionWrapper>
      
      <Footer />
    </main>
  );
}
