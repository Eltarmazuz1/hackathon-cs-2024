import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  // Your initial state here
  loading: false,
  user: null,
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Your reducers here
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setLoading, setUser, setError} = appSlice.actions;
export default appSlice.reducer;
