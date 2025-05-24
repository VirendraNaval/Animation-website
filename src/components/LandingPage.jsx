import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  motion
  return (
    <div data-scroll data-scroll-speed = "-.12" className='w-full min-h-screen bg-zinc-900 pt-1 '>
      <div className="textstructure mt-48 px-12">
        {['We create', 'eye opening', 'presentations'].map((item, index) => {
            return <div className="masker ">
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (<motion.div initial = {{width:0}} animate={{width:"8vw"}} transition={{ease : [0.76, 0, 0.24, 1],duration : 1}} className='mr-[.8vw] rounded-md w-[8vw] h-[6vw]  bg-red-500 mt-3'></motion.div>)}
            <h1 className='uppercase text-[6.8vw] leading-[6.5vw] tracking-tighter font-bold '>{item}</h1>
            </div>
          </div>
        })}
        
      </div>

      <div className='border-t-[1px] border-zinc-500 mt-25 font-light font-lg text-sm capitalize flex justify-between items-center px-5 py-3 '>
        {["For Public And Private Companies","From the first pitch to IPOs"].map((item, index) =>
        <p className='text-md font-light tracking-tight leading-none'>{item}</p> 
        )}
        <div className="start flex items-center gap-5 ">
            <div className='px-4 py-2 border-2 rounded-full bg-zinc-700 rounded-full'>start a project</div>
            <div className='w-10 h-10 border-[2px] bg-zinc-700 rounded-full flex justify-center items-center'>
                <span><FaArrowUpLong /></span>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
