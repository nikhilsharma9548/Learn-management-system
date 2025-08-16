import React, { useContext} from 'react';
import {useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MyEnrollments = () => {
  const navigate = useNavigate();

  const {openUser } = useContext(AppContext);
  const enrolledCourses = useSelector((state) => state.enroll.enrolledCourses);
  return (
    <>
    <Header />
    <div className={`h-full md:p-32 w-full px-8 py-20 pt-24 bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]`}>
      <h1 className='text-2xl font-semibold'>My Enrollments</h1>

      {enrolledCourses.length === 0 ? (
       <div className='text-center p-5'>
        <p className='mt-10 text-base text-gray-700 text-center'>
          You haven't enrolled in any course yet. Start learning today!
       </p>
       <button 
        className='p-2 bg-blue-500 rounded cursor-pointer mt-10 hover:bg-blue-600 '
        onClick={() =>{
          navigate('/course-list')
          scrollTo(0,0)
        }}
        >Enroll Now</button>
       </div>
       

      ) : (
        <table className='w-full overflow-hidden border  mt-10'>
          <thead className='text-gray-900 border-b border-gray-700 text-base text-left max-sm:hidden'>
            <tr>
              <th className='px-4 py-3 font-semibold truncate'>Course</th>
              <th className='px-4 py-3 font-semibold truncate'>Duration</th>              
            </tr>
          </thead>

          <tbody className='text-gray-900 sm:text-base text-xs'>
            {enrolledCourses.map((course, index) => (
              <tr key={course.id ||index} className='border-b border-gray-500/80 max-sm:flex max-sm:flex-col '>
                <td className='md:px-4 px-0 pl-0 md:pl-4 md:py-3 py-0 max-sm:flex-col'>
                  <img
                    src={course.image || "/default-image.png"}
                    alt={course.title}
                    className='sm:w-72 flex'/>
                  <div className='py-2 max-md:hidden'>
                    {course.title}
                  </div>
                </td>
                <td className='sm:text-base text-sm relative top-4 sm:top-0 sm:left-0 left-2.5 max-sm:py-3'>
                  {course.duration || "N/A"}
                </td>
                <td className='sm:py-3 py-0 max-sm:text-right flex items-center  max-sm:justify-end'>
                 <div className='flex justify-evenly gap-0 relative sm:gap-10 text-xs sm:text-base'>
                   <button
                    className='sm:px-3 px-2 sm:py-2 py-1 relative sm:bottom-0 sm:top-20 bottom-4 max-sm:right-5 cursor-pointer text-white rounded bg-blue-600 hover:bg-blue-700'
                    onClick={() => {
                      scrollTo(0, 0);
                      navigate(`/player/${course._id || course.id}`);
                    }}
                  >
                    Watch
                  </button>

                 </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    <Footer />
    </>
  );
};

export default MyEnrollments;
