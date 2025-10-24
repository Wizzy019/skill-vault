import { NavLink } from 'react-router-dom'

import '../App.css'
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <header>
        <nav className='flex flex-col items-start border-b-1 border-b-gray-300 md:flex-row md:items-center md:justify-evenly'>
            <div className='flex items-center justify-start mx-0 m-2 p-1.5 md:justify-center'>
                <img src={Logo} alt="skillvault-logo" className='size-12 mr-2'/>
                <h1 className='font-semibold font-sans text-2xl text-lime-950'>SKILL VAULT</h1>
            </div>
            <div className='w-full p-1.5 md:w-1/2 md:justify-self-center'>
                <ul className='w-full flex flex-1 items-center justify-between p-2 md:flex-2 md:justify-evenly'>
                    <li><NavLink to="/" >Dashboard</NavLink></li>
                    <li><NavLink to="/goals">Goals</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar