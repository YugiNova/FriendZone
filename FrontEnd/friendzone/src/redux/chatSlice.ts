import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
    user:string
}

const initialState:User[] = []

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addChat: (state,actions: PayloadAction<string>) => {
            state.push({user: actions.payload})
            console.log(state)
            return state
        },
        removeChat: (state, actions: PayloadAction<User>) => {
            state.shift()     
        }
    }
})

export const {addChat,removeChat} = chatSlice.actions 
export default chatSlice