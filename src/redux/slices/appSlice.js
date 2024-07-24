import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  // Your initial state here
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Your reducers here
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
