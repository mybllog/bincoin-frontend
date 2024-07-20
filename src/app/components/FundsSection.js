"use client";

import React from 'react';

const FundsSection = () => {
  return (
    <section className="funds py-12 text-white ">
      <div className="container mx-auto px-4">
       
        <div className="">
          <div className=" flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 text-center">
            <div className=" w-8/12 transform translate-y-8">
              <div className=" p-4  rounded-lg shadow-lg " style={{backgroundColor:'#213a3e'}}>
                <div className=" mb-4 transform -translate-y-20 relative left-7">
                  <img src="https://allcoinvest.com/temp/custom/assets/images/funds/1.png" alt="Unique Trading Bot" className="w-10/12" />
                </div>
                <h4 className=" text-xl font-bold mb-2">UNIQUE TRADING BOT</h4>
                <div className="">
                  <p>
                    Allcoinvest team of professionals has created a unique trading robot that makes profit at any stage of the market: rise or fall.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-8/12 transform translate-y-8">
              <div className=" p-4  rounded-lg shadow-lg " style={{backgroundColor:'#213a3e'}}>
                <div className=" mb-4 transform -translate-y-20 relative left-7">
                  <img src="https://allcoinvest.com/temp/custom/assets/images/funds/2.png" alt="Unique Trading Bot" className="w-9/12" />
                </div>
                <h4 className=" text-xl font-bold mb-2">UNIQUE TRADING BOT</h4>
                <div className="">
                  <p>
                    Allcoinvest team of professionals has created a unique trading robot that makes profit at any stage of the market: rise or fall.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-8/12 transform translate-y-8">
              <div className=" p-4  rounded-lg shadow-lg " style={{backgroundColor:'#213a3e'}}>
                <div className=" mb-4 transform -translate-y-20 justify-center relative left-7">
                  <img src="https://allcoinvest.com/temp/custom/assets/images/funds/3.png" alt="Unique Trading Bot" className="w-9/12" />
                </div>
                <h4 className=" text-xl font-bold mb-2">UNIQUE TRADING BOT</h4>
                <div className="">
                  <p>
                    Allcoinvest team of professionals has created a unique trading robot that makes profit at any stage of the market: rise or fall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="funds__bottom text-center mt-20">
          <a
            className="btn btn--line-primary text-white border border-green-600 text-xl font-bold px-6 py-3 rounded-md "
            href="https://account.allcoinvest.com/register"
          >
            INVEST WITH US AND GET STABLE INCOME
          </a>
        </div>
      </div>
    </section>
  );
};

export default FundsSection;
