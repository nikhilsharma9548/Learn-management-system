import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';


const Header = () => { 
  const {navigate, userData, openUser, setOpenUser} = useContext(AppContext);

  

  const openUserDetails = () =>{
    setOpenUser(!openUser)
  }


  return (
   <>
    <header className='z-50 flex justify-between shadow-xl bg-[#95a8dd] items-center sm:px-10 px-6 overflow-hidden fixed  left-0 top-0 w-full text-black '> 
      <div className='object-cover h-18 w-24 flex items-center justify-center  cursor-pointer pt-10 pb-10'>
        <img src={assets.Padho}
        onClick={()=>
        {
          scrollTo(0,0);
          navigate('/')
        }
        } />
      </div>    
        
        <div>
         { userData ?
          <div className=' text-xl font-semibold h-12 w-12 flex justify-center items-center rounded-full bg-blue-800 text-white cursor-pointer
          hover:bg-blue-900  hover:scale-95 hover:transition duration-500' onClick={openUserDetails}>
                {userData.name[0].toUpperCase()}
          </div> :
          <button className='bg-blue-600 text-base shadow-gray-700 cursor-pointer max-sm:text-xs  hover:transition duration-500  hover:bg-blue-800   hover:-translate-y-0.5
              shadow text-white rounded-full px-5 md:py-2 py-2.5' onClick={()=>{
                navigate('/login')
              }}>Sign Up</button>}
     
        </div>
              
             
    </header>
   </>
  )
}

export default Header