import React from 'react'
import { useEffect,useState } from 'react'
import Logo from '../assets/logo1 1.svg'
function NotFound() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800'>
    <div>
       <img src={Logo} alt="logo" className='h-32' />
    </div>
     <h1 className='text-3xl mt-5 text-gray-100 font-bold text-center'>404 | Page Not Found</h1>
   </div>
  )
}

export default NotFound