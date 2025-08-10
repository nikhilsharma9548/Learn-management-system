import React, {useState, useEffect } from 'react'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import SearchBar from '../Components/SearchBar';
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CourseList = () => {

  const {input} = useParams()

  const{navigate, allCourses, currency} = useContext(AppContext);
  const [filteredCourses, setFilteredCourses] = useState([]);
  
  useEffect(() => {
  if (allCourses && allCourses.length > 0) {
    const tempCourses = allCourses.slice();

    input
      ? setFilteredCourses(
          tempCourses.filter(item =>
            item.title.toLowerCase().includes(input.toLowerCase())
          )
        )
      : setFilteredCourses(tempCourses);
  }
}, [allCourses, input]);

  
   

  return (
   <>
   < Header />
   <div className=' md:px-36 px-8 text-left pt-32  bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>
    <div className='flex md:flex-row flex-col gap-6 item-start justify-between w-full '>
        <div>
          <h1 className='text-3xl font-semibold text-gray-800 '>Course List</h1>
          <p className='text-gray-500'>
          <span className='text-blue-600 cursor-pointer'
                onClick={()=>{
                    navigate('/')}}
                    >Home
          </span>/
            <span>
                  Course List
           </span></p>
        </div>
      <SearchBar data={input}/>
    </div>
    </div>
                  {
                  input && <div className='inline-flex w-full items-center  bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd] text-gray-600'>
                    
                    <div className='flex items-center relative md:left-36 left-12 top-5 border gap-4 px-4 py-2 '>
                      <p>{input}</p>
                    <p className='cursor-pointer '
                    onClick={() =>{
                      navigate('/course-list');
                      scrollTo(0,0);
                    }}><RxCross2 /></p>
                    </div>
                  </div>
                  }

    <div className='flex flex-wrap justify-center items-center gap-10 p-10  bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>     
            {filteredCourses.map((course, index) => (
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
                  <p className='pl-2'>{currency}{course.price}</p>
               </div>
                </div>
              </Link>
            ))}
          </div>
          <Footer />
   </>
  )
}

export default CourseList