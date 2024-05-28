import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Card = () => {
  return (
    <div className='w-full py-40 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 lg:md:grid-cols-3 '>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>

                <img className='w-20 mx-auto mt-[-3rem]  bg-white  ' src={Single} alt="asdf" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 border-lime-300'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8 border-lime-300'>1 Granted User</p>
                  <p className='py-2 border-b mx-8 border-lime-300'>Send up to 2 GB</p>
                </div>

                <button className='bg-black w-[200px] rounded-md text-lime-300 font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>

                <img className='w-20 mx-auto mt-[-3rem]  ' src={Double} alt="asdf" />
                <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
                <p className='text-center text-4xl font-bold'>$249</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 border-lime-300'>1.5 TB Storage</p>
                  <p className='py-2 border-b mx-8 border-lime-300'>2 Granted User</p>
                  <p className='py-2 border-b mx-8 border-lime-300'>Send up to 5 GB</p>
                </div>

                <button className='bg-black w-[200px] text-lime-300 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>

                <img className='w-20 mx-auto mt-[-3rem]  ' src={Triple} alt="asdf" />
                <h2 className='text-2xl font-bold text-center py-8'>Three Users</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b border-lime-300 mx-8 mt-8'>2.5 TB Storage</p>
                  <p className='py-2 border-b mx-8 border-lime-300'>3 Granted User</p>
                  <p className='py-2 border-b mx-8 border-lime-300'>Send up to 10 GB</p>
                </div>

                <button className='bg-black text-lime-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>

        </div>
    </div>
  )
}

export default Card