import React, { useState, useEffect } from 'react';

const Destinations = () => {
  // Sample data - expanded with more destinations
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Bali",
      country: "Indonesia",
      description: "Bali is a beautiful tourist spot visited by many travelers.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      description: "The city of love with iconic landmarks like the Eiffel Tower.",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      description: "A vibrant mix of traditional culture and modern technology.",
      image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "New York",
      country: "USA",
      description: "The city that never sleeps with its famous skyline.",
      image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Sydney",
      country: "Australia",
      description: "Famous for its Opera House and beautiful harbor.",
      image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Santorini",
      country: "Greece",
      description: "Whitewashed buildings with blue domes overlooking the Aegean Sea.",
      image: "https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Rio de Janeiro",
      country: "Brazil",
      description: "Famous for its Carnival, beaches, and the Christ the Redeemer statue.",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const nextSlide = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === destinations.length - 1 ? 0 : prev + 1));
      setTransition(false);
    }, 300);
  };

  const prevSlide = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? destinations.length - 1 : prev - 1));
      setTransition(false);
    }, 300);
  };

  const getVisibleDestinations = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + destinations.length) % destinations.length;
      items.push(destinations[index]);
    }
    return items;
  };

  return (
    <div className="max-w-7xl mx-auto px-16 py-16 mb-6">
      {/* Heading section */}
      <div className="text-center px-4 ">
        <h1 className="xl:text-5xl md:text-5xl text-2xl font-bold mb-6">
          Explore new worlds with<br />
          exotic natural scenery
        </h1>
        <p className="text-gray-500 text-lg mt-4  ">
          Explore the world with what you love beautiful natural beauty.
        </p>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-between mb-8 px-4">
        <button 
          onClick={prevSlide}
          className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

 {/* Destination cards */}
<div className="relative overflow-hidden">
  <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 transition-opacity duration-300 ${transition ? 'opacity-50' : 'opacity-100'}`}>
    {getVisibleDestinations().map((destination, index) => (
      <div 
        key={destination.id}
        className={`transition-all duration-300 ${index === 1 ? "md:transform md:scale-105" : "md:opacity-90"}`}
      >
        {/* Main card container - use different approach for shadow */}
        <div className={`
          relative rounded-xl overflow-hidden
          ${index === 1 ? "md:shadow-lg md:shadow-black/30" : ""}
          shadow-md
        `}>
          
          {/* Quotation mark - only on center card in 3-column mode */}
          {index === 1 && (
            <div className="hidden md:block absolute right-8 top-[300px] z-10">
              <div className="bg-white pt-4 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                <span className="text-7xl font-serif text-gray-700 relative top-1">"</span>
              </div>
            </div>
          )}
          
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-48 md:h-80 object-cover"
          />
          
          {/* Description section */}
          <div className={`bg-white p-4 md:p-6 ${index === 1 ? 'block' : 'block md:hidden'}`}>
            <h3 className="text-lg md:text-xl font-semibold">
              {destination.name}, {destination.country}
            </h3>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600">
              {destination.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Destinations;