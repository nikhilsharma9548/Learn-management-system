import React, { use, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../assets/assets';
import { AppContext } from '../Context/AppContext';
import SearchBar from './SearchBar';

const CourseCard = () => {

  const {navigate, allCourses} = useContext(AppContext);
  

  return (
    <section id='CourseCard' className='pt-18 bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>
      <h1 className='text-3xl font-medium text-center'>Our Courses</h1>
      <p className='text-center pt-5'>Explore our wide range of courses designed to help you succeed.</p>

     <div className='flex md:px-32 px-8 pt-20 text-left  bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>
     </div>
      <div className='flex flex-wrap justify-center items-center gap-10 pt-10 pb-5'>     
        {courses.slice(0,4).map((course, index) => (
          <Link
          to={'/course/' +course.id}
          onClick={() => scrollTo(0,0)}
          key={index}
           className='flex flex-col hover:cursor-pointer w-72 h-72 bg-white shadow-lg rounded-lg border-1 border-gray-400'>
            
            <img src={course.image} alt={course.title} className='w-full  object-cover rounded-t-lg' />
          
            <div className='p-3 flex-col ' >
            <h3 className=' font-semibold'>{course.title}</h3>
            <h2 className='text-gray-800/80 text-sm'>{course.educator}</h2>
           <div className=' justify-between items-center mt-3'>
              <p className='text-sm'>{course.stars}</p>
              <p className='pl-2'>{course.price}</p>
           </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex w-[90vw]  justify-end  items-center'>
        <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
      className= ' border text-sm bg-blue-600/80 hover:bg-blue-700 border-gray-500/30 px-2 py-2 rounded '>See All</Link>
      </div>
    </section>
  )
}
export default CourseCard;