import React from 'react';

const ExperienceEdge = () => {
  return (
    <section className="bg-white dark:bg-dark-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Experience the EXIMAPS edge
          </h1>
          <div className="flex items-center mb-8">
            <span className="text-primary-500 dark:text-primary-400 font-bold text-3xl mr-4">||</span>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Take A Look at the EXIMAPS edge
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
            Human intellect has developed to be the foundation of economic
            prosperity. Profit and power are fostered by the ideal fusion of human
            intelligence and business. Through it, business can have a great
            influence and produce results in the realm of international export import
            trade and commerce.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
            We use the best software for import export business analysis, advanced
            technology to transform your firm into something futuristic, which is why
            The Dollar Business fi is well-known worldwide. With the invention of
            EXIMAPS, you have a single platform to find opportunities in a market of
            eight billion users. You can remain ahead of the curve and leap across
            continents with EXIMAPS, and enjoy the benefit of always being one step
            ahead of your competitors.
          </p>

          <button className="bg-primary-600 dark:bg-primary-700 text-white py-3 px-8 text-lg font-semibold rounded-full hover:bg-primary-700 dark:hover:bg-primary-800 transition-colors">
            Login
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">

          <div className="w-[600px] h-[550px] flex items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden">
            <img src="/exim-edge.png" className='w-full h-full object-contain' alt="exim-edge" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEdge;




