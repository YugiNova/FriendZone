import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import chatSlice from "./chatSlice";
import authSlice from "./authSlice";
import profileSlice from "./profileSlice";
import notificationSlice from "./notificationSlice";
import newsfeedSlice from "./newsfeedSlice";


export const store = configureStore({
    reducer:{
        theme: themeSlice.reducer,
        chat: chatSlice.reducer,
        auth: authSlice.reducer,
        profile: profileSlice.reducer,
        notification: notificationSlice.reducer,
        newsfeed: newsfeedSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch