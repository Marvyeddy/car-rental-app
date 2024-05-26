import Image from 'next/image';
import { BsCarFront, BsCashCoin, BsCoin } from 'react-icons/bs';

const Why = () => {
  return (
    <div className='my-10 lg:my-20'>
      <div className='relative h-[200px]'>
        <Image
          src={'/car.png'}
          alt=''
          fill
          priority
          className='object-contain'
        />
      </div>

      <div className='flex gap-7 mt-7 md:flex-row flex-col items-center justify-center'>
        <div className='flex-1 text-center md:text-left'>
          <h2 className='font-bold text-xl mb-2'>Why choose us ?</h2>
          <h1 className='font-bold text-4xl mb-3'>
            Best <span className='text-red-400'>Valued </span>Deals You will
            Ever Find
          </h1>
          <p className='lg:w-[80%] text-stone-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
            perferendis! Quasi dignissimos quae mollitia delectus.
          </p>
          <button className='my-3 px-2 py-2 bg-red-400 font-bold rounded-lg hover:bg-red-300'>
            Find Details
          </button>
        </div>

        <div className='flex-1 flex flex-col gap-5 '>
          <div className='flex items-center gap-4'>
            <BsCarFront className='text-red-500 w-10' />
            <div>
              <h2 className='font-bold text-lg '>Cross Country Drive</h2>
              <p className='text-stone-500'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores illo dicta ullam.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <BsCoin className='text-red-500 w-10' />
            <div>
              <h2 className='font-bold text-lg '>All Inclusive Privacy</h2>
              <p className='text-stone-500'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores illo dicta ullam.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <BsCashCoin className='text-red-500 w-10' />
            <div>
              <h2 className='font-bold text-lg '>No Hidden Changes</h2>
              <p className='text-stone-500'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores illo dicta ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
