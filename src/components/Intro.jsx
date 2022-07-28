import React from 'react'
import Typed from 'react-typed';
import { SiRadar } from "react-icons/si";


const Intro = () => {
  return (
    <div className='h-screen max-w-[900px] w-full mx-auto text-center mt-[150px]  flex flex-col' >
        <p className='text-gray-400 text-xl text-bold'> Understanding concepts in a most simplyfied explaination</p>
        <h2 className='text-[#1DB954] text-bold text-2xl md:text-4xl my-5'><Typed strings={['Lucid','Easy']} 
        typeSpeed={120}
        backSpeed={140}
        loop /> Read  </h2>

        <p className='text-white text-bold text-xl md:text-2xl'> Experience learning through connecting to the things you already know </p>

        <div className='text-white mx-auto text-center flex flex-col justify-center item-center'>
            <button className='text-black text-xl md:text-2xl py-1 font-semibold px-3 w-full rounded-md text-bold hover:scale-105 duration-300 bg-[#1DB954] mt-[90px] mb-3'>Get Started</button>
          
        </div>
    </div>
  )
}

export default Intro