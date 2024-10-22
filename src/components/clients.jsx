/** @format */

import React from 'react';
import Reavel from './reveal';
import { Marquee } from '@devnomic/marquee';
import Image from 'next/image';

const Clients = () => {
  const logos = [
    './images/client1.png',
    './images/client2.png',
    './images/client3.png',
    './images/client4.jpeg',
    './images/client5.jpeg',
    './images/client6.png',
    './images/client7.png',
  ];
  return (
    <div className='container mx-auto my-12 md:my-24'>
      <h1 className='flex justify-center text-xl md:text-5xl font-bold text-primary pb-12 mx-auto'>
        Some of our valuable clients
      </h1>
      <div className='flex my-4'>
        <Reavel>
          <Marquee fade={true} speed={100}>
            {logos.map((slide, index) => (
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

export default Clients;
