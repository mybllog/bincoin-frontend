'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseDropdown = () => {
    setLanguageDropdown(false);
  };

  return (
    <div className="text-white font-san absolute top-0  right-0 w-screen">
      <header className="w-full  shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
         
          <button
            className="block md:hidden nav-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="hamburger space-y-1">
              <span className="line block w-6 h-0.5 bg-white"></span>
              <span className="line block w-6 h-0.5 bg-white"></span>
              <span className="line block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
          <nav
            className={`header__nav ${
              menuOpen ? 'block' : 'hidden'
            } md:block absolute md:relative top-16 md:top-auto left-0 md:left-auto right-0 md:right-auto bg-[#1D2330] md:bg-transparent w-full md:w-auto z-40`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li><Link href="/">Home page</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/investments">Investments</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contacts</Link></li>
              <Link href="/">
            <img
              src="https://account.allcoinvest.com/temp/custom/assets/images/intro/robot.png"
              alt="Logo"
              className="w-20 md:w-32"
            />
          </Link>
              <li><Link href="/statistic">Statistics</Link></li>
              <li><Link href="/signup">Registration</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </nav>
         
          
        </div>
        <div className='flex justify-center text-center'>
          <div className=' border w-full h-0 relative left-0 border-gray-200'></div>
          <p className=' text-green-200'>Crypto investment</p>
          <div className=' border  w-full h-0 relative left-0  border-gray-200'></div>
        </div>

        <div className="bg-[#1D2330] overflow-hidden box-border pb-2 border-b border-[#282E3B] text-right leading-3 text-xs shadow-inner w-full m-0">
          <div className="h-10 p-0 m-0 w-full">
            <iframe
              src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=no"
              width="100%"
              height="36px"
              scrolling="auto"
              marginWidth="0"
              marginHeight="0"
              frameBorder="0"
              border="0"
              className="border-0 m-0 p-0"
            ></iframe>
          </div>
          <div className="text-gray-500 leading-3 font-normal text-[11px] box-border px-1 py-0.5 w-full font-sans">
            <a href="https://coinlib.io" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-500 no-underline text-[11px]">
              Powered by Coinlib
            </a>
          </div>
         
        </div>
        
      </header>
    </div>
  );
};

export default Nav;
