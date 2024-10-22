/** @format */

import React from 'react';
import award1 from '../../public/images/award1.jpeg';
import award2 from '../../public/images/award2.jpeg';
import award3 from '../../public/images/award3.jpeg';
import Reavel from './reveal';
import { Marquee } from '@devnomic/marquee';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const Awards = () => {
  return (
    <div className='w-full mb-12'>
      {/* <Timeline data={products} /> */}
      <div className='max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10'>
        <h2 className='text-xl md:text-5xl font-bold text-primary'>
          Our Awards and Recognitions
        </h2>
        <p className='max-w-2xl text-base md:text-lg mt-8'>
          Ayn Technologies, our commitment to excellence and innovation has been
          recognized through various awards and accolades in the technology
          sector. We take pride in our achievements, which reflect our
          dedication to delivering high-quality solutions and services.
        </p>
      </div>
      <ul className='flex flex-row md:flex-col gap-6 py-6 px-6 md:px-12 max-w-7xl mx-auto'>
        {awards.map((item, index) => (
          <div key={index} className=''>
            <Image
              className='rounded-md'
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
export const awards = [
  {
    title: 'Promising Startup',
    year: '2024',
    image: award3,
  },
  {
    title: 'Best in customer service',
    year: '2024',
    image: award2,
  },
  {
    title: 'Best in customer service',
    year: '2021',
    image: award1,
  },
];
