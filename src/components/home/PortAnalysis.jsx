import React from 'react';

const PortAnalysis = () => {
  return (
    <section className="bg-white dark:bg-dark-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center gap-12">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Port Analysis : <span className='font-iserif italic tracking-wide text-primary-500 dark:text-primary-400'>Manage</span> your shipping process <span className='font-iserif italic tracking-wide text-primary-500 dark:text-primary-400'>smoothly</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-500 mb-8">
            Your ability to handle the entire shipping process will often
            determine the outcome of a foreign trade transaction. Answers to
            queries like,
          </p>

          <div className="space-y-6 mb-8">
            {/* Question 1 */}
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-700 text-white font-bold text-lg mr-3 flex-shrink-0">
                1
              </span>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                "What is the best way to transport my products to the buyer?"
              </p>
            </div>

            {/* Question 2 */}
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-700 text-white font-bold text-lg mr-3 flex-shrink-0">
                2
              </span>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                Which port is most capable of managing my shipment?
              </p>
            </div>

            {/* Question 3 */}
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-700 text-white font-bold text-lg mr-3 flex-shrink-0">
                3
              </span>
              <p className="text-lg text-gray-600 dark:text-gray-500">
                Which port is my peer or competitor using?
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-500 max-w-xl">
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



