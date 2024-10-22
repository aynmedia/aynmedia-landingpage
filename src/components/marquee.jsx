/** @format */
'use client';
import Image from 'next/image';
import React from 'react';
import { Marquee } from '@devnomic/marquee';
import '@devnomic/marquee/dist/index.css';
import Reavel from './reveal';

const marqueeUpper = [
  './images/slides/1.jpeg',
  './images/slides/2.jpeg',
  './images/slides/3.jpeg',
  './images/slides/4.jpeg',
  './images/slides/5.jpeg',
  './images/slides/6.jpeg',
  './images/slides/7.jpeg',
  './images/slides/8.jpeg',
  './images/slides/9.jpeg',
];
const marqueeLower = [
  './images/slides/10.jpeg',
  './images/slides/11.jpeg',
  './images/slides/12.jpeg',
  './images/slides/13.jpeg',
  './images/slides/14.jpeg',
  './images/slides/15.jpeg',
  './images/slides/16.jpeg',
  './images/slides/17.jpeg',
  './images/slides/18.jpeg',
];
const MarqueeGallery = () => {
  return (
    <div className='container mx-auto my-12 md:my-24'>
      <h1 className='flex justify-center text-xl md:text-5xl font-bold text-primary pb-12 mx-auto'>
        Our creatives Works
      </h1>
      <div className='flex my-4'>
        <Reavel>
          <Marquee fade={true} speed={100}>
            {marqueeUpper.map((slide, index) => (
              <div key={index} className='w-1/2 border-r'>
                <Image
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className='flex flex-shrink-0'
                  width={250}
                  height={150}
                />
              </div>
            ))}
          </Marquee>
        </Reavel>
      </div>
      <div className='flex my-4'>
        <Reavel>
          <Marquee fade={true} speed={100} reverse={true}>
            {marqueeLower.map((slide, index) => (
              <div key={index} className='w-1/2 border-r'>
                <Image
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className='flex flex-shrink-0'
                  width={250}
                  height={150}
                />
              </div>
            ))}
          </Marquee>
        </Reavel>
      </div>
    </div>
  );
};

export default MarqueeGallery;
