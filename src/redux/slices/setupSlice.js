import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  isUserSetup: false,
  isMealSetup: false,
  isWorkoutSetup: false,
};

const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload; 
    },
    setIsUserSetup: (state, action) => {
      state.isUserSetup = action.payload;
    },
    setIsMealSetup: (state, action) => {
      state.isMealSetup = action.payload;
    },
    setIsWorkoutSetup: (state, action) => {
      state.isWorkoutSetup = action.payload;
    },
  },
});

export const { setIsAuthenticated, setIsUserSetup, setIsMealSetup, setIsWorkoutSetup } = setupSlice.actions;
export default setupSlice.reducer;