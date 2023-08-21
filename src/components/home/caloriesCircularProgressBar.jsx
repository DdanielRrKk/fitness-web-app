import React from 'react';

const CaloriesCircularProgressBar = ({ width, totalCalories, targetCalories }) => {
  const percentage = (totalCalories / targetCalories) * 100;

  const strokeWidth = '15px';
  const radius = 85;

    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className='button-container w-fit p-4 relative'>
        <p className='absolute top-4 text-lg font-bold'>Calories</p>
        <svg width={width} height={width} viewBox={`0 0 ${width} ${width}`}>
            <circle 
                cx={width / 2} 
                cy={width / 2} 
                strokeWidth={strokeWidth} 
                r={radius} 
                className='fill-none stroke-gray-300' />
            <circle 
                cx={width / 2} 
                cy={width / 2} 
                strokeWidth={strokeWidth} 
                r={radius} 
                className='fill-none stroke-primary' 
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                }}
                transform={`rotate(-90 ${width / 2} ${width / 2})`}/>
            <text
                x='50%'
                y='50%'
                dy='0.3em'
                textAnchor='middle'
                className='text-base font-bold'>{totalCalories} / {targetCalories}</text>
                <text
                    x='50%'
                    y='50%'
                    dy='1.5em'
                    textAnchor='middle'
                    className='text-base'>kcal</text>
        </svg>
    </div>
  );
};

export default CaloriesCircularProgressBar;
