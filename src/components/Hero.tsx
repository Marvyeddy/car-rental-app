import Image from 'next/image';

const Hero = () => {
  return (
    <div className='lg:flex gap-6 my-20 lg:ml-14 text-center lg:text-left'>
      <div className='flex-1'>
        <h2 className='font-semibold text-orange-500 lg:text-lg'>
          Plan your trip now!
        </h2>
        <h1 className='font-bold text-red-500 uppercase text-[70px] tracking-tight leading-tight'>
          Save Big with our car rental
        </h1>
        <p className='font-medium lg:text-xl text-base mb-3'>
          Rent the car of your dreams, unbeatable prices, unlimited miles and
          much more!!
        </p>
        <div>
          <button className='py-3 px-4 rounded-lg bg-black text-white font-medium mr-4 hover:bg-black/65'>
            Book Now
          </button>
          <button className='py-3 px-4 rounded-lg bg-red-600 text-white font-medium hover:bg-red-600/70'>
            Learn More !
          </button>
        </div>
      </div>

      <div className='h-[20rem] relative flex-1 mt-7 hidden lg:block'>
        <Image src={'/car.svg'} alt='car' fill priority />
      </div>
    </div>
  );
};

export default Hero;
