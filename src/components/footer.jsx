/** @format */

import Link from 'next/link';
import React from 'react';
import Reavel from './reveal';
const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className='border-t p-4 bg-primary'>
      {/* <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <Reavel>
          <span className='text-sm text-white sm:text-center dark:text-gray-400'>
            © {year}{' '}
            <Link href='https://ayntech.in/' className='hover:underline'>
              Ayn Technologies
            </Link>
            . All Rights Reserved.
          </span>
        </Reavel>
      </div> */}
    </footer>
  );
};

export default Footer;
