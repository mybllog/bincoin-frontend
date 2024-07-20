'use client';

import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';

import Carousel from '../components/Carousel';
import TradingViewWidget from '../components/TradingViewWidget';
import FundsSection from '../components/FundsSection';
import ForexWidget from '../components/ForexWidget';

import StepsSlider from '../components/StepsSlider';
import Investment from '../components/Investment';
import PaymentsAndFooterWrapper from '../components/PaymentAndFooterWrapper';

import FundSec from '../components/FundSec';
import Icons from '../components/Icons';
const Page = () => {
  return (
    <div className='w-full'>
      <Nav/>
      <FundSec/>
      <TradingViewWidget
        src="https://s.tradingview.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212m%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22plotLineColorGrowing%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22scaleFontColor%22%3A%22rgba(65%2C%20224%2C%20136%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(65%2C%20224%2C%20136%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(65%2C%20224%2C%20136%2C%200.12)%22%2C%22symbolActiveColor%22%3A%22rgba(65%2C%20224%2C%20136%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22OANDA%3ASPX500USD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22OANDA%3ANAS100USD%22%2C%22d%22%3A%22Nasdaq%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANKY%22%2C%22d%22%3A%22Nikkei%20225%22%7D%2C%7B%22s%22%3A%22INDEX%3ADEU30%22%2C%22d%22%3A%22DAX%2030%22%7D%2C%7B%22s%22%3A%22OANDA%3AUK100GBP%22%2C%22d%22%3A%22FTSE%20100%22%7D%5D%7D%2C%7B%22title%22%3A%22Commodities%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1%21%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3ANQ1%21%22%2C%22d%22%3A%22Nasdaq%20100%22%7D%2C%7B%22s%22%3A%22FTSE%3AUKX%22%2C%22d%22%3A%22FTSE%20100%22%7D%2C%7B%22s%22%3A%22INDEX%3AINX%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%20Jones%20Industrial%20Average%22%7D%5D%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22locale%22%3A%22en%22%7D"
        height={500}
      
      />
      <ForexWidget/>
      <div className="flex flex-col justify-center text-center text-white space-y-3 ">
        <div className=" w-10 h-1 mx-auto" style={{borderColor:'#06d7bf',backgroundColor:'#06d7bf'}}></div>
        <h1 className="font-bold text-2xl">FastTrack Invest</h1>
        <p className=' text-lg text-gray-400'>The best cryptocurrency developers works in our company. <br />They have a wealth of experience and understanding of the crypto market behind them.<br /> They brought Allcoinvest to the world level of development</p>
      </div>
      <FundsSection/>
     
      <StepsSlider/>
     
      
      <Investment/>
     <Icons/>
      <PaymentsAndFooterWrapper/>
      <Footer/>
      <Carousel/>
    </div>
  );
};

export default Page;
