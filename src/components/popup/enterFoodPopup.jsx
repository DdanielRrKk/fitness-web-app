import React from 'react';

function FoodPopup({ handleSetShowPopup, handleEnterFood }) {
    const [wantToAddNutrients, setWantToAddNutrients] = React.useState(false);
    const popupRef = React.useRef(null);

    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [calories, setCalories] = React.useState('');
    const [carbs, setCarbs] = React.useState('');
    const [protein, setProtein] = React.useState('');
    const [totalFat, setTotalFat] = React.useState('');
    const [saturatedFat, setSaturatedFat] = React.useState('');
    const [transFat, setTransFat] = React.useState('');
    const [cholesterol, setCholesterol] = React.useState('');
    const [sodium, setSodium] = React.useState('');
    const [potasium, setPotasium] = React.useState('');
    const [fiber, setFiber] = React.useState('');
    const [sugar, setSugar] = React.useState('');
    const [vitaminA, setVitaminA] = React.useState('');
    const [vitaminC, setVitaminC] = React.useState('');
    const [calcium, setCalcium] = React.useState('');
    const [iron, setIron] = React.useState('');


    React.useEffect(() => {
        const handleOutsideClick = (e) => { if (popupRef.current && !popupRef.current.contains(e.target)) handleSetShowPopup(0); };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);


    const toggleNutrients = () => setWantToAddNutrients(!wantToAddNutrients);
    
    const handleNameChange = (event) => setName(event.target.value);
    const handleTypeChange = (event) => setType(event.target.value);
    const handleCaloriesChange = (event) => setCalories(event.target.value);
    const handleCarbsChange = (event) => setCarbs(event.target.value);
    const handleProteinChange = (event) => setProtein(event.target.value);
    const handleTotalFatChange = (event) => setTotalFat(event.target.value);
    const handleSaturatedFatChange = (event) => setSaturatedFat(event.target.value);
    const handleTransFatChange = (event) => setTransFat(event.target.value);
    const handleCholesterolChange = (event) => setCholesterol(event.target.value);
    const handleSodiumChange = (event) => setSodium(event.target.value);
    const handlePotasiumChange = (event) => setPotasium(event.target.value);
    const handleFiberChange = (event) => setFiber(event.target.value);
    const handleSugarChange = (event) => setSugar(event.target.value);
    const handleVitaminAChange = (event) => setVitaminA(event.target.value);
    const handleVitaminCChange = (event) => setVitaminC(event.target.value);
    const handleCalciumChange = (event) => setCalcium(event.target.value);
    const handleIronChange = (event) => setIron(event.target.value);

    const handleSubmitFoodItem = () => {
        handleEnterFood({
            Name: name,
            Type: type,
            Calories: calories,
            TotalCarbohydrate: carbs,
            Protein: protein,
            TotalFat: totalFat,
            SaturatedFat: saturatedFat,
            TransFat: transFat,
            Cholesterol: cholesterol,
            Sodium: sodium,
            Potassium: potasium,
            DietaryFiber: fiber,
            Sugar: sugar,
            VitaminA: vitaminA,
            VitaminC: vitaminC,
            Calcium: calcium,
            Iron: iron
        });
        handleSetShowPopup(0);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <form 
                ref={popupRef} 
                className="flex flex-col w-1/3 p-4 rounded shadow-md bg-white"
                onSubmit={handleSubmitFoodItem}>
                <h2 className="text-lg font-semibold mb-2 text-center">Enter Food</h2>
                <p>Type:</p>
                <select 
                    className="w-full p-2 border mb-2"
                    value={type}
                    onChange={handleTypeChange}
                    required>
                    <option value="">---Select---</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Mourning Snack">Snack</option>
                </select>

                <div className='flex items-center justify-between'>
                    <p className='mr-2'>Name: </p>
                    <input 
                        className="w-3/12 p-2 border mb-2" 
                        type="text" 
                        placeholder="Name" 
                        value={name}
                        onChange={handleNameChange} 
                        required/>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='mr-2'>Calories per serving (kcal): </p>
                    <input 
                        className="w-3/12 p-2 border mb-2" 
                        type="number" 
                        placeholder="Calories" 
                        value={calories}
                        onChange={handleCaloriesChange} 
                        required/>
                </div>
                
                {!wantToAddNutrients ?
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2"
                        onClick={toggleNutrients} 
                        >
                        Add Nutrients
                    </button>
                    :
                    <div className='grid grid-cols-2 gap-1'>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Total Carbohydrate (g): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Total Carbohydrate" 
                                value={carbs}
                                onChange={handleCarbsChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Protein (g): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Protein" 
                                value={protein}
                                onChange={handleProteinChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Total Fat (g): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Total Fat" 
                                value={totalFat}
                                onChange={handleTotalFatChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Saturated Fat (g): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Saturated Fat" 
                                value={saturatedFat}
                                onChange={handleSaturatedFatChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Trans Fat (g): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Trans Fat" 
                                value={transFat}
                                onChange={handleTransFatChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Cholesteronl (mg): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Cholesteronl" 
                                value={cholesterol}
                                onChange={handleCholesterolChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Sodium (mg): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Sodium" 
                                value={sodium}
                                onChange={handleSodiumChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Potasium (mg): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Potasium" 
                                value={potasium}
                                onChange={handlePotasiumChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Dietary Fiber (g): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Dietary Fiber" 
                                value={fiber}
                                onChange={handleFiberChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Sugars (g): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Sugars" 
                                value={sugar}
                                onChange={handleSugarChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Vitamin A (%): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Vitamin A" 
                                value={vitaminA}
                                onChange={handleVitaminAChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Vitamin C (%): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Vitamin C" 
                                value={vitaminC}
                                onChange={handleVitaminCChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Calcium (%): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Calcium" 
                                value={calcium}
                                onChange={handleCalciumChange} 
                                required={wantToAddNutrients}/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mr-2'>Iron (%): </p>
                            <input 
                                className="w-3/12 p-2 border mb-2" 
                                type="number" 
                                placeholder="Iron" 
                                value={iron}
                                onChange={handleIronChange} 
                                required={wantToAddNutrients}/>
                        </div>
                    </div>
                }

                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FoodPopup;
