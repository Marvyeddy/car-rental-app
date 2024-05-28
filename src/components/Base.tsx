import Image from 'next/image';
import React from 'react';

const Base = () => {
  return (
    <div
      className='my-20 flex px-2 flex-col md:flex-row text-center md:text-left items-center justify-center lg:ml-14'
      id='contact'
    >
      <div className='flex-1'>
        <h1 className='font-bold text-5xl mb-2 leading-tight'>
          Download our <span className='text-red-400'>app</span> to get the most
          out of it
        </h1>
        <p className='text-stone-500 mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ullam ratione cum aliquid rerum laudantium est asperiores molestias
          dolorum voluptatum, quaerat reprehenderit beatae!
        </p>
        <div className='flex gap-4 w-fit mx-auto md:mx-0'>
          <Image src={'/appstore-btn.svg'} alt='' width={150} height={50} />
          <Image src={'/playstore-btn.svg'} alt='' width={150} height={50} />
        </div>
      </div>

      <div className='relative h-[300px] flex-1 hidden lg:block'>
        <Image src={'/phone.svg'} alt='' fill className='object-contain' />
      </div>
    </div>
  );
};

export default Base;
