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
          <Image
            className="fill-firstColor"
            src="/blob.svg"
            alt=""
            width="200"
            height={150}
          />
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
