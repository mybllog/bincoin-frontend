'use client'
import React from 'react';
import Image from 'next/image';
import robot from '../assets/robot.png';
import { Button } from '@mui/material';
import ProfitCalculator from '../components/ProfitCalculate';
import {Home,Lock,HeartBroken,AccountBoxSharp} from '@mui/icons-material';
import Link from 'next/link';

const FundSec = () => {
  return (
    <div className='relative right-0 left-0'>
      <div className=" py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="flex">
            <Image
              role="presentation"
              alt="presentation"
              src={robot}
              height={100}
              className="w-48 md:w-96"
              style={{ opacity: 1, visibility: "inherit", transform: "translate(0px, 0px)" }}
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-white font-bold text-4xl md:text-7xl">SAFE INVESTMENT WITH US</h1>
            <p className="text-white font-bold text-2xl md:text-4xl my-5">GET LIFETIME INCOME ON INVESTMENT</p>
            <Button className="bg-green-300 to-lime-700 hover:bg-green-400 w-48 md:w-60 h-10 text-lg md:text-xl font-bold text-black"><Link href="/signup">LOGIN/REGISTER</Link></Button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-white my-10">
              <div className="p-2">
              <Lock />
                <p>Professional Crypto Industry Development Team</p>
              </div>
              
              <div className="p-2">
              <AccountBoxSharp/>
                <p>Unique robot for trading</p>
              </div>
              <div className="p-2">
              <AccountBoxSharp/>
                <p>Manage operations without user intervention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center items-center space-y-5  ">
        <div className="border  w-20 " style={{borderColor:'#06D7BF',backgroundColor:'#06D7BF'}}></div>
        <div>
        <p className="text-white text-xl font-bold">INVESTMENT PROPOSALS</p>
        <p className="text-gray-400 text-lg ">Allcoinvest employees ensure that every investor in our company can earn money</p>
        </div>
      </div>

      <div className="px-2 py-3 rounded-xl my-8 relative right-0 w-full" style={{ backgroundColor: '#122224' }}>
        <div className="flex flex-col md:flex-row">
          <div className="hover:bg-green-400  to-lime-500 hover:h-28 hover:bg-gradient-radial hover:rounded-2xl p-4 m-2">
            <p>2% BASIC PLAN DAILY DEPOSIT: $170 - $20000 6 DAYS</p>
          </div>
          <div className="hover:bg-green-400 to-lime-500 hover:h-28 hover:bg-gradient-radial hover:rounded-2xl p-4 m-2">
            <p>2% BASIC PLAN DAILY DEPOSIT: $170 - $20000 6 DAYS</p>
          </div>
          <div className="hover:bg-green-400 to-lime-500 hover:h-28 hover:bg-gradient-radial hover:rounded-2xl p-4 m-2">
            <p>2% BASIC PLAN DAILY DEPOSIT: $170 - $20000 6 DAYS</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="border w-full md:w-80 py-3 rounded-xl m-6 shadow-xl" style={{ backgroundColor: '#264C54' }}>
              <h1 className=" text-center m-8 font-bold text-green-300 text-xl">GENERAL COMMISSIONS</h1>
              <p className="text-white text-center text-base px-4">These commissions are charged by Allcoinvest for the platform to work. They are not related to the profit received by our investors</p>
            </div>
            <ProfitCalculator />
          </div>
          <div className=' space-y-5'>
            <div className="flex text-white">
              <div className=""></div>
              <div className="p-4 space-y-2 ">
                <p className=' font-bold text-xl'>COMPANY COMMISSION</p>
                <p className=' text-lg text-gray-400'><span className=' text-green-300 text-lg'>0.5% </span>from the received profit by the robot. This commission shows the earnings of the entire Allcoinvest structure, namely, each employee.</p>
              </div>
            </div>
            <div className="flex  text-white">
              <div className=""></div>
              <div className="p-4 space-y-2 ">
                <p className='font-bold text-xl'>COMPANY COMMISSION</p>
                <p className=' text-lg text-gray-400'><span className=' text-green-300 text-lg'>0.5% </span>from the received profit by the robot. This commission shows the earnings of the entire Allcoinvest structure, namely, each employee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundSec;
