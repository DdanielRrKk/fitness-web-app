import React from 'react';

function WaterBox({ 
    addWater,
    removeWater,
    water
}) {
    const [addCustomWater, setAddCustomWater] = React.useState(null);
    const [removeCustomWater, setRemoveCustomWater] = React.useState(null);

    const handleAddCustomWaterChange = (event) => setAddCustomWater(event.target.value);
    const handleRemoveCustomWaterChange = (event) => setRemoveCustomWater(event.target.value);

    const handleAdd = (value) => {
        if(value === null || value === '') return;
        addWater(parseInt(value));
        setAddCustomWater('');
    }
    const handleRemove = (value) => {
        if(value === null || value === '') return;
        removeWater(parseInt(value));
        setRemoveCustomWater('');
    }

    return (
        <div className='button-container flex-row justify-between p-4'>
            <div className='w-1/3 flex flex-col gap-4'>
                <p>Add Water</p>

                <div className='w-full flex flex-row gap-2'>
                    <button 
                        className='px-3 py-1 bg-primary text-white text-center rounded-md'
                        onClick={() => handleAdd(250)}>
                        + 250 ml
                    </button>
                    
                    <button 
                        className='px-3 py-1 bg-primary text-white text-center rounded-md'
                        onClick={() => handleAdd(500)}>
                        + 500 ml
                    </button>
                    
                    <button 
                        className='px-3 py-1 bg-primary text-white text-center rounded-md'
                        onClick={() => handleAdd(1000)}>
                        + 1 L
                    </button>
                </div>

                <div className='w-full flex flex-row gap-2 items-center'>
                    <p className='mr-2'>Add Custom: </p>
                    
                    <input 
                        className="w-3/12 p-2 border mb-2" 
                        type="number" 
                        placeholder="Milliliters" 
                        value={addCustomWater}
                        onChange={handleAddCustomWaterChange} />

                    <button 
                        className='px-3 py-1 bg-primary text-white text-center rounded-md'
                        onClick={() => handleAdd(addCustomWater)}>
                        Add
                    </button>
                </div>
            </div>
            
            <div className='w-1/3 flex flex-col justify-center items-center gap-1'>
                <p className='font-semibold text-lg'>Total Water Consumption</p>
                <p className='font-bold text-2xl'>{water} ml</p>
            </div>

            <div className='w-1/3 flex flex-row gap-2 justify-end items-center'>
                    <p className='mr-2'>Remove Custom: </p>
                    
                    <input 
                        className="w-3/12 p-2 border mb-2" 
                        type="number" 
                        placeholder="Milliliters" 
                        value={removeCustomWater}
                        onChange={handleRemoveCustomWaterChange} />

                    <button 
                        className='px-3 py-1 bg-primary text-white text-center rounded-md'
                        onClick={() => handleRemove(removeCustomWaters)}>
                        Remove
                    </button>
                </div>
        </div>
    );
}

export default WaterBox;
