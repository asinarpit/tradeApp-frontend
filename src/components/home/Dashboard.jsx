import { Check } from 'lucide-react';
import React from 'react';

const Dashboard = () => {
  return (
    <section className="bg-gray-100 dark:bg-dark-800 py-12 sm:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
        {/* Left Side: Content */}
        <div className="w-full lg:w-2/3 flex flex-col items-start">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Dashboard
        </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-500 mb-6 sm:mb-8">
            It understands you and makes it all easier
          </p>

          <div className="space-y-4 sm:space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="text-white bg-primary-600 dark:bg-primary-700 rounded-full flex-shrink-0 mr-3 sm:mr-4 w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center">
                <Check size={18} className="sm:w-5 sm:h-5" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                It is designed to meet your specific needs based on your requirements, utility quotients,
                and logic.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="text-white bg-primary-600 dark:bg-primary-700 rounded-full flex-shrink-0 mr-3 sm:mr-4 w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center">
                <Check size={18} className="sm:w-5 sm:h-5" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                An AI-enabled "Smart Box" groups companies based on their activities and searches
                their names to find all the shipment records you want to monitor.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="text-white bg-primary-600 dark:bg-primary-700 rounded-full flex-shrink-0 mr-3 sm:mr-4 w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center">
                <Check size={18} className="sm:w-5 sm:h-5" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                Trade tracking is now incredibly simple! You only need to visit the EXIMAPS Dashboard
                to fulfill all of your trade intelligence needs. Ultimately, it serves as a one-stop shop for
                our ever expanding network of the most astute customers of importers and exporters
                on the planet.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img src="/exim-dashboard.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;



