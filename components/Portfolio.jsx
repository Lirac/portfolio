import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaGithub, FaGithubSquare } from 'react-icons/fa'
import BaseButton from './BaseButton'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Portfolio = () => {
  return (
    <div className="section">
      <h2 className="font-bold text-center text-xl">Portfolio</h2>
      <h4 className="text-center text-sm mb-16">Most Recent Work</h4>

      <div className='max-w-[800px] mx-auto' >
        <Carousel showArrows={true} infiniteLoop={true} width=''>
          <div className="grid text-center py-8">
            <div className="w-[300px] md:w-[800px] mx-auto">
              <Image
                height={100}
                width={200}
                src="/project1.png"
                alt=""
                layout="responsive"
                quality={100}
                className="rounded-lg"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-sm mb-2">
                Responsive Admin Dashboard
              </h3>
              <p className="text-xs mb-4">
                A responsive admin dashboard built with pure HTML, CSS and
                vanilla javascript
              </p>
              <div className="flex items-center justify-center gap-3">
                <BaseButton
                  link={'https://responsive-dashboard-sepia.vercel.app/#'}
                  title={'Demo'}
                  icon={<FaArrowRight />}
                />
                <a
                  href="https://github.com/Lirac/Responsive-Dashboard"
                  className="inline"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid text-center py-8">
            <div className="w-[300px] md:w-[800px] mx-auto">
              <Image
                height={100}
                width={200}
                src="/project2.png"
                alt=""
                layout="responsive"
                quality={100}
                className="rounded-lg"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-sm mb-2">Spotify Clone</h3>
              <p className="text-xs mb-4">
                A clone of the spotify music app using Next.js, Recoil and
                Tailwind css
              </p>
              <div className="flex items-center justify-center gap-3">
                <BaseButton
                  link={'https://myspotify-nine.vercel.app/'}
                  title={'Demo'}
                  icon={<FaArrowRight />}
                />
                <a
                  href="https://github.com/Lirac/mySpotify"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className="inline"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid text-center py-8">
            <div className="w-[300px] md:w-[800px] mx-auto">
              <Image
                height={100}
                width={200}
                src="/project3.png"
                alt=""
                layout="responsive"
                quality={100}
                className="rounded-lg"
              />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-sm mb-2">Netflix Clone</h3>
              <p className="text-xs mb-4">
                A clone of the Netflix using React.js, Recoil and Tailwind css
              </p>
              <div className="flex items-center justify-center gap-3">
                <BaseButton
                  link={'https://mnetflixclone.netlify.app/'}
                  title={'Demo'}
                  icon={<FaArrowRight />}
                />
                <a
                  href="https://github.com/Lirac/Netflix-clone"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className="inline"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio
