import React from 'react'
import Mobile from '../assets/mobile.png'
import { Fade } from 'react-awesome-reveal';

const sentences = [
    " Aggregate Data From Any Solar PV Asset.",
    " Transform Raw Data into Valuable Insights.",
    " Minimize Downtimes and Operating Costs.",
    " Maximize Profitability."
    ];

    const Products_mobileapp = () => {
        return (
          <div className=' bg-black'>
            <div className='w-full py-16 px-4'>
              <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
                {/* Text Content */}
                <div className='flex flex-col justify-center ml-7'>
                  <Fade direction="down">
                  <h1 className='text-[#57cdab] font-bold md:text-4xl sm:text-3xl text-2xl py-3'>User Frindly Mobile monitoring App</h1>
                  </Fade>

                  <Fade direction="down">
                  <p className=' text-white md:text-2xl sm:text-xl text-xl font-bold'>
                    Solar Monitoring, Data Analytics,
                    O&M & Reporting In a single
                    cloud-based platform.
                  </p>
                  </Fade>

                  <Fade direction="up">
                  <ul className="list-inside text-base text-gray-500 py-4 font-bold">
                    {sentences.map((sentence, index) => (
                      <li key={index} className="block mb-2 before:content-['•'] before:text-gray-500">
                        {sentence}
                      </li>
                    ))}
                  </ul>
                  </Fade>

                  <Fade direction="up">
                  <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black md:mx-0 '>Request Demo</button></Fade>
                </div>
      
                {/* Image */}
                <Fade direction="right">
                <img className='w-[500px] mx-auto my-4 md:ml-auto' src={Mobile} alt="/" />
                </Fade>
              </div>
            </div>
          </div>
        );
      };

export default Products_mobileapp