import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Goals from './pages/Goals'
import Projects from './pages/Projects'
import Profile from './pages/Profile'



function App() {
  return (
    <div className='h-screen w-full relative m-0 p-0 box-border'>
      <Navbar />
      <Routes>
         <Route path="/" element={<Dashboard/>} />
         <Route path="/goals" element={<Goals/>} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App
