import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { VscSend } from 'react-icons/vsc';
import qr from '../../Images/Qr Code.png';
import google from '../../Images/download-appstore (1).png';
import app from '../../Images/download-appstore.png';
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
    
      {/* parent */}
      <section className="mx-[20px]    lg:mx-32 pt-20  ">
        {/* top */}


        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-[87px]'>
          {/* left */}
          <div className='md:w-1/4 w-full'>
            <div className='flex flex-col gap-6'>
              <Link className="font-bold text-2xl mb-4" href={"/"}>Exclusive</Link>
              <p className="font-medium text-lg">Subscribe</p>
              <span className="block  text-sm">Get 10% off your first order</span>
            </div>
            <form className="relative mt-4 w-[220px]">
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
          {/* center */}
          <div className='w-1/2 hidden lg:flex items-start gap-4 justify-between'>
            <div className='one'>
              <h1 className="text-lg font-medium mb-4">Support</h1>
              <div className='flex flex-col gap-4 items-start'>
                <p className="text-sm ">111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
                <p className="text-sm ">exclusive@gmail.com</p>
                <p className="text-sm">+88015-88888-9999</p>
              </div>
            </div>
            <div className="two">
              <h1 className="text-lg font-medium mb-4">Account</h1>
              <ul className="flex flex-col text-sm gap-4">
                <li><Link href="/">My Account</Link></li>
                <li><Link href="/">Login / Register</Link></li>
                <li><Link href="/">Cart</Link></li>
                <li><Link href="/">Wishlist</Link></li>
                <li><Link href="/">Shop</Link></li>
              </ul>
            </div>
            <div className="three">
              <h1 className="text-lg font-medium mb-4">Quick Link</h1>
              <ul className="text-sm flex flex-col gap-4">
                <li><Link href="/">Privacy Policy</Link></li>
                <li><Link href="/">Terms Of Use</Link></li>
                <li><Link href="/">FAQ</Link></li>
                <li><Link href="/">Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* right */}
          <div className='md:w-1/4 w-full'>
            <h1 className="text-lg font-medium mb-4">Download App</h1>
            <div className='flex flex-col gap-2 items-start'>
              <p className="text-[12px]  text-text ">Save $3 with App New User Only</p>
              <div className="flex items-center gap-3">
                <Image src={qr} width={80} height={80} alt="QR Code" />
                <div className="flex flex-col space-y-2">
                  <Image src={google} width={110} height={40} alt="Google Play" />
                  <Image src={app} width={110} height={40} alt="App Store" />
                </div>
              </div>
              <ul className='flex items-center gap-6 mt-6'>
                <li>
                   <Link href={"/"}>
                  <GrFacebookOption size={24} />
                   </Link>
                </li>
                <li>
                <Link href={"/"}>
                  <RiTwitterLine size={24} />
                </Link>
                </li>
                <li>
                <Link href={"/"}>
                  <CiInstagram size={24} />
                </Link>
                </li>
                <li>
                <Link href={"/"}>
                  <RiLinkedinLine size={24} />
                </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
        {/* bottom */}
        
      </section>

      <div className='mt-[60px]'>
        <p className=' w-full pb-6 border-t border-[#353535] pt-4 text-[#353535]  text-center '>©  Copyright Rimel 2022. All right reserved</p> 

        </div>

    </footer>
  );
};

export default Footer;
