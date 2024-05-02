import React, { useState } from 'react'
import toast from 'react-hot-toast';
// import {AiOutlineEye, AiOutlineEyeInvisible} from 'react/icons/ai'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, Navigate } from 'react-router-dom'

 const LongInFrom = ({setLogedIn}) => {
    const [fromData, setfromData] = useState({
        email:"", password:"",
    })

    const [showPassword, setshowPassword] = useState(false);

    function changeHandaler(event) {
        setfromData( (prevdata) => (
            {
                ...prevdata,
                [event.target.name]:event.target.value

            }
        ))
    }
    
    function sumbitHandler(event){
        event.preventdefault();
        setLogedIn(true);
        toast.success("Loged In");
        Navigate("/DashBorad");
    }
  return (
    

        <from className='flex flex-col w-full gap-y-4 mt-6'
        onSumbit={sumbitHandler}>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                  Email Address <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    name='email'
                    value={fromData.email}
                    onChange={changeHandaler}
                    placeholder='Enter Your Email ID...'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />

            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                  password <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={showPassword? ('text'): ('password')}
                    value={fromData.password}
                    name='password'
                    onChange={changeHandaler}
                    placeholder='Enter password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span
                 className='absolute right-3 top-[38px] cursor-pointer'
                  onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): 
                                   (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                   <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forget passWord</p>
                </Link>

            </label>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[9px] mt-6'>
                sing In 
            </button>
        </from>

  )
}

export default LongInFrom;
