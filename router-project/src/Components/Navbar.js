import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';


 const Navbar = (props) => {
    let isLogedIn = props.isLogedIn;
    let setLogedIn = props.setLogedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link>
            <img src={logo} width={160} height={32} loading='lazy'/>
        </Link>

        <nav >
          <ul className='flex gap-3 text-richblack-100 text-2xl' >
             <li>
                <Link to='/'>Home</Link>
             </li>

             <li>
                <Link to='/'>about</Link>
             </li>

             <li>
                <Link to='/'>contact</Link>
             </li>
          </ul>
        </nav>
        
        <div className='flex gap-x-4 items-center'>
            { !isLogedIn &&
                <Link to='/login'>
                  <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                   Login
                  </button>
                </Link>
            }

              { !isLogedIn &&
                <Link to='/SingUp'>
                  <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                   SingUp
                  </button>
                </Link>
            }

            { isLogedIn &&
                <Link to='/'>
                  <button className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                     onClick={() => {
                     setLogedIn(false);
                     toast.success("Log Out");
                  }}>
                    Log Out
                  </button>
                </Link>
            }

            { isLogedIn &&
                <Link to='/DashBoard'>
                  <button className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                    DashBoard
                  </button>
                </Link>
            }
        </div>


    </div>
  )
}

export default Navbar;
