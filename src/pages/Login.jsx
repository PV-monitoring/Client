import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Video from '../assets/solar_animation_3.mp4'
import { REGISTER_ROUTE } from '../utils/routes'
import { FaUserShield } from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const [loginuserName,setLoginUserName] = useState('')
    const [loginpassword,setLoginPassword] = useState('')
    const navigateTo = useNavigate()
    const [LoginStatus,setLoginStatus] = useState()
    const [statusHolder, setstatusHolder] = useState('message')

    const loginUser = (e)=>{

      e.preventDefault();
      Axios.post('http://localhost:5001/Login',{
        LoginuserName: loginuserName,
        Loginpassword: loginpassword
    }).then((response)=>{
      console.log()

      if (response.data.message){
        navigateTo('/Login')
        setLoginStatus("Credential Don't Match!")
      }
      else{
        navigateTo('/Dashboard')
      }
    })
      
    }

    useEffect(()=>{
      if(LoginStatus !== ''){
        setstatusHolder('showMessage')
        setTimeout(() => {
          setstatusHolder('message')
        }, 4000);
      }
    },[LoginStatus])
  return (
    
    <div className=' loginPage text-white flex h-[100vh]  m-auto overflow-hidden bg-black p-4 rounded-md @apply shadow-md max-w-[990px]' >
      <div className='container flex h-[75vh] w-[100%] m-auto justify-between items-center space-x-4 rounded-[10px] bg-gray-900'>
        <div className='videoDiv flex w-[70%] h-[100%] p-[1.5rem] text-center justify-center flex-col m-auto rounded-[10px] overflow-hidden position: relative'>
        <video src={Video} autoPlay muted loop className='h-[100%] w-[100%] top-0 bottom-0 right-0 left-0 object-cover position: absolute'></video>
        <div className='textDiv  position: relative'>
          <h1 className='title   font-bold md:text-3xl sm:text-2xl text-xl text-[#161716] '>
            Enhace your power plant with us
          </h1>
          <p className='p-[1rem] text-[#161716] font-bold'>Charging ahead with sustainable solutions.</p>
        </div>
        <div className='footerDiv flex position: absolute bottom-[10px] h-[60px] left-3 right-3 bg-gray-300 text-black bg-opacity-40 rounded-xl justify-center '>
          <p className='text text-white  font-bold sm:py-2 md:py-1 lg:py-4  md:px-4 sm:text-xs lg:text-xl'>Don't have an account ?</p>
          <a href={REGISTER_ROUTE}>
            <button className='btn bg-[#00df9a] w-[70px] h-10 my-3 mx-[10px] rounded-md font-medium text-white bg-opacity-60 hover:bg-opacity-100  '>Sign Up</button>
          </a>

        </div>
        
        </div>

        <div className='formDiv flex flex-col basis-[50%] gap-[2rem] '>
          <div className='headerDiv text-center  '>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Green Energy Monitoring</h1>
          <h3 className=' lg:text-center font-bold text-xl'>Welcome Back</h3>
          </div>
          <form className='form grid text-center justify-center gap-4'>
            <span className= 'display-block text-white p-[10px] bg-black rounded-xl text-center ${statusHolder}' >{LoginStatus}</span>

            <div className='inputDiv'>
              <label htmlFor="username" className='text-white font-[14px] display:block'> Username</label>
              <div className="input flex">
                <FaUserShield className='icon text-gray-200'/>
                <input type="text" id='username' placeholder='Enter Username' className=' bg-gray-200 bg-opacity-30 outline-none border-0 w-[200px] gap-[0.5rem] p-[1rem] rounded-xl' onChange={(event)=>{
                  setLoginUserName(event.target.value)
                }}/>
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor="password" className='text-white font-[14px]  display:block'> Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon text-gray-200'/>
                <input type="password" id='password' placeholder='Enter Password'  className=' bg-gray-200 bg-opacity-30 outline-none border-0 w-[200px] gap-[0.5rem] p-[1rem] rounded-xl' onChange={(event)=>{
                  setLoginPassword(event.target.value)
                }}/>
              </div>
            </div>

            <button type='submit' className='login_btn bg-[#00df9a] bg-opacity-80 w-[200px] rounded-xl font-medium h-10 mx-4 my-[8px]  text-white flex hover:bg-[#00df9a] ' onClick={loginUser}>
              <span className=' my-1 ml-[70px]'>Login</span>
              <AiOutlineSwapRight className='icon my-2 hover:translate-x-2'/>
            </button>

            <span className='forgotPassword opacity-70 text-center'>Forgot your password
            <a className=' text-decoration-underline cursor-pointer opacity-50' href=""> Click Here </a>
            </span>

          </form>
        </div>
        
      </div>
     
    </div>
  )
}

export default Login