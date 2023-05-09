import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [company, setCompany] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // send data to the back to store in DB

    // reset input fields
    console.log('111');
    setCompany('');
    setRole('');
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleSubmit} className='w-1/2'>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <input
              type='text'
              name='company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder='Company'
              // required
              className='border rounded px-3 py-2 w-1/2'
            />
          </div>
          <div>
            <input
              type='text'
              name='role'
              onChange={(e) => setRole(e.target.value)}
              placeholder='Role'
              value={role}
              // required
              className='border rounded px-3 py-2 w-1/2'
            />
          </div>
        </div>
        <button
          className='bg-green-500 px-4 py-2 rounded mt-4 w-full'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
