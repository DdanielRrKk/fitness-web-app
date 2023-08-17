import React from 'react';

function Calendar({ daysData = [] }) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

    return (
        <>
            <p className='font-bold my-2'>{months[currentMonth]}</p>
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: daysInMonth }, (_, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center w-8 h-8 border border-gray-200 rounded-lg ${
                            daysData[index] ? 'bg-green-500' : ''
                        }`} >
                        {index + 1}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Calendar;