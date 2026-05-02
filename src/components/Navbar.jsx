import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate(`/#${id}`);
    }
  };

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
            Nestly
          </span>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Discover', 'Safety', 'Pricing', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-sm font-dm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Auth / CTA */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-primary to-violet-primary flex items-center justify-center">
                  <User className="text-white w-3 h-3" />
                </div>
                <span className="text-white text-sm font-dm font-medium">{user.name}</span>
              </div>
              <button 
                onClick={logout}
                className="text-gray-400 hover:text-white transition-colors p-2"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <>
              <Link 
                to="/login"
                className="text-sm font-dm text-gray-400 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <button 
                onClick={() => navigate('/signup')}
                className="bg-blue-primary hover:bg-blue-vivid text-white px-5 py-2 rounded-full text-sm font-semibold font-jakarta transition-all shadow-[0_0_20px_rgba(36,99,235,0.4)] hover:shadow-[0_0_30px_rgba(36,99,235,0.6)]"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
