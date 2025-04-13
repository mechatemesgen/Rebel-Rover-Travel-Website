import React, { useState, useEffect } from 'react';
import Destinations from '../components/package/Destinations';
import { getDestinations, dummyArticles } from '../services/apiClient';
import Travlebanner from '../assets/PlaceholderImages/Dubai.png'

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [articles] = useState(dummyArticles);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDestinations();
      setDestinations(data);
    };
    fetchData();
  }, []);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section>
         <div className="hero bg-cover bg-center text-white p-8 sm:p-12 lg:p-20 min-h-screen flex flex-col items-center justify-center"
         style={{ backgroundImage: `url(${Travlebanner})` }}>
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
            Destination
            </h1>
            <p className="pt-4 text-xl sm:text-2xl lg:text-2.5xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
            Home &gt; Destinations
            </p>
        </div>


      <Destinations
        data={destinations}
        page={currentPage}
        perPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

export default Destination;
