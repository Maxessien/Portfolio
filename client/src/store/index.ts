import { configureStore } from '@reduxjs/toolkit';
import windowSizeReducer from './slices/windowSizeSlice';

export const store = configureStore({
  reducer: {
    windowSize: windowSizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
