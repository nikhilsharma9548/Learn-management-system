import React, { useState } from 'react'
import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot } from "react-icons/fa6";
import { FaChevronCircleDown } from "react-icons/fa";
import { AppContext } from '../Context/AppContext'

const Main = () => {
    const {openChat, setOpenChat, onSent,input, setInput,loading,resultData,showResult,recentPrompt} = useContext(AppContext)
   

    const OffClick = () =>{
    setOpenChat(false)
   }
  return (
    <>
    <AnimatePresence>
    {openChat && (
      // Top
        <motion.div 
        initial ={{opacity: 0, x: 100}}
        animate ={{opacity: 1, x:0}}
        exit={{opacity:0 , x:100}}
        transition={{duration:0.25}}
        className='h-[460px] w-[330px] rounded-xl bg-gradient-to-t from-white to-cyan-200 shadow-md shadow-blue-500'>

           <div className='flex  justify-between p-5 bg-blue-800/80 rounded-t-xl'>
              <p className='text-3xl text-white '><FaRobot /></p>
              <button 
              onClick={OffClick}
              className={`text-2xl cursor-pointer text-white hover:text-black duration-300`}><FaChevronCircleDown /></button>
            </div>

          <div className='h-[70%] overflow-scroll'>
            {!showResult && (
              <div className='flex px-7 relative right-5 py-5 gap-2'>
                <div>
                  <p className='text-2xl  bg-white rounded-full p-2'><FaRobot /></p>
                </div>
                <p className='bg-blue-300 p-2 rounded-md rounded-bl-none'>welcome to Padho Likho! how can i help you</p>
              </div>
            )}
          {showResult &&(
             <div className='py-2 flex  flex-col gap-3'>
              <div className='flex  justify-end px-5 pt-2'><p className='bg-blue-300 rounded-lg p-1.5 rounded-br-none  '>{recentPrompt}</p></div>

              <div className='flex  p-2 gap-2 '>
                <div>
                  <p className='text-2xl  bg-white rounded-full p-2'><FaRobot /></p>
                </div>
                <div className='flex justify-center items-center'>
                  {loading ? (
                    <div className='flex  '>
                      <p className='rounded-full p-2 bg-black animate-pulse'></p>
                    </div>
                  ) : (
                    <div>
                       <p dangerouslySetInnerHTML={{ __html: resultData || "data"}}
                        className='bg-blue-300 p-3 rounded-md rounded-bl-none'></p>
                    </div>
                  )}
                </div>
              </div>
            </div>   
          )}  
          </div>

        {/* bottom  */}
          <div className='flex items-center justify-center'>
           <div className='border py-1 mt-2 flex rounded-full  items-center justify-center'>
             <input type="text"
             value={input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') onSent();
                     }}
                    onChange={(e) =>setInput(e.target.value)}
             placeholder='Ask Your Question'
             className='outline-none px-8'/>
              <p className='px-3 py-1 relative right-1 bg-blue-500 hover:bg-blue-700 duration-300 rounded-full text-white cursor-pointer font-mono font-bold'
              onClick={()=>{
                if(input.trim() !== ""){
                            onSent();
                        }
              }}>send</p>
           </div>     
          </div>
        </motion.div>
    )}
    </AnimatePresence>
    </>
  )
}

export default Main