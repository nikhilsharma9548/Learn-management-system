import React, { useState } from 'react'
import { IoChatboxOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaRobot } from "react-icons/fa6";
import Main from './Main';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
const ChatBox = () => {
    
    const {openChat, setOpenChat} = useContext(AppContext)

   
   const handleClose = () =>{
    setOpenChat(false)
   }
  return (
    <>
    <div className='fixed bottom-0 gap-3 flex flex-col items-end justify-self-end  md:p-10 p-5  h-auto z-50 '>
         <Main />
         
        <div className={` cursor-pointer rounded-full bg-blue-900 transform transition-transform duration-300 ${openChat ? ' rotate-180' : ' rotate-0'}`}>
               {!openChat && <span className="absolute  p-3.5 md:top-3 top-2.5 left-2.5 rounded-full bg-white animate-ping"></span>}
               
            {!openChat ? (
                <p className={`relative p-3 text-2xl text-white z-10 `}><FaRobot onClick={()=>{
                setOpenChat(true);
            }} />
               
            </p>
            ) : (
                <p className='relative z-10 p-3 text-2xl  text-white '><RxCross2 onClick={()=>{
                    handleClose()  
                }} className=''/></p>
            )}
        </div>
       
    </div>
    
    </>
  )
}

export default ChatBox