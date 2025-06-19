import React, { useContext } from 'react'
import { useState } from "react";
import { AppContext } from '../Context/AppContext';
import { CgProfile } from "react-icons/cg";
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';



  

const Header = () => { 
  const {navigate} = useContext(AppContext);
  const [showSecondDiv, setShowSecondDiv] = useState(false); 
//   const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
// };
//   const navItems = [
//     { name: "Home", link: "Home" },
//     { name: "About", link: "About" },
//     { name: "Courses", link: "CourseCard" },
//     { name: "Contact", link: "Contact" },
//   ];

  return (
    <header className='z-50 flex justify-between shadow-xl bg-[#95a8dd] items-center overflow-hidden fixed  left-0 top-0 w-full text-black '> 
      <div className='object-cover h-18 w-24 flex items-center justify-center md:ml-14 md:pl-0 pl-5  pt-10 pb-10'>
        <img src={assets.Padho}
        onClick={()=>
        {
          navigate('/')
        }
        } />
      </div>
      

      
        {/* mobile veiw */}

        <div className='flex justify-end text-3xl items-center sm:gap-4 gap-2 xs:pr-20 pr-7'
          onClick={() => setShowSecondDiv(prev => !prev)}> 

          {showSecondDiv && (
            <div className=' hover:cursor-pointer  sm:text-base font-semibold text-sm  bg-[#95a8dd] rounded' onClick={() =>{
              navigate('/enrollments');
              setShowSecondDiv(false);
            }}>My Enrollments</div>
          )}

          <p className=' transform transition-transform font-medium text-blue-900/90 hover:scale-110'><CgProfile /></p>    
        </div>

    

    </header>
  )
}

export default Header