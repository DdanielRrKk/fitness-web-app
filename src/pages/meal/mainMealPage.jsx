import React from 'react';

// import { Link } from 'react-router-dom';

import NutritionGoalsBox from '../../components/meal/nutritionGoalsBox';
import WaterBox from '../../components/meal/waterBox';
import MealBox from '../../components/meal/mealBox';


function MainMealPage() {

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

            <MealBox onClick={() => {console.log('Breakfast')}} title="Breakfast"/>
            <MealBox onClick={() => {console.log('Lunch')}} title="Lunch"/>
            <MealBox onClick={() => {console.log('Dinner')}} title="Dinner"/>
            <MealBox onClick={() => {console.log('Snack')}} title="Snack"/>

        </div>
    );
}

export default MainMealPage;
