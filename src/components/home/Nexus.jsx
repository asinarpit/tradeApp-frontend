import React, { useState } from 'react';

const Nexus = () => {
  const [activeTab, setActiveTab] = useState('Company'); 

  return (
    <section className="bg-white dark:bg-dark-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header and Title */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          <span className="font-iserif italic tracking-wide text-primary-500 dark:text-primary-400">Nexus:</span> To stay one step ahead of your competition, know who they are!
        </h2>

        {/* Tabs */}
        <div className="flex border border-gray-200 w-fit p-2 rounded-full space-x-2 mb-8">
          <button
            onClick={() => setActiveTab('Company')}
            className={`py-2 px-4 rounded-full font-semibold transition-colors ${activeTab === 'Company'
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            Company Nexus
          </button>
          <button
            onClick={() => setActiveTab('Product')}
            className={`py-2 px-4 rounded-full font-semibold transition-colors ${activeTab === 'Product'
              ? 'bg-black text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            Product Nexus
          </button>
        </div>

        {/* Content and Image */}
        <div className="flex flex-col">
          <p className="text-lg text-gray-600 dark:text-gray-500 mb-10 max-w-4xl">
            To whom does your rival sell? Who is his most avid customer? Who is the potential importer for you? Nexus has the answer. With such potent information with export
            import software at your disposal, you can assess your competitors' transactions more accurately and adjust your strategy accordingly, giving you a true and
            sustainable competitive advantage in the import export market.
          </p>

          {/* Placeholder Image */}
          <div className="w-full overflow-hidden flex items-center justify-center relative">
            <img src="/nexus-bg.webp" className='w-[900px]' alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nexus;



