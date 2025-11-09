import React from 'react';

import { User, Search, Briefcase, Globe, TrendingDown, LayoutDashboard, TrendingUp, Info } from 'lucide-react';

const Features = () => {
  
  const featureCards = [
    { 
      icon: User, 
      title: 'Foreign Buyers', 
      description: 'Identify and connect with Biggest problem solved!' 
    },
    { 
      icon: Search, 
      title: 'Competitor Analysis', 
      description: 'Stay alert. Track and see what they do.' 
    },
    { 
      icon: Briefcase, 
      title: 'Foreign Suppliers', 
      description: 'Active and reliable profiles. Precious.' 
    },
    { 
      icon: Globe, 
      title: 'Focus Markets', 
      description: 'Turn new geographies into established revenue centres.' 
    },
    { 
      icon: TrendingDown, 
      title: 'Reduce Risks', 
      description: 'Risk-taking is good. Not.' 
    },
    { 
      icon: LayoutDashboard, 
      title: 'Your Dashboard', 
      description: 'Our data visualisation' 
    },
    { 
      icon: TrendingUp, 
      title: 'Trend Analysis', 
      description: 'Our data visualisation' 
    },
    { 
      icon: Info, 
      title: 'Reliable Information', 
      description: 'Reliable information about trade and commerce' 
    },
  ];

  return (
    <>
      <section 
        className="relative bg-cover bg-center h-[400px] flex items-start justify-center text-white" 
        style={{ backgroundImage: 'url("/feature-banner-new1b.webp")' }} 
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> 
      </section>

      <section className="bg-white dark:bg-dark-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className='flex items-center gap-4 mb-4'>
            <span className="text-primary-500 dark:text-primary-400 font-bold text-3xl">||</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              <span className='font-serif italic'>Advantage</span> EXIMAPS!
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The Dollar Business offers you an unparalleled experience with EXIMAPS, a global export import information provider, 
            enabling importers and exporters to work together under one roof with the aid of cutting-edge technology driven by AI tools to 
            maximize the user experience. There are no geographical restrictions on our business. Onboarding with us, will give 
            you access to the profiles of all importers, exporters, ports information suppliers, customs data worldwide.
          </p>
        </div>
      </section>

      
      <section className="bg-white dark:bg-dark-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featureCards.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-dark-700 rounded-lg hover:shadow-lg dark:hover:shadow-primary-500/20 transition-shadow duration-300">
                <div className="text-gray-800 dark:text-gray-200 mb-4">
                  <feature.icon size={48} strokeWidth={1.5} /> 
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
