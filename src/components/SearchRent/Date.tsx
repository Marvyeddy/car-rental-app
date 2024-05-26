import React from 'react';
import { BsClock } from 'react-icons/bs';

type DateProps = {
  label: string;
  type: string;
  onclick: React.ChangeEventHandler;
};

const Date = ({ label, type, onclick }: DateProps) => {
  return (
    <div className='lg:w-[30%] mb-2 flex flex-col items-center lg:items-start'>
      <div className='flex gap-3 items-center mb-2'>
        <BsClock className='text-red-700' />
        <label className='font-bold'>{label}</label>
      </div>
      <input
        name={label}
        type={type}
        placeholder='mm\dd\yyyy'
        className='w-[220px] border border-black px-3 rounded-md outline-none h-[30px]'
        onChange={onclick}
        required
      />
    </div>
  );
};

export default Date;
