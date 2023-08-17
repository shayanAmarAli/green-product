"use client"
import React from 'react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='w-[13%] m-auto py-2'>
      <button className='font-bold text-xl rounded-md bg-slate-100 py-2 px-5' onClick={handlePrint}>Print </button>
    </div>
  );
};

export default PrintButton;
