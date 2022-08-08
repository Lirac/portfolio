import Image from 'next/image'
import React from 'react'
import { MdSend } from 'react-icons/md'
import BaseButton from './BaseButton'

const ProjectInMind = () => {
  return (
    <div className='section'>
        <div className='bg-secondColor pt-12 pb-8 px-4 rounded-md text-center'>
            <div>
                <div>
                    <h2 className='font-semibold mb-3 text-white'>Have a new Project in mind?</h2>
                    <p className='text-white mb-5 text-xs'>Contact me now and get 30% discount on your new project.</p>
                    <BaseButton  isWhite={true} title={'Contact Me'} icon={<MdSend className='w-4 h-4'/>}></BaseButton>

                    {/* <Image src={'/m3.png'} width={150} height={150} alt='' className='justify-self-center'></Image> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectInMind