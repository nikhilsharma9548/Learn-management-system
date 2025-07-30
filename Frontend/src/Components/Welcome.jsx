import React from 'react'
import { useState, useEffect,useContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ImCross } from "react-icons/im";
import { AppContext } from '../Context/AppContext';

const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(false);
    const {navigate} = useContext(AppContext)

    const handleClose = () => {
        setShowWelcome(false);
        
  };

    useEffect(() => {
        setShowWelcome(true);
    }, []);

  return (
    <>   
        <AnimatePresence>
        { showWelcome && (
        <div className='fixed inset-0 flex items-center  justify-center h-auto z-50 backdrop-blur-xs backdrop-brightness-50'>
            <motion.div 
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='bg-transparent max-w-lg  md:p-12 p-8  max-h-max'>   

                <div className='flex justify-between pl-4 '>
                    <p className='text-2xl'></p>
                        <button 
                              
                              type="button"
                              onClick={()=>{
                                handleClose()
                                scrollTo(0,0)
                              }}
                              className="cursor-pointer 
                              text-xl py-0  font-semibold rounded"
                        ><ImCross /></button>
                </div>

                <div className='bg-gradient-to-r from-[#c3cfda] to-[#95a8dd]  md:p-10 p-8  rounded-lg'>
                    <p className='text-[#0b68ec] text-xl pb-5  font-semibold'>20% off on Your First Enroll</p>
                    <p className="text-sm md:text-base mt-2 ">
                        Hey there! 👋 Glad you're here.  
                        Unlock skills that shape your future.  
                        Let's dive into learning! 💡
                    </p>
                    <button className='p-1.5 md:p-2 max-md:text-sm rounded bg-blue-500 mt-7 cursor-pointer hover:bg-blue-600 duration-500'
                        onClick={()=>{
                            navigate('/course-list')
                            scrollTo(0,0)
                        }}
                    >Enroll Now</button>
                </div> 

            </motion.div>
        </div>
        )
        }
        </AnimatePresence>
    </>
  )
}

export default Welcome