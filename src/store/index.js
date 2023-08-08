import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/FormSlice";
import { carsReducer, addCar, removeCar, changeSearchItem } from "./slices/CarsSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});


export { store, changeName, changeCost, changeSearchItem, addCar, removeCar };

