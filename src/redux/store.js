import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import setupReducer from './slices/setupSlice';

import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    setup: setupReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;