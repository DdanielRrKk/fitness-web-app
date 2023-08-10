import React from 'react';

// import { Link } from 'react-router-dom';

import { CreateMealDataLog } from '../../database/meal_services';

import NutritionGoalsBox from '../../components/meal/nutritionGoalsBox';
import WaterBox from '../../components/meal/waterBox';
import MealBox from '../../components/meal/mealBox';


function MainMealPage() {
    const [showPopup, setShowPopup] = React.useState(false);
    const [namePopup, setNamePopup] = React.useState('');
    
    const [name, setName] = React.useState('');
    const [grams, setGrams] = React.useState('');
    const [carbs, setCarbs] = React.useState('');
    const [protein, setProtein] = React.useState('');
    const [fat, setFat] = React.useState('');


    const handleBreakfastPopupClick = () => {
        setNamePopup('Breakfast');
        setShowPopup(true);
    }
    const handleLunchPopupClick = () => {
        setNamePopup('Lunch');
        setShowPopup(true);
    }
    const handleDinnerPopupClick = () => {
        setNamePopup('Dinner');
        setShowPopup(true);
    }
    const handleSnackPopupClick = () => {
        setNamePopup('Snack');
        setShowPopup(true);
    }

    const handleNameChange = (e) => setName(e.target.value);
    const handleGramsChange = (e) => setGrams(e.target.value);
    const handleCarbsChange = (e) => setCarbs(e.target.value);
    const handlProteinChange = (e) => setProtein(e.target.value);
    const handlFatChange = (e) => setFat(e.target.value);

    const handleOutsideClick = () => setShowPopup(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform actions with the input values
        console.log('name: ', name);
        console.log('grams: ', grams);
        console.log('carbs: ', carbs);
        console.log('protein: ', protein);
        console.log('fat: ', fat);

        CreateMealDataLog(name, grams, carbs, protein, fat);

        // Close the popup
        setShowPopup(false);
    };

    return (
        <div className='main-container'>
            <NutritionGoalsBox 
                calories={100}
                carbs={20}
                protein={30}
                fat={15}
                caloriesGoal={3000}
                carbsGoal={350}
                proteinGoal={150}
                fatGoal={160}/>
            
            <p>Water</p>

            <WaterBox 
                addWater={() => {console.log('Add water')}}
                removeWater={() => {console.log('Remove water')}}
                water={250}/>

            <p>Meals</p>

            <MealBox onClick={handleBreakfastPopupClick} title="Breakfast"/>
            <MealBox onClick={handleLunchPopupClick} title="Lunch"/>
            <MealBox onClick={handleDinnerPopupClick} title="Dinner"/>
            <MealBox onClick={handleSnackPopupClick} title="Snack"/>

            {showPopup && (
                <div onClick={handleOutsideClick} className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-lg font-semibold mb-4">{namePopup}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                className="w-full p-2 border rounded"
                                placeholder="Name"
                                required />
                                
                            <input
                                type="number"
                                value={grams}
                                onChange={handleGramsChange}
                                className="w-full p-2 border rounded"
                                placeholder="Grams"
                                required />

                            <input
                                type="number"
                                value={carbs}
                                onChange={handleCarbsChange}
                                className="w-full p-2 border rounded"
                                placeholder="Carbs (g)"
                                required />
                                
                            <input
                                type="number"
                                value={protein}
                                onChange={handlProteinChange}
                                className="w-full p-2 border rounded"
                                placeholder="Protein (g)"
                                required />
                                
                            <input
                                type="number"
                                value={fat}
                                onChange={handlFatChange}
                                className="w-full p-2 border rounded"
                                placeholder="Fat (g)"
                                required />

                            <button 
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainMealPage;
