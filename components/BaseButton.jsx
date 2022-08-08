import React from 'react'
import { FaDownload } from 'react-icons/fa'

const BaseButton = ({title, icon, link, isWhite}) => {
  return (
    <div className="">
      <a
        // download=""
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={link}
        className={`${isWhite ? 'bg-white text-firstColor hover:bg-white/90' : 'bg-firstColor text-white' } cursor-pointer p-4 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2  hover:bg-firstColorAlt`}
      >
       {title}
        {icon}
      </a>
    </div>
  )
}

export default BaseButton
