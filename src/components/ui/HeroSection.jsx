import suitCaseTravelImage from '../../assets/suitcase.png';
import { useState } from 'react';

export default function HeroSection() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div
      className="relative h-[600px] md:h-[700px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${suitCaseTravelImage})` }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl ml-4 sm:ml-8 md:ml-14 lg:ml-8 xl:ml-24 mt-[150px] sm:mt-32 md:mt-24">
          <h1 className="text-5xl mb-4 sm:text-6xl sm:mb-7 xl:mb-10  md:text-7xl lg:text-7xl xl:text-7xl font-bold  md:mb-6 text-white  ">
            Make in <br /> your journey
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 text-gray-300">
            Explore the world with what you love beautiful <br className="hidden sm:block" />   natural beauty
          </p>

          {/* Search Bar */}
          <div className="bg-white p-3 rounded-3xl sm:rounded-full shadow-lg flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
            {['location', 'date', 'people'].map((type, index) => (
              <div
                key={type}
                className={`relative flex-1 px-2 py-1 sm:px-4 sm:py-2 ${index !== 2 ? 'sm:border-r' : ''}`}
              >
                <select
                  className="w-full appearance-none text-gray-500 bg-transparent focus:outline-none pr-6 text-sm sm:text-base"
                  onClick={() => toggleDropdown(type)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {type === 'location'
                      ? 'Location'
                      : type === 'date'
                      ? 'Date'
                      : 'People'}
                  </option>
                  {type === 'location' && (
                    <>
                      <option>Bali, Indonesia</option>
                      <option>Paris, France</option>
                      <option>Tokyo, Japan</option>
                    </>
                  )}
                  {type === 'date' && (
                    <>
                      <option>This Weekend</option>
                      <option>Next Week</option>
                      <option>Next Month</option>
                    </>
                  )}
                  {type === 'people' && (
                    <>
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>Family (4+)</option>
                    </>
                  )}
                </select>
                <DropdownArrow isOpen={activeDropdown === type} />
              </div>
            ))}

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition text-sm sm:ml-2">
              Explore
            </button>
          </div>

          <p className="text-sm sm:text-base text-gray-300 mt-4">
            <span className="font-semibold text-gray-200">Top popular places:</span>{' '}
            Bali, Istanbul, Rome, Paris
          </p>
        </div>
      </div>
    </div>
  );
}

const DropdownArrow = ({ isOpen }) => (
  <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
    <svg
      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);
