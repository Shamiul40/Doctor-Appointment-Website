import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center bg-center bg-white p-10 my-12 shadow-lg'>
      <h1 className='text-4xl'>404-Page Not Found</h1>
      <p className='my-4'>oops! The page you are looking doesn't found</p>
      <Link className='bg-[#176AE5] px-8 py-2 rounded-3xl text-white ' to="/">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;