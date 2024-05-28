import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div >
        <div className='h-screen max-w-[1000px] mt-[-96px] mx-auto flex flex-col justify-center text-white  text-center '>
            <p className='text-lime-300 font-bold p-2 text-xl'>GET THE PROJECTS DONE IN NO TIME</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl py-2 md:py-6'>Grow Your Business Faster</h1>
            <div className='flex justify-center'>
                <p className='md:text-4xl sm:text-4xl text-xl py-2 font-bold'>Fast , Flexible , financing for </p>
                <ReactTyped className='text-gray-400 md:text-4xl sm:text-4xl text-xl py-2 pl-2 font-bold underline ' strings={[" BTB." , " SASS." , "BTC." ] } typeSpeed={150} backSpeed={140} loop  />
            </div>
            <p className='md:text-2xl text-xl font-bold md:pl-4 pl-2 pt-3 text-gray-400'>Monitor your data analytics to increase revenue for BTB , BTC , & SASS platforms.</p>
            <button className='bg-lime-400 w-38 rounded-md font-semibold my-6 px-6 mx-auto py-3 mt-10 md:w-44 '>GET STARTED</button>
        </div>
    </div>
  )
}

export default Hero