import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
const imgs = [
    
        "./images/social/face.png",
        "./images/social/Instagram.png",
        "./images/social/LinkedIn.png",
        "./images/social/Twiter.png",
        "./images/social/YouTube.png"
            
        ]


const Footer = () => {
  return (
    <section className='grid md:grid-cols-3 gap-10 md:gap-10 my-10'>
        <div className='p-5'>
            <p className='text-yellow-500 font-semibold tracking-wide uppercase'>subscribe to our newsletter</p>
            <div className='flex items-center mt-5 border-[1px] bg-transparent border-white p-3 rounded-lg w-full'>
            <input className='text-white flex-1 bg-transparent outline-none focus:none' placeholder='E - Email' />
                <AiOutlineSend size={20} className='text-white'/>
            </div>
            
            <img className='my-10 w-[200px]' src='./images/vector.png' alt='' />

            <p className='text-yellow-500 mt-5 font-semibold tracking-wide uppercase'>join the pack</p>
            <div className='flex flex-wrap justify-center md:justify-start mt-5 md:mt-10 gap-3'>
          { imgs.map((link) =>  <img className='md:w-[40px] w-[50px]' src={link} alt="" />)}
        </div>
        <div>

        </div>
        
        </div>
        <div className='p-5'>
        <p className='text-yellow-500 font-semibold tracking-wide uppercase'>policy</p>
        <p className='text-zinc-200 mt-5 text-md'>Lorem ipsum dolor sit amet, consect.
Lorem ipsum dolor sit amet, consectetur </p>
<p className='text-yellow-500 mt-5 font-semibold tracking-wide uppercase'>Product</p>
        <p className='text-zinc-200 text-md mt-5'>Lorem ipsum dolor sit amet, consect.
Lorem ipsum dolor sit amet, consectetur </p>
<p className='text-yellow-500  mt-5 font-semibold tracking-wide uppercase'>Contact us</p>
        <p className='text-zinc-200 text-md mt-5'>Lorem ipsum dolor sit amet, consect.
Lorem ipsum dolor sit amet, consectetur </p>
        </div>

<div className='p-5'>
    <img className='mx-auto w-[270px]' src='./images/logo.png' alt='' />
    <p className='text-[14px] text-zinc-200 mt-10'> Copyright ® 2023 Flash Fusion. All Rights Reserved Privacy Policy - Terms & Conditions</p>
    <p className='text-[14px] text-zinc-200 mt-10'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend elementum eros, aliquet vulputate enim suscipit vitae. Vivamus porttitor massa sed aliquam finibus.</p>
</div>


    </section>
  )
}

export default Footer