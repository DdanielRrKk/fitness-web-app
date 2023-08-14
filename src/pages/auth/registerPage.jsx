import React from 'react';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/slices/authSlice';
import { setIsUserSetup } from '../../redux/slices/setupSlice';

// import { Link } from 'react-router-dom';
import { CreateUserDataObject } from '../../database/user_services';

function registerPage() {
    const dispatch = useDispatch();

    const [name, setName] = React.useState('');

    const [dietGoal, setDietGoal] = React.useState(null);
    const [activityLevel, setActivityLevel] = React.useState(null);

    const [gender, setGender] = React.useState('0');
    const [age, setAge] = React.useState('');

    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [goalWeight, setGoalWeight] = React.useState('');

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [username, setUsername] = React.useState('');
    
    
    
    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    // const handleGenderChange = (event) => setGender(event.target.value);
    const handleWeightChange = (event) => setWeight(event.target.value);
    const handleHeightChange = (event) => setHeight(event.target.value);

    const handleSubmitOnClick = () => {    
        console.log('User data:', { name, age, gender, weight, height });

        CreateUserDataObject(name, age, gender, weight, height).then((newUser) => {
            console.log('Returned from CreateUserDataObject!');
            dispatch(setCurrentUser(newUser));
            dispatch(setIsUserSetup(true));
        });
    
        setName('');
        setAge('');
        setGender('');
        setWeight('');
        setHeight('');
    };

    return (
        <div className='main-container'>
            <h1 className='text-primary text-2xl font-bold'>Setup user</h1>
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="w-full p-2 border rounded"
                        required />
                </div>
                <div>
                    <label htmlFor="age" className="block font-medium">Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={handleAgeChange}
                        className="w-full p-2 border rounded"
                        required />
                </div>
                <div>
                    <label className="block font-medium">Gender</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                        <input
                            type="radio"
                            value="0"
                            checked={gender === '0'}
                            onChange={() => setGender('0')}
                            className="mr-1"
                            required />
                                Female
                        </label>

                        <label className="flex items-center">
                        <input
                            type="radio"
                            value="1"
                            checked={gender === '1'}
                            onChange={() => setGender('1')}
                            className="mr-1"
                            required />
                                Male
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="weight" className="block font-medium">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={handleWeightChange}
                        className="w-full p-2 border rounded"
                        required />
                </div>
                <div>
                    <label htmlFor="height" className="block font-medium">Height</label>
                    <input
                        type="number"
                        value={height}
                        onChange={handleHeightChange}
                        className="w-full p-2 border rounded"
                        required />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleSubmitOnClick}>
                        Add User
                </button>
            </div>
        </div>
    );
}

export default registerPage;
