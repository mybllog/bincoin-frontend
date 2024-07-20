"use client";
import React from 'react';

const TradingViewWidget = ({ src, height }) => {
  return (
    <div className=" w-full  " >
      <div className='relative m-0 right-0 py-2 text-white' data-aos="fade-up" style={{ height }}>
      <iframe
        scrolling="no"
        allowTransparency="true"
        frameBorder="0"
        src={src}
        className="w-full h-full"
        style={{ boxSizing: 'border-box', display: 'block' }}
      ></iframe>
      <div className="tradingview-widget-copyright text-center text-sm mt-2">
        <a
          href="https://www.tradingview.com"
          rel="noopener"
          target="_blank"
          className="text-blue-600 hover:text-blue-500"
        >
          Market Data
        </a>{' '}
        by TradingView
      </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
