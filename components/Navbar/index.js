import { navList } from '@/utils/constants'
import React from 'react'

const Navbar = () => {
  return (
    <navbar className="p-12 pt-0 pb-4 flex items-center justify-between">
      <picture className='ml-6 flex flex-col'>
        <img src='/logo.png' alt='fit-future-healthcare' className='h-12 w-16 ml-4' />
        {/* <figcaption className='text-xs font-extralight'>Fit Future Healthcare</figcaption> */}
      </picture>

      <ul className='flex justify-end gap-12'>
        {
          navList.map((nav, idx) => (
            <li key={idx}>
              {nav}
            </li>
          ))
        }
      </ul>
    </navbar>
  )
}

export default Navbar