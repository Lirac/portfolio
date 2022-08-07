import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { BsMouse, BsArrowDownShort } from 'react-icons/bs'
import Image from 'next/image'
import { MailIcon } from '@heroicons/react/solid'

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center pt-14">
        <div className="flex flex-col gap-4">
          <a href="">
            <FaLinkedinIn className="w-4 h-4 text-firstColor hover:text-firstColorAlt" />
          </a>
          <a href="">
            <FaFacebookF className="w-4 h-4 text-firstColor hover:text-firstColorAlt" />
          </a>
          <a href="">
            <FaTwitter className="w-4 h-4 text-firstColor hover:text-firstColorAlt" />
          </a>
        </div>

        <div>
          <svg
            // class="home__blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              <image
                // class="home__blob-img"
                x="-5"
                y="0"
                href="/me2.jpg"
                width={500}
              />
            </g>
          </svg>
        </div>

        <div className="col-span-3 pt-8">
          <h1 className="font-bold text-[2rem]">Hi, I am Mfoniso</h1>
          <h3 className="font-semibold text-lg mb-3">Frontend Developer</h3>
          <p className="text-sm text-gray-700 mb-6">
            High level experience in web design and knowledge, producing quality
            work.
          </p>
          <a
            href="#contact"
            className="button inline-flex items-center font-medium text-sm mt-2 hover:bg-firstColorAlt"
          >
            Contact Me
            <MailIcon className="w-5 h-5 ml-2 transition-all"></MailIcon>
          </a>
        </div>
      </div>

      <div className="mt-8 text-firstColor transition-all duration-300 hover:translate-y-1 hidden">
        <a href="#about" className="flex items-end">
          <BsMouse className="w-6 h-6" />
          <span className="text-sm text-titleColor mr-1 font-medium">
            Scroll down
          </span>
          <BsArrowDownShort className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default Banner
