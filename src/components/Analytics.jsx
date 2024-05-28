import React from 'react'
import Main from '../assets/analyticsHome.jpeg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 ' >
            <img className='w-[550px]  mx-auto my-4 ml-3 ' src={Main} alt="LOL" />
            <div className='flex flex-col justify-center ml-3 md:ml-6 md:mt-3'>
                <p className='text-lime-400 font-bold'>DATA ANALYTICS DASHBORD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className='md:text-sm lg:text-lg'>Our Data Analytics Dashboard empowers you to centrally manage and visualize your data analytics with ease. Gain valuable insights, track key metrics, and make informed decisions to drive business growth. With customizable dashboards and real-time data updates, streamline your analytics workflow and unlock the full potential of your data. Experience the power of centralized data management and elevate your analytics capabilities to new heights.</p>
                {/* <button className='bg-lime-400 w-38 rounded-md font-semibold my-6 px-6 mx-auto py-3 mt-10 md:w-44 md:mx-0 text-slate-800'>GET STARTED</button> */}
                <button className='bg-black w-[200px] text-lime-300 rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>

            </div>
            
        </div>

    </div>
  )
}

export default Analytics