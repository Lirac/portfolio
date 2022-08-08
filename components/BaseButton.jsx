import React from 'react'
import { FaDownload } from 'react-icons/fa'

const BaseButton = ({title, icon, link}) => {
  return (
    <div className="flex justify-center">
      <a
        // download=""
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={link}
        className="bg-firstColor text-white p-4 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2  hover:bg-firstColorAlt"
      >
       {title}
        {icon}
      </a>
    </div>
  )
}

export default BaseButton
