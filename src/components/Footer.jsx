import React from 'react';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const columns = [
    {
      title: 'Product',
      links: ['Discover', 'Safety', 'Pricing', 'Features']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms', 'Cookie Policy', 'Contact']
    }
  ];

  return (
    <footer className="bg-bg-void border-t border-white/5 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="grid grid-cols-2 gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-blue-primary rounded-[1px]" />
                ))}
              </div>
              <span className="font-jakarta font-bold text-lg text-white tracking-tight">
                Nestly
              </span>
            </div>
            <p className="text-gray-500 text-sm font-dm leading-relaxed max-w-[200px]">
              Find your people, find your place.
            </p>
          </div>

          {/* Link Cols */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-6 font-jakarta">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-500 text-sm hover:text-white transition-colors font-dm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-xs font-dm">
            © 2025 Nestly. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: <Twitter className="w-4 h-4" />, label: 'X' },
              { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
              { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
              { icon: <Github className="w-4 h-4" />, label: 'GitHub' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all shadow-sm"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
