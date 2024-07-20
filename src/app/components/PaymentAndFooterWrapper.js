"use client"
import { Button } from '@mui/material';
import React from 'react';

export default function PaymentsAndFooterWrapper() {
  return (
    <div className="payments-and-footer-wrapper__inner pt-20 md:pt-80 lg:pt-170 relative text-white">
      <section className="payments mb-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="payments__col w-full">
              <img
                src="https://allcoinvest.com/temp/custom/assets/images/payments/payment.png"
                alt="Payment Systems"
                className="opacity-100 visible transform-none mx-auto"
              />
            </div>
            <div className="w-full">
              <div className="space-y-3 text-center">
                <div className="flex justify-center items-center">
                  <div className="border w-4" style={{ borderColor: '#05afa3' }}></div>
                </div>
                <h3 className="title opacity-100 visible transform-none font-bold text-2xl">PAYMENT SYSTEMS</h3>
                <div className="section-intro__description opacity-100 visible transform-none">
                  <p className="text-gray-400 text-lg">Allcoinvest supports a big number of payment systems</p>
                </div>
                <div className="typography opacity-100 visible transform-none text-white">
                  <p className="text-xl mt-12">Our company does not charge commissions for opening a deposit, as well as withdrawing funds from the platform</p>
                </div>
                <div className="payments__buttons opacity-100 visible transform-none text-center">
                  <a href="https://account.allcoinvest.com/register">
                    <Button className="text-xl text-white border border-green-400 hover:bg-lime-400 w-60 h-10">INVEST</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
