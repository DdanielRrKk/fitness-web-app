import React from 'react';

import { useNavigate } from 'react-router-dom';

function MainHelpPage() {
  const navigate = useNavigate();

  const handleNavigateToLearnPage = () => navigate('/learn');

  return (
    <div className='main-container items-center'>
      <div className='button-container gap-2 p-4'>
        <p>Quick Access</p>

          <div className='w-3/4 flex flex-row justify-between'>
            <button 
              className='quick-access-button w-5/12'
              onClick={() => console.log('click')}>
              Announcements and Terms of Use
            </button>

            <button 
              className='quick-access-button w-5/12'
              onClick={() => console.log('click')}>
              Using the App
            </button>
          </div>

          <div className='w-3/4 flex flex-row justify-between'>
            <button 
              className='quick-access-button w-5/12'
              onClick={() => console.log('click')}>
              MyTrainingPotential Subscription
            </button>
                
            <button 
              className='quick-access-button w-5/12'
              onClick={handleNavigateToLearnPage}>
              Learning Section
            </button>
          </div>

          <button 
            className='quick-access-button w-3/4'
            onClick={() => console.log('click')}>
            Troubleshooting
          </button>
        </div>

        <div className='button-container p-4'>
          <p>FAQ</p>

          <div className='w-full flex flex-col justify-center items-center bg-gray-200 rounded-lg'>
            <button className='text-blue-500'>Sign up for an account</button>
            <button className='text-blue-500'>Privacy on MyTrainingPotential</button>
            <button className='text-blue-500'>Login Troubleshooting</button>
          </div>
        </div>
      
    </div>
  );
}

export default MainHelpPage;
