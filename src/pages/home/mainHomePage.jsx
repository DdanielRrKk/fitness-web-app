import React from 'react';

// import { Link } from 'react-router-dom';

import NutritionBox from '../../components/home/nutritionBox';
import WorkoutBox from '../../components/workout/workoutBox';

function MainHomePage() {
    const workoutDay = 
    {
        id: 0,
        dayName: "Monday",
        workoutName: "Rest",
        exercises: 0
    };


    return (
        <div className='main-container'>
            <h1 className='text-primary text-2xl font-bold'>Welcome User</h1>

            <p>Nutritions</p>

            <NutritionBox 
                calories={120}
                carbs={20}
                protein={15}
                fat={10}
                caloriesPercent={50}
                carbsPercent={20}
                proteinPercent={30}
                fatPercent={15}/>
            
            <p>Workout</p>

            <WorkoutBox 
                isActive={true}
                onClick={() => {console.log('Pressed from home')}}
                day={workoutDay}/>
            
            <p>Weight Logs</p>

            <button className='button-container p-4' onClick={() => console.log('Pressed')}>
                <p>Current weight value</p>
                <p>Current Weigth</p>
            </button>
            
            <p>History</p>

            <div className='w-full flex flex-row justify-between'>
                <button 
                    className='button-container p-3 mr-2'
                    onClick={() => console.log('Pressed')}>
                    <p>Workout History</p>
                </button>

                <button 
                    className='button-container p-3 ml-2'
                    onClick={() => console.log('Pressed')}>
                    <p>Meal History</p>
                </button>
            </div>

        </div>
    );
}

export default MainHomePage;
