import React from 'react'

function About() {
  return (
    <div  className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full border-t-[2px] flex gap-5 pt-10 border-[#a1b562] mt-20'>
        <div className='w-1/2'>
            <h1 className='text-4xl'>Our Approch : </h1>
            <button className='px-10 py-4 bg-zinc-900 text-white mt-10 rounded-full uppercase flex gap-8 items-center'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#a1b550] rounded-3xl overflow-hidden fit'>
        </div>
      </div>

    </div>
  )
}

export default About
