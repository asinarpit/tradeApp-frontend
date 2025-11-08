import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
  // State to manage the open/closed status of each office section
  const [openSection, setOpenSection] = useState('India Offices');

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  // Data for the office locations
  const officeLocations = [
    {
      name: 'India Offices',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Head Office</h4>
            <p className="text-sm text-gray-600">
              Vimbri Media Pvt. Ltd. <br />
              Kapil Kavuri Hub, 7th Floor, <br />
              Nanakramguda, Financial District, <br />
              Hyderabad, Telangana-500032, IN
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Registered Office</h4>
            <p className="text-sm text-gray-600">
              Vimbri Media Pvt. Ltd. <br />
              201B, Vimbri Boulevard, <br />
              8-2-412, Road No 4, Banjara Hills, <br />
              Hyderabad - 500034, Telangana, IN
            </p>
          </div>
          <div className='mt-4'>
            <h4 className="font-semibold text-gray-800 mb-2">Regional Office (Delhi)</h4>
            <p className="text-sm text-gray-600">
              Vimbri Media Pvt. Ltd. <br />
              4378/4B, Ansari Road, <br />
              Murari Lal Street, Daryaganj, <br />
              New Delhi-110002, IN
            </p>
          </div>
          <div className='mt-4'>
            <h4 className="font-semibold text-gray-800 mb-2">Regional Office (Ahmedabad)</h4>
            <p className="text-sm text-gray-600">
              Vimbri Media Pvt. Ltd. <br />
              Block B1-1401, <br />
              West Gate Business Bay, 14th Floor, <br />
              Sarkhej - Gandhinagar Hwy, <br />
              Ahmedabad, Gujarat 380051, IN
            </p>
          </div>
          <div className='mt-4'>
            <h4 className="font-semibold text-gray-800 mb-2">Regional Office (Chennai)</h4>
            <p className="text-sm text-gray-600">
              Vimbri Media Pvt. Ltd. <br />
              Level 4, JVL Plaza, <br />
              625/501,Anna Salai (Mount Road), <br />
              Satya Murthy Nagar, Teynampet, <br />
              Chennai, Tamil Nadu - 600035, IN
            </p>
          </div>
        </div>
      ),
    },
    { name: 'US Office', content: <p className="text-sm text-gray-600">US office address placeholder.</p> },
    { name: 'Singapore Office', content: <p className="text-sm text-gray-600">Singapore office address placeholder.</p> },
    { name: 'UAE Offices', content: <p className="text-sm text-gray-600">UAE office address placeholder.</p> },
  ];

  return (
    <div className="bg-white min-h-screen pt-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-sm text-gray-500 mb-6">
          Home / <span className="text-gray-800 font-medium">Contact Us</span>
        </p>

        <div className="bg-gray-50 p-8 mb-10 rounded-lg shadow-sm">
             <h2 className="text-2xl font-bold font-serif italic text-gray-800 mb-6">
              <span className="text-yellow-500">||</span> Contact Us
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Client Support Queries */}
            <div>
              <h3 className="font-bold text-gray-700 mb-2">FOR CLIENT SUPPORT QUERIES</h3>
              <p className="text-sm text-gray-600">+91-9491584000, +91-9491585000</p>
              <p className="text-sm text-gray-600">+91-9491586000, +91-9491587000</p>
            </div>

            {/* Sales Queries */}
            <div>
              <h3 className="font-bold text-gray-700 mb-2">FOR SALES QUERIES</h3>
              <p className="text-sm text-gray-600">+91-9491581000, +91-9491582000</p>
              <p className="text-sm text-gray-600">+91-9904757371 (Ahmedabad)</p>
              <p className="text-sm text-gray-600">+91-40-68109999</p>
            </div>

            {/* Other Queries */}
            <div>
              <h3 className="font-bold text-gray-700 mb-2">FOR OTHER QUERIES</h3>
              <p className="text-sm text-gray-600">+91-40-68109999</p>
              <p className="text-sm text-yellow-600 font-semibold">reachus@thedollarbusiness.com</p>
              <button className="hidden lg:block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full transition-colors mt-2">
                Book A Demo
              </button>
            </div>
          </div>
        </div>

        {/* 2. Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side: Office Locations */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="text-yellow-500">||</span> THE DOLLAR BUSINESS
            </h2>

            <div className="space-y-4">
              {officeLocations.map((section) => (
                <div key={section.name} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection(section.name)}
                    className="flex justify-between items-center w-full py-4 px-1 text-lg font-semibold text-gray-800 hover:text-yellow-600 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-yellow-500 font-bold text-xl">||</span>
                      {section.name}
                    </span>
                    {openSection === section.name ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                  </button>
                  
                  {openSection === section.name && (
                    <div className="pb-6 pt-2 px-6 bg-gray-50 border-t border-gray-200">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-1 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Enough talk. Let's <span className="text-yellow-600">'demo-talk'</span>!
            </h3>
            
            <form className="space-y-4">
              
              {/* Name and Company Name */}
              <input type="text" placeholder="Name..." className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              <input type="text" placeholder="Company name..." className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              
              {/* Country and Phone */}
              <div className="flex space-x-2">
                <select className="w-1/3 p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-gray-600">
                  <option>India</option>
                  <option>+91</option>
                  {/* Add more countries here */}
                </select>
                <input type="text" placeholder="+91" className="w-1/6 p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 text-gray-600" readOnly/>
                <input type="tel" placeholder="Phone..." className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              </div>
              
              {/* Email Address */}
              <input type="email" placeholder="Email address..." className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500" />
              
              {/* Message */}
              <textarea placeholder="Your message..." rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"></textarea>

              {/* Checkbox (Replaces Cloudflare box) */}
              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="verify-human" className="rounded text-yellow-500 focus:ring-yellow-500" />
                <label htmlFor="verify-human" className="text-sm text-gray-600">
                  Verify you are human
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-md transition-colors"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;