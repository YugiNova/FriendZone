import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

interface Auth {
    currentUser: any;
    resetEmail: string;
    verifyEmail: boolean;
}

interface User {
    id?:string,
    first_name?:string,
    last_name?:string,
    display_name?:string,
    nickname?:string,
    email?:string,
    role?:string,
    avatar_url?: string,
    status?:string,
    email_verified_at?:string,
    created_at?:string,
    updated_at?:string,
    delete_at?:string
    profile?:UserProfile
    slug?:string
}

interface UserProfile {
    gender?:string,
    dob?:string,
    cover_image_url?:string,
    introduce?:string,
    friends_count?:number,
    followers_count?:number,
    theme?:string,
    color?:string   
}

interface AuthData {
    status:string,
    error:string,
    resetEmail:string,
    currentUser:User
}

const initialState:AuthData = {
    status: "idle",
    error: "",
    resetEmail: "",
    currentUser:{

    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setResetEmail: (state, actions: PayloadAction<string>) => {
            state.resetEmail = actions.payload;
            return state;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(checkLogin.pending, (state, actions) => {
                console.log(actions)
                state.status = "loading";
            })
            .addCase(checkLogin.fulfilled, (state, actions) => {
                state.status = "success";
                state.currentUser = actions.payload;
            })
            .addCase(checkLogin.rejected, (state, actions) => {
                state.status = "reject";
                switch (actions.error.message) {
                    case "Account is not verified":
                        state.error = "not_verified"
                        break;
                    default:
                        state.error = "not_logged_in";
                        break;
                }
                state.currentUser={}
            })
            .addCase(forgetLogin.fulfilled, (state, actions) => {
                state.error = "not_logged_in";
            })
            .addCase(updateColor.fulfilled, (state, actions) => {
                state.currentUser.profile = actions.payload;
            })
            .addCase(updateTheme.fulfilled, (state, actions) => {
                state.currentUser.profile = actions.payload;
            })
    },
});

export const checkLogin = createAsyncThunk("auth/checkLogin", async () => {
    try {
        const auth = new AuthService();
        let result = await auth.checkLogin();
        return result.data;
    } catch (error:any) {
        throw error.data.message
    }
});

export const forgetLogin = createAsyncThunk("auth/forgetLogin", async () => {
    const auth = new AuthService();
    let result = await auth.removeCookie();
});

export const updateColor = createAsyncThunk("auth/updateColor", async (payload:any) => {
    try {
        const {color,slug} = payload
        const user = new UserService();
        let result = await user.updateColor(color,slug);
        return result.data;
    } catch (error:any) {
        throw error.data.message
    }
});

export const updateTheme = createAsyncThunk("auth/updateTheme", async (payload:any) => {
    try {
        const {theme,slug} = payload
        const user = new UserService();
        let result = await user.updateTheme(theme,slug);
        return result.data;
    } catch (error:any) {
        throw error.data.message
    }
});


export const { setResetEmail } = authSlice.actions;
export default authSlice;
