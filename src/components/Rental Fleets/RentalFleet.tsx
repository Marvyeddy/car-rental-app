'use client';

import { Cars, CarsProps } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const RentalFleet = () => {
  const [selectedCar, setSelectedCar] = useState<CarsProps>(Cars[0]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleChange = (name: CarsProps, index: number) => {
    setSelectedCar(name);
    setSelectedIndex(index);
  };

  return (
    <div className=' bg-white/50 rounded-lg py-3 px-4' id='vehicle'>
      <div className='text-center'>
        <h2 className='font-bold text-xl mb-3'>Vehicle Models</h2>
        <h1 className='font-bold text-3xl'>Our Rental Fleets</h1>
        <p className='my-3 w-[80%] mx-auto text-stone-500'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quos
          maiores ea magni, amet minima expedita fugiat qui iste voluptatum
          officiis error provident ut id deserunt culpa quod harum molestias
          quibusdam! Excepturi.
        </p>
      </div>

      <div className='flex gap-4  flex-col md:flex-row items-center justify-center mt-4'>
        <div className='flex flex-col md:w-fit gap-3 p-5 flex-1 w-[300px]'>
          {Cars.map((car, index) => {
            return (
              <button
                key={index}
                className={
                  index === selectedIndex
                    ? `bg-red-400 text-white rounded-lg py-2`
                    : `font-bold mb-2`
                }
                onClick={() => handleChange(car, index)}
              >
                {car.name}
              </button>
            );
          })}
        </div>

        <div className='md:flex-1 relative w-[300px] h-[300px]'>
          <Image
            src={selectedCar.image}
            alt=''
            fill
            className='object-contain'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>

        <div className='md:flex-1 w-[300px]'>
          <table className='w-[100%] h-[71%]'>
            <caption className='bg-red-400 text-white font-bold py-2 text-xl'>
              {selectedCar.price} / Per Day
            </caption>
            <tbody className=' text-center'>
              <tr>
                <th>Model</th>
                <td>{selectedCar.model}</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{selectedCar.year}</td>
              </tr>
              <tr>
                <th>Doors</th>
                <td>4/5</td>
              </tr>
              <tr>
                <th>AC</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Transmission</th>
                <td>{selectedCar.transmission}</td>
              </tr>
              <tr>
                <th>Fuel</th>
                <td>{selectedCar.fuel}</td>
              </tr>
            </tbody>
          </table>

          <Link
            href='#about'
            className='block text-center py-2 bg-red-400 text-white hover:bg-red-300 mt-2 font-bold'
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentalFleet;
