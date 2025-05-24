import React, { useEffect } from 'react';

function Eyes() {
    const [rotate, setRotate] = React.useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle =  Math.atan2(deltaY, deltaX) * (180 / Math.PI) ;
            setRotate(angle - 180);
        })
    })


  return (
    <div className='eyes w-full h-screen overflow-hidden '>
      <div data-scroll data-scroll-speed = "-.7" className='relative w-full h-full flex items-center justify-center bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='flex gap-10 justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-96'>
          <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center'>
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;