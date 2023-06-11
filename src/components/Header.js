import React, {useState} from 'react'
import { BiMenu } from 'react-icons/bi';
import {AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header style={{
        backgroundColor:  'rgba(255, 255, 255, 0.05)'
    }} className='z-50 backdrop-blur-lg flex px-5 md:px-20 sticky top-0 justify-between items-center py-3 md:py-0'>
    <div>
      <img className='md:w-[250px] w-[170px]' src="./images/logo.png" alt="" />
    </div>
    <div className='md:block hidden'>
      <ul className='flex text-white text-[14px] items-center gap-5'>
        <li>Products</li>
        <li>About Us</li>
        <li>FAQs</li>
        <li>
          <a href='/' className='text-[12px] bg-gradient-to-l from-[#fe1c11] to-[#ffbe31]   px-4 py-2  rounded-md'>Go to App</a>
        </li>
      </ul>
    </div>

{
  navbar ? <AiOutlineClose onClick={() => setNavbar(!navbar)} className='text-white md:hidden' size={40} /> :  

<BiMenu onClick={() => setNavbar(!navbar)} className='text-white md:hidden' size={40} />   }


{
  navbar && <div style={{
    backgroundColor:  'rgba(0, 0, 0, 0.5)'
}} className='absolute backdrop-blur-lg w-full transform mt-[180px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
<ul className='flex-col float-right text-white justify-end items-end text-[14px] gap-10'>
    <li className='p-5 text-lg font-semibold'>Products</li>
    <li className='p-5 text-lg font-semibold'>About Us</li>
    <li className='p-5 text-lg font-semibold'>FAQs</li>
    <li className='p-5 text-lg font-semibold'>
      <a href='https://flash-fusinon.netlify.app' className='text-[12px] bg-gradient-to-r from-[#fe1c11] to-[#ffbe31]   px-4 py-2  rounded-md'>Go to App</a>
    </li>
  </ul>

</div>
}


  </header>
  )
}

export default Header