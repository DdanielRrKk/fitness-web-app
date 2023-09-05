import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ReadUserDataObject } from '../../database/user_services';

import { Link } from 'react-router-dom';

import Calendar from '../../components/home/calendar';
import TaskList from '../../components/home/taskList';
import FoodPopup from '../../components/popup/enterFoodPopup';

import StepsVerticalBarChart from '../../components/home/stepsVerticalBarChart';
import CaloriesCircularProgressBar from '../../components/home/caloriesCircularProgressBar';
import WorkoutBox from '../../components/home/workoutBox';
import ChallengeBox from '../../components/home/challengeBox';


function HomePage() {
    const dispatch = useDispatch();

    const [showPopupsFlag, setShowPopupsFlag] = React.useState(0);

    const user = useSelector(state => state.user);
    console.log('user Home: ', user);

    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        ReadUserDataObject().then(data => setCurrentUser(data));
    }, [dispatch]);

    console.log('currentUser: ', currentUser);

    // const handleSearch = (searchedValue) => {
    //     console.log('searchedValue: ', searchedValue);
    // }
    const handleOpenFoodPopup = () => setShowPopupsFlag(1);

    const handleEnterSteps = () => console.log('Enter Steps');
    const handleEnterFood = (foodItem) => {
        console.log('Food Item: ', foodItem);
    }
    const handleEnterWorkout = () => console.log('Enter Workout');
    const handleEnterSleep = () => console.log('Enter Sleep');
    const handleEnterWater = () => console.log('Enter Water');


    return (
        <div className='flex w-full h-full'>
            <div className='main-container'>
                <h1 className='text-4xl mb-4'>Hello, {currentUser?.FirstName}!</h1>

                <h2 className='subtitle'>Quick Access</h2>
                <div className='flex justify-evenly w-full'>
                    <button 
                        className='quick-access-button'
                        onClick={null}>
                        Enter Steps
                    </button>
                    
                    <button 
                        className='quick-access-button'
                        onClick={handleOpenFoodPopup}>
                        Enter Food
                    </button>
                    
                    <button 
                        className='quick-access-button'
                        onClick={null}>
                        Enter Workout
                    </button>
                    
                    <button 
                        className='quick-access-button'
                        onClick={null}>
                        Enter Sleep
                    </button>
                    
                    <button 
                        className='quick-access-button'
                        onClick={null}>
                        Enter Water
                    </button>
                </div>

                {/* <h2 className='subtitle'>Favourites</h2>
                <div>
                    Favourites box
                </div> */}

                <h2 className='subtitle'>Activity</h2>
                <div className='flex w-full justify-evenly'>
                    <StepsVerticalBarChart data={null}/>

                    <CaloriesCircularProgressBar width={250} totalCalories={1500} targetCalories={2700}/>

                    <WorkoutBox onClick={() => console.log('click')}/>
                </div>

                <h2 className='subtitle'>Challenges</h2>
                <ChallengeBox />
            </div>

            <div className='w-3/12'>
                <div className='fixed w-3/12 p-4 text-center bg-white'>
                    <h2 className='subtitle'>Prifile</h2>

                    <Link 
                        className="w-32 h-32 inline-block rounded-full overflow-hidden"
                        to={'/profile'}>
                        <img
                            className="w-full h-full object-cover"
                            // src={currentUser?.profilePhoto}
                            src={currentUser?.PhotoURL}
                            alt='users-profile-photo'/>
                    </Link>

                    <h2 className='text-3xl font-bold'>{currentUser?.FirstName} {currentUser?.LastName}</h2>
                
                    <h2 className='subtitle mt-8 mb-4'>Calendar</h2>

                    <Calendar />
                    
                    <h2 className='subtitle mt-8 mb-4'>Scheduled</h2>

                    <TaskList />
                </div>
            </div>

            {   showPopupsFlag == 0 ? null :
                showPopupsFlag == 1 ?
                    <FoodPopup 
                        handleSetShowPopup={setShowPopupsFlag}
                        handleEnterFood={handleEnterFood}/>
                    :
                    null

            }
        </div>
    );
}

export default HomePage;
