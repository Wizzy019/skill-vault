import React, { useState } from 'react'

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
          link: "http://intell-ai-wizzy.vercel.app",
          category: "Non React"
        },
         {
          name: "Nw Movies", 
          image: `${NWMovies}`, 
          description: "A modern app for browsing and viewing movie details", 
          link: "http://nw-movies.vercel.app",
          category: "React Projects"
        },
         {
          name: "Expense Handler", 
          image: `${Expense}`, 
          description: "An app for tracking and managing daily expenses", 
          link: "http://expense-handler-app.vercel.app",
           category: "React Projects"
        },
         {
          name: "Weather App", 
          image: `${Weather}`, 
          description: "A simple app for checking real-time weather updates", 
          link: "http://weather-app-wizzy.vercel.app",
           category: "React Projects"
        }
      ]

      const [selectedCategory, setSelectedCategory] = useState("All")

      const categories = ['All', 'React Projects', "Non React"];

      const filteredProjects = selectedCategory === 'All' ? 
      projects : projects.filter(project => project.category === selectedCategory);
     
  return (
    <>
    <h1 className='text-3xl font-semibold mx-2 text-center'>Projects</h1>
     <div className=' flex flex-1 items-center justify-center md:justify-start gap-1 m-2 p-1'>
     {categories.map((category) => (
      <button
      key={category}
      onClick={() => setSelectedCategory(category)}
        className={`px-4 py-2 rounded-md border ${
        selectedCategory === category
          ? "bg-black text-white"
          : "bg-white text-black border-gray-300"
      }`}
      >
        {category}
      </button>
     ))}
     </div>
     <div className='grid grid-cols-1 auto-cols-fr place-items-center gap-4 m-1.5 md:grid-cols-4'>
      {filteredProjects.map((project) => (
         <ProjectCard key={project.name} {...project}/>
      ))}
    </div>
    </>
    
  )
}

export default Projects