import React from 'react';

// import { Link } from 'react-router-dom';

import WorkoutBox from '../../components/workout/workoutBox';

const days = [
    {
        id: 0,
        dayName: "Monday",
        workoutName: "Rest",
        exercises: 0
    },
    {
        id: 1,
        dayName: "Tuesday",
        workoutName: "Push 1",
        exercises: 5
    },
    {
        id: 2,
        dayName: "Wednesday",
        workoutName: "Pull 1",
        exercises: 5
    },
    {
        id: 3,
        dayName: "Thursday",
        workoutName: "Legs 1",
        exercises: 5
    },
    {
        id: 4,
        dayName: "Friday",
        workoutName: "Push 2",
        exercises: 5
    },
    {
        id: 5,
        dayName: "Saturday",
        workoutName: "Pull 2",
        exercises: 5
    },
    {
        id: 6,
        dayName: "Sunday",
        workoutName: "Legs 2",
        exercises: 5
    }
]

function MainWorkoutPage() {
    const [exercises, setExercises] = React.useState(days);
    const todaysWorkout = exercises[0];
    const restWorkout = exercises.filter((_, item) => item !== 0);

    return (
        <div className='main-container'>
            <p>Todays Workout</p>

            <WorkoutBox 
                isActive={true}
                onClick={() => {console.log('Pressed from home')}}
                day={todaysWorkout} />
            
            <p>Next Days</p>

            {restWorkout.map(day =>  
                <WorkoutBox 
                    key={day.id}
                    style={{ margin: '8px 0px' }}
                    day={day} />
            )} 
        </div>
    );
}

export default MainWorkoutPage;
