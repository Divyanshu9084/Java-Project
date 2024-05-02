import React from 'react'
import frameImage from '../assets/frame.png'
import SingUpFrom from './SingUpFrom';
import LongInFrom from './LongInFrom';
import {FcGoogle} from 'react-icons/fc'

 const Tamplate = ({ tittel, discr1, discr2, image, fromtype, setLogedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 gap-x-12 gap-y-0 mx-auto '>
      
      <div className='w-11/12 max-w-[450px]'>
         <h1 className='text-richblack-5 text-semibold text-[1.875rem] leading-[2.375rem]'
          >
          {tittel}
         </h1>

         <p className='text-[1.125rem] leading-[1.125rem] mt-4'>
            <span className='text-richblack-100'>{discr1}</span>
            <br/>
            <span className='text-blue-100 italic'>{discr2}</span>
         </p>

       {fromtype == "singup" ?(<SingUpFrom/>):(<LongInFrom/>)}

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <div className='text-richblack-700 font-medium leading-[1.375rem]'>OR</div>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='flex justify-center items-center rounded-[8px] w-full text-richblack-100 border 
              border-richblack-700 py-[8px] px-[12px] gap-x-2 mt-6'>
          <FcGoogle/>
          <p>Sing Up With Google</p>
        </button>

      </div>

      <div className=' w-11/12 max-w-[450px] relative'>
        <img src={frameImage} width={558} height={504} loading='lazy'/>
        <img src={image} width={558} height={504} loading='lazy'
          className='absolute -top-4 right-4'
        />
      </div>


    </div>
  )
}

export default Tamplate;
