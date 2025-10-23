import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ProfilePic from '../assets//profile-pic.jpg'
import ContactForm from '../components/ContactForm'
import { faDiscord, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Profile() {
  return (
    <>
      <div className='flex flex-col items-center bg-[#fffefec2] m-5 mt-4 p-4 shadow-lg rounded-sm text-pretty text-center'>
        <h1 className='w-full text-3xl font-semibold mx-5 text-left text-pretty'>Profile</h1>
       <div className='flex flex-col md:flex-row items-center justify-between md:w-2/3'>
        <img src={ProfilePic} alt="profile-pic" className='size-50 rounded-full border-2 border-gray-400'/>
       <div>
        <h2 className='text-3xl font-semibold text-black/85 m-2'>Wisdom Ndukwu</h2>
       <p className='text-xl font-light mx-10'>
        <span className='text-2xlnpm  font-semibold'>About Me</span><br />
       I'm Wizzy, a disciplined web developer passionate about creating functional, results-driven digital solutions.
       </p>
       </div>
       </div>
       <ContactForm/>
       <div>
        <h2 className='m-2 text-2xl'>You can also contact me on</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 auto-cols-fr place-items-center gap-4 m-4' >
          <div className='size-30 flex items-center justify-center bg-gray-200 rounded-xl p-4 border-1'>
            <a href=""><FontAwesomeIcon className='text-3xl text-center' icon={faTwitter}/></a></div>
          <div className='size-30 flex items-center justify-center bg-gray-200 rounded-xl p-4 border-1'>
           <a href=""><FontAwesomeIcon className='text-3xl text-center' icon={faLinkedinIn}/></a></div>
          <div className='size-30 flex items-center justify-center bg-gray-200 rounded-xl p-4 border-1'>
            <a href=""><FontAwesomeIcon className='text-3xl text-center' icon={faGithub}/></a></div>
             <div className='size-30 flex items-center justify-center bg-gray-200 rounded-xl p-4 border-1'>
            <a href=""><FontAwesomeIcon className='text-3xl text-center' icon={faDiscord}/></a></div>
        </div>
       </div>
      </div>
    </>
  )
}

export default Profile
