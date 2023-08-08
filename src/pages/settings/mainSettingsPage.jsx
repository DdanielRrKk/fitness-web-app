import React from 'react';

// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/slices/authSlice';

import { LogoutUser } from '../../database/auth_services';
import { DeleteUserDataObject } from '../../database/user_services';

function MainSettingsPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutUser = () => {
        LogoutUser().then(() => {
            dispatch(setCurrentUser(null));
            navigate('/');
        });
    }
    const handleDeleteUser = () => {
        DeleteUserDataObject().then(() => {
            LogoutUser().then(() => {
                dispatch(setCurrentUser(null));
                navigate('/');
            });
        });
    }

    return (
        <div className='main-container'>
            <p>Editing</p>

            <button 
                className='button-container mt-2'
                onClick={() => console.log('Pressed')}>
                Edit User Data
            </button>
            
            <button 
                className='button-container mt-2'
                onClick={() => console.log('Pressed')}>
                Edit Nutritions Data
            </button>
            
            <button 
                className='button-container mt-2'
                onClick={() => console.log('Pressed')}>
                Edit Workout Plan
            </button>
            
            <button 
                className='text-red-500 text-left mt-2'
                onClick={() => console.log('Pressed')}>
                Reset Meal Setup
            </button>
            
            <button 
                className='text-red-500 text-left mt-2'
                onClick={() => console.log('Pressed')}>
                Reset Workout Setup
            </button>
            
            <button 
                className='text-red-500 text-left mt-2'
                onClick={handleLogoutUser}>
                Logout
            </button>
            
            <button 
                className='text-red-500 text-left mt-6'
                onClick={handleDeleteUser}>
                Delete
            </button>
        </div>
    );
}

export default MainSettingsPage;
