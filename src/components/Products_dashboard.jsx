import React from 'react'
import Laptop from '../assets/laptop.png'
import Data from '../assets/data.jpg'

const sentences = [
" Aggregate Data From Any Solar PV Asset.",
" Transform Raw Data into Valuable Insights.",
" Minimize Downtimes and Operating Costs.",
" Maximize Profitability."
];

const Products = () => {
  return (
    <div className='w-full bg-[#dde6e3] py-16 px-4'>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
            <img className='w-[600px]  mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center' >
                <h1 className=' text-[#2b6555] font-bold md:text-4xl sm:text-3xl text-2xl py-3'>DATA ANALYTICS DASHBOARD</h1>
                <p className='md:text-2xl sm:text-xl text-xl font-bold'>
                    Solar Monitoring, Data Analytics, 
                    O&M & Reporting In a single 
                    cloud-based platform.
                </p>
                <ul className=" list-inside text-base text-gray-800 py-4 font-bold">
                    {sentences.map((sentence, index) => (
                        <li key={index} className="block mb-2 before:content-['•'] before:text-gray-800">
                            {sentence}
                        </li>
                ))}
                 </ul>

                 <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0 '>Request Demo</button>

            </div>
        </div>
    </div>

    

    
  )
}

export default Products