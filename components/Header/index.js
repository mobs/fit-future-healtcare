import { socials } from '@/utils/constants'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='bg-white w-screen z-20 flex flex-wrap gap-6 justify-between cursor-pointer px-12 p-4 text-sm'>
        <ul className='flex gap-2'>
          {
            socials.map((social,idx) => (
              <li>
                {social.icon}
              </li>
            ))
          }
        </ul>
        
        <ul className='flex items-center gap-3'>
        <li>
          Quick Enquiry
        </li>
        <li>
          About Us
        </li>
        <li>
          <button className='p-2 bg-green-dark text-white rounded-full'> Book Appointment </button>
        </li>
        </ul>
      </div>
    </header>
  )
}

export default Header