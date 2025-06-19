import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {

    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : '');

    const onSearchHandler = (e) => {
      e.preventDefault();
      navigate('/course-list/' +input)
    }

  return (
       <form
     onSubmit={onSearchHandler} 
     className= 'flex items-center w-[90vw] sm:w-[60vw] lg:w-[35vw] h-12 bg-white border border-gray-500/20 rounded'> 
       <p className='md:w-auto w-10 px-3'><CiSearch /></p> 

       <input
        onChange={e =>setInput(e.target.value)}
        value={input}
        type='text'   placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80' />

       <button type='submit'
       className='bg-blue-600 rounded text-white sm:px-10 px-4 md:py-2 py-2 mx-1'>Search</button>

   </form>
    
 
  )
}

export default SearchBar