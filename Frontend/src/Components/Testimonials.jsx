import React from 'react';
import { dummyTestimonial } from '../assets/assets';


const Testimonials = () => {
  return (
    <div className='pb-14 pt-20 px-8 md:px-0 bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd] flex flex-col items-center space-y-7 text-center'>
        <h2 className='text-3xl font-medium '>Testimonials</h2>
        <p className='md:text-base text-gray-700 mt-3'>Hear from our learners as they share their journeys of transformation, success, <br />and how our
            platform has made a difference in their lives.</p>

              <div className='grid sm:grid-cols-2 lg:grid-cols-3   gap-8 mt-14 overflow-hidden  '>
                {dummyTestimonial.map((testimonial, index)=>(
                  <div key={index}
                  className=' h-68 w-72  text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[opx_4px_15px_0px] shadow-black/5 overflow-hidden '>
                      <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                        <img src={testimonial.image} alt={testimonial.name}
                        className='h-12 w-12 rounded-full' />
                        <div>
                          <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                          <p className='text-gray-800/80'>{testimonial.role}</p>
                        </div>
                      </div>
                      <p className='p-[10px_0px_0px_15px]'>{testimonial.rating}</p>  
                      <p className='m-5'>{testimonial.feedback}</p>
                      <p className='text-blue-500 underline px-5 hover:cursor-pointer'>Read more</p>
                  </div>
                ))}
              </div>

              {/* <div className='grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {dummyTestimonial.map((testimonial, index) => (
                <div key={index}> 
                     <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
                      <img src={testimonial.image} alt={testimonial.name} 
                      className='h-12 w-12 rounded-full'/>
                      <div
                      className='mt-4 mb-2 '>
                        <h1>{testimonial.name}</h1>
                        <p>{testimonial.role}</p>
                      </div>
                      <div className=''>
                        <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
                      </div>
                     </div>
                </div>

                ))}
              </div> */}
    </div>
    
  )
}

export default Testimonials