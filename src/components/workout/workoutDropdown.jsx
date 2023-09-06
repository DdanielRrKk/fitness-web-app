import React from 'react';

function WorkoutDropdown({ exercises }) {
    return (
        <div className='w-full'>
            {exercises.map(exercise => 
                <p key={exercise.ID} className='p-2 border'>{exercise.Name} {exercise.Sets} * {exercise.TypeValue} {`[${exercise.Rest}"]`} with {exercise.Weights} kg</p>
            )}
        </div>
    )
}

export default WorkoutDropdown;
