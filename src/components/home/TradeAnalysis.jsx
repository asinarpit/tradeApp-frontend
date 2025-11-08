import { Check } from 'lucide-react';
import React from 'react';

const TradeAnalysis = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16">
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-center gap-8 sm:gap-12">

        {/* Left Side: Image */}
        <div className='w-full lg:w-1/2'>
          
          <img
            src="/exim-top-buyer-company5b.png"
            className='w-full'
            alt="A dashboard showing import and export trade analysis data"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start relative">
          <div className='flex gap-3 sm:gap-4 mb-4'>
            <span className="text-yellow-500 font-bold text-2xl sm:text-3xl">||</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Trade Analysis
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Make informed decisions, get deeper insights
          </p>

          <div className="space-y-4 sm:space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="text-white bg-gray-800 rounded-full flex-shrink-0 mr-3 sm:mr-4 w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center">
                <Check size={18} className="sm:w-5 sm:h-5" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Accurate knowledge should be the foundation of decisions: All of this is
                now possible, regardless of whether you require micro-level information, to
                help with precise product pricing for different import.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="text-white bg-gray-800 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
                <Check />
              </div>
              <p className="text-lg text-gray-600">
                Export-Import markets or high-level analytics to identify growth markets
                and modify production schedules based on demand seasonality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="text-white bg-gray-800 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
                <Check />
              </div>
              <p className="text-lg text-gray-600">
                Gain deeper understanding of supply chains and export-import markets
                while enhancing your ability to adjust quickly to market changes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start">
              <div className="text-white bg-gray-800 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
                <Check />
              </div>
              <p className="text-lg text-gray-600">
                Examine different facets of international import export trade while
                comprehending the flow, growth, and movement of a product or group of
                products over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeAnalysis;