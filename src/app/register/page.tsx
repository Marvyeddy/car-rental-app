'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const page = () => {
  const { signUp, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [iShow, setIshow] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Password wrong');
    }

    try {
      await signUp(email, password);
      router.push('/');
    } catch (error) {
      setError('User already exists');
    }
  };

  const onShow = (e: any) => {
    e.preventDefault();
    setShow(!show);
  };

  const onIshow = (e: any) => {
    e.preventDefault();
    setIshow(!iShow);
  };

  return (
    <div className='min-h-screen absolute top-0 left-0 w-screen bg-blue-400'>
      <Image
        src={'/logo.svg'}
        alt=''
        width={150}
        height={50}
        priority
        className='mx-auto mt-4'
      />
      <div className='min-h-[78vh] mt-7 px-8'>
        <div className='bg-white max-w-xl mx-auto py-6 rounded-lg mt-7'>
          <h2 className='font-bold text-center text-3xl my-4'>Register</h2>

          <form className='px-5 flex flex-col gap-5 ' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label className='text-lg font-semibold'>Email:</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='py-1 px-2 w-[80%] md:w-[50%] rounded-lg bg-stone-200 outline-none'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-lg font-semibold'>Password:</label>
              <div className='relative'>
                <input
                  type={show ? `text` : `password`}
                  placeholder='Enter your password'
                  className='py-1 px-2 w-[80%] md:w-[50%] rounded-lg bg-stone-200 outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className='absolute top-2 left-[70%] md:left-60'
                  onClick={onShow}
                >
                  {show ? <BsEye /> : <BsEyeSlash />}
                </button>
              </div>
            </div>

            <div className='flex flex-col'>
              <label className='text-lg font-semibold'>Confirm Password:</label>
              <div className='relative'>
                <input
                  type={iShow ? `text` : `password`}
                  placeholder='Confirm your password'
                  className='py-1 px-2 w-[80%] md:w-[50%] rounded-lg bg-stone-200 outline-none'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  className='absolute top-2 left-[70%] md:left-60'
                  onClick={onIshow}
                >
                  {iShow ? <BsEye /> : <BsEyeSlash />}
                </button>
              </div>
            </div>
            {error && <h2 className='text-red-400'>{error}</h2>}

            <button className='bg-red-400 w-max mx-auto px-3 py-1 rounded-md mb-3 hover:bg-red-300'>
              Register
            </button>
          </form>

          <hr />

          <div className='flex justify-between items-center px-2 py-3'>
            <h2>Already have an account?</h2>

            <Link
              href={'/signin'}
              className='underline underline-offset-2 text-purple-500 hover:text-purple-700'
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
