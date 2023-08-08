import React from 'react';

function WorkoutBox({ 
    style = null,
    isActive = false,
    onClick = null,
    day
}) {
    if(isActive) {
        return (
            <div className='button-container' style={style}>
                <p>{day.dayName}</p>
                <div className='w-full flex flex-row justify-evenly my-2'>
                    <p>{day.workoutName}</p>

                    <p>{day.exercises}</p>
                </div>

                <button className='w-full bg-primary text-center' onClick={onClick}>
                    <p>Start</p>
                </button>
            </div>
        );
    }

    return (
        <div className='button-container' style={style}>
            <p>{day.dayName}</p>
            <div className='flex flex-row justify-evenly mt-2'>
                <p>{day.workoutName}</p>

                <p>{day.exercises}</p>
            </div>
        </div>
    );
}

export default WorkoutBox;
