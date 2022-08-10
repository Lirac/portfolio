import React, { useEffect, useState } from 'react'
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
import * as Scroll from 'react-scroll'

let scroll = Scroll.animateScroll

function Nav() {
  const [showNav, setShowNav] = useState(false)
  const [navBackground, setNavBackground] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNavBackground(true)
      } else setNavBackground(false)
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setNavBackground(false)
      })
    }
  }, [])


  return (
    <>
      <nav className="w-full fixed bottom-0 left-0 z-10 md:hidden">
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
      <nav
        className={`w-full fixed top-0 h-16 hidden md:block ${
          navBackground ? 'bg-stone-100/80 z-10 transition-all duration-500' : 'bg-transparent'
        }`}
      >
        <div className="md:max-w-6xl lg:max-w-7xl mx-auto px-8 flex items-center h-full justify-between">
          <a className="hover:text-[#492cd8] font-bold text-2xl" href="#">
            Mfoniso
          </a>

          <div>
            <ul className="flex gap-8">
              <Link href="/">
                <a className="link" onClick={() => scroll.scrollTo(0)}>
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="link" onClick={() => scroll.scrollTo(650)}>
                  About
                </a>
              </Link>
              <Link href="/">
                <a className="link" onClick={() => scroll.scrollTo(1250)}>
                  Skills
                </a>
              </Link>
              <Link href="/">
                <a className="link" onClick={() => scroll.scrollTo(1700)}>
                  Qualifications
                </a>
              </Link>
              <Link href="/">
                <a className="link" onClick={() => scroll.scrollTo(2200)}>
                  Portfolio
                </a>
              </Link>
              <Link href="/">
                <a className="link" onClick={() => scroll.scrollTo(3200)}>
                  Contact Me
                </a>
              </Link>
              <button onClick={() => setShowNav(!showNav)}>
                <XIcon className="w-5 h-5 absolute bottom-2 right-5 cursor-pointer text-[#242329] font-medium hover:text-[#492cd8] md:hidden"></XIcon>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
