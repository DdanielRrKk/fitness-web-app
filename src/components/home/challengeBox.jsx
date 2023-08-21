import React from 'react';

function ChallengeBox({ challenges2 = null }) {
  const challenges = [
        { title: 'Challenge 1', status: 'Finished' },
        { title: 'Challenge 2', status: 'On Going' },
        { title: 'Challenge 3', status: 'Waiting' },
        { title: 'Challenge 3', status: 'Waiting' },
        { title: 'Challenge 1', status: 'Finished' },
        { title: 'Challenge 2', status: 'On Going' },
        { title: 'Challenge 1', status: 'Finished' },
        { title: 'Challenge 2', status: 'On Going' },
        { title: 'Challenge 1', status: 'Finished' },
  ];

  return (
    <div className="button-container h-fit p-4">
        <p className="self-start mb-6 text-2xl font-semibold">Active Challenges <span className='px-2 ml-2 rounded-xl text-lg bg-primary text-white'>{challenges.length}</span></p>
        <ul className="flex flex-col w-full h-full gap-6">
        {challenges.map((challenge, index) => (
            <li key={index} className="flex flex-row justify-between items-center">
                <p className='font-semibold'>{challenge.title}</p>
                <span className={`px-3 py-1 rounded-2xl font-semibold ${getStatusColor(challenge.status)}`}>{challenge.status}</span>
            </li>
        ))}
        </ul>
    </div>
  );
};

function getStatusColor(status) {
    switch (status) {
        case 'Finished': return 'bg-green-300 text-green-600';
        case 'On Going': return 'bg-yellow-300 text-yellow-600';
        case 'Waiting': return 'bg-gray-300 text-gray-600';
    }
}

export default ChallengeBox;
