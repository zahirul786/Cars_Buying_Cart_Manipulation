import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './CarsSlice'
const FormSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        })
    }
});

export const { changeName, changeCost } = FormSlice.actions;
export const formReducer = FormSlice.reducer;