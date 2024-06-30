import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pagesReducer from "./pagesSlice";
import triggerReducer from "./homeupdateSlice";
import groupReducer from "./groupupdateSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    pages: pagesReducer,
    trigger: triggerReducer,
    grouptrig: groupReducer,
  },
});

export default appStore;
