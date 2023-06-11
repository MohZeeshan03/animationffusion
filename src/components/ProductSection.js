import React from 'react'
import SingleProducts from './SingleProducts'

const data = [
    {
        title: "Token locker/vesting",
        description:"Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
        icon: "./images/icons/token.png",
        size: "40px"
    },
    {
        title: "LP locker v2 & v3",
        description:"Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
        icon: "./images/icons/locker.png",
        size: "40px"
    },
    {
        title: "flash airdrops",
        description:"Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
        icon: "./images/icons/airdrop.png"
    },
    {
        title: "Flash token mint/ Generator",
        description:"Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellemetus vel tempor. ",
        icon: "./images/icons/mint.png",
        size: "35px"
    },
    {
        title: "flash anti bot",
        description:"Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
        icon: "./images/icons/bot.png",
        size: "40px"
    },
    {
        title: "New pair explorer",
        description:"Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
        icon: "./images/icons/roket.png",
        size: "45px"
    },
    {
        title: "flash staking",
        description:"Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
        icon: "./images/icons/Group.png",
        size:"27px"
    }
]
const ProductSection = () => {
  return (
    <section className='text-white'>
        <div className='flex justify-center gap-2 items-center'>
        <h2 className='text-center py-10 text-xl md:text-[40px] text-[#ef0e0f]'> <span className='text-white font-bold'>Our</span> Products</h2>
        <img className='md:w-[30px] md:h-[50px] w-6 h-8' src='./images/thun.png' alt=''/>
        </div>
        <div className='flex gap-4 flex-wrap justify-center'>
            {
                data.map((item)=> <SingleProducts item={item} />)
            }
        </div>
    </section>
  )
}

export default ProductSection