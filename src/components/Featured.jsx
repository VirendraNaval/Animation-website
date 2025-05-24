import React, { useState } from 'react'

function Featured() {

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-1 border-zinc-700 pb-20 '>
            <h1 className='text-5xl tracking-tight '>Featured Projects :</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-20 mt-20'>
                <div className='cardcontainer w-1/2 h-[75vh] '>
                    <div className='card w-full h-full rounded-2xl bg-green-500 overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="http://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                    </div>
                </div>
                <div className='cardcontainer w-1/2 h-[75vh] '>
                    <div className='card w-full h-full rounded-2xl bg-green-500 overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="img.jpg" alt="" />
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Featured
