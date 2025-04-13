import React, { useState } from 'react';
import unsplash from '../../assets/unsplash3.png';
import vector3 from '../../assets/vector3.png';
import people from '../../assets/people.png';
import price from '../../assets/price.png';
import vector from '../../assets/vector.png';
import bigui from '../../assets/bigui.png';
import booking from '../../assets/booking.com.png';
import jakmaen from '../../assets/jakmaen.png';
import katana from '../../assets/katana.png';
import travava from '../../assets/travava.png';
const Services = () => {
  const services = [
    {
      icon: <img src={people} alt="Best Service" className="rounded-md w-20 h-20 bg-black p-3" />,
      title: 'Best Service',
      description: 'Our service is reliable and convenient, our service is quality.',
    },
    {
      icon: <img src={price} alt="Price Guarantee" className="rounded-md w-20 h-20 bg-black p-3" />,
      title: 'Price Guarantee',
      description: 'Our service is reliable and convenient, our service is quality.',
    },
    {
      icon: <img src={vector} alt="Handpicked Hotels" className="rounded-md w-20 h-20 bg-black p-3" />,
      title: 'Handpicked Hotels',
      description: 'Our service is reliable and convenient, our service is quality.',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const nextSlide = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === services.length - 1 ? 0 : prev + 1));
      setTransition(false);
    }, 300);
  };

  const prevSlide = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? services.length - 1 : prev - 1));
      setTransition(false);
    }, 300);
  };

  return (
    <div className="relative mb-10">
        <div className='mb-10'>

     
      {/* Background image with content moved up */}
      <div 
        className="relative h-[250px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${unsplash})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-15 flex flex-col items-center pt-10 text-white">
          {/* Heading content moved up */}
          <div className="transform -translate-y-8">
            <h2 className="text-4xl md:text-6xl mt-4 font-bold mb-6 text-center">
              Why Choose Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-center">
              Our services have been trusted by world travelers.
            </p>
          </div>

          {/* Navigation arrows moved up */}
          <div className="flex justify-between  md:-mt-[104px] w-full px-[95px] absolute top-1/2">
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
        </div>
      </div>
      
    {/* Services grid */}
    <div className="container mx-auto px-4 max-w-4xl -mt-10 md:-mt-[230px] relative z-10">
  <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-300 ${transition ? 'opacity-50' : 'opacity-100'}`}>
    {services.map((service, index) => (
      <div 
        key={index}
        className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 mx-auto
          ${index === currentIndex ? "md:transform md:scale-105" : "md:opacity-90"}
          w-[300px] md:w-full
          h-[320px] md:min-h-[390px]
          flex flex-col`}
      >
        <div className="pt-6 md:pt-8 px-5 md:ml-5 flex flex-col h-full">
          <span className="mb-4 md:mb-6">{service.icon}</span>
          <h3 className="text-xl font-bold text-gray-800 mb-3 md:mb-4">{service.title}</h3>
          <p className="text-gray-600  mb-10 text-sm md:text-base">{service.description}</p>
          
          <a href="#" className="   mb-4 md:ml-3 flex items-center text-black font-medium">
            Learn more <img className='ml-2' src={vector3} alt='arrow'/> 
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
      <div className='container mx-auto px-4 max-w-5xl mt-10 md:mt-20'>
  <div className='text-center mb-10 md:mb-16'>
    <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-6'>
      Our Tour Partners
    </h1>
    <p className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto'>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
    </p>
  </div>
  
  <div className='flex flex-wrap justify-center gap-6 md:gap-10 px-4'>
    <div className='w-[100px] h-[60px] md:w-[140px] md:h-[80px] cursor-pointer flex items-center justify-center p-2 transition-all duration-300 hover:scale-110'>
      <img src={katana} alt="katana" className='max-h-full max-w-full object-contain   duration-300' />
    </div>
    <div className='w-[100px] h-[60px] md:w-[140px] md:h-[80px] cursor-pointer flex items-center justify-center p-2 transition-all duration-300 hover:scale-110'>
      <img src={travava} alt="travava" className='max-h-full max-w-full object-contain   duration-300' />
    </div>
    <div className='w-[100px] h-[60px] md:w-[140px] md:h-[80px] cursor-pointer flex items-center justify-center p-2 transition-all duration-300 hover:scale-110'>
      <img src={bigui} alt="bigui" className='max-h-full max-w-full object-contain   duration-300' />
    </div>
    <div className='w-[100px] h-[60px] md:w-[140px] md:h-[80px]cursor-pointer flex items-center justify-center p-2 transition-all duration-300 hover:scale-110'>
      <img src={booking} alt="booking" className='max-h-full max-w-full object-contain   duration-300' />
    </div>
    <div className='w-[100px] h-[60px] md:w-[140px] md:h-[80px] cursor-pointer flex items-center justify-center p-2 transition-all duration-300 hover:scale-110'>
      <img src={jakmaen} alt="jakmaen" className='max-h-full max-w-full object-contain  duration-300' />
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;