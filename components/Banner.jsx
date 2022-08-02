import React from 'react'
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import Image from 'next/image'
import { ReactComponent as imageComponent } from '../public/blob.svg'

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <a href="">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="">
            <FaFacebookSquare className="w-6 h-6" />
          </a>
          <a href="">
            <FaTwitterSquare className="w-6 h-6" />
          </a>
        </div>

        <div>
          <Image src="/blob.svg" alt="" width="150" height={150} />
        </div>
      </div>
    </div>
  )
}

export default Banner
