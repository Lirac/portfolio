import React from 'react'
import { FaDownload } from 'react-icons/fa'

const BaseButton = ({title, icon}) => {
  return (
    <div className="flex justify-center">
      <a
        download=""
        href="/resume.pdf"
        className="bg-firstColor text-white p-4 rounded-lg font-medium text-sm inline-flex items-center gap-2  hover:bg-firstColorAlt"
      >
       {title}
        {icon}
      </a>
    </div>
  )
}

export default BaseButton
