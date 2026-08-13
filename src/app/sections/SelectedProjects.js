import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ProjectCard } from '../components/ProjectsComponent/ProjectCard'

export const SelectedProjects = () => {
  return (
    <div className='py-5 px-5'>
      <div className='flex flex-col gap-5'>
        <div className='sectionHead flex gap-8 items-center font-poppins'>
            <h2 className='sectionName text-4xl font-medium'>SELECTED PROJECTS</h2>
            <div className='sectionLine flex-1 h-px bg-white/50'></div>
            <Link href={'#'} className='flex items-center font-light gap-8'>
                <div className='text-lg'>VIEW ALL PROJECTS</div>
                <MoveRight size={60} strokeWidth={0.5}/>
            </Link>
        </div>
        <div className='projectsSlide flex gap-10'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
        </div>
    </div>
  )
}
