import React from 'react';

const EximapsFeatures = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 font-bold text-3xl mr-4">||</span>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-snug">
            Make the most of EXIMAPS with its unique features
          </h2>
        </div>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          With these superior features, you can optimize the use of technology, information, and actionable
          intelligence for your EXIMAPS experience:
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1: Convenient Dashboard */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start">
            <div className="w-full h-auto mb-6">
              <img
                src="/dashboard4.jpeg" 
                alt="Monthly Purchase Pattern Analysis and Main Imports Products Charts"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 font-bold text-xl mr-3">||</span>
              <h3 className="text-xl font-bold text-gray-800">Convenient Dashboard</h3>
            </div>
            <p className="text-gray-600">
              Utilize our intelligent dashboard for our growing network of the most astute
              customers on the planet.
            </p>
          </div>

          {/* Feature Card 2: Trade Evaluation */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start">
            <div className="w-full h-auto mb-6">
              <img
                src="/tradeevaluation3.jpeg"
                alt="Top Buyer Country Pie Chart"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex items-center mb-3">
              <span className="text-yellow-500 font-bold text-xl mr-3">||</span>
              <h3 className="text-xl font-bold text-gray-800">Trade Evaluation</h3>
            </div>
            <p className="text-gray-600">
              Gain more knowledge about supply chains and export-import markets, and increase
              the flexibility of your company.
            </p>
          </div>

          {/* Feature Card 3: Port Examination */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start">
            <div className="w-full h-auto mb-6">
              <img
                src="/port-examination3.jpeg" 
                alt="Top 10 Importers Bar Chart"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex items-center mb-3">
              <span className="text-yellow-500 font-bold text-xl mr-3">||</span>
              <h3 className="text-xl font-bold text-gray-800">Port Examination</h3>
            </div>
            <p className="text-gray-600">
              Choose a port that works for you to beat the competition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EximapsFeatures;