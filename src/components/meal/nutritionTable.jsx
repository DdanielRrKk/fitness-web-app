import React from 'react';

function NutritionTable({ foodData }) {
  // Initialize totals for each nutrient
  const totals = {
    Breakfast: { Calories: 0, Carbohydrate: 0, Protein: 0, Fat: 0 },
    Lunch: { Calories: 0, Carbohydrate: 0, Protein: 0, Fat: 0 },
    Dinner: { Calories: 0, Carbohydrate: 0, Protein: 0, Fat: 0 },
    Snacks: { Calories: 0, Carbohydrate: 0, Protein: 0, Fat: 0 },
  };

  // Calculate totals based on food data
  foodData.forEach((food) => {
    const { Type, Calories, TotalCarbohydrate, Protein, TotalFat } = food;
    totals[Type].Calories += Calories;
    totals[Type].Carbohydrate += TotalCarbohydrate;
    totals[Type].Protein += Protein;
    totals[Type].Fat += TotalFat;
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <table className="w-full text-center">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border-black border">Type</th>
            <th className="py-2 px-4 border-black border">Calories</th>
            <th className="py-2 px-4 border-black border">Carbohydrate (g)</th>
            <th className="py-2 px-4 border-black border">Protein (g)</th>
            <th className="py-2 px-4 border-black border">Fat (g)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(totals).map((mealType) => (
            <tr key={mealType}>
              <td className="py-2 px-4 border-black border w-1/5 font-semibold">{mealType}</td>
              <td className="py-2 px-4 border-black border w-1/5">{totals[mealType].Calories}</td>
              <td className="py-2 px-4 border-black border w-1/5">{totals[mealType].Carbohydrate}</td>
              <td className="py-2 px-4 border-black border w-1/5">{totals[mealType].Protein}</td>
              <td className="py-2 px-4 border-black border w-1/5">{totals[mealType].Fat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NutritionTable;
