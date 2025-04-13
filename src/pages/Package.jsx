import React from 'react'
import Logo from '../assets/logo1 1.svg'
import Travlebanner from '../assets/PlaceholderImages/TravlePackageBanner.png'
import ArticleBanner from '../assets/PlaceholderImages/ArticleBanner.png'
import { useEffect, useState } from 'react';
import { getDestinations, dummyArticles } from '../services/apiClient';
import Destinations from '../components/package/Destinations';
import Articles from '../components/package/Articles';

import "../styles/package.css"

function Package() {
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
     <section className='p-0'>
          <div className="hero bg-cover bg-center text-white p-8 sm:p-12 lg:p-20 min-h-screen flex flex-col items-center justify-center"
             style={{ backgroundImage: `url(${Travlebanner})` }}>
                 <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
                   Travel Packages
                 </h1>
                 <p className="pt-4 text-xl sm:text-2xl lg:text-2.5xl font-bold" style={{ textShadow: '4px 4.5px 2px rgba(0, 0, 0, 0.2)' }}>
                   Home &gt; Package
                 </p>
               </div>

               <div className="bg-white space-y-12">
            <Destinations 
              data={destinations}
              page={currentPage}
              perPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />

          </div>
           
       <div className=''>
        <img src={ArticleBanner} alt="" />
       </div>

       <div className="bg-white p-8 space-y-12">
            <Articles data={articles} />
          </div>

    
       </section>
  )
}

export default Package






