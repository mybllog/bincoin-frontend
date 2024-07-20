'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer text-white py-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="footer__row flex flex-wrap justify-between">
          <div className="footer__col w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2 text-gray-400">Menu</h4>
            <ul className="footer__nav space-y-2">
              <li><Link href="/about"><p className="hover:underline hover:text-green-200">About us</p></Link></li>
              <li><Link href="/investments"><p className="hover:underline hover:text-green-200">Investments</p></Link></li>
              <li><Link href="/faq"><p className="hover:underline hover:text-green-200">FAQ</p></Link></li>
              <li><Link href="/contact"><p className="hover:underline hover:text-green-200">Contacts</p></Link></li>
            </ul>
          </div>
          <div className="footer__col w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2 text-gray-400">Actions</h4>
            <ul className="footer__nav space-y-2">
              <li><Link href="https://account.allcoinvest.com/register"><p className="text-gradient-strong hover:underline text-green-400 to-lime-300">Make a Deposit</p></Link></li>
              <li><Link href="/statistic"><p className="text-gradient-strong hover:underline  text-green-400 to-lime-300">Statistics</p></Link></li>
              <li><Link href="https://account.allcoinvest.com/login"><p className="text-gradient-strong hover:underline text-green-400 to-lime-300">Login</p></Link></li>
            </ul>
          </div>
          <div className="footer__col w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2 text-gray-400">Email</h4>
            <ul className="footer__nav space-y-2">
              <li className='hover:text-green-200'>support@allcoinvest.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom mt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© Copyright, <span>2018</span> Allcoinvest All Rights Reserved</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><Link href="/terms"><p className="hover:underline">Privacy Policy</p></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
