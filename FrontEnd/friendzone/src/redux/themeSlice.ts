import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

interface Theme {
    type:string,
    primaryBackground:string,
    secondaryBackground:string,
    primaryFont:string,
    secondaryFont:string,
    itemBackground:string,
    itemFont:string,
    boxshadow:string
}

const lightTheme:Theme = {
    type:'light',
    primaryBackground: "#ffffff",
    secondaryBackground: "#e8f1fa",
    primaryFont: "#212529",
    secondaryFont:"#888888",
    itemBackground:"#fcfcfc",
    itemFont:"#212529",
    boxshadow:"0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)"
}

const darkTheme:Theme = {
    type:'dark',
    primaryBackground: "#293145",
    secondaryBackground: "#1a2236",
    primaryFont: "#ffffff",
    secondaryFont:"#adb5bd",
    itemBackground:"#f5f5f5",
    itemFont:"#212529",
    boxshadow:"0 8px 30px rgba(0,0,0,.05)"
}

const initialState = {...lightTheme,primaryColor: "#CE4410"}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changePrimaryColor: (state,actions: PayloadAction<string>) => {
            state.primaryColor = actions.payload
            return state
        },
        toggleLightTheme: (state, action: PayloadAction<string | undefined>) => {
            return {...state,...lightTheme}
            
        },
        toggleDarkTheme: (state, action: PayloadAction<string | undefined>) => {
            return {...state,...darkTheme}
        }
    }
})

export const {toggleDarkTheme,toggleLightTheme,changePrimaryColor} = themeSlice.actions 
export default themeSlice