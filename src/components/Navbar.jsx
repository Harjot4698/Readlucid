import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='text-white'>
        <div className='text-bold  flex flex-row justify-between max-w-[1240px] mx-auto items-center h-24 p-4' >
            <h1 className='text-[#1DB954]  text-xl md:text-4xl font-bold'>Lucid Read</h1>
            <ul className=' hidden md:flex uppercase  flex-row md:text-xl '>
                <li className='pl-4'>Home</li>
                <li className='pl-4'>Resources</li>
                <li className='pl-4'>about</li>
                <li className='pl-4'>Contact</li>
            </ul>
            <div className='block md:hidden'> <AiOutlineMenu/></div>
          
            
        </div>
    </div>
  )
}

export default Navbar