import React from 'react';

// import { Link } from 'react-router-dom';

import WorkoutButton from '../../components/workout/workoutButton';
import WorkoutDropdown from '../../components/workout/workoutDropdown';

import WorkoutCalendar from '../../components/workout/workoutCalendar';

import { WORKOUT_PLAN_DATA } from '../../helpers/test_data';


function MainWorkoutPage() {
    const [workoutPlan, setWorkoutplan] = React.useState(WORKOUT_PLAN_DATA);
    
    const [selectedWorokut, setSelectedWorokut] = React.useState(0);
    const [selectedWorkoutExercises, setSelectedWorkoutExercises] = React.useState([]);

    const handleSelectWorokutChange = (id, exercises) => {
        if(id === selectedWorokut) {
            setSelectedWorokut(-1);
            setSelectedWorkoutExercises([]);
        } else {
            setSelectedWorokut(id);
            setSelectedWorkoutExercises(exercises);
        }
    };

    console.log("workoutPlan in main workout: ", workoutPlan);

    return (
        <div className='main-container'>
            <h2>{workoutPlan.Name}</h2>
            
            <div className='grid grid-cols-7 gap-4 mb-4'>
                {workoutPlan.Workouts.map(workout => 
                    <WorkoutButton 
                        key={workout.ID}
                        name={workout.Name}
                        isSelected={workout.ID === selectedWorokut}
                        changeSelection={() => handleSelectWorokutChange(workout.ID, workout.Exercises)}/>
                )}
            </div>

            <WorkoutDropdown exercises={selectedWorkoutExercises}/>

            <div className='button-container p-4'>
                <WorkoutCalendar />
            </div>
        </div>
    );
}

export default MainWorkoutPage;
