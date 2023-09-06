import React from 'react';



function getDaysOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    console.log(firstDayOfMonth);
    let precedingGrayDays = 0;
    // Determine the number of preceding grayed-out days
    switch (firstDayOfMonth.getDay()) {
        case 0: precedingGrayDays = 6; break; // Sunday
        case 1: precedingGrayDays = 0; break; // Monday
        case 2: precedingGrayDays = 1; break; // Tuesday
        case 3: precedingGrayDays = 2; break; // Wednesday
        case 4: precedingGrayDays = 3; break; // Thursday
        case 5: precedingGrayDays = 4; break; // Friday
        case 6: precedingGrayDays = 5; break; // Saturday
    }
    // const precedingGrayDays = firstDayOfMonth.getDay() == 0 ? 5 : firstDayOfMonth.getDay() - 1;
  
    const daysArray = [];
  
    // Add preceding grayed-out days
    for (let i = 0; i < precedingGrayDays; i++) {
      daysArray.push('-' + i); 
    }
    console.log(daysArray);
  
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }
    console.log(daysArray);
  
    return daysArray;
}
  

function WorkoutCalendar () {
    const currentDate = new Date();
    const monthOptions = { month: 'long', year: 'numeric' };

    const [currentMonth, setCurrentMonth] = React.useState(currentDate);
    const [daysOfMonth, setDaysOfMonth] = React.useState([]);
    const [hoveredDay, setHoveredDay] = React.useState(null);

    const goToPreviousMonth = () => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(currentMonth.getMonth() - 1);
        setCurrentMonth(newMonth);

        setDaysOfMonth([...getDaysOfMonth(newMonth)]);
    };

    const goToNextMonth = () => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(currentMonth.getMonth() + 1);
        setCurrentMonth(newMonth);
        
        setDaysOfMonth([...getDaysOfMonth(newMonth)]);
    };

    React.useEffect(() => {
        setDaysOfMonth([...getDaysOfMonth(currentDate)]);
    }, []);


    const handleDayHover = (day) => setHoveredDay(day);

    const addWorkout = () => {
        alert(`Workout added for day ${hoveredDay}`);
    };

    const addCurrentDateStyle = (day) => {
        if(currentDate.getFullYear() === currentMonth.getFullYear()
        && currentDate.getMonth() === currentMonth.getMonth() 
        && currentDate.getDate() === day) {
            return 'text-primary';
        }
    }

    return (
        <>
            <div className="flex items-center justify-center py-4">
                <button
                    className="px-3 py-1 bg-primary text-white rounded-md hover:bg-blue-600"
                    onClick={goToPreviousMonth} >
                    Previous
                </button>
                <div className="mx-4 text-xl font-semibold">
                    {currentMonth.toDateString(undefined, monthOptions)}
                </div>
                <button
                    className="px-3 py-1 bg-primary text-white rounded-md hover:bg-blue-600"
                    onClick={goToNextMonth} >
                    Next
                </button>
            </div>

            <div className="h-full w-fit grid grid-cols-7 gap-1">
                <div className="w-40 h-6 font-bold text-center border border-gray-300">Mon</div>
                <div className="w-40 h-6 font-bold text-center border border-gray-300">Tue</div>
                <div className="w-40 h-6 font-bold text-center border border-gray-300">Wed</div>
                <div className="w-40 h-6 font-bold text-center border border-gray-300">Thu</div>
                <div className="w-40 h-6 font-bold text-center border border-gray-300">Fri</div>
                <div className="w-40 h-6 font-bold text-center border border-gray-300">Sat</div>
                <div className="w-40 h-6 font-bold text-center border border-gray-300">Sun</div>

                {daysOfMonth.map((day) => {
                    if(day <= 0) return (
                        <div
                            key={day}
                            className="w-40 h-40 border-gray-300 bg-gray-400 rounded-lg"
                            onMouseEnter={() => handleDayHover(day)}
                            onMouseLeave={() => handleDayHover(null)} >
                        </div>
                    );

                    return (
                        <div
                            key={day}
                            className="w-40 h-40 flex flex-col justify-stert items-center py-2 px-3 border border-gray-300 hover:bg-gray-200 relative rounded-lg"
                            onMouseEnter={() => handleDayHover(day)}
                            onMouseLeave={() => handleDayHover(null)} >
                            <p className={`w-full text-left font-bold ${addCurrentDateStyle(day)}`}>{day}</p>
                            {hoveredDay === day && (
                                <button
                                    className="px-2 py-1 bg-primary text-white rounded hover:bg-blue-600"
                                    onClick={addWorkout} >
                                    Add Workout
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default WorkoutCalendar;
