import React from 'react';

interface UserStats {
  name: string;
  pictureUrl: string;
  dailyStreak: number;
  totalApplications: number;
}

interface StatsTableProps {
  data: UserStats[];
}

const StatsTable: React.FC<StatsTableProps> = ({ data }) => {
  return (
    <div className='flex flex-col items-center'>
      <table className='table-auto border-collapse border border-gray-800 w-1/2'>
        <thead>
          <tr>
            <th className='border border-gray-600 p-2'>ECRI 39</th>
            <th className='border border-gray-600 p-2'>Daily Streak</th>
            <th className='border border-gray-600 p-2'>Total Applications</th>
          </tr>
        </thead>
        <tbody>
          {data.map((userStats, index) => (
            <tr key={index}>
              <td className='border border-gray-600 p-2'>
                <div className='flex items-center'>
                  <img
                    src={userStats.pictureUrl}
                    className='w-10 h-10 rounded-full mr-2'
                  />
                  <span>{userStats.name}</span>
                </div>
              </td>
              <td className='border border-gray-600 p-2'>
                {userStats.dailyStreak}
              </td>
              <td className='border border-gray-600 p-2'>
                {userStats.totalApplications}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
