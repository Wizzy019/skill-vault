import React from 'react'

import '../App.css'

function Dashboard() {
  return (
    <div className='w-10/12 m-auto grid grid-cols-2 grid-rows-2 gap-2 justify-items-stretch mt-4 gap-4'>
      <div className='border-2 border-gray-400 rounded-2xl h-30 p-4'>
        <h3 className='text-gray-600'>Total Tasks</h3>
        <p className='text-4xl font-semibold'>12</p>
      </div>
       <div className='border-2 border-gray-400 rounded-2xl h-30  p-4'>
        <h3 className='text-gray-600'>Completed Tasks</h3>
        <p className='text-4xl font-semibold'>8</p>
      </div>
       <div className='border-2 border-gray-400 rounded-2xl h-30 p-4'>
        <h3 className='text-gray-600'>Active Goals</h3>
        <p className='text-4xl font-semibold'>3</p>
      </div>
       <div className='border-2 border-gray-400 rounded-2xl h-30 p-4'>
        <h3 className='text-gray-600'>Total Tasks</h3>
        <p className='text-4xl font-semibold'>12</p>
      </div>
    </div>
  )
}

export default Dashboard
