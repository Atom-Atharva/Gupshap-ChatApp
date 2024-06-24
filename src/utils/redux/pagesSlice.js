import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
    name: "pages",
    initialState: {
        chatId: null,
        newGroup: false,
    },

    reducers: {
        toggleChatId: (state, action) => {
            if (state.chatId === action.payload) {
                state.chatId = null;
                return;
            }
            state.newGroup = false;
            state.chatId = action.payload;
            return;
        },
        toggleNewGroup: (state, action) => {
            state.chatId = null;
            state.newGroup = !state.newGroup;

            return;
        },
    },
});

export const { toggleChatId, toggleNewGroup } = pagesSlice.actions;

export default pagesSlice.reducer;
