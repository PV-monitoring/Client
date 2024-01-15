import React from 'react'
import Mobile from '../assets/mobile.png'

const sentences = [
    " Aggregate Data From Any Solar PV Asset.",
    " Transform Raw Data into Valuable Insights.",
    " Minimize Downtimes and Operating Costs.",
    " Maximize Profitability."
    ];

    const Products_mobileapp = () => {
        return (
          <div>
            <div className='w-full py-16 px-4'>
              <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
                {/* Text Content */}
                <div className='flex flex-col justify-center ml-7'>
                  <h1 className='text-[#57cdab] font-bold md:text-4xl sm:text-3xl text-2xl py-3'>User Frindly Mobile monitoring App</h1>
                  <p className=' text-white md:text-2xl sm:text-xl text-xl font-bold'>
                    Solar Monitoring, Data Analytics,
                    O&M & Reporting In a single
                    cloud-based platform.
                  </p>
                  <ul className="list-inside text-base text-gray-500 py-4 font-bold">
                    {sentences.map((sentence, index) => (
                      <li key={index} className="block mb-2 before:content-['•'] before:text-gray-500">
                        {sentence}
                      </li>
                    ))}
                  </ul>
                  <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black md:mx-0 '>Request Demo</button>
                </div>
      
                {/* Image */}
                <img className='w-[500px] mx-auto my-4 md:ml-auto' src={Mobile} alt="/" />
              </div>
            </div>
          </div>
        );
      };

export default Products_mobileapp