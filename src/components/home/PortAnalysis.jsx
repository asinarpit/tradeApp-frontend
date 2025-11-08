import React from 'react';

const PortAnalysis = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center gap-12">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className='flex gap-4 mb-4'>
            <span className="text-yellow-500 font-bold text-3xl">||</span>
            <h2 className="text-4xl font-bold text-gray-800">
              Port Analysis: Manage your shipping process smoothly
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Your ability to handle the entire shipping process will often
            determine the outcome of a foreign trade transaction. Answers to
            queries like,
          </p>

          <div className="space-y-6 mb-8">
            {/* Question 1 */}
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-lg mr-3 flex-shrink-0">
                1
              </span>
              <p className="text-lg text-gray-600">
                "What is the best way to transport my products to the buyer?"
              </p>
            </div>

            {/* Question 2 */}
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-lg mr-3 flex-shrink-0">
                2
              </span>
              <p className="text-lg text-gray-600">
                Which port is most capable of managing my shipment?
              </p>
            </div>

            {/* Question 3 */}
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-lg mr-3 flex-shrink-0">
                3
              </span>
              <p className="text-lg text-gray-600">
                Which port is my peer or competitor using?
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-xl">
            Keep in mind that while theoretical research and computations can
            provide you with a wealth of information, the best place to look for
            information is in practical knowledge.
          </p>
        </div>

        {/* Right Side: Image (Table Placeholder) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <img src="/port-analysis.gif" alt="Animated illustration of a port or shipping containers" />
        </div>
      </div>
    </section>
  );
};

export default PortAnalysis;