import React from 'react'
import { FcSearch } from "react-icons/fc";

const Main = () => {
  return (
    <div className='bg-white h-full flex flex-col max-w-[1240px] mx-auto ' >
        <div className='w-full h-[125px] shadow flex flex-row justify-center items-center'>

          <div className='flex flex-row justify-center items-center'>

          <input className='py-1 px-4 w-full max-w-[300px] mx-auto rounded-sm outline-none shadow-sm border-none text-xl md:text-2xl text-black hover:scale-105 duration-100 mr-2' type='search' placeholder="Search the term"/>

           <button className='hover:scale-110 duration-500'><FcSearch size={27 }/ ></button>

           </div>
           </div>
        <div className='h-full'>
          <div className=" ml-[50px] mt-[25px] md:ml-[175px] md:mt-[100px] ">
            <h1 className='font-bold md:text-2xl  '><li>Builder Design pattern</li></h1>
            <div className=' mx-7 my-4 md:mx-11 md:my-6  tracking-widest leading-normal'><p>
              <h4 className='font-bold '>Why builder pattern ?</h4><br />

Imagine a program where you have to create unnecessarily big objects with too many fields and creating constructor out of it with lots of parameters involved- not an easy task right ???

<br></br><p className='my-2'>The builder pattern suggests that you take out the object construction code out of its own class and move it to seprate objects called builder. </p>

<br></br><p className='mt-1'>In standard OOP code class, we define fields, constructors ,getters and setters.
<br></br>In case of builder pattern, </p>

<br></br><li>We build interface called builder which defines all the possible ways to configure a product.</li>

<br></br><li>We have a Concrete builders that implements steps defined in the common interface.</li>

<br></br><li>We have a product class.</li>

<br></br><li>We have a director class which use the builder to help in telling what specific configuration to input so to build a specfic or varied products </li>

<br></br>At last we have, a main class, where everthing is called together.
<p className='mt-2'>This was the overview of how standard OOP code struture vs builder pattern structure differs.

<br></br>If you still didn't understand what all of these different classes in the above builder pattern do. 
</p>

<br></br>Let me make it more clear with code.

<br></br><p className='my-4'>I'm going to contrast the standard oop code structure vs builder pattern code structure to let you see what change we are doing or How we are arranging our standard oop code to build a 
builder pattern that helps you to solve the problem of creating lengthy objects with too many fields and their constructors and you will see for yourself how builder pattern helps you in providing 
flexibilty in object configuration.</p>

</p></div>
          </div>
        </div>
    </div>
  )
}

export default  Main