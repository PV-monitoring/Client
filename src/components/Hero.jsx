import React,{useState,useEffect} from 'react'
import bg_solar from '../assets/solar.jpg';
import { Fade } from 'react-awesome-reveal';



function Hero() {

  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <Fade direction='down'>
            <p className=' font-bold p-2 md:text-3xl sm:text-2xl text-xl'>   Join the revolution choose green energy.  </p>
            </Fade>
            <Fade direction='down'>
            <h1 className='md:text-6xl sm:text-5xl text-4xl text-[#00df9a]'> Green Energy is the Future </h1>
            </Fade>
            <div className=' justify-center items-center'>
            <Fade direction='up'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4' >Empower your solar journey,</p>
                </Fade>
            </div>
            <Fade direction='up'>
            <p className='md:text-2xl text-xl font-bold text-gray-400'>Optimize your solar plants with real-time data. Monitor energy, efficiency, and health for peak performance. </p>
            </Fade>
            <Fade direction='up'>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </Fade>
        </div>
        <div className="bg-overlay absolute w-full h-full left-0 top-0 pointer-events-none opacity-15">
          <img src={bg_solar} alt="bg_solar" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default Hero