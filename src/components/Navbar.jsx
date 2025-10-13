import { NavLink } from 'react-router-dom'

import '../App.css'
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <header>
        <nav className='flex flex-col items-start border-b-1 border-b-gray-400'>
            <div className='flex items-center justify-center m-2 p-1.5'>
                <img src={Logo} alt="skillvault-logo" className='size-12'/>
                <h1 className='font-semibold font-sans text-2xl text-lime-950 '>SKILL VAULT</h1>
            </div>
            <div className='w-full p-1.5'>
                <ul className='w-full flex flex-1 items-center justify-between p-2 '>
                    <li><NavLink to="/" className={({ isActive }) => isActive? 'nav-link active': 'nav-link'}>Dashboard</NavLink></li>
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