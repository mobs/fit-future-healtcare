"use client"
import { navList } from '@/utils/constants'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebarVisiblity = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <navbar className="sticky top-0 z-50 w-screen bg-gray-100 lg:px-32 md:px-16 p-2 flex items-center justify-between shadow-xl">
      <picture className='ml6 flex flex-col items-center'>
        <img src='/logo.png' alt='fit-future-healthcare' className='h-12 w-40 ml-4' />
      </picture>

      <ul className='md:flex hidden justify-end gap-12'>
        {
          navList.map((nav, idx) => (
            <li key={idx} className='cursor-pointer'>
              {nav}
            </li>
          ))
        }
      </ul>

      <button className="lg:hidden mt-2" onClick={handleSidebarVisiblity}>
            <GiHamburgerMenu className={`${!sidebar ? 'block':'hidden'} text-4xl`} />
            <RxCross1 className={`${sidebar ? 'block':'hidden'} text-4xl`}  />
        </button>

        {sidebar && <Sidebar />}
    </navbar>
  )
}

export default Navbar