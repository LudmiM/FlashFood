import { configureStore } from "@reduxjs/toolkit";
import userreducer from './slices/usersSlices'

export const store = configureStore({
    reducer: {
        users: userreducer
    }
})