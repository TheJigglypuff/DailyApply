import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';
import StatsTable from './StatsTable';

const Main = () => {
  const [userStatsData, setUserStatsData] = useState([]);
  const [selectedTab, setSelectedTab] = useState<string>('stats');

  const fetchUserData = async () => {
    try {
      const response = await fetch('/getUsersData');
      const data = await response.json();
      setUserStatsData(data);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    // fetchUserData();

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
  }, []);

  return (
    <div className='flex flex-col justify-between'>
      <div className='flex flex-col items-center justify-center flex-grow mt-10'>
        <JobApplicationForm />
      </div>
      <div className='mt-20 mb-2'>
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
                : 'bg-blue-200 text-blue-700'
            }`}
            onClick={() => setSelectedTab('feed')}
          >
            Feed
          </button>
        </nav>
      </div>
      <div className='mb-10'>
        {selectedTab === 'stats' && (
          <>
            <StatsTable data={userStatsData} />
          </>
        )}
        {/* {selectedTab === 'feed' && <Feed />} */}
      </div>
    </div>
  );
};

export default Main;
