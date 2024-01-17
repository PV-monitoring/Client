import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { HOME_ROUTE,LOGIN_ROUTE} from '../utils/routes'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black fixed top-0 left-0 w-full right-0' >
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Green Energy Monitoring</h1>
        <ul className=' hidden md:flex'>
          <li className='p-4'><a href={HOME_ROUTE}>Home</a></li>
          <li className='p-4'><Link to="productsDashboard" spy={true} smooth={true} offset={-100} duration={600} >Products</Link></li>
          <li className='p-4'><Link to="pricing" spy={true} smooth={true} offset={-50} duration={600} >Pricing</Link></li>
          <li className='p-4'><Link to="about" spy={true} smooth={true} offset={-100} duration={600} >About</Link></li>
          
          
        </ul>

        

        <div onClick={handleNav} className='block md:hidden p-4'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <button className='bg-[#00df9a] w-[100px] rounded-[8px] font-medium  mx-2 my-[-5px] py-2 text-black p-4'>
        <a href={LOGIN_ROUTE}>Login</a></button>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Green Energy Monitoring</h1>
          <ul className=' uppercase font-bold p-4'>
          <li className='p-4 border-b border-gray-600'><a href={HOME_ROUTE}>Home</a></li>
          <li className='p-4 border-b border-gray-600'><Link to="productsDashboard" spy={true} smooth={true} offset={-100} duration={600} >Products</Link></li>
          <li className='p-4 border-b border-gray-600'><Link to="pricing" spy={true} smooth={true} offset={-100} duration={600} >Pricing</Link></li>
          <li className='p-4'><Link to="about" spy={true} smooth={true} offset={-100} duration={600} >About</Link></li>
          
          </ul>
        </div>

    </div>
  )
}

export default Navbar
