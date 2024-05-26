'use client';

import Image from 'next/image';
import Button from '../Button/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Links } from '@/constants';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSetNav = (index: number) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClickTrue = () => {
    setIsOpen(true);
  };

  const handleClickFalse = () => {
    return setIsOpen(false);
  };

  const signOut = () => {
    logOut();
  };

  return (
    <>
      <nav className='flex items-center justify-between py-4'>
        <div className='relative w-[150px] h-[50px]'>
          <Image src='/logo.svg' alt='logo' fill />
        </div>

        <div className='hidden lg:block'>
          {Links.map((link, index) => {
            return (
              <Link
                href={link.url}
                key={index}
                className={`mr-5 ${
                  index === selectedIndex
                    ? `underline underline-offset-8 decoration-red-400 decoration-4`
                    : ``
                }`}
                onClick={() => handleSetNav(index)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className='lg:flex gap-3 hidden'>
          {user ? (
            <Button
              className='bg-red-400 hover:bg-red-400/70 text-white shadow-xl shadow-red-200'
              title='Logout'
              url=''
              onclick={signOut}
            />
          ) : (
            <>
              <Button title='Sign-up' className='hover:' url='/signin' />
              <Button
                className='bg-red-400 hover:bg-red-400/70 text-white shadow-xl shadow-red-200'
                title='Register'
                url='/register'
              />
            </>
          )}
        </div>

        {/* Mobile Nav */}
        <button className='lg:hidden' onClick={handleClickTrue}>
          <FaBars />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 bg-white w-[100%] h-screen flex flex-col lg:hidden transition-all duration-200 ${
          isOpen ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        <button className='absolute right-6 top-7' onClick={handleClickFalse}>
          <FaTimes />
        </button>
        <div className='lg:hidden flex flex-col w-max mx-auto gap-5 text-xl text-center mt-[100px]'>
          {Links.map((link, index) => {
            return (
              <Link
                href={link.url}
                key={index}
                className={`mr-5 ${
                  index === selectedIndex
                    ? `underline underline-offset-8 decoration-red-400 decoration-4`
                    : ``
                }`}
                onClick={() => handleSetNav(index)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className='flex flex-col w-max mx-auto gap-3 text-xl mt-2'>
          {user ? (
            <Button
              className='bg-red-400 hover:bg-red-400/70 text-white shadow-xl shadow-red-200'
              title='Logout'
              url=''
              onclick={signOut}
            />
          ) : (
            <>
              <Button title='Sign-up' className='hover:' url='/signin' />
              <Button
                className='bg-red-400 hover:bg-red-400/70 text-white shadow-xl shadow-red-200'
                title='Register'
                url='/register'
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
