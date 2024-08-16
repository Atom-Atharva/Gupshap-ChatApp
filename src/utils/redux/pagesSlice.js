import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    chatObject: null,
    newGroup: false,
  },

  reducers: {
    toggleChatObject: (state, action) => {
      if (state.chatObject?._id === action.payload?._id) {
        state.chatObject = null;
        return;
      }
      state.newGroup = false;
      state.chatObject = action.payload;
      return;
    },
    toggleNewGroup: (state, action) => {
      state.chatObject = null;
      state.newGroup = !state.newGroup;
      return;
    },
  },
});

export const { toggleChatObject, toggleNewGroup } = pagesSlice.actions;

export default pagesSlice.reducer;
