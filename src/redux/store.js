import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const preloadedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

export default configureStore({
    reducer: {
        app: appSlice,
    },
    preloadedState,
});
