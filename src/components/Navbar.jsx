import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom'; // Added useLocation
import { Menu, X } from 'lucide-react'; // Import hamburger and close icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // 1. Dynamic Background and Sticky/Fixed Logic
  useEffect(() => {
    
    // Logic for Home Page (Transparency and Scroll Effect)
    if (isHomePage) {
      window.scrollTo(0, 0); // Ensure scroll is at the top when navigating back
      setScrolled(window.scrollY > 50); // Set initial state based on scroll
      
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    } else {
      // Logic for Other Pages (Always White)
      setScrolled(true); // Always force 'scrolled' state on non-home pages
      // No scroll listener needed here
    }
    
    return () => {};
    
  }, [isHomePage]); // Re-run when the page changes

  // --- Conditional Classes Logic ---

  let positionClass = '';
  let baseStyle = '';
  let logoColor = '';
  let linkColor = '';
  let buttonStyle = {};

  if (isHomePage) {
    // HOME PAGE: Fixed, transparent at top, white on scroll
    positionClass = 'fixed';
    baseStyle = scrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-transparent text-white';
    logoColor = scrolled ? 'text-yellow-600' : 'text-yellow-500';
    linkColor = scrolled ? 'text-gray-800 hover:text-yellow-600' : 'text-white hover:text-yellow-500';
    
    buttonStyle = {
      signIn: scrolled 
        ? 'border border-gray-400 text-gray-800 hover:bg-gray-100' 
        : 'border border-white text-white hover:bg-white hover:text-black',
      register: scrolled 
        ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
        : 'bg-white text-black hover:bg-gray-200',
    };
    
  } else {
    // OTHER PAGES: Sticky, white background, dark text (Always in 'scrolled' state visually)
    // NOTE: Tailwind's sticky only works if the container has a defined height/overflow.
    // We use sticky top-0, but page padding is required in App.jsx to avoid overlap.
    positionClass = 'sticky';
    baseStyle = 'bg-white text-gray-800 shadow-md border-b border-gray-100'; 
    logoColor = 'text-yellow-600';
    linkColor = 'text-gray-800 hover:text-yellow-600';
    
    buttonStyle = {
      signIn: 'border border-gray-400 text-gray-800 hover:bg-gray-100',
      register: 'bg-yellow-500 text-white hover:bg-yellow-600',
    };
  }


  
  const linkBaseClasses = 'relative py-6 font-medium text-base md:text-sm whitespace-nowrap';
  
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Global Trade Data', path: '/trade-data' },
    { name: 'Export Potential Test', path: '/export-test' },
    { name: 'HS Code Chapter List', path: '/hs-codes' },
    { name: 'Contact', path: '/contact' },
  ];

  
  const getUnderline = (isActive) => {
    if (!isActive) return null;
    
    
    return (
      <span className="absolute left-0 bottom-0 w-full">
        <span className="block h-0.5 bg-yellow-500 mb-0.5"></span>
        <span className="block h-0.5 bg-yellow-500"></span>
      </span>
    );
  };

  return (
    
    <nav className={`${positionClass} top-0 left-0 right-0 z-20 transition-all duration-300 ${baseStyle}`}>
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        
        
        <NavLink to="/" className="text-xl font-bold">
          <span className={logoColor}>LOGO</span>
        </NavLink>

        
        <div className="hidden lg:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `${linkBaseClasses} ${linkColor} ${isActive ? 'text-yellow-500' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {getUnderline(isActive)}
                </>
              )}
            </NavLink>
          ))}
        </div>

        
        <div className="hidden lg:flex space-x-4">
          <Link to="/login">
            <button 
              className={`py-2 px-4 rounded-full transition-colors font-medium text-sm ${buttonStyle.signIn}`}
            >
              Sign In
            </button>
          </Link>
          
          <Link to="/register">
            <button 
              className={`py-2 px-4 rounded-full font-semibold text-sm transition-colors ${buttonStyle.register}`}
            >
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 ${scrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[40px] left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-lg font-medium text-base transition-colors ${
                  isActive
                    ? 'bg-yellow-500 text-white'
                    : 'text-gray-800 hover:bg-gray-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="pt-4 flex flex-col gap-4 border-t border-gray-200">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-3 px-4 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors font-medium">
                Sign In
              </button>
            </Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-3 px-4 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors font-semibold">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;