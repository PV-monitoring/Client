import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../assets/solar_animation_2.mp4'
import { REGISTER_ROUTE } from '../utils/routes'
import { FaUserShield } from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
const Login = () => {
  return (
    
    <div className=' loginPage text-white flex h-[100vh] w-[100%] m-auto overflow-hidden bg-black p-4 rounded-md @apply shadow-md ' >
      <div className='container flex h-[75vh] w-[60%] m-auto justify-between items-center space-x-4 rounded-[10px] bg-gray-600'>
        <div className='videoDiv flex w-1/2'>
        <video src={Video} autoPlay muted loop></video>
        <div className='textDiv'>
          <h1 className='title font-bold'>
            Enhace your power plant with us
          </h1>
          <p>Charging ahead with sustainable solutions.</p>
        </div>
        <div className='footerDiv flex flex-shrink-5'>
          <span className='text'>Don't have an account?</span>
          <a href={REGISTER_ROUTE}>
            <button className='btn'>Sign Up</button>
          </a>

        </div>
        
        </div>

        <div className='formDiv'>
          <div className='headerDiv'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Green Energy Monitoring</h1>
          <h3>Welcome Back</h3>
          </div>
          <form action="" className='form grid'>
            <span>Login status will go here</span>

            <div className='inputDiv'>
              <label htmlFor="Username"> Username</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Enter username' />
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor="password"> password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Password' />
              </div>
            </div>

            <button type='submit' className='login_btn bg-[#00df9a] w-[200px] rounded-[6px] font-medium  mx-4 my-[8px]  text-black flex hover:bg-[#b1ddcf]'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>Forgot your password
            <a href="">Click Here</a>
            </span>

          </form>
        </div>
        
      </div>
     
    </div>
  )
}

export default Login