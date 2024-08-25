import React from 'react';

function background() {
  return (
    <div className='h-screen w-full z-[2] fixed'>
      <div className='text-zinc-200 absolute top-[5%] left-[45%] font-semibold flex justify-center py-10 text-xl tracking-wide '>Documents</div>
      <p className="text-[12vw] leading-none tracking-tighter absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-200 drop-shadow-md">Docas.</p>
    </div>
  );
}

export default background;
