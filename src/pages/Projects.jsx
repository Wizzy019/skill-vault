import React from 'react'

import '../App.css'
import ProjectCard from '../components/ProjectCard'
import IntellAi from '../assets/intell-ai.jpg'
import NWMovies from '../assets/nw-movies.jpg'
import Expense from '../assets/expense-tracker.jpg'
import Weather from '../assets/weather-app.jpg'


function Projects() {

      const projects = [
        {
          name: "Intell AI", 
          image: `${IntellAi}`, 
          description: "A well structured mock up AI page", 
            link: "http://intell-ai-wizzy.vercel.app"
        },
         {
          name: "Nw Movies", 
          image: `${NWMovies}`, 
          description: "A modern app for browsing and viewing movie details", 
          link: "http://nw-movies.vercel.app"
        },
         {
          name: "Expense Handler", 
          image: `${Expense}`, 
          description: "An app for tracking and managing daily expenses", 
          link: "http://expense-handler-app.vercel.app"
        },
         {
          name: "Weather App", 
          image: `${Weather}`, 
          description: "A simple app for checking real-time weather updates", 
          link: "http://weather-app-wizzy.vercel.app"
        }
      ]

  return (
    <div className='grid grid-cols-1 auto-cols-fr place-items-center m-1.5 md:grid-cols-4'>
      {projects.map((project) => (
         <ProjectCard key={project.name} {...project}/>
      ))}
    </div>
  )
}

export default Projects