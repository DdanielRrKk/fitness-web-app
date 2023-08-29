import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import setupReducer from './slices/setupSlice';

import userReducer from './slices/userSlice';
import foodReducer from './slices/foodSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    setup: setupReducer,
    user: userReducer,
    food: foodReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;