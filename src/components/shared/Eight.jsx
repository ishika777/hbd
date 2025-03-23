import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Eight = () => {

  return (
    <div className="eight fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="special-text absolute top-0 left-0 z-100 text-white opacity-0 text-4xl md:text-6xl font-semibold flex items-center justify-center w-full h-full">
        Be Ready!!!
        </div>
      <svg className="w-[20px] absolute top-[7vh] left-[5vw] fill-[#bd6ecf]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[23vh] left-[35vw] fill-[#7dd175]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[33vh] left-[23vw] fill-[#349d8b]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[43vh] left-[57vw] fill-[#347a9d]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[68vh] left-[7vw] fill-[#c66053]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[42vh] left-[77vw] fill-[#bfaa40]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[68vh] left-[83vw] fill-[#e3bae8]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[86vh] left-[37vw] fill-[#8762cb]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg className="w-[20px] absolute top-[94vh] left-[87vw] fill-[#9a90da]" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" />
      </svg>
    </div>
  );
};

export default Eight;
