import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import {Typewriter} from 'react-simple-typewriter';
import { FaArrowRightLong } from "react-icons/fa6";
import Welcome from './Welcome';
import ChatBox from '../ChatApp/ChatBox';
import { AppContext } from '../Context/AppContext';

const Hero = () => {
  const{navigate} = useContext(AppContext)
  return (
    <>
    
    <div id='Home' className={`pt-36 w-full bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd] flex items-center  justify-center overflow-hidden 
       `}> 
        <div className='flex  w-[90vw] h-[90vw] md:w-[80vw] md:h-[30vw]  items-center justify-around  shadow-xl rounded-lg bg-white'>
           <div className='h-[40vw] w-[60vw]  flex flex-col items-center justify-center'>     
            <h1 className='text-3xl pt-5 pb-2 bg-blue-500 bg-clip-text text-transparent md:text-2xl xl:text-5xl font-bold text-center'>
              <Typewriter 
              words = {['Your Journey to Knowledge Starts Here.']}           
              /> 
            </h1>      
              <p className='mt-5 text-center'>Your one-stop solution for online learning and education management.</p>
              <div className='flex justify-center items-center gap-2 mt-7 duration-300 transition-all'>
                <button className='p-2 text-white  max-sm:text-xs flex items-center border-gray-700  border justify-center rounded-full 
                 hover:cursor-pointer font-semibold bg-blue-500 gap-2 hover:bg-blue-600 transition-all duration-300
                 ' onClick={() =>navigate('/course-list')}>Learn More</button>
                <span className='sm:text-2xl text-gray-700'><FaArrowRightLong /></span>
              </div>                                                  
           </div>
           
           <div className='h-full w-68 hidden  md:flex text-center justify-center '>
            <img src={assets.Student} alt="hero" className=' h-auto object-cover rounded-lg  ' />
           </div>
            
        </div>
        
    </div>
   <ChatBox />
   <Welcome/>
  
    
    </>
  )
}

export default Hero