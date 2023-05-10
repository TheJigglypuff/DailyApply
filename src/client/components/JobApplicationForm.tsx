import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [company, setCompany] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // send data to the back to store in DB
    const formData = {
      company,
      role,
    };
    try {
      const response = await fetch('/newApplication', {
        method: 'POST',
        headers: { 'Content-Type': ' application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // reset input fields
        setCompany('');
        setRole('');
      } else {
        console.log('Error fetching request');
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleSubmit} className='jusify-center'>
        <div className='flex items-center space-x-4 w-full'>
          <div className='w-1/2'>
            <input
              type='text'
              name='company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder='Company'
              // required
              className='border rounded px-3 py-2 w-full'
            />
          </div>
          <div className='w-1/2'>
            <input
              type='text'
              name='role'
              onChange={(e) => setRole(e.target.value)}
              placeholder='Role'
              value={role}
              // required
              className='border rounded px-3 py-2 w-full'
            />
          </div>
        </div>
        <button
          className='bg-green-500 px-4 py-2 rounded mt-4 w-1/2'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
