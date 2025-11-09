import { Check } from 'lucide-react';
import React from 'react';

const Discover = () => {
  return (
    <section className="bg-white dark:bg-dark-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="/exim-discover.jpeg" className='w-full h-full' alt="" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start relative">
          <div className='flex gap-4'>
            <span className="text-primary-500 dark:text-primary-400 font-bold text-3xl mb-4 lg:mb-0">||</span>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Discover active buyers and identify credible sellers
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-500 mb-8">
            Useful information for strategic decision-making
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="text-white bg-purple-800 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
                <Check />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                Utilize our wide range of trade intelligence technology tools and subtools to
                identify, locate, and find importers and exporters across product categories
                and geographic areas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="text-white bg-purple-800 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
                <Check />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                We are the people to contact if you want to learn more about importers and
                exporters in-depth and you think there may be a chance for international
                trade.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="text-white bg-purple-800 rounded-full flex-shrink-0 mr-4 w-8 h-8 flex justify-center items-center">
                <Check />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                Are you looking for relevant details about an exporter or importer in one
                location? We accomplish this by providing you with invaluable export
                import information, including purchasing and supplying capacities, trade
                frequencies between product categories and markets, and product analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;



