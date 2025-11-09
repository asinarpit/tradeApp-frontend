import { Check } from 'lucide-react';
import React from 'react';

const PowerOfAI = () => {
  return (
    <section className="bg-white dark:bg-dark-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Title Block */}
          <div className="flex items-start mb-4">
            <span className="text-primary-500 dark:text-primary-400 font-bold text-3xl mr-4 mt-1">||</span>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-snug">
              The Power of AI, is yours to leverage!
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 mt-2">
            What EXIMAPS performs for you is as follows:
          </p>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start">
             <div className="text-white bg-primary-600 dark:bg-primary-700 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
              <Check/>
             </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Integrate Information and Technology with Human Intelligence: To help
                exporters and importers worldwide trade internationally more easily and
                confidently
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
             <div className="text-white bg-primary-600 dark:bg-primary-700 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
              <Check/>
             </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Deliver Actionable Intelligence: In order to provide you with actionable
                intelligence, our AI engine sorts through billions of information and sets it
                in a matter of nanoseconds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
             <div className="text-white bg-primary-600 dark:bg-primary-700 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
              <Check/>
             </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Selected Information in Seconds: Best software for export import analysis
                uses its highly specialized built-in vast analytical vaults housed on its
                several cloud and physical servers, our hybrid engine extracts, processes,
                and provides only selected information.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">

            <img
              src="/leverage.webp"
              alt="Man in glasses looking at multiple data screens"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfAI;



