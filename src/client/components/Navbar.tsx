import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dailyStreak, setDailyStreak] = useState<number>(0);
  const [totalApplications, setTotalApplications] = useState<number>(0);

  const fetchApplications = async () => {
    try {
      const response = await fetch('http://localhost:3000/getApps');
      const data = await response.json();
      setDailyStreak(data.dailyStreak);
      setTotalApplications(data.totalApplications);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <span className=' text-2xl font-semibold text-blue-500 '>
          TheTracker
        </span>

        <div className='w-1/3 flex justify-between'>
          <div className='bg-blue-500 text-white px-4 py-2 mx-10 rounded'>
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
