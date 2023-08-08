import { createSlice, nanoid } from "@reduxjs/toolkit";
const CarsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchItem: '',
        data: []
    },
    reducers: {
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;
        },
        changeSearchItem(state, action) {
            state.searchItem = action.payload;
        }
    }
});

export const { addCar, removeCar, changeSearchItem } = CarsSlice.actions;
export const carsReducer = CarsSlice.reducer;