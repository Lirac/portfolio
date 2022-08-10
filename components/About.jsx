import Image from 'next/image'
import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import BaseButton from './BaseButton'

const About = () => {
  return (
    <div className="mt-16 pb-16 section" name='test1'>
      <h2 className="font-bold text-center text-xl">About Me</h2>
      <h4 className="text-center text-sm mb-16">My Introduction</h4>

      <div className="grid md:grid-cols-2">
        <img
          src="/me.jpg"
          alt=""
          className=" rounded-lg self-center justify-self-center md:w-[200px] lg:w-[300px]"
        />

        <div className="pt-8 text-center">
          <p className="text-center mb-9 text-gray-500">
            Web Developer with extensive knowledge and years of experience
            building high quality web applications
          </p>

          <div className="flex justify-evenly mb-10 text-sm">
            <div className="text-center block">
              <span className="font-semibold text-lg text-titleColor block">
                3+
              </span>
              <span>
                Years <br /> experience
              </span>
            </div>
            <div className="text-center block">
              <span className="font-semibold text-lg text-titleColor block">
                10+
              </span>
              <span>
                Projects <br /> completed
              </span>
            </div>
            <div className="text-center block">
              <span className="font-semibold text-lg text-titleColor block">
                2+
              </span>
              <span>
                companies <br /> worked
              </span>
            </div>
          </div>
          <BaseButton icon={<FaFileDownload />} title={'Download CV'} link={'/resume.pdf'} />
        </div>
      </div>
    </div>
  )
}

export default About
