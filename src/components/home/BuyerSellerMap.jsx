// BuyerSellerMap.jsx
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Mock data to simulate the highlighted country (United States) and its stats
const highlightedCountry = {
  name: "United States",
  coordinates: [-95.7129, 37.0902], // Center coordinates for the US
  buyersCount: "7,840,781",
  isHighlighted: true,
};

// Mock data for other markers (used to show the map is populated)
const markers = [
  { name: "Brazil", coordinates: [-55, -10] },
  { name: "China", coordinates: [105, 35] },
  { name: "India", coordinates: [78, 22] },
];

const BuyerSellerMap = () => {
  const [activeTab, setActiveTab] = useState('Buyers');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCountry, setHoveredCountry] = useState(null);
  
  const renderMap = () => (
    <div className="w-full h-full relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [10, 40]
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const isUS = countryName === highlightedCountry.name;
              
              let fillColor = '#5D5D5D'; 
              if (isUS) {
                fillColor = '#a855f7'; 
              } else if (markers.find(m => m.name === countryName)) {
                fillColor = '#8A8A8A'; 
              }

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  
                  stroke="#FFFFFF" 
                  strokeWidth={0.5}
                  onMouseEnter={() => setHoveredCountry(countryName)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#c084fc', outline: 'none', cursor: 'pointer' },
                    pressed: { outline: 'none' },
                  }}
                />
              );
            })
          }
        </Geographies>

        
        {hoveredCountry && (
          (() => {
            const coordinates = hoveredCountry === highlightedCountry.name 
              ? highlightedCountry.coordinates 
              : markers.find(m => m.name === hoveredCountry)?.coordinates;
            
            
            if (!coordinates) return null;

            return (
              <Marker coordinates={coordinates}>
                
                <circle r={3} fill="#000000" />
                
                
                <g transform="translate(10, -30)">
                  <rect 
                    x="-5" 
                    y="-15" 
                    width="160" 
                    height="40" 
                    fill="white" 
                    rx="4" 
                    ry="4"
                    stroke="#ccc"
                    strokeWidth="1"
                  />
                  <text x="0" y="0" fontSize="10" fontWeight="normal" fill="#000000">
                    {hoveredCountry}
                  </text>
                  <text x="0" y="15" fontSize="14" fontWeight="bold" fill="#000000">
                    {highlightedCountry.buyersCount}
                  </text>
                </g>
              </Marker>
            );
          })()
        )}
      </ComposableMap>
    </div>
  );

  return (
    <div className=" bg-white dark:bg-dark-900 relative">
      
        
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16">

        <div className="flex items-center justify-between p-2 mb-4">
          <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-300 dark:border-dark-600 rounded-2xl sm:rounded-full p-1 overflow-hidden bg-white dark:bg-dark-800 shadow-md gap-2 sm:gap-0">
            
            <div className="flex w-full sm:w-auto gap-2">
              {['Buyers', 'Sellers'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 font-semibold rounded-full transition-colors text-sm sm:text-base ${
                    activeTab === tab
                      ? 'bg-primary-600 dark:bg-primary-700 text-white'
                      : 'bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Add hs code or product"
              className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-transparent focus:outline-none text-sm sm:text-base min-w-0"
            />
            
            {/* Search Icon Button */}
            <button className="w-10 h-10 flex justify-center items-center rounded-full bg-primary-500 dark:bg-primary-600 text-white hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors self-end sm:self-auto">
              <Search size={18} />
              
            </button>
          </div>
          
        </div>

        {/* Map and Stats */}
        <div className="relative w-full aspect-video min-h-[400px] sm:h-[500px] lg:h-[600px]">
        
          {/* Map rendering */}
          
            {renderMap()}
          
          {/* Bottom Left Stats Box */}
          <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 p-3 sm:p-4 bg-white dark:bg-dark-800 rounded-xl shadow-xl border border-gray-200 dark:border-dark-700 z-10">
            <div className="text-sm sm:text-xl text-gray-900 dark:text-gray-100 mb-1">
              Found <span className="text-xl sm:text-3xl font-bold font-iserif italic">22,260,154</span> {activeTab}
            </div>
            <div className="text-xs sm:text-lg text-gray-600  dark:text-gray-500">
              from <span className="font-bold font-iserif italic">181</span> Countries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSellerMap;



