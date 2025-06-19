import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { Navigate } from 'react-router-dom';

const MyEnrollments = () => {

  const { enrolledCourses, navigate } = useContext(AppContext);

        // console.log(enrolledCourses);

  return (
    <>
    <div className='h-full md:p-32  w-full px-8 py-20 pt-24 bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]' >
        <h1 className='text-2xl  font-semibold' >My Enrollments</h1>

        <table className='  w-full overflow-hidden border mt-10'>
            <thead className='text-gray-900 border-b gap-2.5 border-gray-700 text-base text-left max-sm:hidden  '>
                <tr>
                    <th className='px-4 py-3 font-semibold truncate'>Course</th>

                    <th className='px-4 py-3 font-semibold truncate'>Duration</th>

                    <th className='px-6  py-3 font-semibold truncate'>Status</th>
                </tr>
            </thead>
            <tbody className=' text-gray-900 sm:text-base  text-xs'>
              {enrolledCourses.slice(0,3).map((course, index) => (
                    <tr key={index} className='border-b border-gray-500/80 max-sm:flex max-sm:flex-col '>
                        <td className='md:px-4 px-0 pl-0 md:pl-4 md:py-3 py-0  item-centernspace-x-4 max-sm:flex-col'>
                            <img src={course.image} alt=""
                            className='sm:w-72  ' />
                            <div className='py-2 max-sm:hidden '>
                                {course.title}
                            </div>
                        </td>
                        <td className='sm:text-base text-sm relative top-4 sm:top-0  sm:left-0 left-2 max-sm:p-3'>{course.duration}</td>
                        <td className='sm:py-3 py-0 max-sm:text-right'>
                            <button className='px-5 sm:py-2 py-3 relative sm:bottom-0 bottom-6 max-sm:right-5 text-white rounded bg-blue-600 hover:bg-blue-700'
                            onClick={ ()=>{
                               navigate(`/player/${course._id}`)

                            }}
                            >Watch</button>
                        </td>
                    </tr>
              ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default MyEnrollments