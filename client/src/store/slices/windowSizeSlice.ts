import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WindowSizeState {
  width: number;
  height: number;
}

const initialState: WindowSizeState = {
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0,
};

const windowSizeSlice = createSlice({
  name: 'windowSize',
  initialState,
  reducers: {
    setWindowSize: (state, action: PayloadAction<{ width: number; height: number }>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { setWindowSize } = windowSizeSlice.actions;
export default windowSizeSlice.reducer;
