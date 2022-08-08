import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-secondColor text-white'>
      <div className='section mb-0 space-y-14 md:space-y-0 pt-8 pb-12 px-8 md:grid md:grid-cols-2 lg:flex lg:items-center lg:justify-between'>
        <div className=''>
          <h2 className='font-bold text-lg mb-1'>Mfoniso Ayara</h2>
          <h5 className='text-sm'>Frontend Developer</h5>
        </div>

        <ul className='text-sm space-y-4 mt-0 md:flex  md:items-center md:space-y-0 md:gap-x-4'>
          <li>
            <a href="" className='hover:text-colorLighter'>Services</a>
          </li>
          <li>
            <a href="#portfolio" className='hover:text-colorLighter'>Portfolio</a>
          </li>
          <li>
            <a href="#portfolio" className='hover:text-colorLighter'>Contact me</a>
          </li>
        </ul>

        <div className='flex space-x-6 md:pt-16 lg:pt-0'>
          <a
            href="https://www.facebook.com/lirac.lomex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-6 h-6 hover:text-colorLighter" />
          </a>
          <a href="">
            <FaLinkedin className="w-6 h-6 hover:text-colorLighter" />
          </a>
          <a href="">
            <FaTwitter className="w-6 h-6 hover:text-colorLighter" />
          </a>
        </div>

        
      </div>
      <p className='text-xs text-center text-gray-700/80 pb-4 place-self-center self-center'>&#169; Mfoniso Ayara. All rights reserved</p>
    </div>
  )
}

export default Footer
