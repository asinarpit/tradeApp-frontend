import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'purchase 9',
    initials: 'P',
    rating: 5,
    text: 'thank you so much shiva sir for this greatful session.',
    avatarType: 'initials'
  },
  {
    id: 2,
    name: 'nitin suryavanshi',
    initials: 'NS',
    rating: 5,
    text: 'nice experience, gave full details very well for the whole website',
    avatarType: 'initials' 
  },
  {
    id: 3,
    name: 'Santhosh Kumar',
    initials: 'SK',
    rating: 4,
    text: 'Good Support',
    avatarType: 'initials' 
  },
  {
    id: 4,
    name: 'Neha Sharma',
    initials: 'NS',
    rating: 5,
    text: 'Outstanding service and detailed explanation of the data!',
    avatarType: 'initials'
  },
  {
    id: 5,
    name: 'Amit Patel',
    initials: 'AP',
    rating: 5,
    text: 'Very helpful, highly recommend for trade insights.',
    avatarType: 'initials'
  },
];


const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${i <= rating ? 'text-primary-500 dark:text-primary-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex space-x-0.5">{stars}</div>;
};

const GoogleReviews = () => {
  return (
    <section className="bg-gray-100 dark:bg-dark-800 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Top Button */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 sm:mb-10">Google Reviews</h2>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom-reviews',
              prevEl: '.swiper-button-prev-custom-reviews',
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, 
                spaceBetween: 30,
              },
            }}
            className="w-full h-full !pb-8"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                {/* Review Card */}
                <div className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700 h-full flex flex-col justify-between">
                  <div>
                    {/* User Info and Rating */}
                    <div className="flex items-center mb-4">
                      {/* Avatar */}
                      {review.avatarType === 'initials' ? (
                        <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center text-white font-semibold text-lg mr-3 flex-shrink-0">
                          {review.initials}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0 overflow-hidden">
                        </div>
                      )}

                      {/* Name and Time */}
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-800 dark:text-gray-100 truncate">{review.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-500">3 weeks ago</span>
                      </div>
                    </div>

                    {/* Rating and Text */}
                    <div className="mb-4">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 min-h-[50px]">
                      {review.text}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-700 flex items-center">
                    <img
                      src="https://www.google.com/favicon.ico" // Using Google's favicon for the logo
                      alt="Google logo"
                      className="w-4 h-4 mr-2"
                    />
                    <a href="#" className="text-sm text-gray-600 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
                      View on Google
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
          <div className="swiper-button-prev-custom-reviews hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 p-2 rounded-full shadow-lg transition-all">
            <ChevronLeft className="text-white" />
          </div>

          <div className="swiper-button-next-custom-reviews hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 p-2 rounded-full shadow-lg transition-all">
            
            <ChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;



