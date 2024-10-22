/** @format */

'use client';
import React from 'react';
import Reavel from './reveal';

// Sample logos

const LogoScroller = () => {
  return (
    <div className='relative py-12 h-64 overflow-hidden'>
      <div className='absolute bottom-0 left-0 w-full h-full bg-white/90'></div>
      <div className='absolute top-0 left-0 w-full h-full '>
        <h1 className='flex justify-center items-center text-2xl md:text-4xl font-black h-full text-center font-spaceGrotesk max-w-2xl mx-auto text-primary'>
          <Reavel>
            Your Comprehensive Digital Partner, Delivering Complete End-to-End
            Solutions.{' '}
          </Reavel>
        </h1>{' '}
      </div>
    </div>
  );
};

export default LogoScroller;
