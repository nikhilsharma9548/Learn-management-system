import React from 'react'
import {companies } from '../assets/assets';


const Companies = () => {

  return (
    <div className='h-auto w-full bg-gradient-to-r from-[#f0f4f8] pt-20 to-[#95a8dd] flex items-center justify-center'>
          <div>
            <h1 className='text-3xl font-medium text-center '>Our Partners</h1>
            <p className='text-center pt-5'>We are proud to partner with leading companies in the industry.</p>
            <div className='flex flex-wrap justify-center  items-center gap-10 p-10'>
              {companies.map((companies, index) => (
                <div key={index} className='flex flex-col items-center justify-center w-36 h-20 bg-white shadow-lg rounded-lg p-4'>
                  <img src={companies.image} alt={companies.name} className='w-full h-full object-fit' />
                </div>
              ))}
          </div>
    </div>
    </div>
  )
}

export default Companies;