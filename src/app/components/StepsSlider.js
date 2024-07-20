"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const StepsSlider = () => {
  return (
    <section className="text-white absolute right-0 justify-start text-center w-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="section-intro mb-8 flex flex-col items-center">
          <div className='border w-10' style={{borderColor:'#05afa3'}}></div>
          <h3 className="title text-3xl font-bold mt-4">3 STEPS TO START</h3>
        </div>
        <div className="steps__slider swiper-container swiper-no-swiping js-swiper-steps">
          <div className="steps__hearts mb-6 flex justify-center space-x-4 lg:space-x-8">
            <img
              src="https://allcoinvest.com/temp/custom/assets/images/steps/1.png"
              alt="Step 1"
              className="opacity-100 visible transform translate-y-60 w-20 lg:w-32"
            />
             <div
           
            className="swiper-wrapper grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <div className="flex justify-center">
              <div className=" p-5 text-gray-400 bg-[#22464b] rounded-xl py-14 space-y-4">
                <p className="steps-item__count text-xl lg:text-2xl">#1</p>
                <h4 className="steps-item__title text-2xl lg:text-3xl">REGISTRATION</h4>
                <div className="steps-item__description">
                  <p>
                    Click the Register button. Fill in your details to create a FREE Allcoinvest account in seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" p-5 text-gray-400 bg-[#22464b] rounded-xl space-y-4">
                <p className="steps-item__count text-xl lg:text-2xl">#2</p>
                <h4 className="steps-item__title text-2xl lg:text-3xl">CHOOSE INVESTMENT PLAN</h4>
                <div className="steps-item__description">
                  <p>
                  We offer a variety of investment plans to suit your financial goals. After reading, make a deposit
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" p-5 text-gray-400 bg-[#22464b] rounded-xl space-y-4 py-14">
                <p className="steps-item__count text-xl lg:text-2xl">#3</p>
                <h4 className="steps-item__title text-2xl lg:text-3xl">START EARNING</h4>
                <div className="steps-item__description">
                  <p>
                  After making a deposit, watch your capital grow by accumulating daily profit in real time
                  </p>
                </div>
              </div>
            </div>
          </div>
            <img
              src="https://allcoinvest.com/temp/custom/assets/images/steps/2.png"
              alt="Step 2"
              className="opacity-100 visible transform -translate-y-60 w-20 lg:w-32"
            />
          </div>
         
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  );
};

export default StepsSlider;
