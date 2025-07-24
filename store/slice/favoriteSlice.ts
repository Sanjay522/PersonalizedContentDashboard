// store/slice/favoriteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number[] = typeof window !== 'undefined' && localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites')!)
  : [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const updated = state.filter(id => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
