import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { VscSend } from 'react-icons/vsc';
import qr from '../../Images/Qr Code.png';
import google from '../../Images/download-appstore (1).png';
import app from '../../Images/download-appstore.png';
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterLine,RiLinkedinLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <section className="mx-[20px] flex items-start lg:flex-nowrap flex-wrap justify-between gap-10  lg:mx-32 pt-20 pb-24 ">
        {/* Exclusive Section */}
        <div className='md:max-w-[217px] max-w-full w-full'>
          <h1 className="font-bold text-2xl mb-4">Exclusive</h1>
          <p className="font-medium text-lg mb-2">Subscribe</p>
          <span className="block mb-4 text-sm">Get 10% off your first order</span>
          <form className="relative w-[220px]">
            <input
              type="email"
              className="border relative max-w-[217px] border-white w-full bg-transparent py-3 pl-4 pr-10 rounded outline-none"
              placeholder="Enter your email"
            />
            <button type="submit" className="absolute top-1/2 right-3 -translate-y-1/2">
              <VscSend size={24} />
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div className='md:max-w-[217px] max-w-full w-full'>
          <h1 className="text-lg font-medium mb-4">Support</h1>
          <p className="text-sm mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className='md:max-w-[217px] max-w-full  w-full'>
          <h1 className="text-lg font-medium mb-4">Account</h1>
          <ul className="text-sm space-y-2">
            <li><Link href="/">My Account</Link></li>
            <li><Link href="/">Login / Register</Link></li>
            <li><Link href="/">Cart</Link></li>
            <li><Link href="/">Wishlist</Link></li>
            <li><Link href="/">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        
        <div className='md:max-w-[217px] max-w-full  w-full'>
          <h1 className="text-lg font-medium mb-4">Quick Link</h1>
          <ul className="text-sm space-y-2">
            <li><Link href="/">Privacy Policy</Link></li>
            <li><Link href="/">Terms Of Use</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </div>

        {/* Download App */}
        <div className='md:max-w-[217px] w-full max-w-full'>
          <h1 className="text-lg font-medium mb-4">Download App</h1>
          <p className="text-[12px] w-max text-text mb-2">Save $3 with App New User Only</p>
          <div className="flex items-center gap-3">
            <Image src={qr} width={80} height={80} alt="QR Code" />
            <div className="flex flex-col space-y-2">
              <Image src={google} width={110} height={40} alt="Google Play" />
              <Image src={app} width={110} height={40} alt="App Store" />
            </div>
          </div>
          {/* Social Media */}
          <div className='flex items-center gap-6 mt-6'>
          <Link href={"/"}>
            <GrFacebookOption size={24} />
            </Link>
            <Link href={"/"}>
            <RiTwitterLine size={24} />
            </Link>
            <Link href={"/"}>
            <CiInstagram size={24}/>
            </Link>
            <Link href={"/"}>
            <RiLinkedinLine size={24} />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
