import React from 'react';

const GlobalTradeData = () => {
  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Home / <span className="text-gray-800 dark:text-gray-200 font-medium">Trade Data</span>
          </p>

          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
           <span className="font-iserif text-primary-500 dark:text-primary-400 tracking-wide italic">Global</span> Trade Data
          </h1>

          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 max-w-4xl">
            <p>
              In a dynamic business environment marked with ever-growing global trade and disappearing borders,
              having access to crucial information is indispensable.
            </p>
            <p>
              Should you prioritize your existing markets or explore new geographical opportunities?
              Where should you secure your raw materials? For market expansion, should you prioritize
              entering established markets or exploring emerging economies? What factors should you
              consider when deciding whether to vertically integrate your supply chain in international trade?
              Are buyers across emerging markets trustworthy?
            </p>
            <p>
              These are pivotal strategic choices that define the path of your global business.
            </p>
            <p>
              Whether you're introducing a new product line, optimizing current offerings, or deliberating
              on entering new markets, having accurate information enhances your decision-making.
            </p>
            <p>
              We assist you with 'information solutions' to some of the most pressing concerns – to provide
              you with comprehensive, actionable trade data and keep you informed about market trends,
              supply-demand dynamics, and global trade patterns.
            </p>
            <p>
              Equip yourself with compelling visual data and actionable insights to propel your business forward.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="group flex flex-col rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 overflow-hidden">
            
            <div className="relative overflow-hidden">
              <img
                src="/wmaproduct-img.webp"
                alt="Hands analyzing charts and data points"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
              />   
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-semibold py-2 px-8 rounded-full shadow-md transition-colors text-base">
                By Product
              </button>
            </div>

            
            <div className="p-5 flex-grow bg-white dark:bg-dark-900">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Occasionally, there are latent opportunities waiting to be uncovered. Identify potential markets
                for your product that may not be immediately apparent.
              </p>
            </div>
          </div>

          
          <div className="group flex flex-col rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 overflow-hidden">
            
            <div className="relative overflow-hidden">
              <img
                src="/wmacountry-img.webp"
                alt="Cargo ship being loaded at a bustling commercial port"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-semibold py-2 px-8 rounded-full shadow-md transition-colors text-base">
                By Country
              </button>
            </div>

            
            <div className="p-5 flex-grow bg-white dark:bg-dark-900">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gain access to trade data from more than 180 countries. Analyze trade flows, market trends,
                and supply-demand statistics at a country-specific level, between two specific markets or between
                a specific market and the world.
              </p>
            </div>
          </div>

          
          <div className="group flex flex-col rounded-lg shadow-lg border border-gray-100 dark:border-dark-700 overflow-hidden">
            
            <div className="relative overflow-hidden">
              <img
                src="/wmahscode-img.webp"
                alt="Hands working on a tablet displaying a world map and data"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-semibold py-2 px-8 rounded-full shadow-md transition-colors text-base">
                By HSN Codes
              </button>
            </div>

            
            <div className="p-5 flex-grow bg-white dark:bg-dark-900">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Global trade trends capture the truest essence of international commerce. These go beyond mere
                numbers. Understand and evaluate such trends to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTradeData;