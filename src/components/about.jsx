/** @format */

import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import marketing from '../../public/images/marketing.jpg';
import Reavel from './reveal';
import EnquiryForm from './form';
const features = [
  {
    name: 'Powerful Strategies, Reliable Results',
    description:
      'We are a full-service digital marketing agency dedicated to delivering exceptional and speedy ROI for our clients. As industry thought leaders, we grasp the unique challenges businesses face and offer tailored solutions that align perfectly with their objectives.',
    icon: FaCheck,
  },
  {
    name: 'Three-Tier Support System ',
    description:
      'Ensuring continuity of knowledge even when team members change.',
    icon: FaCheck,
  },
  {
    name: 'Extensive Expertise',
    description: 'Proven success across more than 50 industries.',
    icon: FaCheck,
  },
  {
    name: 'Google Premier Partner ',
    description:
      'Direct access to a dedicated team of Google experts for troubleshooting, campaign optimization, and maximizing Google Ads performance.',
    icon: FaCheck,
  },
];

const About = () => {
  return (
    <div className='overflow-hidden max-w-7xl md:mx-auto my-12 md:my-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <Reavel>
                <h2 className='text-base font-semibold leading-7 text-yellow-500'>
                  About Us
                </h2>
              </Reavel>
              <Reavel>
                <p className='mt-2 text-3xl font-bold tracking-tight text-primary sm:text-5xl capitalize'>
                  Bold & Caring Digital Marketing & Growth Agency
                </p>
              </Reavel>

              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative '>
                    <div className='inline font-semibold text-gray-900'>
                      {/* <feature.icon
                        aria-hidden='true'
                        className='absolute left-1 top-1 h-5 w-5 text-purple-900'
                      /> */}
                      <Reavel>
                        <p className='text-primary'>{feature.name}</p>
                      </Reavel>
                    </div>{' '}
                    <dd className='inline'>
                      <Reavel>{feature.description}</Reavel>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Reavel>
            <div className='bg-primary border border-white rounded-xl p-12 text-white shadow-lg max-w-7xl mx-auto'>
              <EnquiryForm />
            </div>
            {/* <Image
              alt='Digital Marketing'
              src={marketing}
              width={1432}
              height={1442}
              className=' w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            /> */}
          </Reavel>
        </div>
      </div>
    </div>
  );
};

export default About;
