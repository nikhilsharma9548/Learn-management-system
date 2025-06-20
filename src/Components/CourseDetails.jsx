import React, { useContext, useEffect, useState }from 'react'
import {AppContext} from '../Context/AppContext';
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoIosArrowDropup } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import Loading from './Loading';
import { toast } from 'react-toastify';
const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY;
import YouTube from 'react-youtube';

const CourseDetails = () => {

  // show to a form 
  
    const [showModal, setShowModal] = useState(false);

  const handleEnrollClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };


  const {id} = useParams()
 
   const [courseData, setCourseData] = useState(null)
  
  const {allCourses, navigate} = useContext(AppContext);

 

  const [showSecondDiv, setShowSecondDiv] = useState(); 

   const[isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
   
   const[playerData, setplayerData] = useState(null);

const fetchCourseData = async () =>{

 const findCourse = allCourses.find(course => course.id === id)
 setCourseData(findCourse);
}

useEffect(() => {
  fetchCourseData()

}, [courseData]);


const handleVideoReady = (event) => {
  const player = event.target;

  // Automatically pause video after 30 seconds
  setTimeout(() => {
    player.pauseVideo();
  }, 30 * 1000); // 30 seconds
};

const getYouTubeVideoId = (url) => {
  const urlObj = new URL(url);
  return urlObj.searchParams.get("v");
};

  return courseData ? (
    
    <>
    <div className='pb-32 flex lg:flex-row flex-col-reverse gap-10  relative item-start justify-between md:px-36 px-8 md:pt-20 mt-20  pt-20 text-left  bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>

        {/* <div className='absolute top-0 left-0 w-full'></div> */}
        
      {/* left column */}
      <div className='max-w-xl z-10 text-gray-600'>
        <h1 className='font-semibold pb-2 text-4xl text-gray-800'>{courseData.title}</h1>
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0, 200)}}></p>
        <p className='pt-3 text-sm'>{courseData.stars}</p>
        <p className='pt-3'>Course by <span className='text-blue-500 text-sm underline'>{courseData.educator}</span></p>

         <div className='pt-8 z-10'> 
        <h2 className='text-lg text-black font-semibold'>Course Structure</h2>

        <div className=' mt-5 flex w-full rounded bg-white p-3 items-center justify-between border border-gray-500/50 '>
        
            <div className='flex items-center gap-2  w-full '
           onClick={() => setShowSecondDiv(prev => !prev)}> 
                <p className={`text-2xl transform transition-transform duration-300 ${showSecondDiv ? '-rotate-180' : 'rotate-0'}`}><IoIosArrowDropup className='hover:cursor-pointer' /></p>
                <p className='text-gray-600 text-xs xl:text-base '>{courseData.title}</p>
            </div>
                 <p className='text-gray-600 w-42 text-xs xl:text-sm'>{courseData.duration}</p>
        </div>
            
             {showSecondDiv && (
            <div className="border border-gray-500/50 rounded-b p-4 flex justify-between bg-white">
              <p>{courseData.title}</p>
              <p className='text-blue-500 underline hover:cursor-pointer text-sm font-bold' 
              onClick={()=>
              {
                navigate('/player')
              }
              }
               >Watch</p>
            </div>
          )}

         <div className='py-20 rich-text text-sm md:text-default'>
          <h3 className='text-xl font-semibold text-gray-900'>Course Description</h3>
          <p className='pt-4 md:text-base text-gray-600 text-sm' dangerouslySetInnerHTML={{__html:courseData.courseDescription}}></p>
         </div>

        </div>
      </div>

       
      {/* right column */}

      <div className='flex flex-col  h-[720px] shadow-2xl shadow-gray-500 md:min-w-md w-full max-w-sm  bg-white relative bottom-5'>
        
            <div>
                {
                playerData ? 
                <YouTube videoId={playerData.videoId} opts={{playerVars: {
                  autoplay: 1
                }}}
                onReady={handleVideoReady}
                iframeClassName='w-full aspect-video ' />:<img src={courseData.image} alt={courseData.name} className='max-w-md w-full z-10 bg-white shadow-lg shadow-gray-400' />
              } 
            </div>

            <div className='flex  items-center gap-2 p-3  z-10 bg-white'>
                <p className='w-3.5 text-red-500 '><FaRegClock /></p>

                 <p className='text-red-500 md:text-base text-xs'><span className='font-medium '>6 days</span> left at this price!</p>
                <p className='text-blue-500 underline font-semibold cursor-pointer pl-28'
                onClick={() =>{
                    setplayerData({
                    videoId: getYouTubeVideoId(courseData.lectureUrl)
    });

                }}
                >preview</p>
              
            </div>

                <h1 className=' flex item-center text-4xl font-semibold px-14 '>{courseData.price}</h1>
                
            <div className=' bg-white flex font-medium text-xs xl:text-base  px-2  z-10 items-center gap-3 py-5 text-gray-600 shadow-gray-400'>
              <p className=''>{courseData.stars.slice(0,1)}</p>
              <p>{courseData.rating}</p>|
              <p className='flex  items-center gap-1 '><FaRegClock />{courseData.duration}</p>|
              <p className='flex gap-1 items-center'><HiOutlineBookOpen /> One short</p>
              
            
            </div>

              <div className='flex flex-col gap-2 px-7 bg-white z-10'>
                  <button className='md:mt-2 mt-4 w-full py-3 rounded bg-blue-600 hover:bg-blue-700 hover:scale-95 hover:duration-700 text-white font-medium'
                   onClick={handleEnrollClick}>
                    
                    {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>
              </div>

               {
                showModal && (
                  <div className="fixed inset-0 flex items-center  justify-center h-auto bg-black/50 z-50">
                    <div className='bg-white  md:p-12 p-6 w-auto h-auto bg-gradient-to-r from-[#c3cfda]  to-[#95a8dd] max-w-xl'>
                          <h2 className='text-2xl font-semibold text-blue-800 mb-5'>Enroll Form</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input type="text" placeholder="Enter the student Name" className="border p-2 rounded " required />
                       <input type="email" placeholder="Enter the student Email" className="border p-2 rounded" required />
                       <input type="text" placeholder="Enter the studebt Phone" className="border p-2 rounded" required />
                          <div className="flex justify-center mt-18 gap-28">
                              <button 
                                    type="button"
                                    onClick={handleClose}
                                    className="bg-gray-500/50 text-black py-1 px-3 "
                              >
                                    Cancel
                                  </button>
                                  <button 
                                    type="submit"
                                    onClick={() =>{
                                      navigate("/enrollments")
                                    }}
                                    className="bg-blue-600 text-white py-1 px-3 "
                                  >
                                    Submit  
                                  </button>
                                </div>
            </form>

                    </div>
                  </div>
                )
               }
              
              <div className='pt-5 px-7'>
                <p className='md:text-xl text-lg  font-medium text-gray-800'>
                  what,s in the course? </p>
                  <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-600'>
                    <li>step-by-step, hands-on project guidance</li>
                    <li>lifetime access with free updates.</li>
                    <li>Downloadable resources and source code.</li>
                    <li>Certificate of completion</li>
                  </ul>
               
              </div>
            
      </div>
      
    </div>
    </> 
    
  ):<Loading />
}


export default CourseDetails