import React from 'react';

const ExiMapsIntro = () => {
  return (
    <div className="relative min-h-[500px] sm:h-[600px] bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg-1.webp')",
            backgroundPosition: 'bottom center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20"></div>
        </div>
      </div>

      
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start pt-16 sm:pt-24 pb-12">
        <div className="max-w-4xl text-white">
          {/* Header */}
          
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-yellow-500 mb-4">
              Say <span className="text-white font-serif font-normal italic">hello</span> to EXIMAPS
            </h1>
          

          {/* Main Title */}
          <div className="flex items-start mb-6 sm:mb-8">
            <span className="text-yellow-500 font-semibold text-2xl sm:text-3xl mr-3 sm:mr-4 mt-1">||</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              The Most Advanced AI-Powered Super Engine for Exporters & Importers
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 max-w-3xl">
            A cutting-edge technology, the best software for import export business analysis brought to you by The Dollar Business, supports your foreign trade strategy by offering outstanding product analysis on international buyers and sellers worldwide in order to promote trade internationally and build business ties. We simplify international trading for firms by providing you with access to **20 million active enterprises** from **181 countries** via our platform, in a world where information is essential.
          </p>

          {/* Call to Action */}
          <p className="text-base sm:text-lg font-semibold text-gray-100 max-w-3xl">
            Come along with us as we conquer obstacles and seize worldwide chances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExiMapsIntro;