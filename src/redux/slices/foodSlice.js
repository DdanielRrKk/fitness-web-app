import { createSlice } from '@reduxjs/toolkit'

import DefaultUserImage from '../../assets/default-user.png';

const initialState = {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: [],
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setBreakfast: (state, action) => {
      state.Breakfast = action.payload; 
    },
    addBreakfast: (state, action) => {
        state.Breakfast.push(action.payload);
    },
    setLunch: (state, action) => {
        state.Lunch = action.payload; 
      },
    addLunch: (state, action) => {
        state.Lunch.push(action.payload);
    },
    setDinner: (state, action) => {
        state.Dinnerh = action.payload; 
      },
    addDinnerh: (state, action) => {
        state.Dinnerh.push(action.payload);
    },
    setSnacks: (state, action) => {
        state.Snacks = action.payload; 
    },
    addSnacks: (state, action) => {
        state.Snacks.push(action.payload);
    },
}});

export const { setBreakfast, addBreakfast, setLunch, addLunch, setDinner, addDinnerh, setSnacks, addSnacks } = foodSlice.actions;
export default foodSlice.reducer;