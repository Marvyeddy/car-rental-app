'use client';

import React, { useState } from 'react';
import { Car } from '@/constants';
import { Pickup } from '@/constants';
import { DropOff } from '@/constants';
import { BsCarFront } from 'react-icons/bs';
import { BiFlag, BiLocationPlus } from 'react-icons/bi';
import Date from './Date';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const SearchRent = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    car: '',
    pickup: '',
    dropoff: '',
    PickupDate: '',
    DropoffDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      router.push('/register');
    } else {
      alert(`rented`);
    }
  };

  return (
    <div className=' px-7' id='about'>
      <h2 className='w-max mx-auto mb-4 font-bold text-orange-500'>
        Book a Car
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='lg:flex items-center rounded-lg bg-white w-fit mx-auto lg:pl-20 px-7 py-3 flex-wrap gap-5 h-[70%]'>
          {/* Car input */}
          <div className='lg:w-[30%] mb-2 flex flex-col items-center lg:items-start'>
            <div className='flex gap-3 items-center mb-2'>
              <BsCarFront className='text-red-700' />
              <label htmlFor='car' className='font-bold'>
                Car of your choice
              </label>
            </div>

            <select
              name='car'
              id='car'
              className='w-[220px]  border border-black px-3 rounded-md outline-none h-[30px] '
              onChange={handleChange}
              required
            >
              <option value='' disabled selected>
                Select your car
              </option>
              {Car.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Pickup input */}
          <div className='lg:w-[30%] mb-2 flex flex-col items-center lg:items-start'>
            <div className='flex gap-3 items-center mb-2'>
              <BiLocationPlus className='text-red-700' />
              <label htmlFor='Pickup' className='font-bold'>
                Pickup
              </label>
            </div>
            <select
              name='pickup'
              id='Pickup'
              className='w-[220px]  border border-black px-3 rounded-md outline-none h-[30px]'
              onChange={handleChange}
              required
            >
              <option value='' disabled selected>
                Select Pickup
              </option>
              {Pickup.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Dropoff input */}
          <div className='lg:w-[30%] mb-2 flex flex-col items-center lg:items-start'>
            <div className='flex gap-3 items-center mb-2'>
              <BiFlag className='text-red-700' />
              <label htmlFor='DropOff' className='font-bold'>
                DropOff
              </label>
            </div>
            <select
              name='dropoff'
              id='DropOff'
              className='w-[220px]  border border-black px-3 rounded-md outline-none h-[30px]'
              onChange={handleChange}
              required
            >
              <option value='' disabled selected>
                Select Dropoff
              </option>
              {DropOff.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Date input */}
          <Date type='date' label='PickupDate' onclick={handleChange} />
          <Date type='date' label='DropoffDate' onclick={handleChange} />

          <button className='bg-red-500 px-5 py-1 text-white font-semibold w-[220px] lg:mt-0 mt-4 rounded-sm hover:bg-red-500/70'>
            Rent
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchRent;
