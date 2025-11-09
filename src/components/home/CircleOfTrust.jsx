import React from 'react';

const logos = [
  { name: 'EDELWEISS', src: '/Edelweiss.png' }, 
  { name: 'CREMICA', src: '/Cremica.png' },
  { name: 'DIVIS', src: '/Divis.png' }, 
  { name: 'LIBERTY', src: '/Liberty.png' }, 
  { name: 'BIKANERVALA', src: '/Bikanervala.png' }, 
  { name: 'MAHINDRA', src: '/MahindraandMahindra.png' }, 
  { name: 'REDTAPE', src: '/Redtape.png' }, 
];

const CircleOfTrust = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-gray-100 dark:bg-dark-800 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 sm:mb-10">
          Circle of Trust
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-100 dark:from-dark-800 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-100 dark:from-dark-800 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee track */}
          <div className="flex animate-marquee hover:pause-marquee">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-5 md:mx-10"
              >
                <div className="flex items-center justify-center h-20 md:h-24 w-28 md:w-32">
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CircleOfTrust;



