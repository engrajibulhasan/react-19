import { createSlice } from "@reduxjs/toolkit";
interface CounterStateTypes{
    value:number;
}

const initialState:CounterStateTypes={
    value:0,
    }
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        }

    }
})

export default counterSlice;
export const {increament,decrement}=counterSlice.actions;