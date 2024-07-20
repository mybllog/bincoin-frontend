"use client"
import React from 'react';

function Carousel() {
  return (
    <div className="bg-[#1D2330] overflow-hidden fixed h-16 box-border pb-10 bottom-0 border border-[#282E3B] text-right leading-3 text-xs right-0 shadow-inner w-screen m-0">
      <div className="h-10 p-0 m-0 w-full">
        <iframe 
          src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=no" 
          width="100%" 
          height="36px" 
          border="0" 
          className="border-0 m-0 p-0"
        ></iframe>
      </div>
      <div className="text-gray-500 leading-3 font-normal text-[11px] box-border px-1 py-0.5 w-full font-sans">
        <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 no-underline text-[11px]"></a>
      </div>
    </div>
  );
}

export default Carousel;
