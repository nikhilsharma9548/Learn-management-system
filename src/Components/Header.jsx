import React, { useContext } from 'react'
import { useState } from "react";
import { AppContext } from '../Context/AppContext';
import { CgProfile } from "react-icons/cg";
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import {useClerk, UserButton, useUser} from '@clerk/clerk-react';


const Header = () => { 
  const {navigate} = useContext(AppContext);

  //clerk Authtication
  
  const {openSignIn} = useClerk()
  const {user,isSignedIn} = useUser() 

  return (
    <header className='z-50 flex justify-between shadow-xl bg-[#95a8dd] items-center overflow-hidden fixed  left-0 top-0 w-full text-black '> 
      <div className='object-cover h-18 w-24 flex items-center justify-center md:ml-14 md:pl-0 pl-5  pt-10 pb-10'>
        <img src={assets.Padho}
        onClick={()=>
        {
          navigate('/')
        }
        } />
      </div>   

        <div className='flex justify-end text-3xl items-center sm:gap-4 gap-2 sm:pr-20 pr-7' > 
          {isSignedIn && (
              <div className=" text-black font-semibold sm:text-base text-xs cursor-pointer duration-300 rounded-md"
               onClick={()=>{
                navigate('/enrollments');
               }}
               >
                My Enrollment
              </div>
          )}
             { user ? <UserButton /> :
              <button className='bg-blue-600 text-sm shadow-gray-700 cursor-pointer max-sm:text-xs  hover:transition duration-500  hover:bg-blue-800   hover:-translate-y-0.5
              shadow text-white rounded-full px-4 py-2' onClick={()=>{openSignIn()}}>Create Account</button> }
        </div>

    

    </header>
  )
}

export default Header