/** @format */

import React from 'react';
import marketing from '../../public/images/marketing.jpg';
import Reavel from './reveal';
import Image from 'next/image';

const Audit = () => {
  return (
    <div className='max-w-7xl mx-6 md:mx-auto my-6 md:my-24'>
      <div className='grid grid-col-1 md:col-span-3 gap-6'>
        <div className='md:cols-span-2 gap-6'>
          <Reavel>
            <p className='text-md md:text-5xl font-bold pb-4 text-primary'>
              Speak with our growth team for a complimentary brand opportunity
              analysis.
            </p>
          </Reavel>
          <Reavel>
            <p className='text-md md:text-lg py-2'>
              At Ayn Media, we understand the importance of a detailed analysis
              to optimize your digital marketing strategies. To ensure an
              accurate and thorough audit, we kindly request 4-5 working days to
              complete the process. During this period, our team will carefully
              evaluate your key metrics, analyze performance trends, and provide
              actionable insights to enhance your marketing outcomes.
            </p>
          </Reavel>
          <Reavel>
            <span className='text-md md:text-lg py-2'>
              To ensure a comprehensive audit, please provide the following:
              <ul className='list-disc pl-4 my-2'>
                <li>
                  <b>Timeframe:</b> Allow us 4-5 working days to complete the
                  audit.
                </li>
                <li>
                  <b>Access:</b> Grant Ayn Media access to essential digital
                  marketing tools and platforms, including:
                  <ul className='list-disc pl-4 my-2'>
                    <li>Google Analytics</li>
                    <li>Google Search Console</li>
                    <li>Google Ads or other advertising platforms in use</li>
                  </ul>
                </li>
              </ul>
              Ayn Media values your privacy and will keep all information
              obtained during the audit confidential. We will not share any
              details with third parties without your explicit consent.
            </span>
          </Reavel>
        </div>
        <div className='md:col-span-1'>
          <Image
            src={marketing}
            alt='audit'
            width={1000}
            height={1500}
            className='object-cover w-full h-full rounded-xl shadow-xl '
          />
        </div>
      </div>
    </div>
  );
};

export default Audit;
