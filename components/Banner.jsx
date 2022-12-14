import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { BsMouse, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs'
import * as Scroll from 'react-scroll'
import { MailIcon } from '@heroicons/react/solid'

// let Link      = Scroll.Link;
// let Button    = Scroll.Button;
// let Element   = Scroll.Element;
// let Events    = Scroll.Events;
let scroll = Scroll.animateScroll
let scrollSpy = Scroll.scrollSpy

const Banner = () => {
  return (
    <div className="section mt-[72px]">
      <div className="grid grid-cols-2 md:grid-cols-[max-content_1fr_1fr] items-center pt-8">
        <div className="flex flex-col gap-6 md:mr-6">
          <a
            href="https://www.linkedin.com/in/mfoniso-ayara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-4 h-4 md:w-6 md:h-6 text-firstColor hover:text-firstColorAlt" />
          </a>
          <a
            href="https://www.facebook.com/lirac.lomex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-4 h-4 md:w-6 md:h-6 text-firstColor hover:text-firstColorAlt" />
          </a>
          <a
            href="https://twitter.com/MfonisoAyara"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-4 h-4 md:w-6 md:h-6 text-firstColor hover:text-firstColorAlt" />
          </a>
        </div>

        <div className="md:order-1">
          <svg
            // class="home__blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-firstColor"
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
                href="/m3.png"
                width={500}
              />
            </g>
          </svg>
        </div>

        <div className="col-span-3 pt-8 md:col-auto">
          <h1 className="font-bold text-3xl">Hi, I am Mfoniso Ayara</h1>
          <h3 className="font-semibold text-lg mb-4 md:mb-6 text-gray-500">
            Frontend Engineer
          </h3>
          <p className="text-sm md:text-base text-gray-500 mb-6">
            Passionate frontend engineer with over 4 years of programming exprience and over 2 years of professional experience in developing web applications.
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
    </div>
  )
}

export default Banner
