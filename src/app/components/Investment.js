"use client"
import React from 'react';

const Investment = () => {
  return (
    <div className=' text-white relative top-96 my-80'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div className=''>
            <div className="">
              <h3 className=" text-xl md:text-2xl lg:text-3xl font-bold">REFERRAL PROGRAM</h3>
              <div className=" mt-4 md:mt-6">
                <p className=' text-gray-400'>Anyone can take part in the affiliate program. It allows you to receive generous rewards by inviting new members</p>
              </div>
                </div>

                <div className=''>
                <ul className=" mt-8 ">
              <li className="mb-4">
                <p className=" text-lg md:text-xl lg:text-2xl font-semibold">4 LEVELS OF REFERRAL PROGRAM</p>
                <div className=" mt-2">
                  <p className=' text-gray-400'>Get extra profit when people in your structure invite new investors to the company</p>
                </div>
              </li>
              <li>
                <p className=" text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">7<sup>%</sup> -  3<sup>%</sup><br />2<sup>%</sup> -  1<sup>%</sup></p>
              </li>
            </ul>
                </div>
            </div>
            <div>
            <img src='https://allcoinvest.com/temp/custom/assets/images/investment/notebook.png' alt='investment'/>
            </div>
           
        </div>
    </div>
    
  );
};

export default Investment;
