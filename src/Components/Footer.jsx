import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-[#001959]  md:px-36 text-left w-full text-white '>
      <div className='flex flex-col md:flex-row 
        item-start px-8 md:px-0 justify-between gap-10 md:gap-32  items-center py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.Padho2} alt="Padho"
          className='h-18 w-28' />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>

        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold mb-5'>Company</h2>
          <ul className='flex md:flex-col gap-4 md:gap-0 justify-center text-xs sm:text-sm text-white md:space-y-2 cursor-pointer '>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>  
          </ul>
        </div>

        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold mb-5'>Follow us</h2>
          
          <div className='flex justify-center md:justify-start gap-4'>

            <a href="https://www.linkedin.com/in/nikhil-sharma-43a013341/" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkdin} alt="Facebook" className='h-8 w-8' />
            </a>
            <a href="https://x.com/nikhil954873" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter} alt="Twitter" className='h-8 w-8' />
            </a>
            <a href="https://www.instagram.com/sharmaharrdy/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={assets.instagram} alt="Instagram" className='h-8 w-8' />
            </a>
          </div>
        </div>
      </div>
      
      <p className='py-4 text-center text-xs md:text-sm text-white/80'>Copyright 2025 © Nikhil Sharma. All Right Reserved. </p>
    </footer>
  )
}

export default Footer