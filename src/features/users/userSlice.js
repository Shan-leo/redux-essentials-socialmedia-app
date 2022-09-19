import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name:"Tom Hanks"},
    {id:'1', name:"Hannah Fry"},
]

const useSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export default useSlice.reducer