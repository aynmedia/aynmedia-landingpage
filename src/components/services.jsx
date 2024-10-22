/** @format */
'use client';
import Image from 'next/image';
import React from 'react';
import social from '../../public/images/social.jpg';
import Reavel from './reveal';

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description:
      'As a top SEO agency, we focus on boosting your online visibility. Our all-inclusive SEO services in India make sure your target audience easily discovers your business through relevant keywords.',
    icon: '01',
  },
  {
    title: 'Performance Marketing',
    description:
      'As a leading performance agency in India, we provide tailored solutions to help you reach, engage, and convert your target audience effectively. Our mission is to generate high-quality leads and boost your sales funnel.',
    icon: '02',
  },
  {
    title: 'Social Media Optimisation (SMO)',
    description:
      'As a leading social media services company, we specialize in boosting your business presence across social platforms. We handle everything from managing and growing your followers to posting daily updates and crafting compelling content that resonates with your audience—leaving nothing to chance!',
    icon: '03',
  },
  {
    title: 'Website Designing',
    description:
      'We don’t just build websites—we craft sites that drive sales! Get a stunning website designed to attract more customers, generate leads, and boost your business ROI.',
    icon: '04',
  },
  {
    title: 'Web & App Development',
    description:
      'We craft designs that drive results!  We deliver designs that make a difference! Stand out with compelling visuals that draw in customers, increase engagement, and amplify your brands reach.',
    icon: '05',
  },
];

const Services = () => {
  return (
    <section className='relative inset-0 overflow-hidden pt-12 mt-12 bg-gray-50'>
      <Image
        src={social}
        alt='services'
        width={1000}
        height={500}
        className='absolute top-0 left-0 object-cover w-full h-full'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-primary/70'></div>
      <div className='absolute top-0 left-0 w-full h-full'></div>
      <div className='px-4 max-w-6xl mx-auto'>
        <div className='relative grid md:grid-cols-2 lg:grid-cols-5 '>
          {services.map((service, index) => (
            <div
              key={index}
              className='relative p-6 duration-300 md:h-96 h-32 overflow-hidden group border-x cursor-pointer border-gray-200/20 text-center hover:bg-slate-800/50 hover:border-white/10 hover:rounded-t-lg'>
              {/* Title and Icon */}
              <div className='absolute p-2 bottom-0 left-0 w-full flex items-center transition-transform duration-500 transform group-hover:-top-44 group-hover:translate-y-0'>
                <div className='text-xl text-white font-bold mb-2'>
                  <Reavel> {service.icon}</Reavel>
                </div>
                <Reavel>
                  <h3 className='text-white text-md font-bold ml-4'>
                    {service.title}
                  </h3>{' '}
                </Reavel>
              </div>

              {/* Description */}
              <div className='absolute bottom-0 left-0 w-full p-4  text-blue-800 text-left transition-all duration-500 opacity-0 group-hover:opacity-100  text-sm group-hover:translate-y-0'>
                <p className='text-white'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
