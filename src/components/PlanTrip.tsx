import Image from 'next/image';

const PlanTrip = () => {
  return (
    <div className='my-20 px-4'>
      <div>
        <div className='w-max mx-auto text-center'>
          <h2 className='font-bold text-xl mb-3'>Plan your Trip now</h2>
          <h1 className='font-bold text-3xl'>Quick & Easy Car Rental</h1>
        </div>

        <div className='flex mt-10 flex-col text-center items-center gap-8 md:flex-row'>
          <div className='flex-1 bg-white rounded-lg py-3 px-4'>
            <Image
              src='/vehicle.png'
              alt=''
              width={40}
              height={20}
              className='mx-auto mb-3 w-auto h-auto'
              priority
            />
            <h2 className='font-semibold mb-3'>Select Car</h2>
            <p className='text-black/50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate illum quis animi consequatur veritatis mollitia
              consectetur rerum dolor maxime et! Neque quo quidem error.
            </p>
          </div>
          <div className='flex-1 bg-white rounded-lg py-3 px-4'>
            <Image
              src='/customer-service.png'
              alt=''
              width={40}
              height={20}
              className='mx-auto mb-3 w-auto h-auto'
            />
            <h2 className='font-semibold mb-3'>Contact Operators</h2>
            <p className='text-black/50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate illum quis animi consequatur veritatis mollitia
              consectetur rerum dolor maxime et! Neque quo quidem error.
            </p>
          </div>
          <div className='flex-1 bg-white rounded-lg py-3 px-4'>
            <Image
              src='/drive.png'
              alt=''
              width={40}
              height={20}
              className='mx-auto mb-3 w-auto h-auto'
            />
            <h2 className='font-semibold mb-3'>Let&apos;s Drive</h2>
            <p className='text-black/50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate illum quis animi consequatur veritatis mollitia
              consectetur rerum dolor maxime et! Neque quo quidem error.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
