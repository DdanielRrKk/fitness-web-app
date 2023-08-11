import React from 'react';

// import { Link } from 'react-router-dom';

import WorkoutButton from '../../components/workout/workoutButton';
import WorkoutDropdown from '../../components/workout/workoutDropdown';

const worokut_plan = {
    name: "Mr. Olympia PPL Workout", 
    difficulty: 'Medium',
    days: 7,
    workouts: [ {
            id: 0, name: 'Push Workout 1', exercises: [
                { id: 0, name: 'Flat Bench Press', sets: 3, type: 0, typeValue: 10, weights: 15, rest: 60, isSuperSet: false },
                { id: 1, name: 'Alternated Dumbbell Shoulder Press', sets: 3, type: 0, typeValue: 10, weights: 15, rest: 60, isSuperSet: false },
                { id: 2, name: 'Dumbbell Chest Flies', sets: 3, type: 0, typeValue: 10, weights: 10, rest: 60, isSuperSet: true, nameSS: 'Triceps Extensions', setsSS: 4, typeSS: 0, typeValueSS: 10, weightsSS: 15 },
                { id: 3, name: 'Lateral Raises 1', sets: 4, type: 0, typeValue: 10, weights: 10, rest: 60, isSuperSet: false },
                { id: 4, name: 'Dips', sets: 3, type: 0, typeValue: 10, weights: 0, rest: 60, isSuperSet: false }
            ]
        }, { id: 1, name: 'Pull Workout', exercises: [
                { id: 0, name: 'Pull Downs', sets: 4, type: 0, typeValue: 10, weights: 40, rest: 60 },
                { id: 1, name: 'Single Hand Bent Over Rows', sets: 4, type: 0, typeValue: 10, weights: 12.5, rest: 60 },
                { id: 2, name: 'Slight Incline Seated Dumbbell Curls', sets: 3, type: 0, typeValue: 10, weights: 7.5, rest: 60 },
                { id: 3, name: 'Pull ups', sets: 3, type: 0, typeValue: 10, weights: 0, rest: 60 },
                { id: 4, name: 'EZ Bar Curls', sets: 4, type: 0, typeValue: 10, weights: 10, rest: 60 }
            ]
        }, { id: 2, name: 'Legs Workout 1', exercises: [
                { id: 0, name: 'Run 10k km', sets: 1, type: 0, typeValue: 1, weights: 0, rest: 0 }
            ]
        }, { id: 3, name: 'Push Workout 2', exercises: [
                { id: 0, name: 'Flat Bench Press', sets: 3, type: 0, typeValue: 10, weights: 15, rest: 60 },
                { id: 1, name: 'Alternated Dumbbell Shoulder Press', sets: 3, type: 0, typeValue: 10, weights: 15, rest: 60 },
                { id: 2, name: 'Dumbbell Chest Flies', sets: 4, type: 0, typeValue: 10, weights: 10, rest: 60 },
                { id: 3, name: 'Overhead Triceps Extensions', sets: 3, type: 0, typeValue: 10, weights: 15, rest: 60 },
                { id: 4, name: 'Lateral Raises', sets: 4, type: 0, typeValue: 10, weights: 10, rest: 60 },
                { id: 5, name: 'Dips', sets: 3, type: 0, typeValue: 10, weights: 0, rest: 60 }
            ]
        }, { id: 4, name: 'Pull Workout 2', exercises: [
                { id: 0, name: 'Pull Downs', sets: 4, type: 0, typeValue: 10, weights: 40, rest: 60 },
                { id: 1, name: 'Single Hand Bent Over Rows', sets: 4, type: 0, typeValue: 10, weights: 12.5, rest: 60 },
                { id: 2, name: 'Slight Incline Seated Dumbbell Curls', sets: 3, type: 0, typeValue: 10, weights: 7.5, rest: 60 },
                { id: 3, name: 'Pull ups', sets: 3, type: 0, typeValue: 10, weights: 0, rest: 60 },
                { id: 4, name: 'EZ Bar Curls', sets: 4, type: 0, typeValue: 10, weights: 10, rest: 60 }
            ]
        }, { id: 5, name: 'Legs Workout 2', exercises: [
                { id: 0, name: 'Run 10k km', sets: 1, type: 0, typeValue: 1, weights: 0, rest: 0 }
            ]
        }, { id: 6, name: 'Running', exercises: [
                { id: 0, name: 'Run 10k km', sets: 1, type: 1, typeValue: 120, weights: 0, rest: 0 },
                { id: 1, name: 'Single Hand Bent Over Rows', sets: 4, type: 0, typeValue: 10, weights: 12.5, rest: 60 }
            ]
        },
    ]
}

function MainWorkoutPage() {
    const [workoutPlan, setWorkoutplan] = React.useState(worokut_plan);
    
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
            <h2>{workoutPlan.name}</h2>
            
            <div className='grid grid-cols-7 gap-4 mb-4'>
                {workoutPlan.workouts.map(workout => 
                    <WorkoutButton 
                        key={workout.id}
                        name={workout.name}
                        isSelected={workout.id === selectedWorokut}
                        changeSelection={() => handleSelectWorokutChange(workout.id, workout.exercises)}/>
                )}
            </div>

            <WorkoutDropdown exercises={selectedWorkoutExercises}/>
        </div>
    );
}

export default MainWorkoutPage;
