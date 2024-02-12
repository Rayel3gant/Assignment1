import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-6 w-full   '>
        <div className='w-3/4 lg:w-1/3 mx-auto flex justify-between lg:text-2xl text-xl'>
            <NavLink to='/' className='font-bold text-white hover:scale-110 transition-all duration-1000 '>HOME</NavLink>
            <NavLink to='/transaction' className='font-bold text-white hover:scale-110 transition-all duration-1000 '>TRANSACTION</NavLink>
            <NavLink to='/data' className='font-bold text-white hover:scale-110 transition-all duration-1000 '>DATA</NavLink>
        </div>


        <div className='w-full h-[1px] bg-black mt-4'/>
        
    </div>
  )
}

export default Navbar