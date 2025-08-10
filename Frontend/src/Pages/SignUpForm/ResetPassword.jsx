import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { AppContext } from '../../Context/AppContext';
import { FaLock } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const navigate = useNavigate();
    const {loading,setLoading, backendUrl, } = useContext(AppContext);
    axios.defaults.withCredentials = true;

    const [hidePass, setHidePass] = useState(false);

     const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [isEmailSent, setIsEmailSent] = useState('')
    const [otp, setOtp] =useState(0)
    const [isOtpSubmit, setIsOtpSubmit] = useState(false)

    const inputRefs = React.useRef([])

    const inputHandle = (e, index) =>{

        if(e.target.value.length > 0 && index < inputRefs.current.length - 1){
            inputRefs.current[index + 1 ].focus();
            }
    }
    
    const HandleKeyDown = (e, index) =>{    
        if(e.key === 'Backspace' && e.target.value === '' && index > 0){
            inputRefs.current[index - 1].focus();
        }

    }

    const handlePaste = (e) =>{
       const paste = e.clipboardData.getata('text')
       const pasteArray = paste.split('');
       pasteArray.forEach((char, index) =>{
        if(inputRefs.current[index]){
            inputRefs.current[index].value = char;
        }
       });
    }

    const onsumbitEmail = async(e) => {
        e.preventDefault();
        setLoading(true)

        try {
            
            const {data} = await axios.post(backendUrl + '/api/auth/send-reset-otp',{email})

            data.success ? toast.success(data.message) : toast.error(data.message)

            data.success && setIsEmailSent(true)
            setLoading(false);
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    const submitOtp = async(e) =>{
      e.preventDefault();
      setLoading(true)
      const otpArray = inputRefs.current.map(e => e.value)
      setOtp(otpArray.join(''))
      setIsOtpSubmit(true)
      setLoading(false)

    }

    const onSubmitNewPassword = async(e) =>{
      e.preventDefault();
      setLoading(true)

      try {
        const {data} = await axios.post(backendUrl + '/api/auth/reset-password',{
          email, otp, newPassword
        })
        data.success ? toast.success(data.message) : toast.error(data.message)
        data.success && navigate('/login')
        setLoading(false)
      } catch (error) {
        toast.error(data.message)
      }

    }

  return (
    <>
    <div className='min-h-screen bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>
        <div className='z-50 flex justify-between shadow-xl bg-[#95a8dd] items-center overflow-hidden fixed  left-0 top-0 w-full text-black '> 
            <div className='object-cover h-18 w-24 flex items-center justify-center md:ml-14 md:pl-0 pl-5 cursor-pointer pt-10 pb-10'>
                <img src={assets.Padho} 
                    onClick={()=>{ scrollTo(0,0);
                    navigate('/')}} />
            </div>   
        </div>
 
        <div className='min-h-screen flex justify-center items-center'>
                               {/* for Enter Email ID*/}
            {!isEmailSent &&
            <form className='bg-[#95a8dd] p-10 rounded-lg shadow-xl'
            onSubmit={onsumbitEmail}>
                <h1 className='text-3xl font-semibold text-center mb-2'>Reset Password</h1>
                <p className='text-sm text-center '>Enter Your registered Email address </p>

                <div className='flex gap-3 w-full items-center bg-[#678aeb] px-5 py-2.5 shadow-xl rounded-lg  mt-4'>
                    <p><MdEmail /></p>
                    <input type="email" placeholder='Email' className='bg-transparent outline-none overflow-hidden'
                     value={email} onChange={e => setEmail(e.target.value)} required
                    />
                </div>

                <button className=' w-full flex justify-center items-center gap-5 py-2.5 rounded-lg mt-5 text-gray-300
                 bg-blue-600 transition-all duration-500 cursor-pointer hover:bg-blue-700 hover:scale-95'>Send OTP
                 {loading && <div className='border-2  aspect-square w-5  rounded-full
                border-gray-300 border-t-green-500  duration-700 animate-spin'></div>}
                 </button>
            </form>}

            {/* For OTP Enter */}
                  {!isOtpSubmit && isEmailSent && 

            <form className='bg-[#95a8dd] p-10 rounded-lg shadow-xl'
            onSubmit={submitOtp}>
                <h1 className='text-3xl font-semibold text-center mb-2'>Reset Password</h1>
                <p className='text-sm text-center  mb-6'>Enter the 6 digit code</p>     
 
                <div className='flex justify-between mb-8 gap-1.5 '
                onClick={handlePaste}>
                    {Array(6).fill(0).map((_,index) =>(
                       <input type="text" maxLength='1' key={index} required
                        className='w-11 h-11 bg-[#678aeb] text-black text-center text-lg rounded-md outline-[#cccc]'
                        ref={e => inputRefs.current[index] = e}
                        onInput={(e) => {inputHandle(e, index)}}
                        onKeyDown={(e) =>{HandleKeyDown(e, index)}}
                        />
                    ))}
                </div>
                <button className=' w-full flex justify-center items-center gap-5 py-2.5 rounded-lg mt-5 text-gray-300
                 bg-blue-600 transition-all duration-500 cursor-pointer hover:bg-blue-700 hover:scale-95'>Submit
                 {loading && <div className='border-2  aspect-square w-5  rounded-full
                border-gray-300 border-t-green-500  duration-700 animate-spin'></div>}
                </button>

            </form>}

            {/* For new Password */}
                    {isOtpSubmit && isEmailSent &&
            <form  className='bg-[#95a8dd] p-10 rounded-lg shadow-xl'
            onSubmit={onSubmitNewPassword}>
                <h1 className='text-3xl font-semibold text-center mb-2'>Reset Password</h1>
                <p className='text-sm text-center  mb-6'>Enter Your new Password below </p>    

                <div className='flex gap-3 w-full items-center bg-[#678aeb] px-5 py-2.5 shadow-xl rounded-lg  mt-4'>
                    <p><FaLock /></p>
                    <input type={hidePass ? 'text' : 'password'} placeholder='new password'
                     className='bg-transparent outline-none overflow-hidden'
                      value={newPassword} onChange={e => setNewPassword(e.target.value)} required
                     />
                     <span className='cursor-pointer text-xl'onClick={() =>{setHidePass(!hidePass)}}>{hidePass ? (<IoEyeOutline />) : (<FaRegEyeSlash />)}</span>
                </div>

                <button className=' w-full flex justify-center items-center gap-5 py-2.5 rounded-lg mt-5 text-gray-300
                 bg-blue-600 transition-all duration-500 cursor-pointer hover:bg-blue-700 hover:scale-95'>Submit
                 {loading && <div className='border-2  aspect-square w-5  rounded-full
                border-gray-300 border-t-green-500  duration-700 animate-spin'></div>}
                 </button>
            </form>}
        </div>
    </div>
    </>
  )
}

export default ResetPassword