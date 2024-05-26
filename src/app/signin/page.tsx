'use client';

import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const page = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push('/');
      console.log(email, password);
    } catch (error) {
      setError(`User doesn't exist`);
    }
  };

  const onShow = (e: any) => {
    e.preventDefault();
    setShow(!show);
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
      <div className='min-h-[78vh] mt-10 px-8'>
        <div className='bg-white max-w-xl mx-auto py-6 rounded-lg px-5'>
          <h2 className='font-bold text-3xl my-4 text-center'>Log in</h2>

          <form className='flex flex-col gap-5' onSubmit={handleSignIn}>
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
            {error && <h2 className='text-red-400'>{error}</h2>}

            <button className='bg-red-400 w-max mx-auto px-3 py-1 rounded-md mb-3 hover:bg-red-300'>
              Log in
            </button>
          </form>

          <hr />

          <div className='flex justify-between items-center px-2 py-3'>
            <h2>Don't have an account?</h2>

            <Link
              href={'/register'}
              className='underline underline-offset-2 text-purple-500 hover:text-purple-700'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
