/** @format */

import React from 'react';
import { Separator } from './ui/separator';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import hero from '../../public/images/head.jpg';
import EnquiryForm from './form';
import Reavel from './reveal';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='relative'>
      <Image
        src={hero}
        alt='hero'
        width='100%'
        height='100%'
        className='absolute top-0 left-0 object-cover w-full h-full'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-primary opacity-80'></div>
      <div className='relative grid grid-cols-1 md:grid-cols-3 max-w-7xl md:mx-auto mx-12 gap-6 py-24 text-white min-h-screen'>
        <div className='col-span-2 w-full flex flex-col justify-center h-full item-center  gap-6 text-left overflow-hidden'>
          <Reavel>
            <h1 className='text-md md:text-xl text-yellow-400 font-bold'>
              Innovating marketing to drive business success.
            </h1>
          </Reavel>
          <Reavel>
            <p className='font-syne text-2xl md:text-6xl font-bold shadow-sm'>
              A performance-driven digital agency focused on helping brands grow
              and succeed online.
            </p>
          </Reavel>
          <Reavel>
            <Button
              size='lg'
              className='bg-yellow-500 hover:bg-yellow-400 md:text-xl text-sm'>
              Start your free performance review now!
            </Button>
            <p className='text-italic text-md my-6'>
              With No Obligation Free Opportunity Analysis
            </p>
          </Reavel>
          <Reavel>
            <div className='text-white flex '>
              <p className='text-lg '>140+ Worldwide Clients |</p>
              <Separator orientation='vertical' className='text-white' />
              <div className='flex gap-6 text-md items-center px-6'>
                <Link href='mailto:info@aynmedia.in'>
                  <FaSquareFacebook size={24} />
                </Link>
                <Link href='mailto:info@aynmedia.in'>
                  <FaInstagramSquare size={24} />
                </Link>
                <Link href='mailto:info@aynmedia.in'>
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </Reavel>
        </div>
        <div className='md:col-span-1'>
          <div
            className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100/40 p-6 shadow-xl
'>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
