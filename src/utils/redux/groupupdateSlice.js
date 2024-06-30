import { createSlice } from "@reduxjs/toolkit";

export const GroupupSlice = createSlice({
  name: "grouptrig",
  initialState: {
    Flag: 0,
  },
  reducers: {
    groupRerender: (state) => {
      state.Flag = !state.Flag;
    },
  },
});

export const { groupRerender } = GroupupSlice.actions;

export default GroupupSlice.reducer;
