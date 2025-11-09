import React from 'react';

const ComingSoon = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center min-h-screen bg-gray-50 dark:bg-dark-900 p-4">
      <div className="max-w-xl w-full bg-white dark:bg-dark-800 p-8 sm:p-12 rounded-xl shadow-2xl border border-gray-100 dark:border-dark-700 text-center">

        
        <h1 className="text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-4">
          Coming Soon!
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          We're working hard to bring you this page. Get ready for a better way to experience trade analytics.
        </p>


        <div className="mt-8">
          <a href="/" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium text-sm">
            ← Back to Home Page
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default ComingSoon;