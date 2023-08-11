import React from 'react';

function WorkoutButton({ isSelected, name, changeSelection }) {
    return (isSelected) ?
        <button 
            className='p-4 rounded-lg bg-primary text-white'
            onClick={changeSelection}>
                {name}
        </button>
        :
        <button 
            className='p-4 rounded-lg bg-white text-primary'
            onClick={changeSelection}>
                {name}
        </button>;
}

export default WorkoutButton;
