import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice ({

    name: 'Counter',
    initialState: {
        value: 0,
    },

    reducers : {

        increament: (state) => {
            state.value = state.value + 1
        },

        decreament: (state) => {
            state.value = state.value - 1
        },

        customInput: (state, action) => {
            state.value = action.payload;
        }

    }
})


export const {increament, decreament, customInput} = counterSlice.actions;
export default counterSlice.reducer;