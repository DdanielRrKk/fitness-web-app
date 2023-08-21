import React from 'react';

function WorkoutBox({ title = null, description = null, duration = null, onClick}) {
  // Replace with your workout details or fetch them from an API/database.
  const workoutDetails = {
    title: 'Morning Yoga Routine',
    description: 'A 30-minute yoga workout to start your day energized and focused.',
    duration: '30 minutes',
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-2xl font-semibold mb-2">{workoutDetails.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{workoutDetails.description}</p>
        <p className="text-gray-700 text-md mb-4">Duration: {workoutDetails.duration}</p>
        <button 
            className="bg-primary text-white font-bold py-2 px-4 rounded-md"
            onClick={onClick}>
            Start Workout
        </button>
    </div>
  );
};

export default WorkoutBox;
