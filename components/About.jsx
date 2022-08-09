import Image from 'next/image'
import React from 'react'
import { FaDownload, FaFileDownload } from 'react-icons/fa'
import BaseButton from './BaseButton'

const About = () => {
  return (
    <div className="mt-16 pb-16 section">
      <h2 className="font-bold text-center text-xl">About Me</h2>
      <h4 className="text-center text-sm mb-16">My Introduction</h4>

      <div className="grid md:grid-cols-2 text-center">
        <img
          src="/me.jpg"
          alt=""
          className=" rounded-lg self-center justify-self-center w-[200px]"
        />

        <div className="pt-8">
          <p className="text-center mb-9">
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
