"use client"
import React from 'react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='w-[13%] m-auto'>
      <button className=' m-auto rounded-md bg-slate-100 py-2 px-3' onClick={handlePrint}>Generate Invoice</button>
    </div>
  );
};

export default PrintButton;
