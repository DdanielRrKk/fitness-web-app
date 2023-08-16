import React from 'react';

import { useDispatch } from 'react-redux';
import { ReadUserDataObject } from '../../database/user_services';

import SearchBar from '../../components/home/searchBar';
import NutritionBox from '../../components/home/nutritionBox';


function HomePage() {
    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        ReadUserDataObject().then(data => setCurrentUser(data));
    }, [dispatch]);

    console.log('currentUser: ', currentUser);

    // const handleSearch = (searchedValue) => {
    //     console.log('searchedValue: ', searchedValue);
    // }

    return (
        <div className='flex w-full h-full'>
            <div className='w-full h-full bg-secondary p-4'>
                <h1 className='text-xl'>Hello, {currentUser?.name}!</h1>

                <h2 className='subtitle'>Favourites</h2>
                <div>
                    Favourites box
                </div>

                <h2 className='subtitle'>Activity</h2>
                <div>
                    Activity box
                </div>

                <h2 className='subtitle'>Challenges</h2>
                <div>
                    Challenges box
                </div>
            </div>

            <div className='w-1/12 bg-white'>
                <h2>Prifile</h2>

                <div className="rounded-full overflow-hidden w-16 h-16">
                    <img
                        className="w-full h-full object-cover"
                        // src={currentUser?.profilePhoto}
                        src={currentUser?.profilePhoto}
                        alt='users-profile-photo'/>
                </div>
            </div>
        </div>

        // <div className="flex flex-col items-center w-full">
        //     <div className='flex flex-row items-center justify-between w-full bg-white shadow-md'>
        //         <h2>Hello, {currentUser?.name}</h2>
        //         <SearchBar onSearch={handleSearch}/>
        //     </div>

        //     <div className='main-container mt-4'>
        //         <h1>Dashboard</h1>

        //         <div className='grid grid-cols-2 gap-4'>
        //             <div className='flex flex-col gap-4'>
        //                 <NutritionBox />
        //                 <div className='button-container'>Workout tracker</div>
        //             </div>
        //             <div className='flex flex-col gap-4'>
        //                 <div className='button-container'>Weight log</div>
        //                 <div className='button-container'>Meal log</div>
        //                 <div className='button-container'>Workout log</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default HomePage;
