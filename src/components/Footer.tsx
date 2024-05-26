'use client';

import Image from 'next/image';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
  return (
    <div className='flex justify-between items-center py-2'>
      <ScrollToTop smooth color='red' />
      <div className='relative w-[150px] h-[50px]'>
        <Image src={'/logo.svg'} alt='' fill priority />
      </div>

      <div>
        <h2 className='font-bold'>Jsx-Eddy &copy;</h2>
      </div>
    </div>
  );
};

export default Footer;
