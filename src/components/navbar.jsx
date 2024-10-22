/** @format */
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logo from '../../public/images/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-white text-slate-900 shadowlg flex items-center justify-between p-2'>
      <div className='max-w-7xl mx-auto flex justify-between items-center w-full'>
        <Link href='/'>
          <Image src={logo} alt='logo' width={100} height={100} />
        </Link>
        {/* <p className='font-bold'>
          Innovating marketing to drive business success.
        </p> */}
        <div className='text-sm md:text-lg hover:underline font-bold'>
          <Link href='mailto:info@ayntech.in'>info@ayntech.in</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
