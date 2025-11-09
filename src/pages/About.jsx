import React from 'react';



const About = () => {
    return (
        <>
            <section
                className="relative bg-cover bg-center h-[550px] flex items-start justify-center text-white"
                style={{ backgroundImage: 'url("/aboutus-banner1.webp")' }} 
            >
                
                <div className="absolute inset-0 bg-black opacity-40"></div>

                <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-6 flex flex-col justify-between h-full">

                    <div className="flex-grow flex items-center justify-center">
                    </div>
                </div>
            </section>

            
            <section className="bg-white dark:bg-dark-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">

                    {/* Header */}
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                        <span className="font-iserif italic text-primary-500 dark:text-primary-400 tracking-wide">About</span> Us
                    </h2>

                    
                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            The Dollar Business is a global trade analysis platform that promotes international trade
                            with international buyers and suppliers which helps importers and exporters succeed. It
                            improves trade strategies for companies globally with its extensive knowledge, trade
                            intelligence tools and useful analytics. Utilizing technology and intelligence, it
                            streamlines global operations for a variety of clientele. It helps manufacturers
                            and exporters, importers succeed by enabling users to navigate the complex world of
                            global trade and offers insights from 181 countries.
                        </p>
                        <p>
                            The Dollar Business is a beacon of hope, guiding companies with skill and commitment
                            through the complexities of global trade.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-dark-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">

                    {/* Header */}
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                   EXIMAPS
                    </h2>

                    
                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            In order to give exporters and importers around the world the most advanced trade analytics platform,
                            our hyper-engine EXIMAPS is jam-packed with countless formulas which stitch together ship loads of
                            information on imports and exports. We guarantee that our users receive the information they require
                            to run their regular EXIMAPS businesses in a more efficient, prudent, successful, and timely manner.
                        </p>
                        <p>
                            Our clientele consists of informed, efficient, and effective decision-makers.
                        </p>
                    </div>
                </div>
            </section>


            <div className="h-4 bg-gray-50 dark:bg-dark-900"></div>

            <section className="bg-white dark:bg-dark-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">

                    <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                        Our <span className="font-iserif text-primary-500 italic dark:text-primary-400 tracking-wide">Goal</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            Our goal is to provide our clients with effective supply chains so they can gain a competitive advantage.
                            We provide both **macro** and **micro insights** into global supply and demand trends by analyzing importer
                            exporter patterns in great detail.
                        </p>
                        <p>
                            By providing knowledge of export-import markets and importer exporter needs, it helps to better manage
                            international sourcing and meet customer expectations. Driven by elaborate analysis and technology, our
                            comprehensive technological solution and **trade intelligence tool** uncovers unexplored opportunities
                            for import-export trade expansion, cost reduction, and resource optimization.
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-4 bg-gray-50 dark:bg-dark-900"></div>

            <section className="bg-white dark:bg-dark-800 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">

                    <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                        What lies <span className="font-iserif text-primary-500 italic dark:text-primary-400 tracking-wide">Ahead</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            Our foundation is built upon the bricks of countless years of practical experience in **Import-export trade and business**.
                            By fostering meaningful relationships between importers and exporters, this **trade intelligence tool** aims to
                            elevate the future to the top of the importance chain for trade and commerce success.
                        </p>
                        <p>
                            You can succeed in international trade in the future with just a device and an internet connection thanks
                            to your **user-friendly**, ideal, and practical trade intelligence tool. We are a young, dynamic company
                            running the top-notch import export analysis software.
                        </p>
                        <p className="max-w-4xl">
                            The most recent information on international import export trade and analytics technology can be found
                            right here. We would love to hear more from you, so please get in touch with us and tell us more about your company.
                        </p>
                    </div>
                </div>
            </section>

           
        </>
    );
};

export default About