import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white '>
        <div className='max-w-[1240px] mx-auto  grid lg:grid-cols-3 lg:grid-rows-3'>
            <div className='ml-4 lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow</h1>
                <p className='mt-3 text-xl'>Sign up today for free to enjoy our newsletter servicers</p>
            </div>
            <div className='lg:mt-0 flex flex-col sm:flex-row items-center  m-4'>
                <input type="Email" placeholder='Enter Email' className='m-4 p-3 flex w-full rounded-md text-black lg:ml-0 ml-0 '/>
                <button className='bg-lime-400 w-44 rounded-md font-semibold  px-6 mx-auto p-3   md:w-56 md:mx-0 text-slate-800 '>Notify me</button>
                
            </div>
            <p className='text-lime-400 m-4 text-sm mt-5'>We care about your data. Read our <a href="https://google.com"><u>Privacy Policy</u> </a>.</p>
        </div>
    </div>
  )
}

export default Newsletter