import React from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      
      
      <div className="hidden lg:flex w-1/2 bg-gray-900 dark:bg-dark-950 justify-center items-center relative overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: 'url("/path-to-login-background-image.jpg")' }} 
        ></div>
        
        
        <div className="relative z-10 text-center p-10">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Welcome Back to <span className="text-primary-500 dark:text-primary-400">EXIMAPS</span>
          </h2>
          <p className="text-lg text-gray-300">
            Continue managing your global trade strategies with actionable data and powerful insights.
          </p>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white dark:bg-dark-900 p-8 sm:p-12">
        <div className="max-w-md w-full">
          
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Sign In to Your Account
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Don't have an account? 
            <a href="/register" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 font-semibold ml-1 transition-colors">
              Register Now
            </a>
          </p>

          <form className="space-y-6">
            
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 transition duration-150"
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
            
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded text-primary-500 focus:ring-primary-500 border-gray-300 dark:border-dark-600"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-500 font-medium transition-colors">
                Forgot Password?
              </a>
            </div>


            
            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-150 flex items-center justify-center space-x-2"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;