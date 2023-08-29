import React from 'react';

import { PieChart, Pie, Tooltip, Cell } from 'recharts';



function NutritionPieChart({ foodData, isFull }) {
    const totals = {
        TotalCarbohydrate: 0,
        Protein: 0,
        TotalFat: 0,
        SaturatedFat: 0,
        TransFat: 0,
        Cholesterol: 0,
        Sodium: 0,
        Potassium: 0,
        DietaryFiber: 0,
        Sugars: 0,
        VitaminA: 0,
        VitaminC: 0,
        Calcium: 0,
        Iron: 0
    }

    foodData.forEach((food) => {
        totals.TotalCarbohydrate += food.TotalCarbohydrate;
        totals.Protein += food.Protein;
        totals.TotalFat += food.TotalFat;
        totals.SaturatedFat += food.SaturatedFat;
        totals.TransFat += food.TransFat;
        totals.Cholesterol += food.Cholesterol;
        totals.Sodium += food.Sodium;
        totals.Potassium += food.Potassium;
        totals.DietaryFiber += food.DietaryFiber;
        totals.Sugars += food.Sugars;
        totals.VitaminA += food.VitaminA;
        totals.VitaminC += food.VitaminC;
        totals.Calcium += food.Calcium;
        totals.Iron += food.Iron;
    });

    const dataFull = [
        { name: 'TotalCarbohydrate', value: totals.TotalCarbohydrate },
        { name: 'Protein', value: totals.Protein },
        { name: 'TotalFat', value: totals.TotalFat },
        { name: 'SaturatedFat', value: totals.SaturatedFat },
        { name: 'TransFat', value: totals.TransFat },
        { name: 'Cholesterol', value: totals.Cholesterol },
        { name: 'Sodium', value: totals.Sodium },
        { name: 'Potassium', value: totals.Potassium },
        { name: 'DietaryFiber', value: totals.DietaryFiber },
        { name: 'Sugars', value: totals.Sugars },
        { name: 'VitaminA', value: totals.VitaminA },
        { name: 'VitaminC', value: totals.VitaminC },
        { name: 'Calcium', value: totals.Calcium },
        { name: 'Iron', value: totals.Iron }
    ];
    const dataNotFull = [
        { name: 'TotalCarbohydrate', value: totals.TotalCarbohydrate },
        { name: 'Protein', value: totals.Protein },
        { name: 'TotalFat', value: totals.TotalFat },
    ];
    
    const COLORS = [
        '#FF5733', 
        '#33F057', 
        '#5733FF', 
        '#823357', 
        '#3388FF', 
        '#FF2F33', 
        '#3357FF', 
        '#57FF33', 
        '#FF5F33', 
        '#33FF57', 
        '#FF3357', 
        '#33F27F', 
        '#FFFF33', 
        '#33FFFF'
    ];

    const getNutritionLabel = (index) => {
        switch (index) {
            case 0: return 'TotalCarbohydrate';
            case 1: return 'Protein';
            case 2: return 'TotalFat';
            case 3: return 'SaturatedFat';
            case 4: return 'TransFat';
            case 5: return 'Cholesterol';
            case 6: return 'Sodium';
            case 7: return 'Potassium';
            case 8: return 'DietaryFiber';
            case 9: return 'Sugars';
            case 10: return 'VitaminA';
            case 11: return 'VitaminC';
            case 12: return 'Calcium';
            case 13: return 'Iron';
            default: return 'none';
        }
    }
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabelNonFull = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill='black' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                <tspan x={x} dy="1.2em">
                    {getNutritionLabel(index)}
                </tspan>
                <tspan x={x} dy="1.2em">
                    {`${(percent * 100).toFixed(0)}%`}
                </tspan>
            </text>
        );
    };
    const renderCustomizedLabelFull = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text  x={x} y={y} fill='black' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={{padding: '50px'}}>
                {`${getNutritionLabel(index)}: ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    if(isFull) {
        return (
            <PieChart width={600} height={400} title='Nutrition' style={{padding: '10px', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Pie
                    dataKey="value"
                    data={dataFull}
                    cx="50%"
                    cy="50%"
                    label={renderCustomizedLabelFull}
                    color='#8884d8'>
                        {dataFull.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                </Pie>

                <Tooltip />
            </PieChart>
        );
    }

    return (
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                data={dataNotFull}
                cx="50%"
                cy="50%"
                label={renderCustomizedLabelNonFull}
                labelLine={false}
                color='#8884d8'>
                    {dataNotFull.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
            </Pie>

            <Tooltip />
        </PieChart>
    );
};

export default NutritionPieChart;
