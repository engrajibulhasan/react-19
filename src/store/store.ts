import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export const store=configureStore({
    reducer:{
        coun:counterSlice.reducer
    }
})


export type Rootstate=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;