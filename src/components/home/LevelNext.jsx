import { Award } from 'lucide-react';
import React from 'react';

const LevelNext = () => {
  return (
    <section className="bg-gray-100 dark:bg-dark-800 py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/foreign-trade.webp"
              alt="Business team analyzing foreign trade data on a screen"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start relative">

          {/* Title Block */}
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-snug mb-6">
            Taking foreign trade analytics to <span className="font-iserif text-primary-500 dark:text-primary-400 italic tracking-wide">Level Next</span>
          </h2>


          <div className="space-y-8 mt-4">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="text-white mr-3 flex-shrink-0 mt-1 w-10 h-10 bg-primary-600 dark:bg-primary-700 flex items-center justify-center rounded-full">
                <Award />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                With the aid of EXIMAPS, a one-of-a-kind platform for foreign trade analytics, importers and exporters worldwide may effectively navigate the vast amounts of structured and unstructured analysis pertaining to international trade.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="text-white mr-3 flex-shrink-0 mt-1 w-10 h-10 bg-primary-600 dark:bg-primary-700 flex items-center justify-center rounded-full">
                <Award />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our AI-powered, cloud-based platform will help you save money in your supply chain, expand your worldwide reach, find buyers, suppliers, exporters, and importers and improve your market share all while optimizing your important time and other resources.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="text-white mr-3 flex-shrink-0 mt-1 w-10 h-10 bg-primary-600 dark:bg-primary-700 flex items-center justify-center rounded-full">
                <Award />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We are experts at providing you with actionable intelligence, which is informatics that enables you to assess both current and potential trading partners and gain important insights into the global supply chain. Our multilevel statistics and global coverage enable you to comprehend nearly every aspect of imports and exports, from the most intricate short- to medium-term supply and demand fluctuations across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelNext;



