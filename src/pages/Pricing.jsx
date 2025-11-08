import React from 'react';
import { Check, X, Shield, ArrowRight } from 'lucide-react';

const Pricing = () => {

  const plans = {
    Trial: {
      name: 'Trial',
      duration: '7 Days Free Trial',
      price: 'No-credit card required',
      buttonText: 'ACTIVATE',
      buttonClass: 'bg-yellow-600 hover:bg-yellow-700',
      isFree: true,
      logins: '1',
      loginNote: 'No card required',
    },
    Grow: {
      name: 'GROW',
      duration: '6 Months',
      price: '₹ 49,999/-',
      buttonText: 'BUY NOW',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600',
      isFree: false,
      logins: '1',
      loginNote: '(Plus applicable taxes)',
    },
    Connect: {
      name: 'CONNECT',
      duration: '12 Months',
      price: '₹ 74,999/-',
      buttonText: 'BUY NOW',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600',
      isFree: false,
      isBestValue: true,
      logins: '1',
      loginNote: '(Plus applicable taxes)',
    },
    Conquer: {
      name: 'CONQUER',
      duration: '12 Months',
      price: 'Contact For Pricing',
      buttonText: 'CONTACT NOW',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600 shadow-xl',
      isFree: false,
      logins: '5',
      loginNote: '(Contact For Pricing)',
    },
    ConquerPlus: {
      name: 'CONQUER+',
      duration: '24 Months',
      price: 'Contact For Pricing',
      buttonText: 'CONTACT NOW',
      buttonClass: 'bg-yellow-500 hover:bg-yellow-600 shadow-xl',
      isFree: false,
      logins: '10',
      loginNote: '(Contact For Pricing)',
    },
  };


  const features = [
    { name: 'Products/HS Code Search', Trial: '10', Grow: '10', Connect: 'Unlimited', Conquer: 'Unlimited', ConquerPlus: 'Unlimited' },
    { name: 'Profile views', Trial: '10', Grow: '50', Connect: '200', Conquer: 'Unlimited', ConquerPlus: 'Unlimited' },
    { name: 'Buy/Sell Pattern Analysis', Trial: 'limited', Grow: true, Connect: true, Conquer: true, ConquerPlus: true },
    { name: 'Transactional Details', Trial: 'limited', Grow: true, Connect: true, Conquer: true, ConquerPlus: true },
    { name: 'Product Basket Analysis', Trial: 'limited', Grow: true, Connect: true, Conquer: true, ConquerPlus: true },


    { name: 'Nexus', isGroupHeader: true },
    { name: 'Company Nexus', Trial: 'limited', Grow: false, Connect: false, Conquer: false, ConquerPlus: true },
    { name: 'Product Nexus', Trial: false, Grow: false, Connect: false, Conquer: false, ConquerPlus: true },
    { name: 'Nexus 2.0', Trial: false, Grow: false, Connect: false, Conquer: false, ConquerPlus: true },


    { name: 'Contacts', isGroupHeader: true },
    { name: 'Instant Contacts', Trial: false, Grow: false, Connect: false, Conquer: '200', ConquerPlus: '400' },
    { name: 'Human Verified', Trial: false, Grow: false, Connect: false, Conquer: '100', ConquerPlus: '200' },
    { name: 'Company Personnel, Social Profiles', Trial: false, Grow: false, Connect: false, Conquer: 'Unlimited', ConquerPlus: 'Unlimited' },
    { name: 'Trade Analysis', Trial: false, Grow: false, Connect: false, Conquer: 'Unlimited', ConquerPlus: 'Unlimited' },

    { name: 'Downloads', Trial: '0', Grow: '0', Connect: '0', Conquer: '5,00,000', ConquerPlus: '15,00,000' },
    { name: 'Port Analysis', Trial: 'limited', Grow: false, Connect: false, Conquer: true, ConquerPlus: true },
    { name: 'Country Analysis', Trial: false, Grow: false, Connect: false, Conquer: false, ConquerPlus: true },


    { name: 'Verified Company Financials', Trial: 'limited', Grow: false, Connect: false, Conquer: true, ConquerPlus: true },
    { name: 'Smart Box', Trial: false, Grow: false, Connect: false, Conquer: true, ConquerPlus: true },

    { name: 'Search', isGroupHeader: true },
    { name: 'By Industry', Trial: false, Grow: false, Connect: false, Conquer: true, ConquerPlus: true },
    { name: 'By CAS (Chemical Abstracts Service)', Trial: false, Grow: false, Connect: false, Conquer: true, ConquerPlus: true },
    { name: 'By Company', Trial: 'limited', Grow: false, Connect: true, Conquer: true, ConquerPlus: true },
    { name: 'By Director', Trial: 'limited', Grow: false, Connect: false, Conquer: true, ConquerPlus: true },
    { name: 'Compare Companies', Trial: 'limited', Grow: false, Connect: false, Conquer: true, ConquerPlus: false },
    { name: 'Identify Common Directors', Trial: 'limited', Grow: true, Connect: true, Conquer: true, ConquerPlus: true },

    { name: 'Ask a Question', Trial: '0', Grow: '2', Connect: '10', Conquer: 'Unlimited', ConquerPlus: 'Unlimited' },


    { name: 'Other Unique Offerings', isGroupHeader: true },
    { name: 'Access to Mobile APP', Trial: false, Grow: false, Connect: false, Conquer: true, ConquerPlus: true },
    { name: 'Cross-Country Currency Toggle (Seamless switching between INR, USD, and AED)', Trial: false, Grow: true, Connect: true, Conquer: true, ConquerPlus: true },
    { name: 'Flexible Currency Display Formats (In Lakh, Crore or Million/Billion)', Trial: true, Grow: true, Connect: true, Conquer: true, ConquerPlus: true },
  ];


  const renderFeatureStatus = (value) => {
    const iconClass = "w-5 h-5 inline-block mx-auto";
    if (typeof value === 'boolean') {

      return value ? <Check className={`${iconClass} text-yellow-500`} /> : <X className={`${iconClass} text-white opacity-70`} />;
    }
    if (value === 'limited') {

      return <span className="relative inline-block leading-none h-5">
        <Check className={`${iconClass} text-yellow-500`} />
        <span className="absolute -top-1 -right-2 text-yellow-500 font-bold text-xs">#</span>
      </span>;
    }
    return value;
  };

  const planKeys = Object.keys(plans);

  return (
    <div className="bg-gray-950 text-white min-h-screen px-4 py-16">
      <div className="max-w-screen-xl mx-auto">

        <h1 className="text-4xl sm:text-3xl font-bold text-white mb-12">
          ALWAYS PRICED RIGHT!
        </h1>

        <div className="overflow-x-auto border border-gray-800 rounded-lg">
          <table className="min-w-full table-auto border-collapse">

            <thead>
              <tr className="bg-gray-900 border-b border-gray-800">
                <th className="sticky left-0 bg-gray-900 text-left py-4 px-6 text-base font-bold text-white min-w-[250px] whitespace-nowrap">
                  Features
                </th>

                {planKeys.map((key) => {
                  const plan = plans[key];
                  return (
                    <th
                      key={key}
                      className={`py-4 px-4 text-center border-l border-gray-800 relative min-w-[150px]
                        ${plan.name === 'CONQUER' ? 'bg-yellow-600 bg-opacity-10' : ''}`}
                    >
                      <h3 className={`text-lg font-extrabold mb-1 ${plan.name === 'CONQUER' ? 'text-yellow-500' : 'text-white'}`}>{plan.name}</h3>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {features.map((feature, index) => {

                if (feature.isGroupHeader) {
                  return (
                    <tr key={index} className="bg-gray-800 border-t border-b border-gray-700">
                      <td className="sticky left-0 bg-gray-800 py-2 px-6 text-sm font-bold text-yellow-500 uppercase whitespace-nowrap">
                        {feature.name}
                      </td>
                      <td colSpan={planKeys.length} className="py-2 px-4 border-l border-gray-700"></td>
                    </tr>
                  );
                }


                return (
                  <tr key={index} className="border-b border-gray-900 transition-colors hover:bg-gray-900">

                    <td className="sticky left-0 py-3 px-6 text-left font-medium text-white bg-inherit min-w-[250px] whitespace-nowrap">
                      {feature.name}
                      {feature.name === 'Port Analysis' && (
                        <span className="text-xs text-yellow-500 block">THE ONLY PLATFORM IN THE INDUSTRY TO OFFER THIS FEATURE*</span>
                      )}
                    </td>

                    {planKeys.map((key) => {
                      const value = feature[key];

                      return (
                        <td key={key} className="py-3 px-4 text-center border-l border-gray-800">
                          {renderFeatureStatus(value)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}


              <tr className="border-t border-gray-700 bg-gray-900">
                <td className="sticky left-0 bg-gray-900 py-4 px-6 text-left font-medium text-white whitespace-nowrap">
                  Number of logins
                </td>
                {planKeys.map((key) => (
                  <td key={key} className="py-4 px-4 text-center border-l border-gray-800 text-lg font-bold">
                    {plans[key].logins}
                    {key !== 'Trial' && <sup className='text-yellow-500'>**</sup>}
                  </td>
                ))}
              </tr>


              <tr className="bg-gray-900">
                <td className="sticky left-0 bg-gray-900 py-4 px-6 text-left font-medium text-white whitespace-nowrap">
                  Validity
                </td>
                {planKeys.map((key) => {
                  const plan = plans[key];
                  return (
                    <td key={key} className="py-4 px-4 text-center border-l border-gray-800">
                      <p className="font-semibold">{plan.duration}</p>
                      <div className={`mt-2 ${plan.name === 'Trial' ? 'text-gray-500' : 'text-yellow-500'}`}>
                        {plan.price}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{plan.loginNote}</p>
                    </td>
                  );
                })}
              </tr>

              <tr className="bg-gray-900 border-t border-gray-800">
                <td className="sticky left-0 bg-gray-900 py-4 px-6">
                </td>
                {planKeys.map((key) => {
                  const plan = plans[key];
                  return (
                    <td key={key} className="py-6 px-4 text-center border-l border-gray-800">
                      <button className={`w-full max-w-[150px] mx-auto py-3 rounded-full text-black text-sm font-semibold transition-colors ${plan.buttonClass}`}>
                        {plan.buttonText}
                      </button>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>


        <div className="mt-16 text-sm text-gray-400 space-y-2 max-w-screen-xl mx-auto">
          <p>
            <span className="text-yellow-500 font-bold">#</span> Indicates limited access.
          </p>
          <p>
            <span className="text-yellow-500 font-bold">*</span> THE ONLY PLATFORM IN THE INDUSTRY TO OFFER THIS FEATURE
          </p>
          <p>
            <span className="text-yellow-500 font-bold">**</span> Access to multiple user logins is enabled only for accounts registered using email addresses from a single private (non-public) domain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;