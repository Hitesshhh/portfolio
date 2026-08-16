import React from 'react'
import { Intro } from '../components/HeroSectionComponents/Intro'
import { Workex } from '../components/HeroSectionComponents/Workex'
import Image from 'next/image'
import profile from '@/app/assets/middle_profile_image.png'
import profile2 from '@/app/assets/profile_image_2.png'
import profile3 from '@/app/assets/profile_image_3.png'

const Hero = () => {
  return (
    <div className='relative border-b border-brand/25'>
    {/* background big text */}
    <div className='h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-3'>
      <span className='text-[20vw] font-anton font-extralight scale-y-[2.3] scale-x-[1.3] whitespace-nowrap flex justify-center items-center text-brand tracking-[-1px]'>PORTFOLIO</span>
    </div>
    {/* gradient in bg  */}
    <div className='gradientBG bg-linear-to-t from-black from-30% to-transparent to-80% absolute h-full w-full top-0 left-0 z-1'></div>

    {/* little intro  */}
    <div className='littleIntro absolute bottom-0 z-2 w-full left-0 flex justify-between items-end px-3 overflow-hidden'>
      <Intro/>
      <Image src={profile3} height={900} width={1200} alt='me' className="relative top-[600px] right-[50px] brightness-75"/>
      <Workex/>
    </div>
    </div>
  )
}

export default Hero
