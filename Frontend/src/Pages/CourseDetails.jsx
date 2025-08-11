import React, { useContext, useEffect, useState }from 'react'
import {AppContext} from '../Context/AppContext';
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoIosArrowDropup } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { addCourse, removeCourse } from '../App/enrollSlice';
import YouTube from 'react-youtube';
import { motion, AnimatePresence } from "framer-motion";
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const CourseDetails = () => {

  //Add courses in Myenrollments
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState(null) 
  const enrolledCourses = useSelector(state => state.enroll.enrolledCourses);
  const isEnrolled = enrolledCourses.some(c => c.id === courseData?.id);

//payment gitway

   const [showModal, setShowModal] = useState(false)

  const [formData, setFormData] = useState({
    fname: "",
    mobile: "",
    Price: "",
    // totalPrice:parseInt(getTotal().totalPrice) * 100,
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shipping_address = {
      first_name: formData.fname,
      phone_number: formData.mobile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    let options = {
      key:import.meta.env.VITE_RAZORPAY_KEY,
      key_secret: "",
      amount: parseInt((courseData.price - courseData.discount * courseData.price / 100).toFixed(2)) * 100,
      currency: "INR",
      name: "@Padho Likho",
      description: `${courseData.title}`,
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId, shipping_address);
        if(!isEnrolled){
          dispatch(addCourse(courseData));
         toast.success("Enrolled Succesfully ✅");
        navigate('/enrollments')
        // dispatch(removeCourse(courseData));
      }
      
        setShowModal({
          fname: "",
          fEmail:"",
          mobile: "",
        });
      },
      theme: {
        color: "#07a291db",
      },
    };
    let pay = new window.Razorpay(options);
    pay.open();

   
  };
     // show to a form 
    const {isLoggedIn} = useContext(AppContext);

  const handleEnrollClick = () => {
        if (!isLoggedIn) {
          toast("Login first to enroll");
          return; 
          }
        setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };  
  // const navigate = useNavigate();
  const {id} = useParams()
 
  const {allCourses, navigate, currency,openUser} = useContext(AppContext);
  const [showSecondDiv, setShowSecondDiv] = useState(); 
  const [playerData, setplayerData] = useState(null);

//featcing the data
  const fetchCourseData = async () =>{
  const findCourse = allCourses.find(course => course.id === id)
      setCourseData(findCourse);
  };

  useEffect(() => {
  fetchCourseData()
}, [id]);

//you-tube video fetching 
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

//discount Calculate
 

  return courseData ? ( 
    <>
    <Header />
    <div className={` ${openUser && "  brightness-50"} pb-32 flex lg:flex-row flex-col-reverse gap-10  relative item-start justify-between md:px-36 px-8 md:pt-20 mt-20  pt-20 text-left  bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]`}>
    
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
              <p className='text-blue-500 underline font-semibold cursor-pointer'
                onClick={() =>{

                  scrollTo(0,0);
                    setplayerData({
                    videoId: getYouTubeVideoId(courseData.lectureUrl)
                       });  
                      }}
                >preview</p>
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
            </div>
              
            <div className='flex items-center pt-2 gap-3 px-5'>
              <p className=' flex item-center md:text-3xl text-2xl font-semibold  '>{currency}{(courseData.price - courseData.discount * courseData.price / 100).toFixed(2)}</p>
              <p className='md:text-2xl text-gray-700 font-semibold line-through'>{currency}{courseData.price}</p>
              <p className='md:text-lg text-gray-700 '>{courseData.discount}% off</p>
            </div>
                
            <div className=' bg-white flex font-medium text-xs xl:text-base  px-2  z-10 items-center gap-3 py-5 text-gray-600 shadow-gray-400'>
              <p className=''>{courseData.stars.slice(0,1)}</p>
              <p>{courseData.rating}</p>|
              <p className='flex  items-center gap-1 '><FaRegClock />{courseData.duration}</p>|
              <p className='flex gap-1 items-center'><HiOutlineBookOpen /> One short</p>
            </div>

            <div className='flex flex-col gap-2 px-7 bg-white z-10'>
                 <button
                    onClick={() =>{
                      handleEnrollClick();
                    }}
                     disabled={isEnrolled}
                     className={`mt-4 w-full py-3 rounded text-white font-medium cursor-pointer  ${
                       isEnrolled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:scale-95 duration-500 hover:bg-blue-700'
                       }`}>
                     {isEnrolled ? "Already Enrolled" : "Enroll"}
                  </button>
                
              </div>

                <AnimatePresence>
               {
                showModal && (
                  <div className="fixed inset-0 flex sm:items-center items-end  justify-center h-auto bg-black/50 z-50">
                    
                    <motion.div className='bg-white rounded-md sm:w-96 w-full  shadow-orange-200 md:p-5 p-14 h-auto
                     bg-gradient-to-r from-[#c3cfda]  to-[#95a8dd]'
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    ><div className='flex justify-end relative md:bottom-4 bottom-10 md:left-4 left-10'>
                        
                        <button 
                              type="button"
                              onClick={handleClose}
                              className="bg-gray-500/50  hover:bg-gray-500 duration-300 cursor-pointer 
                              text-black py-0 px-1.5 font-semibold rounded"
                        >X</button>
                      </div>
                          <h2 className='text-2xl font-semibold text-blue-800 mb-3 '>Enroll Form</h2>
                          <p className='mb-3 text-gray-600 text-lg'>Please fill all details</p>

                  {/* //enroll from  */}
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 max-sm:border-2 border-gray-600 shadow-black p-5 rounded-lg">
                    <input type="text" placeholder="Enter the student Name" className="border p-2 rounded bg-white " required  onChange={handleChange}/>
                       <input type="email" placeholder="Enter the student Email" className="border p-2 rounded bg-white"  required onChange={handleChange}/>
                       <input type="text" placeholder="Enter the student Phone" className="border p-2 rounded bg-white" required onChange={handleChange}/>
                        <div className='flex items-center justify-between gap-5'>
                        <p className='text-gray-950 text-xl '>Total Amount :<span className='text-2xl pl-5 sm:pl-24'>₹{(courseData.price - courseData.discount * courseData.price / 100).toFixed(2)}</span> <br />(One-Time Payment)</p>
                        </div>
                          <div className="flex justify-center mt-5">
                             
                                  <button 
                                    type="submit"
                                    className="bg-blue-600 text-white rounded cursor-pointer
                                     hover:bg-blue-800 duration-500 py-2.5 px-6 "
                                  >
                                    Enroll  
                                  </button>
                          </div>
            </form>

                    </motion.div>
                  </div>
                )
               }</AnimatePresence>
              
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
    <Footer/>
    </> 
    
  ) : <Loading />
}


export default CourseDetails