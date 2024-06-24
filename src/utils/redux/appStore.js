import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pagesReducer from "./pagesSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        pages: pagesReducer,
    },
});

export default appStore;
