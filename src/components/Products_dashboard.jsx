import React from 'react'
import Laptop from '../assets/laptop.png'
import Data from '../assets/data.jpg'
import { Fade } from 'react-awesome-reveal';

const sentences = [
" Aggregate Data From Any Solar PV Asset.",
" Transform Raw Data into Valuable Insights.",
" Minimize Downtimes and Operating Costs.",
" Maximize Profitability."
];

const Products = () => {
  return (
    <div id="productsDashboard" className='w-full bg-[#dde6e3] py-16 px-4'>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
            <Fade direction="left">
            <img className='w-[600px]  mx-auto my-4' src={Laptop} alt="/" />
            </Fade >
            <div className='flex flex-col justify-center' >
                <Fade direction="down">
                <h1 className=' text-[#2b6555] font-bold md:text-4xl sm:text-3xl text-2xl py-3'>DATA ANALYTICS DASHBOARD</h1>
                </Fade>
                <Fade direction="down">
                <p className='md:text-2xl sm:text-xl text-xl font-bold'>
                    Solar Monitoring, Data Analytics, 
                    O&M & Reporting In a single 
                    cloud-based platform.
                </p>
                </Fade>
                <Fade direction="up">
                <ul className=" list-inside text-base text-gray-800 py-4 font-bold">
                    {sentences.map((sentence, index) => (
                        <li key={index} className="block mb-2 before:content-['•'] before:text-gray-800">
                            {sentence}
                        </li>
                ))}
                 </ul>
                 </Fade>
                 <Fade direction="up">
                 <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0 '>Request Demo</button>

                 </Fade>

            </div>
        </div>
    </div>

    

    
  )
}

export default Products