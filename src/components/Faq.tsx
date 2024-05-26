'use client';

import { useState } from 'react';
import { faqs } from '../constants/index';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='max-w-4xl mx-auto p-6' id='faq'>
      <h2 className='text-lg font-bold text-center mb-2'>FAQ</h2>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Frequently Asked Questions
      </h1>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-b border-gray-200 pb-4'>
            <button
              onClick={() => handleClick(index)}
              className={`w-full flex justify-between items-center text-left py-2 px-4 text-lg font-semibold bg-gray-100 rounded-md transition-colors duration-200 hover:bg-orange-400`}
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className='ml-2' />
              ) : (
                <FaChevronDown className='ml-2' />
              )}
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className='py-2 px-4'>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
