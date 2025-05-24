import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen flex gap-5 bg-zinc-900 p-20 '>
        <div className='w-1/2 '>
            <div className="heading">
            <h1 className='text-[7vw] uppercase text-semibold -mb-15'>Eye-</h1>
            <h1 className='text-[7vw] uppercase text-semibold -mb-15'>Opening</h1>
            </div>
            
        </div>
        <div className='w-1/2 mt-7'>
          <h1 className='text-[5vw] font-semibold uppercase leading-none mb-10'>Presentations</h1>
          <div className="dets mt-10">
              <a className='block text-xl ' href="#">Facebook</a>
              <a className='block text-xl ' href="&">Instagram</a>
              <a className='block text-xl ' href="$">Twitter</a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
