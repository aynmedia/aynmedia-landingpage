/** @format */

import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Reavel from './reveal';

const content = [
  {
    title: 'Consulting',
    description:
      'Looking to boost your business performance? We’ve got you covered! Our expert team will create tailored strategies and personalized plans designed to drive results and fuel your growth.',
  },
  {
    title: '360 degree digital marketing',
    description: `Whatever your business needs, we've got you covered. Count on us for tailored strategies, impactful campaigns, and communication solutions designed to deliver the results you aim for.`,
  },
  {
    title: 'SEO',
    description:
      'Ensure your brand stands out online with our tailored SEO strategies. We’ll boost your organic visibility, driving more qualified leads to your business and keeping you ahead of the competition.',
  },
  {
    title: 'Social Media Marketing',
    description:
      'With us, nothing stands in your way of going viral. We craft compelling content that not only tells your brand’s story but also forges deep connections with your ideal customers.',
  },
  {
    title: 'Influencer Marketing',
    description: `Expand your brand's reach by tapping into trusted voices your audience already follows. We connect you with influencers who have the right followers, reputation, and visibility to authentically represent your brand, ensuring maximum impact and credibility.
`,
  },
  {
    title: 'Pay Per Click',
    description:
      'We craft tailored PPC campaigns designed to convert every click into valuable leads. Our strategies are customized to fit your business goals, delivering optimized solutions that help you attract and retain loyal customers.',
  },
];

const CallToAction = () => {
  return (
    <div className='bg-primary py-2'>
      <div className='max-w-7xl mx-6 md:mx-auto my-6 md:my-24 '>
        <Reavel>
          <p className='text-lg md:text-5xl font-bold py-4 text-white'>
            Discover Tailored Digital Marketing Service Packages Built to Boost
            Your Online Success!
          </p>
        </Reavel>
        <div className='flex flex-col'>
          {content.map((content, index) => (
            <Reavel key={index}>
              <div
                key={index}
                className='flex text-white gap-4 hover:bg-[#160003]/50 transition-all duration-300 cursor-pointer'>
                <div className='flex flex-row justify-evenly gap-2 p-6 w-full'>
                  <h2 className='text-lg md:text-4xl font-bold md:w-1/2 flex w-full items-center text-yellow-500'>
                    {content.title}
                  </h2>
                  <p className='text-md w-full md:w-1/2'>
                    {content.description}
                  </p>
                  <div className='hidden md:flex items-center justify-center pl-9'>
                    <FaArrowRightLong className='text-white ' size={24} />
                  </div>
                </div>
              </div>
            </Reavel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
