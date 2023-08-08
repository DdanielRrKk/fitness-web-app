import React from 'react';

function WaterBox({ 
    addWater,
    removeWater,
    water
}) {
    return (
        <div className='w-full flex flex-row justify-between p-4 bg-white rounded-lg'>
            <button 
                className='px-3 py-1 bg-primary text-white text-center rounded-md'
                onClick={removeWater}>
                -250 ml
            </button>

            <p>{water} ml</p>

            <button 
                className='px-3 py-1 bg-primary text-white text-center rounded-md'
                onClick={addWater}>
                +250 ml
            </button>
        </div>
    );
}

export default WaterBox;
