import React, { useState } from 'react';
import BookingStepper from "../BookingStepper/BookingStepper";
import Pagination from "./Pagination";

export default function Destinations({ data = [], page, perPage, onPageChange }) {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const safeData = Array.isArray(data) ? data : [];
  const displayedItems = safeData.slice(page * perPage, (page + 1) * perPage);
  const totalPages = Math.ceil(safeData.length / perPage);
  const currentPage = page + 1;

  const openBooking = (destination) => {
    setSelectedDestination(destination);
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setSelectedDestination(null);
    setBookingOpen(false);
  };

  return (
    <section className="py-10 px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <div>
          <h2 id="adventure" className="text-3xl font-bold mb-2">Popular Destination</h2>
          <p className="text-sm text-gray-500 max-w-md">
            Discover the world's top travel spots, offering breathtaking
            views, rich culture, and unique adventures for every traveler.
          </p>
        </div>
        <button className="mt-4 sm:mt-0 bg-black text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-200">
          Top rated
        </button>
      </div>

      {/* Destination Cards */}
      {displayedItems.length === 0 ? (
        <p className="text-gray-500 text-center w-full py-10">No destinations found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.01] autoShow"
            >
              <img
                src={`images/${item.image}.png`}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg cursor-pointer hover:text-blue-600 transition-all duration-200">
                    {item.country}
                  </h3>
                  <span className="text-gray-800 font-semibold">
                    ${item.price}/3days
                  </span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.description}
                </p>
                <div className="text-yellow-400 text-sm">★★★★★</div>
                <button
                  onClick={() => openBooking(item)}
                  className="mt-auto bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                >
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => onPageChange(newPage - 1)}
        />
      </div>

      {/* Booking Modal */}
      <BookingStepper
        isOpen={isBookingOpen}
        onClose={closeBooking}
        destination={selectedDestination}
      />
    </section>
  );
}
