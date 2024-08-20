import { common } from "@/constants/common";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false, 
  loading: false,
};

const commonSlice = createSlice({
  name: common,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { startLoading, stopLoading ,setLoading} = commonSlice.actions;

export default commonSlice.reducer;
