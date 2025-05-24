import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-20'>
      <div className="cardcontainer h-[75vh] w-1/2">
        <div className='card relative rounded-2xl w-full h-full bg-[#004D43] flex justify-center items-center'>
            <img className='w-28' src="http://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy; 20222-2026</button>
        </div>
      </div>
      <div className="cardcontainer h-[75vh] w-1/2 flex gap-5 ">
        <div className='card relative flex items-center justify-center rounded-2xl w-full h-full bg-red-300 '>
        <img className='w-28' src="./public/cp.png" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy; 20222-2026</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-2xl w-full h-full bg-purple-500 '>
        <img className='w-28 transparent' src="./public/cp.png" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy; 20222-2026</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
