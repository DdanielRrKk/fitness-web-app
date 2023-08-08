import React from 'react';

function MealBox({ 
    onClick,
    title
}) {
    return (
        <div className='button-container flex-row justify-between p-4 my-2'>
            <div>
                <p>{title}</p>
            </div>

            <button
                className='bg-primary'
                onClick={onClick}>
                Add
            </button>
        </div>
    );
}

export default MealBox;
