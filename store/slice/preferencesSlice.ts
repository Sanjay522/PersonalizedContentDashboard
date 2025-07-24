// /store/slices/preferencesSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = preferencesSlice.actions;
export default preferencesSlice.reducer;
