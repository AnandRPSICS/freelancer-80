import {configureStore} from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import paymentReducer from "./slices/paymentSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        payment: paymentReducer
    }
})

export {store};