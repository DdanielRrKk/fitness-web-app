import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import setupReducer from './slices/setupSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    setup: setupReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;