import React from 'react'

export const Intro = () => {
  return (
    <div className='w-sm flex flex-col gap-3'>
        <div className='font-hurricane text-5xl p-1'>Hello I'm</div>
        <div className='flex flex-col font-oswald text-[6rem] leading-none font-bold scale-y-[1.3]'>
            <span>HITESH</span>
            <span>MUJWANI</span>
        </div>
        <div className='flex flex-col text-[1.3rem] gap-1 leading-none text-brand font-medium font-poppins mt-8'>
            <span>SOFTWARE DEVELOPER &</span>
            <span>CONTENT CREATOR</span>
        </div>
        <div className='font-poppins font-light text-white/80 leading-6 mb-3'>
            <p>I build modern websites, AI-powered web applications, mobile apps, and custom software that help businesses grow. As a software developer and content creator, I create fast, scalable, and user-focused digital solutions that turn ideas into real-world impact.</p>
        </div>
    </div>
  )
}
