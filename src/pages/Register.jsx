import React from 'react';
import { User, Mail, Lock, Phone } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen flex">
      
      
      <div className="hidden lg:flex w-1/2 bg-gray-900 dark:bg-dark-950 justify-center items-center relative overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: 'url("/path-to-registration-background-image.jpg")' }}
        ></div>
        
        
        <div className="relative z-10 text-center p-10">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Join The <span className="text-primary-500 dark:text-primary-400">Global Trade</span> Network
          </h2>
          <p className="text-lg text-gray-300">
            Access actionable trade data, connect with buyers, and unlock your export potential.
          </p>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white dark:bg-dark-900 p-8 sm:p-12">
        <div className="max-w-md w-full">
          
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Already have an account? 
            <a href="/signin" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 font-semibold ml-1 transition-colors">
              Sign In
            </a>
          </p>

          <form className="space-y-6">
            
            
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                required
              />
            </div>

            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                required
              />
            </div>

            
            <div className="flex space-x-2">
              <div className="w-1/3 relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 appearance-none transition duration-150"
                >
                  <option value="+91">IN (+91)</option>
                  <option value="+1">US (+1)</option>
                  
                </select>
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-2/3 pl-4 pr-4 py-3 border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                required
              />
            </div>

            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
                required
              />
            </div>
            
            
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 mr-2 rounded text-primary-500 focus:ring-primary-500 border-gray-300 dark:border-dark-600"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the <a href="/terms" className="text-gray-800 dark:text-gray-200 font-medium hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-gray-800 dark:text-gray-200 font-medium hover:underline">Privacy Policy</a>.
              </label>
            </div>


            
            <button
              type="submit"
              className="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-150"
            >
              Register
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Register;