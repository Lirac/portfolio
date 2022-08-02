import React, { useState } from 'react'
import {
  HomeIcon,
  UserIcon,
  ClipboardListIcon,
  BriefcaseIcon,
  PhotographIcon,
  MailIcon,
  XIcon,
  MenuIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'

function Nav() {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className="w-full fixed bottom-0 left-0 z-10">
      <div className="max-w-[768px] flex justify-between mx-4 items-end">
        <a className="hover:text-[#492cd8] font-medium" href="#">
          Mfoniso
        </a>

        <div
          className={`bg-stone-100 fixed  ${
            showNav ? 'bottom-0' : 'bottom-[-100%]'
          } left-0 w-full px-6 pt-8 pb-16 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-3xl transition-all duration-500`}
        >
          <ul className="grid grid-cols-3 gap-y-8">
            <Link href="/">
              <a className="link" onClick={() => setShowNav(!showNav)}>
                <HomeIcon className="w-5 h-5"></HomeIcon>
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="link" onClick={() => setShowNav(!showNav)}>
                <UserIcon className="w-5 h-5"></UserIcon>
                About
              </a>
            </Link>
            <Link href="/">
              <a className="link" onClick={() => setShowNav(!showNav)}>
                <ClipboardListIcon className="w-5 h-5"></ClipboardListIcon>
                Skills
              </a>
            </Link>
            <Link href="/">
              <a className="link" onClick={() => setShowNav(!showNav)}>
                <BriefcaseIcon className="w-5 h-5"></BriefcaseIcon>
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="link" onClick={() => setShowNav(!showNav)}>
                <PhotographIcon className="w-5 h-5"></PhotographIcon>
                Portfolio
              </a>
            </Link>
            <Link href="/">
              <a className="link" onClick={() => setShowNav(!showNav)}>
                <MailIcon className="w-5 h-5"></MailIcon>
                Contact Me
              </a>
            </Link>
            <button onClick={() => setShowNav(!showNav)}>
              <XIcon className="w-5 h-5 absolute bottom-2 right-5 cursor-pointer text-[#242329] font-medium hover:text-[#492cd8]"></XIcon>
            </button>
          </ul>
        </div>
        <div>
          <button>
            <MenuIcon
              onClick={() => setShowNav(!showNav)}
              className="w-5 h-5 text-[#242329] font-medium hover:text-[#492cd8]"
            ></MenuIcon>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
