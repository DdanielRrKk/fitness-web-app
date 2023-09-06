import React from 'react';

function WorkoutDropdown({ exercises }) {
    return exercises.map(exercise => 
        <p key={exercise.ID} className='p-2 border'>{exercise.Name} {exercise.Sets} * {exercise.TypeValue} {`[${exercise.Rest}"]`} with {exercise.Weights} kg</p>
    );
}

export default WorkoutDropdown;
