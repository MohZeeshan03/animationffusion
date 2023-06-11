import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { AiOutlineRight } from 'react-icons/ai';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FaqSection = () => {
  return (
    <section className='text-white mt-10'>
      <div className='flex justify-center gap-2 items-center'>
        <h2 className='text-center py-10 text-xl md:text-[40px] text-[#ef0e0f] '> <span className='text-white font-bold'>Faq</span> ( frequently asked questions )</h2>
        <img className='md:w-[30px] md:h-[50px] w-6 h-8' src='./images/thun.png' alt=''/>
        </div>
    <div className='flex flex-wrap gap-5 items-center justify-center '>
        <div lassName='w-[40%]' >
        <img  className='w-[380px] mx-auto' src='./images/faq.png' alt='' />
        </div>
      
       <div className='md:w-[60%] md:mt-0 mt-10'>
       <Accordion >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='gradient-border-mask-faq flex justify-between items-center rounded-lg my-2 p-4 gap-1'>
                        <div className='flex items-center gap-1'>
                    <img className='md:w-[20px] md:h-[30px] w-10 h-10' src='./images/thun.png' alt=''/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div>
                        <AiOutlineRight />
                        </div>
                        
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex'>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='gradient-border-mask-faq flex justify-between items-center rounded-lg my-2 p-4 gap-1'>
                        <div className='flex items-center gap-1'>
                    <img className='md:w-[20px] md:h-[30px] w-10 h-10' src='./images/thun.png' alt=''/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div>
                        <AiOutlineRight />
                        </div>
                        
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex'>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='gradient-border-mask-faq flex justify-between items-center rounded-lg my-2 p-4 gap-1'>
                        <div className='flex items-center gap-1'>
                    <img className='md:w-[20px] md:h-[30px] w-10 h-10' src='./images/thun.png' alt=''/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div>
                        <AiOutlineRight />
                        </div>
                        
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex'>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='gradient-border-mask-faq flex justify-between items-center rounded-lg my-2 p-4 gap-1'>
                        <div className='flex items-center gap-1'>
                    <img className='md:w-[20px] md:h-[30px] w-10 h-10' src='./images/thun.png' alt=''/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div>
                        <AiOutlineRight />
                        </div>
                        
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex'>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>
       </div>
    </div>
</section>
  )
}

export default FaqSection