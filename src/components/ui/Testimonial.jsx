import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import client1 from '../../assets/client 1.png';
import client2 from '../../assets/client 2.png';
import client3 from '../../assets/client 3.png';

const Testimonial = () => {
  const testimonials = [
    {
      img: client1,
      name: "John Doe",
      role: "Traveler",
      text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive...",
      rating: 5
    },
    {
      img: client2,
      name: "Jane Smith",
      role: "Traveler",
      text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive...",
      rating: 4
    },
    {
      img: client3,
      name: "Alice Johnson",
      role: "Traveler",
      text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive...",
      rating: 5
    },
    {
      img: client1,
      name: "David Lee",
      role: "Traveler",
      text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive...",
      rating: 4
    },
    {
      img: client3,
      name: "Ella Brown",
      role: "Traveler",
      text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive...",
      rating: 5
    },
    {
      img: client2,
      name: "Tom White",
      role: "Traveler",
      text: "Before we define any approach, we need to define the brand's overall goal. We then need to dive...",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const maxIndex = testimonials.length - cardsPerPage;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="px-4 py-16 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-gray-600 text-lg mb-1 uppercase">Testimonials</h1>
          <p className="text-4xl font-bold mb-3">What our clients say</p>
          <p className="text-gray-500">Create a visual identity for your company and an overall brand</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-end mb-10">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-lg shadow-md transition ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg bg-white'
              }`}
            >
              <FiChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`p-3 rounded-lg shadow-md transition ${
                currentIndex >= maxIndex
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-lg bg-white'
              }`}
            >
              <FiChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
              width: `${(testimonials.length * 100) / cardsPerPage}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl w-[290px] shadow-lg p-8 mx-7 min-w-[290px] h-[410px] flex flex-col items-center text-center mb-6"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 mb-3">{testimonial.role}</p>
                <div className="mt-10">
                  <div className="flex mb-5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 mr-2 text-sm">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
