import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const testimonials = [
  {
    id: 1,
    name: 'BHAVIN GUPTA',
    title: 'Owner, Murari Exports (Telangana)',
    license: 'A CONQUER license holder since January 2018.',
    quote: "EXIMAPS has helped me understand my competitors' businesses. Their buyers are now literally 'my' buyers.",
    avatar: 'bhavin-gupta.jpg', 
  },
  {
    id: 2,
    name: 'K. RADHA MANOHARI',
    title: 'Proprietor, Thea Soaps (Telangana)',
    license: 'A CONNECT license holder since October 2017.',
    quote: 'With EXIMAPS, Thea Soaps has got a wonderfully effective platform to connect to buyers across the world.',
    avatar: 'k-radha-manohari.jpg', 
  },
  {
    id: 3,
    name: 'AMIT SHARMA',
    title: 'CEO, Global Traders (Maharashtra)',
    license: 'An EXPLORER license holder since May 2020.',
    quote: 'The depth of data provided by EXIMAPS is unmatched. It’s essential for strategic expansion.',
    avatar: 'amit-sharma.jpg', 
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-dark-800 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Header */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
                <span className="text-primary-500 dark:text-primary-400 font-bold text-2xl sm:text-3xl mr-3 sm:mr-4">||</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">Testimonials</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 dark:text-gray-500 mt-2">
              What our license holders have to say about our Quality of Service...
            </p>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            
            navigation={{
              nextEl: '.swiper-button-next-custom-testi',
              prevEl: '.swiper-button-prev-custom-testi',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            className="w-full h-full !pb-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {/* Testimonial Card */}
                <div className="bg-white dark:bg-dark-900 p-8 pt-0 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700 flex flex-col items-center text-center relative mt-16 mx-4">
                  
                  
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">

                    <div className="w-28 h-28 rounded-full border-4 border-white dark:border-dark-900 shadow-md overflow-hidden ring-4 ring-primary-500/50 dark:ring-primary-600/50">
                      <img src={testimonial.avatar} alt="" />
                                          </div>
                  </div>

                  {/* Quote and Text */}
                  <div className="mt-16 pt-4">
                    <p className="text-xl italic text-gray-800 dark:text-gray-100 dark:text-gray-200 relative mb-4">
                        {/* Custom Quotation Mark Styling */}
                        <span className="text-primary-500 dark:text-primary-400 text-5xl font-extrabold absolute -top-4 -left-6 opacity-70">
                            “
                        </span>
                        {testimonial.quote}
                        <span className="text-primary-500 dark:text-primary-400 text-5xl font-extrabold absolute -bottom-4 -right-6 opacity-70">
                            ”
                        </span>
                    </p>
                  </div>

                  {/* Details */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-300 font-semibold mb-1">
                      {testimonial.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-500">
                      {testimonial.license}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-custom-testi hidden lg:block absolute -left-14 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 p-2 rounded-full transition-all">
           <ChevronLeft className="text-white" />
          </div>

          <div className="swiper-button-next-custom-testi hidden lg:block absolute -right-14 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 p-2 rounded-full transition-all">
            {/* Right Arrow Icon */}
            <ChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



