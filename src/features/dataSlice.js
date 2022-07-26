import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        list: [],
    },
    reducers: {
        del: (state, action) => {
            delete state.list[action.payload];
            const results = state.list.filter((element) => {
                return element !== undefined;
            });
            state.list = results;
        },
        add: (state, action) => {
            state.list.push(action.payload);
        },
    },
});

export const { add, del, update } = dataSlice.actions;

export default dataSlice.reducer;
