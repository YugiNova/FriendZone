import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import NotificationService from "../services/notification.service";
import PostService from "../services/post.service";

interface State {
    status: string;
    message: string;
    data: any[];
}

const initialState: State = {
    status: "idle",
    message: "",
    data: [],
};

export const newsfeedSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        hotPushNotifications: (state, actions: PayloadAction<any>) => {

        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNewsfeed.pending, (state, actions) => {
                state.status = "loading";
            })
            .addCase(fetchNewsfeed.rejected, (state, actions) => {
                state.status = "error";
                if (actions.error.message) {
                    state.message = actions.error.message;
                }
            })
            .addCase(fetchNewsfeed.fulfilled, (state, actions) => {
                state.status = "success";
                if(actions.payload){
                    state.data = [...state.data,...actions.payload];
                }   
            });
    },
});

export const fetchNewsfeed = createAsyncThunk(
    "newsfeed/fetch",
    async (cursor?:string) => {
        try {
            const post = new PostService();
            let result = await post.getPosts(cursor);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const { hotPushNotifications } = newsfeedSlice.actions;
export default newsfeedSlice;
