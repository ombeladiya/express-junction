import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate=useNavigate();
    const goback=()=>{
        navigate(-1);
    }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-300'>
        <div className='flex justify-center w-full'> 
           <div className='flex flex-col w-full justify-center items-center'>
            <img src="/pagenotfound.jpg" alt="page not found" className='w-11/12 sm:w-1/3 sm:h-2/3 mix-blend-multiply' />
            <button className='bg-orange-600 px-5 py-1 mt-3 w-[250px] rounded-md text-white font-semibold' onClick={goback}>Go Back</button>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound
