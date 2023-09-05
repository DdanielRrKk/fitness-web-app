import React from 'react';

// import { Link } from 'react-router-dom';

import WaterBox from '../../components/meal/waterBox';

import NutritionTable from '../../components/meal/nutritionTable';
import NutritionPieChart from '../../components/meal/nutritionPieChart';

import FoodPopup from '../../components/popup/enterFoodPopup';

import { FOOD_LOG_DATA } from '../../helpers/test_data';


function MainMealPage() {
    const [showPopupFlag, setShowPopupFlag] = React.useState(false);
    const [showFullNutritionChart, setShowFullNutritionChart] = React.useState(false);

    const [popupType, setPopupType] = React.useState('');
    
    const [foodItems, setFoodItems] = React.useState(FOOD_LOG_DATA);
    const [water, setWater] = React.useState(0);


    const handleShowNutritionChartChange = () => setShowFullNutritionChart(!showFullNutritionChart);

    const handleAddWater = (value) => {
        console.log('Add water: ', value);
        setWater(water + value);
    }
    const handleRemoveWater = (value) => {
        console.log('Remove water: ', value);
        const temp = water - value;
        setWater(temp >= 0 ? temp : 0);
    }

    const handleBreakfastPopupClick = () => {
        setPopupType('Breakfast'); setShowPopupFlag(true);
    }
    const handleLunchPopupClick = () => {
        setPopupType('Lunch'); setShowPopupFlag(true);
    }
    const handleDinnerPopupClick = () => {
        setPopupType('Dinner'); setShowPopupFlag(true);
    }
    const handleSnackPopupClick = () => {
        setPopupType('Snack'); setShowPopupFlag(true);
    }


    const handleEnterFood = (foodItem) => {
        console.log('Food Item: ', foodItem);
        setFoodItems([...foodItems, foodItem]);
    }

    

    return (
        <div className='main-container max-h-fit min-h-full'>
            <WaterBox 
                addWater={handleAddWater}
                removeWater={handleRemoveWater}
                water={water}/>

            <div className='flex justify-evenly w-full my-4'>
                    <button 
                        className='quick-access-button'
                        onClick={handleBreakfastPopupClick}>
                        Enter Breakfast
                    </button>
                    
                    <button 
                        className='quick-access-button'
                        onClick={handleLunchPopupClick}>
                        Enter Lunch
                    </button>
                    
                    <button 
                        className='quick-access-button'
                        onClick={handleDinnerPopupClick}>
                        Enter Dinner
                    </button>
                    
                    <button 
                        className='quick-access-button'
                        onClick={handleSnackPopupClick}>
                        Enter Snacks
                    </button>
                </div>

            <NutritionTable foodData={foodItems}/>
            
            <div className='flex flex-col items-center w-full h-auto mt-4'>
                <button className='quick-access-button w-full' onClick={handleShowNutritionChartChange}>
                    {showFullNutritionChart ? 'Hide Advanced Nutrition' : 'Full Nutrition Chart'}
                </button>
                <NutritionPieChart foodData={foodItems} isFull={showFullNutritionChart}/>
            </div>

            { !showPopupFlag ? null :
                <FoodPopup 
                    handleSetShowPopup={setShowPopupFlag}
                    handleEnterFood={handleEnterFood}
                    receivedType={popupType}/>
            }
        </div>
    );
}

export default MainMealPage;
