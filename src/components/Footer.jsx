import React from 'react';
import { Mail, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const linkGroups = [
    {
      title: 'Visitor\'s Corner',
      links: ['FAQs', 'Blogs', 'Disclaimer', 'Terms & Conditions', 'Privacy Policy'],
    },
    {
      title: 'TDB At A Glance',
      links: ['About Us', 'Our Vision', 'Our Team', 'Our Data', 'Careers', 'Contact', 'Press'],
    },
    {
      title: 'For Knowledge Seekers',
      links: ['News', 'Magazine', 'Debt Recovery', 'Visit', 'InstalMoney', 'Ask a Question', 'Past Events'],
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-2">
              We like you just the way you are.
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Get the latest resources, news and more...
            </p>
            
            {/* Email Subscription Form */}
            <form className="mb-6">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative border-b border-gray-500 hover:border-yellow-500 transition-colors">
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full bg-black text-white placeholder-gray-500 py-2 focus:outline-none pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-yellow-500 p-1"
                >
                  
                  <span className="text-3xl font-light leading-none">→</span>
                </button>
              </div>
            </form>

            
            <p className="text-xs text-gray-500 max-w-sm">
              By clicking 'sign up' you agree to receive emails from The Dollar Business and accept our web terms of use and privacy and cookie policy.
            </p>
          </div>

          
          {linkGroups.map((group, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-base font-bold uppercase tracking-wide text-gray-400 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#" 
                      className="text-gray-300 hover:text-yellow-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 lg:mt-0 mt-6">
            <h4 className="text-base font-bold uppercase tracking-wide text-gray-400 mb-4">
              Email
            </h4>
            <p className="text-yellow-500 text-sm mb-6 font-semibold">
              info@thedollarbusiness.com
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Youtube" className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;