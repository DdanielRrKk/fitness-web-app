import React from 'react';

function WorkoutDropdown({ exercises }) {
    return exercises.map(exercise => exercise.isSuperSet ?
        <div key={exercise.id} className='p-2 border'>
            <p>{exercise.name} {exercise.sets} * {exercise.typeValue} with {exercise.weights} kg +</p>
            <p>{exercise.nameSS} {exercise.setsSS} * {exercise.typeValueSS} with {exercise.weightsSS} kg {`[${exercise.rest}"]`}</p>
        </div>
        :
        <p key={exercise.id} className='p-2 border'>{exercise.name} {exercise.sets} * {exercise.typeValue} {`[${exercise.rest}"]`} with {exercise.weights} kg</p>
    );
}

export default WorkoutDropdown;
