import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    {/* <video
                        autoPlay
                        loop
                        muted
                        // playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/hero-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    <img src="/hero-bg.jpeg" className="w-full h-full object-cover" alt="Hero Background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>

            <div className="max-w-screen-xl mx-auto w-full h-full">


                <div className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-start h-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl text-white">
                        {/* Yellow Bar and Title */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                                <span className="text-primary-500 dark:text-primary-400 font-bold mr-2 sm:mr-4">||</span>
                                The Original Company for Trade Data analysis.
                            </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 max-w-xl text-gray-200">
                            From our inception, we have redefined the way trade information is accessed and utilized (and in the process, motivated a few others).
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 max-w-xl text-gray-200">
                            Our platform, with over 21 million verified entities spanning 181 countries, ensures effortless usability through an intuitive interface that&apos;s sophisticated as it is user-friendly.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 sm:mb-8 text-primary-500 dark:text-primary-400 italic">
                            Test our expertise. Experience THE ORIGINAL (You&apos;re welcome!)
                        </p>

                        {/* Action Button */}
                        <button className="max-w-fit text-white border-2 border-white py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-colors">
                            Try Us Now
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Hero;



