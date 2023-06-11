import React from 'react'

const AboutSection = () => {
  return (
    <section className='text-white mt-10'>
     <div className='flex justify-center md:justify-start gap-2 items-center mb-5 md:mb-10'>
        <h2 className='text-center md:text-left py-10 text-xl md:text-[40px] text-[#ef0e0f]'> <span className='text-white font-bold'>About</span> Us</h2>
        <img className='md:w-[30px] md:h-[50px] w-6 h-8' src='./images/thun.png' alt=''/>
        </div>
    <div className='flex flex-wrap justify-center'>
    {/*=== text== */}
    <div className='md:w-[60%]'>
        <p className='leading-relaxed text-justify md:pr-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas orci id laoreet volutpat. Fusce condimentum a leo ut auctor. Aenean euismod, ante nec lacinia molestie, arcu arcu ultrices risus, eu mattis massa sem eget diam. Nulla pharetra neque eu ligula tincidunt, id feugiat justo accumsan. Proin libero nisi, imperdiet non arcu sit amet, tincidunt sagittis est. Praesent elit arcu, mollis ac mattis sed, ullamcorper et mi. Sed ornare vehicula turpis in mollis. Duis tristique gravida eros, eget feugiat mauris pretium sit amet. Aliquam condimentum egestas tempor.
Morbi eu est ligula.</p> <br/> <p className='leading-relaxed'>Pellentesque elit massa, molestie sit amet mollis a, malesuada ut mi. Etiam at enim congue, luctus ipsum nec, sagittis dolor. Sed ultrices odio vitae nulla efficitur, sed lobortis tellus interdum. Maecenas rhoncus feugiat iaculis. Duis malesuada, nisi in ultrices scelerisque, sem lorem egestas ante, vel blandit urna libero nec augue. Fusce aliquet erat quis enim tincidunt consectetur. Sed rhoncus, magna eget pretium luctus, orci lorem consequat nulla, efficitur egestas odio nunc in justo.
Proin consequat velit vestibulum nunc dapibus feugiat. <br /> <br /> In at risus non lectus egestas cursus in non nunc. Morbi ipsum nibh, sollicitudin a tempor eget, finibus in massa. Quisque vel accumsan justo. </p>
    </div>
    <div className='md:w-[40%] relative'>
        <img className='w-[350px] mx-auto' src='./images/fap.png' alt='' />
        <img className='animate-ud w-[110px] h-[110px] top-[30px] left-[120px] md:w-[120px] md:h-[120px] md:top-[10px] md:left-[195px] absolute' src='./images/coin-3d-3x.png' alt='' />
        <img className='animate-3d w-[80px] h-[80px] top-[195px] left-[135px] md:w-[90px] md:h-[120px] md:top-[170px] md:left-[210px] absolute ' src='./images/hero/etherium.png' alt='' />

    </div>
        
    </div>
</section>
  )
}

export default AboutSection