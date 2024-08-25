import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
function Card() {
  return (
    <div>
      <div className="bg-sky-500 relative p-5 w-60 h-72 text-blue-200 overflow-hidden rounded-[15px]">
      <FaRegFileAlt />
        <p className=' text-slate-800 font-semibold mt-2 leading-tight'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis optio et impedit ipsa, nemo earum?
        </p>
    <div className='footer absolute left-0 bottom-0 bg-red-400 w-full h-20'>
        </div>


      </div>
    </div>
  );
}

export default Card;
