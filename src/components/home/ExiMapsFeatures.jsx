import React from 'react';

const EximapsFeatures = () => {
  return (
    <section className="bg-gray-100 dark:bg-dark-800 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title and Subtitle */}
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-snug mb-4">
          Make the most of <span className="font-iserif text-primary-500 dark:text-primary-400 italic tracking-wide">EXIMAPS</span> with its unique <span className=' tracking-wide font-iserif italic text-primary-500 dark:text-primary-400'>features</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          With these superior features, you can optimize the use of technology, information, and actionable
          intelligence for your EXIMAPS experience:
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1: Convenient Dashboard */}
          <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700 flex flex-col items-start">
            <div className="w-full h-auto mb-6">
              <img
                src="/dashboard4.jpeg" 
                alt="Monthly Purchase Pattern Analysis and Main Imports Products Charts"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              Convenient Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Utilize our intelligent dashboard for our growing network of the most astute
              customers on the planet.
            </p>
          </div>

          {/* Feature Card 2: Trade Evaluation */}
          <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700 flex flex-col items-start">
            <div className="w-full h-auto mb-6">
              <img
                src="/tradeevaluation3.jpeg"
                alt="Top Buyer Country Pie Chart"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              Trade Evaluation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gain more knowledge about supply chains and export-import markets, and increase
              the flexibility of your company.
            </p>
          </div>

          {/* Feature Card 3: Port Examination */}
          <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700 flex flex-col items-start">
            <div className="w-full h-auto mb-6">
              <img
                src="/port-examination3.jpeg" 
                alt="Top 10 Importers Bar Chart"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              Port Examination
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Choose a port that works for you to beat the competition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EximapsFeatures;



