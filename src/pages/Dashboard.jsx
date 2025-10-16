import React from 'react'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

import '../App.css'
import sourceData from "../Data/sourceData.json";
import Goals from './Goals';

defaults.maintainAspectRatio = false;
defaults.responsive = true;


function Dashboard() {
  return (
    <div className='flex flex-1 justify-evenly flex-col md:flex-row '>
      <div className='w-10/12 m-auto grid grid-cols-2 grid-rows-2 justify-items-stretch mt-4 gap-4 md:w-1/3 shadow-lg p-5 rounded-sm'>
      <div className='dashboard-card'>
        <h3 className='dashboard-card-text'>Total Tasks</h3>
        <p className='dashboard-card-number'>12</p>
      </div>
       <div className='dashboard-card'>
        <h3 className='dashboard-card-text'>Completed Tasks</h3>
        <p className='dashboard-card-number'>8</p>
      </div>
       <div className='dashboard-card'>
        <h3 className='dashboard-card-text'>Active Goals</h3>
        <p className='dashboard-card-number'>3</p>
      </div>
       <div className='dashboard-card'>
        <Doughnut
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Goals",
              data: sourceData.map((data) => data.value),
              backgroundColor: [ 
                "rgba(45, 40, 155, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(223, 43, 54 0.6)",
                "rgba(54, 1, 25, 0.6)",
              ],
              borderWidth: 1,
              hoverOffset: 30,
            }
          ],
        }}
        />
      </div>
    </div>
    <Goals />
    </div>
    
  )
}

export default Dashboard
