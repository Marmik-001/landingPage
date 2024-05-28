import React from 'react'
import { FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare ,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        <div>
        <h1 className='w-full text-3xl font-bold text-lime-300 '>REACT</h1>
        <p className='py-4 grid-row-span-2'>At React, we specialize in data analytics solutions designed to empower businesses with actionable insights. Our services help you monitor, analyze, and optimize data for informed decision-making and growth. Partner with us to unlock the full potential of your data.</p>

        <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebookSquare size={28} className='' />
            <FaInstagramSquare size={28} className='' />
            <FaSquareXTwitter size={28} className='' />
            <FaGithubSquare size={28} className='' />
            <FaDribbbleSquare size={28} className='' />
        </div>
        </div>

    <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
                
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
                
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Career</li>
                
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
                
                
            </ul>
        </div>
    </div>
    

    </div>
  )
}

export default Footer