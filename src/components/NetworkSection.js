import React from 'react'
import Marquee from "react-fast-marquee";
const imgs = [
    
"./images/networks/01.png",
"./images/networks/02.png",
"./images/networks/03.png",
"./images/networks/04.png",
"./images/networks/05.png"
    
]

const marqueeImg = [
  "./images/networks/marquee/01.png",
"./images/networks/marquee/02.png",
"./images/networks/marquee/03.png",
"./images/networks/marquee/04.png"
]

const NetworkSection = () => {
  return (
    <section className='text-white mt-10'>
         <div className='flex justify-center gap-2 items-center'>
        <h2 className='text-center py-10 text-xl md:text-[40px] text-[#ef0e0f]'> <span className='text-white font-bold'>Available</span> Networks</h2>
        <img className='md:w-[30px] md:h-[50px] w-6 h-8' src='./images/thun.png' alt=''/>
        </div>
        <div className='flex flex-wrap justify-center mt-5 md:mt-10'>
          { imgs.map((link) =>  <img className='md:w-[200px] w-[150px]' src={link} alt="" />)}
        </div>
        {/* ==== coming soon ==== */}
        <article className='mt-20'>
            <div className='flex justify-evenly flex-wrap gap-5'>
              <div className='border-l-4 border-white flex justify-center items-center'>
                <h2 className='pl-3 text-xl md:text-4xl font-semibold'><span className='text-[#ef0e0f]'>Coming</span> Soon</h2>
              </div>
              <div className='flex gap-2 justify-center items-center border-2 border-zinc-300 rounded-md p-4'>
                <img className='md:w-[30px] w-[20px]' src='./images/icons/fantom.png' alt='' />
                <h2 className='text-xl md:text-4xl text-zinc-300'>Fantom</h2>
              </div>

              <div className='flex gap-2 justify-center items-center border-2 border-zinc-300 rounded-md p-4'>
                <img className='md:w-[30px] w-[20px]' src='./images/icons/cronos.png' alt='' />
                <h2 className='text-xl md:text-4xl text-zinc-300'>Cronos</h2>
              </div>

              <div className='flex gap-2 justify-center items-center border-2 border-zinc-300 rounded-md p-4'>
                <img className='md:w-[150px] w-[90px]' src='./images/icons/zsync.png' alt='' />

              </div>

            </div>
        </article>
        {/* === marquee === */}
        <Marquee loop={0} autoFill={true} className='flex justify-center items-center'>
        { marqueeImg.map((link) =>  <img className='w-[140px] md:w-[250px] mx-10 mt-20 ' src={link} alt="" />)}
        </Marquee>
    </section>
  )
}

export default NetworkSection