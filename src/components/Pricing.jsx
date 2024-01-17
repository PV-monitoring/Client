import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { Fade } from 'react-awesome-reveal'
const Pricing = () => {
  return (
    <div id="pricing" className='w-full py-[10rem] px-4 bg-[#dde6e3] '>
        
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Fade direction='up'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>
                    Single User
                </h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                
                <button className='bg-[#00df9a]  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trial</button>

            </div>
            </Fade>
            <Fade direction='down'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-400'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>
                    Single User
                </h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a] '>Start Trial</button>

            </div>
            </Fade>
            <Fade direction='up'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>
                    Single User
                </h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[#00df9a]  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trial</button>

            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Pricing