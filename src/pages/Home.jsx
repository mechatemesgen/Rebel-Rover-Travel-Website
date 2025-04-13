import React from 'react';
import { useEffect, useState } from 'react';
import HeroSection from '../components/ui/HeroSection';
import Destinations from '../components/ui/Destinations';
import Services from '../components/ui/Services';
import Testimonial from '../components/ui/Testimonial';

import "../styles/package.css"

export default function Home() {

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
   <>
   <HeroSection />
   <Destinations/>
   <Services />
   <Testimonial/>
   </>
  )
}