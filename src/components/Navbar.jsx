import React, { useState } from 'react'
import { AiOutlineClose ,AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
 
   // const [currentCount , funcToChange] = useState(0)

  // function incrementCount() {
  //   funcToChange(currentCount => currentCount + 1)
  // }
  // function decrementCount()
  // {
  //   funcToChange(currentCount => currentCount - 1)
  // }
  
  const [nav , setNav] = useState(true)

  const mobileHandleNav = () =>
  {
    setNav(!nav)
  }


  return (

    

    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
        <h1 className='text-lime-300  text-3xl font-bold '> 
        REACT
    </h1>
      <ul className='hidden md:flex '>
        <li className='p-4 text-[1.25em]   font-serif'>Home</li>
        <li className='p-4 text-[1.25em]   font-serif'>Company</li>  
        <li className='p-4 text-[1.25em]   font-serif'>Resources</li>
        <li className='p-4 text-[1.25em]   font-serif'>About</li>
        <li className='p-4 text-[1.25em]   font-serif'>Contact</li>
      </ul>

      <div onClick={mobileHandleNav} className='block md:hidden'>
        { !nav ? <AiOutlineClose size={22}></AiOutlineClose> : <AiOutlineMenu  size={22}/> }
        

      </div>
      
      <div className= { ` ease-in duration-300 ${!nav ? '  fixed  left-0 top-0 w-[60%] h-full  bg-[#000300]   ': ' fixed -left-36 '}` } >
      <h1 className='text-lime-300  text-3xl font-bold m-4 '> 
        REACT
    </h1>
        <ul className=' uppercase p-4 ' >
        <li className='p-4 border-b border-b-lime-50'>Home</li>
        <li className='p-4 border-b border-b-lime-50'>Company</li>  
        <li className='p-4 border-b border-b-lime-50'>Resources</li>
        <li className='p-4 border-b border-b-lime-50'>About</li>
        <li className='p-4 border-b border-b-lime-50'>Contact</li>
        </ul>
      </div>
                      {/* <h1 className='fixed'> {currentCount} </h1>
                      <button onClick={decrementCount}> - </button>
                      <button className='' onClick={incrementCount}>+ </button> */}
                   
    </div>
    
  )
}

export default Navbar