'use client';
import { useState } from 'react';

export default function Toast() {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // 3초 후에 Toast 사라짐
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        onClick={handleButtonClick}
        className='text-xl w-40 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center 
        dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      >
        Show Toast
      </button>

      {showToast && (
        <div className='fixed bottom-5 right-5 bg-window-bg-dark text-white dark:bg-window-bg dark:text-gray-800 py-2 px-4 rounded'>
          Toast Message
        </div>
      )}
    </div>
  );
}
