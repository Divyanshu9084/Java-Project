import React, { useState } from 'react'
// import {AiOutlineEye, AiOutlineEyeInvisible} from 'react/icons/ai'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

 const SingUpFrom = () => {
    const [fromData, setfromData] = useState({
        FirstName:"", LastName:"", email:"", Password:"", confirmPassWord:""    })

    const [showPassword, setshowPassword] = useState(false);    

    function changeHandaler(event) {
        setfromData( (prevdata) => (
                {
                    ...prevdata,
                    [event.target.name]:event.target.value
    
                }
            ))
        }
  return (
    <div>
      
      <div>
         <button>
            Student
         </button>
         <button>
            Teacher
         </button>
      </div>
       
       <from>
          
          <div>
          <lable>
             <p>First Name <sup>*</sup></p>
            <input
                required
                type='text'
                name='First Name'
                value={fromData.FirstName}
                onChange={changeHandaler}
                placeholder='Enter Your First Name..'

            />
         </lable>

         <lable>
             <p>Last Name <sup>*</sup></p>
            <input
                required
                type='text'
                name='Last Name'
                value={fromData.LastName}
                onChange={changeHandaler}
                placeholder='Enter Your Last Name..'

            />
         </lable>

          </div>

          <lable>
             <p>email Name <sup>*</sup></p>
            <input
                required
                type='email'
                name='email Name'
                value={fromData.email}
                onChange={changeHandaler}
                placeholder='Enter Your email ID..'

            />
         </lable>
          
        <div>
          <lable>
                <p>
                   Create password <sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword? ("text"): ("Password")}
                    value={fromData.Password}
                    name='password'
                    onChange={changeHandaler}
                    placeholder='Enter password'
                />

                <span onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
                </span>
          </lable>

          <lable>
                <p>
                   Confirm password <sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword? ("text"): ("Password")}
                    value={fromData.confirmPassWord}
                    name='confirmPassWord'
                    onChange={changeHandaler}
                    placeholder='Enter confirmPassWord'
                />

                <span onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
                </span>
          </lable>
        </div>
         
         <button>
            Create Account
         </button>
        
       </from>

    </div>
  )
}

export default SingUpFrom;
