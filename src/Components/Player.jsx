import React from 'react'
import { useContext, useEffect, useState, useRef} from 'react';
import { AppContext } from '../Context/AppContext';
import YouTube from 'react-youtube';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import { IoMdPlay } from "react-icons/io";
import { FaPause } from "react-icons/fa6";

const Player = () => {

  const{ id } = useParams();
  // console.log("Player ID:", id);

  const {allCourses} = useContext(AppContext);
  
  const [courseData, setCourseData] = useState(null);
  const[playerData, setplayerData] = useState(null);
   
  const fetchCourseData = async () =>{
 const findCourse = allCourses.find(course => course.id === id)
 setCourseData(findCourse);
}
  useEffect(()=>{
      fetchCourseData()
  },[courseData, id])

  const handleVideoReady = (event) => {
  const player = event.target;

};

  const getYouTubeVideoId = (url) => {
  const urlObj = new URL(url);
  return urlObj.searchParams.get("v");
}; 
//play pause icons 
const [isPlaying, setIsPlaying] = useState(false);
const playerRef = useRef(null);

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const onPlay = () => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    const player = playerRef.current;
    if (!player) return;

    const state = player.getPlayerState();

    if (state === 1) { // 1 = playing
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };
  return courseData ? (
    <>
      <div className='pt-20 lg:flex bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd] '>
        {/* left column  */}
          <div className='md:p-7 h-full lg:w-[65vw] w-full '>

               <div className='max-w-5xl md:bg-white  border-black md:shadow-lg max-md:border-1'>
                {
                playerData ? 
                <YouTube videoId={playerData.videoId} 
                 onPlay={onPlay}
                 onPause={onPause}
                 onReady={onPlayerReady}
                opts={{playerVars: {
                  autoplay: 0,
                  controls:1,
                }}}
                // onReady={handleVideoReady}
                iframeClassName='w-full aspect-video  h-full' />:<img src={courseData.image} alt={courseData.name} className='max-w-5xl w-full z-10 md:bg-white md:px-5 md:pt-5' />
              } 


              <div className='md:text-3xl text-base md:p-4 p-3  font-semibold cursor-pointer'
                onClick={() =>{
                   togglePlayPause();
                  // scrollTo(0,0);
                    setplayerData({
                    videoId: getYouTubeVideoId(courseData.lectureUrl)
    });
                }}
                >

                  {isPlaying ?
                  (<FaPause />)
                 :(<IoMdPlay />)

                }</div>
            </div>
            

          </div>

        {/* right-column  */}
         <div className=' md:p-7 h-auto lg:w-[35vw]'>
          <div className='max-w-xl max-md:p-5'>
            <h1 className='pb-3 md:text-3xl pt-5 sm:p-0  text-xl font-semibold'>{courseData.title}</h1>
            <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0, 200)}}></p>
            <p className='pt-3 text-sm'>{courseData.stars}</p>
            <p className='pt-3'>Course by <span className='text-blue-500 text-sm underline'>{courseData.educator}</span></p>
              
              <div>
                 <h2 className='text-lg xl:pt-10 pt-5 text-black font-semibold'>Course Description </h2>
                 <p className='pt-4 md:text-base  text-gray-600 text-sm' dangerouslySetInnerHTML={{__html:courseData.courseDescription}}></p>
              </div>

          </div>
         </div>
      </div>
    </>
  ) :<Loading />
}

export default Player















{/* 
              */}