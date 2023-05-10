import React, { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  dailyStreak: number,
  totalApplications: number
}

const Navbar: FC<Props> = ( { dailyStreak, totalApplications}) => {

  return (
    <nav className='bg-blue-900 border-gray-200 dark:bg-gray-900 shadow-md'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <span className=' text-2xl font-semibold text-blue-500 '>
          TheTracker
        </span>

        <div className='w-1/3 flex justify-between'>
          <div className='bg-blue-500 text-white px-4 py-2  rounded '>
            Daily Streak: <span>{dailyStreak}</span>
          </div>
          <div className='bg-blue-500 text-white px-4 py-2 rounded'>
            Total Applications: <span>{totalApplications}</span>
          </div>
        </div>
        <button className='bg-red-500 px-4 py-2 rounded'>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
