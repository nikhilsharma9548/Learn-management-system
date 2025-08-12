import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AppContext } from '../../Context/AppContext'
import { FiArrowUpRight } from "react-icons/fi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const UserDetails = () => {

    const{openUser,setOpenUser, userData, navigate, backendUrl, setIsLoggedIn, setUserData,} = useContext(AppContext)

    const offClick = () =>{
        setOpenUser(false)
    }

const logout = async () =>{
    try {
      
      axios.defaults.withCredentials =true
      const {data} = await axios.post(backendUrl + '/api/auth/logout');
      data.success && setIsLoggedIn(false)
      data.success && setUserData(false)
      toast.success(data.message)
      navigate('/')
      setOpenUser(false)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
    <AnimatePresence>
        { openUser && <motion.div 
        initial ={{opacity: 0, x: 100}}
        animate ={{opacity: 1, x:10}}
        exit={{opacity:0 , x:100}}
        transition={{duration:0.25}}

        className='bg-gray-300 p-7 sm:w-96 w-full fixed top-0 h-full  justify-self-end z-50  shaodw-xl shadow-black'>

            <div className='bg-blue-700 text-white px-1.5  mb-2 shadow-xl rounded cursor-pointer relative bottom-5 transition-all duration-300
             hover:scale-105 justify-self-end items-end text-sm'onClick={offClick}>X</div>

            <div className='md:px-5'>
                <div className='flex flex-col px-5 py-2.5 justify-center items-center gap-1.5 rounded-lg shadow-xl bg-[#9db4f5]'>
                    {userData ?
                    <p className='bg-blue-600 relative bottom-10 rounded-full h-16 w-16 flex 
                    items-center justify-center text-3xl text-white'> {userData.name[0].toUpperCase()}</p>
                    : <img src={assets.banner}/>  
                  }

                    <p className='text-2xl font-serif relative bottom-7 '> {userData.name.toUpperCase()}</p>
                </div>
            </div>

            <div className='relative bottom-3'>
                <ul className='px-1 pt-10'>

                    <div className='border-b'>
                        <li className='flex items-center justify-between px-5  py-2 transition-all
                         duration-150 text-md hover:bg-[#9db4f5] rounded-lg cursor-pointer'
                        onClick={()=> {navigate('/enrollments'); setOpenUser(false)}}
                        >My Enrollments <FiArrowUpRight /></li>
                    </div>

                    <li className='flex items-center justify-between px-5  py-2 transition-all 
                    duration-150 text-md hover:bg-[#9db4f5] rounded-lg cursor-pointer'
                     onClick={()=> {navigate('/'); setOpenUser(false)}}
                    >Home <HiArrowTopRightOnSquare /></li>

                    <li className='flex items-center justify-between px-5  py-2 transition-all
                     duration-150 text-md hover:bg-[#9db4f5] rounded-lg cursor-pointer'
                      onClick={()=> {navigate('/course-list'); setOpenUser(false)}}
                     >Courses <HiArrowTopRightOnSquare /></li>

                    <li className='flex items-center justify-between px-5  py-2 transition-all
                     duration-150 text-md hover:bg-[#9db4f5] rounded-lg cursor-pointer'
                     onClick={()=> {navigate('/'); setOpenUser(false)}}
                     >Help & Legal <HiArrowTopRightOnSquare /></li>
                </ul>
                
            </div>

            <button className='bg-blue-600 w-full p-2.5 text-white rounded cursor-pointer mt-5 
            hover:bg-blue-700 transition-all duration-150'
            onClick={() =>{logout();setIsBlur(false)}}>Logout</button>
            
            </motion.div>}
    </AnimatePresence>
    
    </>
  )
}

export default UserDetails