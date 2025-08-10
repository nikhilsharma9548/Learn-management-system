import React, { useContext, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../Context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';



const Login = () => {

  const navigate = useNavigate();
  const {backendUrl, setIsLoggedIn, getUserData,loading, setLoading} = useContext(AppContext);

  const [state, setState] = useState("Sign Up");
  const [hidePass, setHidePass] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = async(e) =>{

    try {
      
      e.preventDefault();

      axios.defaults.withCredentials = true;

      setLoading(true)
      if(state === 'Sign Up'){
        const {data} =  await axios.post(backendUrl + '/api/auth/register',{name, email, password} )


        if (data.success) {
          setIsLoggedIn(true)
          getUserData();
          setLoading(false)
          navigate('/')
          toast.success(data.message)
        }else{
          toast.error(data.message)
        }
      } else {
        const {data} = await axios.post(backendUrl + '/api/auth/login',{email, password})

        if(data.success){
          setIsLoggedIn(true)
          getUserData();
          setLoading(false);
          navigate('/')
          toast.success(data.message)

        } else {
          toast.error(data.message)
          setLoading(false)
        }
      }

    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
   <>
   <div className='min-h-screen bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd] flex justify-center items-center'>
<div className='z-50 flex justify-between shadow-xl bg-[#95a8dd] items-center overflow-hidden fixed  left-0 top-0 w-full text-black '> 
      <div className='object-cover h-18 w-24 flex items-center justify-center md:ml-14 md:pl-0 pl-5 cursor-pointer pt-10 pb-10'>
        <img src={assets.Padho}
        onClick={()=>
        {
          scrollTo(0,0);
          navigate('/')
        }
        } />
      </div>   
    </div>
        <div className=' bg-[#95a8dd] p-10 rounded-lg w-96  shadow-2xl'> 

                <form onSubmit={onSubmitHandler}>
                    <h1 className='sm:text-3xl text-2xl font-semibold mb-3 text-center'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h1>
                    <p className='text-center'>{state === 'Sign Up' ? 'Create an account' : 'Login your account'} </p>
                    
                    {state === 'Sign Up' &&
                      (
                      <div className='flex gap-3 w-full items-center bg-[#678aeb] shadow-xl px-5 py-2.5 rounded-lg  mt-4 '>
                        <p><FaRegUser /></p>
                        <input type="text" placeholder='Full Name' className='bg-transparent outline-none 'required
                        onChange={e => setName(e.target.value)}
                        value={name}
                        />
                      </div>
                      )
                    }

                    <div className='flex gap-3 w-full items-center bg-[#678aeb] px-5 py-2.5 shadow-xl rounded-lg  mt-4'>
                        <p><MdEmail /></p>
                        <input type="email" placeholder='Email' className='bg-transparent outline-none overflow-hidden'required
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        />
                    </div>

                    <div className='flex gap-3 w-full items-center bg-[#678aeb]  shadow-xl rounded-lg px-5 py-2.5 mt-4'>
                        <p><FaLock /></p>
                        <input type={hidePass ? 'text' : 'password'} placeholder='Password' className='bg-transparent outline-none w-full'required
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        />
                        <span className='text-xl text-black cursor-pointer' onClick={ () =>setHidePass(!hidePass)}>{hidePass ? (<IoEyeOutline />) : (<FaRegEyeSlash />)}</span>
                       
                    </div>
                    <p className='mt-3 underline cursor-pointer'onClick={()=>{navigate('/reset-password')}}>Forgot Password</p>
                  <button className='mt-3 flex items-center justify-center gap-5 rounded-lg bg-blue-600 hover:bg-blue-700
                   transition-all duration-500 text-gray-300 hover:scale-95 w-full p-2'>{state}
                  {loading && <div className='border-2  aspect-square w-5  rounded-full
                border-gray-300 border-t-green-500  duration-700 animate-spin'></div>}
                  </button>
                </form>
                  
                 {state === 'Sign Up' ? (
            <p className='text-gray-950 text-center text-xs mt-4'>Already have an account?{' '}
             <span 
              onClick={() =>setState('Login')}
              className='cursor-pointer text-base text-blue-800 underline'>Login here</span>
            </p>
          ) : (
            <p className='text-gray-950 text-center text-xs mt-4'>Don't have an account?{' '}
             <span
              onClick={() =>setState('Sign Up')}
              className='cursor-pointer  text-base text-blue-800 underline'>Sign Up </span>
            </p>
          )}




        </div>  
   </div>
   </>
  )
}

export default Login