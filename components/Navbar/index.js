"use client"
import { navList } from '@/utils/constants'
import React, { useEffect } from 'react'

const Navbar = () => {

  useEffect(() => {
    window.addEventListener('scroll', function() {
      var scrollClass = document.querySelector('.header-display');
      if(window.scrollY > 70) {
        scrollClass.style.backgroundColor = 'white';
        scrollClass.style.position = "fixed";
        // scrollClass.style.marginTop = "0";
        scrollClass.style.marginTop = "-70px"
        scrollClass.style.color = '';
      } else {
        scrollClass.style.position = 'absolute';
        scrollClass.style.color = '';
        scrollClass.style.marginTop = "0"
      }
    });
  }, [])

  return (
    <navbar className="aboslute header-display z-50 w-screen bg-white px-12 p-2 flex items-center justify-between">
      <picture className='ml-6 flex flex-col items-center'>
        <img src='/logo.png' alt='fit-future-healthcare' className='h-12 w-40 ml-4' />
      </picture>

      <ul className='flex justify-end gap-12'>
        {
          navList.map((nav, idx) => (
            <li key={idx} className='cursor-pointer'>
              {nav}
            </li>
          ))
        }
      </ul>
    </navbar>
  )
}

export default Navbar