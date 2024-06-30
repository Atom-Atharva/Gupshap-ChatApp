import { createSlice } from "@reduxjs/toolkit";

export const triggerSlice = createSlice({
  name: "trigger",
  initialState: {
    updateFlag: 0,
  },
  reducers: {
    triggerRerender: (state) => {
      state.updateFlag = !state.updateFlag;
    },
  },
});

export const { triggerRerender } = triggerSlice.actions;

export default triggerSlice.reducer;
