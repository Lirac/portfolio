import { MailIcon } from '@heroicons/react/solid'
import React from 'react'
import { MdLocalPhone, MdLocationPin, MdMail } from 'react-icons/md'
import BaseButton from './BaseButton'

const Contact = () => {
  return (
    <div className="section">
      <h2 className="font-bold text-center text-xl">Contact Me</h2>
      <h4 className="text-center text-sm mb-16">Get in touch</h4>

      <div className="md:grid md:grid-cols-2">
        <div className="space-y-8 mb-16">
          <div className="flex mb-3 space-x-3">
            <MdLocalPhone className="w-8 h-8 text-firstColor" />

            <div>
              <h3 className="font-semibold">Call Me</h3>
              <h4 className="text-gray-600">+234 7080069551</h4>
            </div>
          </div>

          <div className="flex mb-3 space-x-3">
            <MdMail className="w-8 h-8 text-firstColor" />

            <div>
              <h3 className="font-semibold">Email</h3>
              <h4 className="text-gray-600">Liraclomex@gmail.com</h4>
            </div>
          </div>

          <div className="flex mb-3 space-x-3">
            <MdLocationPin className="w-8 h-8 text-firstColor" />

            <div>
              <h3 className="font-semibold">Location</h3>
              <h4 className="text-gray-600">Uyo, Akwa Ibom - Nigeria</h4>
            </div>
          </div>
        </div>

        <form action="" className="grid">
          <div>
            <div className="">
              <label htmlFor="">Name</label>
              <input
                className="w-full p-4 rounded-lg border border-gray-400 mb-4 outline-none"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                className="w-full p-4 rounded-lg border border-gray-400 mb-4 outline-none"
                type="text"
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Project</label>
            <input
              className="w-full p-4 rounded-lg border border-gray-400 mb-4 outline-none"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea
              className="w-full p-4 rounded-lg border border-gray-400 mb-4 outline-none"
              cols={0}
              rows={7}
            />
          </div>
          <BaseButton icon={<MdMail />} title={'Submit'} />
        </form>
      </div>
    </div>
  )
}

export default Contact
