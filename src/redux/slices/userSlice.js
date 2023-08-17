import { createSlice } from '@reduxjs/toolkit'

import DefaultUserImage from '../../assets/default-user.png';

const initialState = {
    Name: '', // string
    PhotoURL: DefaultUserImage, // string
    DateOfBirth: '', // daate in format YYYY-MM-DD
    Gender: '', // string 'male' / 'female'
    CurrentWeight: 0, // double in  kg
    Height: 0, // int in cm
    ActivityLevel: 0, // int 1 - 5 (1 - sedentary, 5 - very active)

    StepsGoal: 0, // int in steps
    CaloriesGoal: 0, // int in kcal
    SleepGoal: 0, // int in hours
    WaterGoal: 0, // int in ml

    Badges: [], // array of badges
    PersonalRecords: [], // array of personal records
    LastUpdatedAt: '', // date in format YYYY-MM-DD:HH:MM:SS.MS
    CreatedAt: '', // date in format YYYY-MM-DD:HH:MM:SS.MS
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload; 
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;