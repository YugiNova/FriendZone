import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import NotificationService from "../services/notification.service";

interface State {
    status: string;
    unread: number;
    message: string;
    nextCursor: string;
    data: any[];
}

const initialState: State = {
    status: "idle",
    unread: 0,
    message: "",
    nextCursor: "",
    data: [],
};

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        hotPushNotifications: (state, actions: PayloadAction<any>) => {
            state.unread +=1;
            state.data = [actions.payload,...state.data];
            if(state.data.length>10){
                state.data.pop()
            }
            return state
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNotifications.pending, (state, actions) => {
                state.status = "loading";
            })
            .addCase(fetchNotifications.rejected, (state, actions) => {
                state.status = "error";
                if (actions.error.message) {
                    state.message = actions.error.message;
                }
            })
            .addCase(fetchNotifications.fulfilled, (state, actions) => {
                state.status = "success";
                state.unread = actions.payload.data.unread;
                if(actions.payload.loadmore){
                    state.data = [...state.data, ...actions.payload.data.notifications];
                }
                else{
                    state.data = actions.payload.data.notifications
                }
                state.nextCursor = actions.payload.data.nextCursor;
            })
            .addCase(markAsRead.fulfilled, (state, actions) => {
                state.status = "success";
                state.unread = 0;
            })
    },
});

export const fetchNotifications = createAsyncThunk(
    "notification/fetch",
    async (nextCursor?: string | undefined) => {
        try {
            const notification = new NotificationService();
            let result = await notification.getNotifications(nextCursor);
            return {data: result.data,loadmore: nextCursor? true: false};
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const markAsRead = createAsyncThunk(
    "notification/markAsRead",
    async () => {
        try {
            const notification = new NotificationService();
            let result = await notification.markAsRead();
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const { hotPushNotifications } = notificationSlice.actions;
export default notificationSlice;
