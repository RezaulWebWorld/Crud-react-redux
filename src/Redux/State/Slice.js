import {createSlice} from "@reduxjs/toolkit";


export let slice=createSlice(
    {
        name:"todoSlice",
        initialState:{
            value:[]
        },
        reducers:{
                SaveItem:(state, action)=>{
                    state.value.push(action.payload)
                },
            RemoveItem:(state,action)=>{
                    state.value.splice(action.payload,1)
            },
            EditITem:(state, action)=>{
                    state.value.splice(action.payload['index'],1, action.payload['EditBook'])
            }
        }
    }
)
export  const {SaveItem,RemoveItem,EditITem}=slice.actions;
export default  slice.reducer ;