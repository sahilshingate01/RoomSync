import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-lg bg-bg-void/75 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-primary rounded-[1px]" />
            ))}
          </div>
          <span className="font-jakarta font-bold text-lg text-white tracking-tight">
            RoomSync
          </span>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Discover', 'Safety', 'Pricing', 'About'].map((item) => (
            <Link 
              key={item} 
              to={`#${item.toLowerCase()}`}
              className="text-sm font-dm text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div>
          <button className="bg-blue-primary hover:bg-blue-vivid text-white px-5 py-2 rounded-full text-sm font-semibold font-jakarta transition-all shadow-[0_0_20px_rgba(36,99,235,0.4)] hover:shadow-[0_0_30px_rgba(36,99,235,0.6)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
