import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const reports = [
  {
    id: 1,
    quote: "Our data-driven approach to identifying export opportunities (through strategic market targeting) has been pivotal [to our success].",
    citation: "Gautam Kumar, Co-Founder And CEO, The Taj Indian Group In A TOI/TNN Online Article (Titled, 'Taj Indian Group Ranks Among Top 4 Indian Juice Exporter,') Dated Jun 10, 2025.",
  },
  {
    id: 2,
    quote: "61% of all businesses for whom exporting is possible said that access to customers and contacts was a strong barrier to export.",
    citation: "Research Carried Out By The UK Government's Department For International Trade In 2022 Titled, 'Barriers Of Exporting Businesses And The Role Of Export Promotion In Addressing Them.",
  },
  {
    id: 3,
    quote: "Global trade data analysis confirms a significant shift towards digital platforms for market entry and expansion.",
    citation: "Annual Report on Digital Trade Facilitation, World Trade Organization, 2024.",
  },
  {
    id: 4,
    quote: "Emerging markets are increasingly becoming key players in the global supply chain, demanding more sophisticated data tools for navigation.",
    citation: "Economic Outlook for Emerging Economies, International Monetary Fund, 2023.",
  },
];

const AcademicResearch = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 sm:mb-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <span className="text-yellow-500 font-bold text-2xl sm:text-3xl mr-3 sm:mr-4">||</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Academic Research & Media Reports - Conclusions</h2>
            </div>
          </div>
        
        </div>

        
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom-reports',
              prevEl: '.swiper-button-prev-custom-reports',
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 1.2, 
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2, 
                spaceBetween: 50,
              },
            }}
            className="w-full h-full !pb-8" 
          >
            {reports.map((report) => (
              <SwiperSlide key={report.id}>
                
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between">
                  
                  <p className="text-xl text-gray-800 relative mb-8">
                    
                    <span className="text-yellow-500 text-5xl font-extrabold absolute -top-4 -left-6 opacity-70">
                      “
                    </span>
                    {report.quote}
                    <span className="text-yellow-500 text-5xl font-extrabold absolute -bottom-4 -right-6 opacity-70">
                      ”
                    </span>
                  </p>

                  {/* Citation */}
                  <p className="text-sm text-gray-600 leading-relaxed mt-auto pt-4 border-t border-gray-100">
                    {report.citation}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows (Hidden on mobile) */}
          <div className="swiper-button-prev-custom-reports hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-400 hover:bg-gray-300 p-2 rounded-md transition-all">
            <ChevronLeft className='text-white' />
          </div>

          <div className="swiper-button-next-custom-reports hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-400 hover:bg-gray-300 p-2 rounded-md transition-all">
            <ChevronRight className='text-white' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicResearch;
