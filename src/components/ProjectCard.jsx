import React from 'react'

import '../App.css'


function ProjectCard({name, image, description, link}) {
  return (
    <div className="min-h-60 w-64 flex flex-col justify-evenly gap-2.5 rounded-xl shadow-md 
     p-3 text-black text-center text-3xl">
      <h2 className='text-3xl text-left'>{name}</h2>
      <img src={image} alt="Project Img" className='size-30 m-auto' />
        <p className='text-sm min-w-30 text-left'>{description}</p>
        <a href={link} target="_blank" className='bg-transparent w-fit rounded-xl shadow-md p-2 text-lg'>Visit Project</a>
    </div>
  )
}

export default ProjectCard
