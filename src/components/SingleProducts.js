import React from 'react'

const SingleProducts = ({item}) => {
    const {title, description, icon, size} = item 
  return (
    <section className='py-1'>
        <div className='w-[140px] h-[260px] md:w-[208px] md:h-[320px] m-1 md:m-4 gradient-border-mask-pd px-2 py-7'>
            <div className='bg-gradient-to-bl from-[#560298] to-[#000740] m-2 mx-auto p-1 w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex justify-center items-center rounded-xl gradient-border-mask-red'>
                <img style={{width:size}} className={'mx-auto w-[35px] '} src={icon} alt='%' />
            </div>
            <h4 className='text-[11px] md:text-[17px] pt-[30px] text-center font-semibold capitalize'>{title}</h4>
            <p className='text-[9px] md:text-[12px] pt-[18px] text-center font'>{description}</p>

        </div>
        
    </section>
  )
}

export default SingleProducts