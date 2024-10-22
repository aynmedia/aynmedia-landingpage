/** @format */

import './globals.css';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import MetaPixel from '@/lib/metaPixel';

export const metadata = {
  title: 'Ayn Media | Digital Marketing Agency',
  description: 'Digital Marketing Agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-spaceGrotesk'>
        <MetaPixel />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
