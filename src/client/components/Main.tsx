import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';
import StatsTable from './StatsTable';
import Navbar from './Navbar';
import Feed from './Feed'
import { userData } from '../../types'
const Main = () => {
  const [userStatsData, setUserStatsData] = useState([]);
  const [selectedTab, setSelectedTab] = useState<string>('stats');

  const [dailyStreak, setDailyStreak] = useState<number>(0);
  const [totalApplications, setTotalApplications] = useState<number>(0);

  // all users data
  const fetchUsersData = async () => {
    try {
      const response = await fetch('/getUsersData');
      const data = await response.json();
      setUserStatsData(data);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  // current user data 
  const fetchStats = async () => {
    try {
      console.log('')
      const response = await fetch('/userStats');
      const data: userData = await response.json();
      if (dailyStreak != data.dailyStreak) {
        setDailyStreak(data.dailyStreak);
      }
      if (totalApplications != data.totalApplications) {
      setTotalApplications(data.totalApplications);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    // fetchUsersData();
    fetchStats();


    // sample data
    const sampleUserStatsData = [
      {
        name: 'User 1',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 5,
        totalApplications: 20,
      },
      {
        name: 'User 2',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 3,
        totalApplications: 15,
      },
      {
        name: 'User 1',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 5,
        totalApplications: 20,
      },
      {
        name: 'User 2',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 3,
        totalApplications: 15,
      },
      {
        name: 'User 1',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 5,
        totalApplications: 20,
      },
      {
        name: 'User 2',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 3,
        totalApplications: 15,
      },
      {
        name: 'User 1',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 5,
        totalApplications: 20,
      },
      {
        name: 'User 2',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 3,
        totalApplications: 15,
      },
      {
        name: 'User 1',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 5,
        totalApplications: 20,
      },
      {
        name: 'User 2',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 3,
        totalApplications: 15,
      },
      {
        name: 'User 1',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 5,
        totalApplications: 20,
      },
      {
        name: 'User 2',
        pictureUrl:
          'https://lh3.googleusercontent.com/a/AGNmyxYqAizjgltoMRC-6SoMJrou7wf88eS-t28JJjWKCw=s100',
        dailyStreak: 3,
        totalApplications: 15,
      },
    ];
    setUserStatsData(sampleUserStatsData);
  }, [totalApplications]);

  return (
    <div className='h-screen'>
        <Navbar dailyStreak={dailyStreak} totalApplications={totalApplications}/>
    <div className='flex flex-col justify-between bg-gradient-to-b from-slate-200 to-blue-300 min-h-[92%]'>
      
      <div className='flex flex-1 h-64 flex-col items-center justify-center flex-grow mt-10 row-span-6'>
        <JobApplicationForm setTotalApplications={setTotalApplications} totalApplications={totalApplications} />
      </div>
      <div className='mt-20 mb-2 row-span-2'>
        <nav className='flex justify-center space-x-4'>
          <button
            className={`px-4 py-2 rounded  ${
              selectedTab === 'stats'
                ? 'bg-blue-400 text-white'
                : 'bg-blue-200 text-blue-700'
            }`}
            onClick={() => setSelectedTab('stats')}
          >
            Stats
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === 'feed'
                ? 'bg-blue-400 text-white'
                : 'bg-blue-200 text-white-700'
            }`}
            onClick={() => setSelectedTab('feed')}
          >
            Feed
          </button>
        </nav>
      </div>
      <div className='mb-10 row-span-2'>
        {selectedTab === 'stats' && (
          <>
            <StatsTable data={userStatsData} />
          </>
        )}
        {selectedTab === 'feed' && <Feed />}
      </div>
    </div>
    </div>
  );
};

export default Main;
