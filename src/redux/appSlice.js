import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        logUserIn: (state) => {
            state.isLoggedIn = true;
        },
        logUserOut: (state) => {
            state.isLoggedIn = false;
        },
    },
});

export const { logUserIn, logUserOut } = appSlice.actions;

export default appSlice.reducer;
