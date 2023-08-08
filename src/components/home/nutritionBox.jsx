import React from 'react';

function NutritionBox({ calories, 
    carbs, 
    protein, 
    fat,
    caloriesPercent, 
    carbsPercent, 
    proteinPercent, 
    fatPercent
}) {
    return (
        <div className='w-full p-4 bg-primary rounded-lg'>
            <ProgressBarBox title="Calories" value={calories} percent={caloriesPercent} />
            
            <ProgressBarBox title="Carbs" value={carbs} percent={carbsPercent} />
            
            <ProgressBarBox title="Protein" value={protein} percent={proteinPercent} />
            
            <ProgressBarBox title="Fat" value={fat} percent={fatPercent} />
        </div>
    );
}

function ProgressBarBox({ title, value, percent }) {
    return (
        <div className='my-2'>
            <div className='flex flex-row justify-between'>
                <p>{title}</p>

                <p>{value}</p>
            </div>
            <div className="relative w-full h-6 bg-gray-200 rounded-lg">
                <div
                    className="absolute top-0 left-0 h-full bg-tertiary rounded-lg"
                    style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
};

export default NutritionBox;
