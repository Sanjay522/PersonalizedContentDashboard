// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from './slice/preferencesSlice';
import { contentApi } from '@/store/slice/apiSlice'; 
import searchReducer from "@/store/slice/searchSlice";
import favoriteReducer from '@/store/slice/favoriteSlice';



export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    search:searchReducer,
        favorites: favoriteReducer,

    [contentApi.reducerPath]: contentApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
