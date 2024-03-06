import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Video from '../assets/solar_animation_3.mp4'
import { LOGIN_ROUTE } from '../utils/routes'
import { MdMarkEmailRead } from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import {FaUserShield} from 'react-icons/fa'
import Axios from 'axios'


const Register = () => {
  const[email,setEmail] = useState('')
  const[userName,setUserName] = useState('')
  const[password,setPassword] = useState('')

  const createUser = ()=>{
    Axios.post('http://localhost:5001/Register',{
      Email: email,
      userName: userName,
      password: password
    }).then(()=>{
      console.log('user has been created')
    })
  }



  return (
    <div className='register bg-black'>
      <div className=' registerPage text-white flex h-[100vh]  m-auto overflow-hidden bg-black p-4 rounded-md @apply shadow-md max-w-[1100px] ' >
      <div className='container flex  w-[100%] h-[75vh] m-auto justify-between items-center space-x-4 rounded-[10px] bg-gray-900'>
        <div className='videoDiv flex w-[70%] h-[100%] p-[1.5rem] text-center justify-center flex-col m-auto rounded-[10px] overflow-hidden position: relative'>
        <video src={Video} autoPlay muted loop className='h-[100%] w-[100%] top-0 bottom-0 right-0 left-0 object-cover position: absolute'></video>
        <div className='textDiv  position: relative'>
          <h1 className='title   font-bold md:text-3xl sm:text-2xl text-xl text-[#161716] '>
            Enhace your power plant with us
          </h1>
          <p className='p-[1rem] font-bold text-[#161716]'>Charging ahead with sustainable solutions.</p>
        </div>
        <div className='footerDiv flex position: absolute bottom-[10px] h-[60px] left-3 right-3 bg-gray-300 text-black bg-opacity-40 rounded-xl justify-center '>
          <p className='text text-white  font-bold sm:py-2 md:py-1 lg:py-4  md:px-4 sm:text-xs lg:text-xl'>Have an account ?</p>
          <a href={LOGIN_ROUTE}>
            <button className='btn bg-[#00df9a] w-[70px] h-10 my-3 mx-[10px] rounded-md font-medium text-white bg-opacity-60 hover:bg-opacity-100  '>Login</button>
          </a>

        </div>
        
        </div>

        <div className='formDiv flex flex-col basis-[50%] gap-[2rem] '>
          <div className='headerDiv text-center  '>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Green Energy Monitoring</h1>
          <h3 className=' lg:text-center font-bold text-xl'>Let Us Know You!</h3>
          </div>
          <form action="" className='form grid text-center justify-center gap-4'>
            {/* <span className='showMessage display-block text-white p-[10px] bg-black rounded-xl text-center'>Login status will go here</span> */}

            <div className='inputDiv'>
              <label htmlFor="email" className='text-white font-[14px] display:block'>Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon text-gray-200'/>
                <input type="text" id='email' placeholder='Enter Email' className=' bg-gray-200 bg-opacity-30 outline-none border-0 w-[200px] gap-[0.5rem] p-[1rem] rounded-xl' onChange={(event)=>{
                  setEmail(event.target.value)
                }} />
              </div>
            </div>
            

            <div className='inputDiv'>
              <label htmlFor="email" className='text-white font-[14px] display:block'>Username</label>
              <div className="input flex">
                <FaUserShield className='icon text-gray-200'/>
                <input type="text" id='username' placeholder='Enter Username' className=' bg-gray-200 bg-opacity-30 outline-none border-0 w-[200px] gap-[0.5rem] p-[1rem] rounded-xl' onChange={(event)=>{
                  setUserName(event.target.value)
                }}/>
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor="password" className='text-white font-[14px]  display:block'> Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon text-gray-200'/>
                <input type="password" id='password' placeholder='Enter Password'  className=' bg-gray-200 bg-opacity-30 outline-none border-0 w-[200px] gap-[0.5rem] p-[1rem] rounded-xl' onChange={(event)=>{
                  setPassword(event.target.value)
                }}/>
              </div>
            </div>

            <button type='submit' className='login_btn bg-[#00df9a] bg-opacity-80 w-[200px] rounded-xl font-medium h-10 mx-4 my-[8px]  text-white flex hover:bg-[#00df9a] ' onClick={createUser}>
              <span className=' my-1 ml-[70px]'>Register</span>
              <AiOutlineSwapRight className='icon my-2 hover:translate-x-2'/>
            </button>

            {/* <span className='forgotPassword opacity-70 text-center'>Forgot your password
            <a className=' text-decoration-underline cursor-pointer opacity-50' href=""> Click Here </a>
            </span> */}

          </form>
        </div>
        
      </div>
     
    </div>

    </div>
    
    
  )
}

export default Register