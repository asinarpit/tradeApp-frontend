import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 


import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const logos = [
  { name: 'EDELWEISS', src: '/Edelweiss.png' }, 
  { name: 'CREMICA', src: '/Cremica.png' },
  { name: 'DIVIS', src: '/Divis.png' }, 
  { name: 'LIBERTY', src: '/Liberty.png' }, 
  { name: 'BIKANERVALA', src: '/Bikanervala.png' }, 
  { name: 'MAHINDRA', src: '/MahindraandMahindra.png' }, 
  { name: 'REDTAPE', src: '/Redtape.png' }, 
];

const CircleOfTrust = () => {
  return (
    <section className="bg-gray-100 dark:bg-dark-800 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center mb-8 sm:mb-10">
          <span className="text-primary-500 dark:text-primary-400 font-bold text-2xl sm:text-3xl mr-3 sm:mr-4 mt-1">||</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">Circle of Trust</h2>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5, 
                spaceBetween: 40,
              },
            }}
            className="w-full h-full"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-32 md:h-40 bg-white dark:bg-dark-900 border border-gray-100 dark:border-dark-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center text-gray-700 dark:text-gray-300 font-semibold text-sm">
                    <img
                      src={`${logo.src}`}
                      alt={`${logo.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
          <div className="swiper-button-prev-custom hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 p-2 rounded-full shadow-lg transition-all">
            <ChevronLeft className="text-white" />
          </div>

          <div className="swiper-button-next-custom hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 p-2 rounded-full shadow-lg transition-all">
            <ChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircleOfTrust;



