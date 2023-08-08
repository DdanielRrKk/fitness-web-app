import React from 'react';

function NutritionGoalsBox({ calories, 
    carbs, 
    protein, 
    fat,
    caloriesGoal, 
    carbsGoal, 
    proteinGoal, 
    fatGoal
}) {
    return (
        <div className='w-full flex flex-col p-4 bg-primary rounded-lg'>
            <div className='text-center mb-4'>
                <p>{calories} / {caloriesGoal}</p>
                <p>calories</p>
            </div>

            <div className='flex flex-row justify-evenly text-center'>
                <div>
                    <p>{carbs} / {carbsGoal}</p>
                    <p>carbs</p>
                </div>
                
                <div>
                    <p>{protein} / {proteinGoal}</p>
                    <p>protein</p>
                </div>

                <div>
                    <p>{fat} / {fatGoal}</p>
                    <p>fat</p>
                </div>
            </div>
        </div>
    );
}

export default NutritionGoalsBox;
