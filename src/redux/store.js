import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice'; // Adjust the import path as needed

export const store = configureStore({
  reducer: {
    app: appReducer,
    // Add other reducers here if you have them
  },
});
