import React from 'react';

const StepsVerticalBarChart = ({ data = null }) => {
  data = [
    { label: 'Jan', value: 4000 },
    { label: 'Feb', value: 10000 },
    { label: 'Mar', value: 9500 },
    { label: 'Apr', value: 8100 },
    { label: 'May', value: 4000 },
    { label: 'Jun', value: 4000 },
    { label: 'Jul', value: 3000 },
    { label: 'Aug', value: 5000 },
    { label: 'Sep', value: 4000 },
    { label: 'Oct', value: 7600 },
    { label: 'Nov', value: 8200 },
    { label: 'Dec', value: 4400 },
  ];

  // Calculate the maximum value for scaling
  const max = Math.max(...data.map(item => item.value));

  return (
    <div className='w-fit text-center bg-white p-4 rounded-lg shadow-lg'>
      <h2 className='text-lg font-bold'>Steps</h2>
      <div className="flex gap-4 h-64">
        {data.map((item) => (
          <div key={item.label} className='flex flex-col justify-end relative group'>
            <span className='absolute w-44 p-2 top-0 rounded-md text-white bg-gray-900 font-bold scale-0 z-10 group-hover:scale-100'>Total steps: {item.value}</span>
            <div className='w-3 bg-primary rounded-full' style={{ height: `${(item.value / max) * 100}%` }}></div>
            <p className='mt-4'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsVerticalBarChart;
