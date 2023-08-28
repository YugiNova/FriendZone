import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

interface State {
    status: string;
    isOwner: boolean;
    message: string;
    data: User;
    friendship:string
}

interface User {
    id?: string;
    first_name?: string;
    last_name?: string;
    display_name?: string;
    nickname?: string;
    email?: string;
    role?: string;
    avatar_url?: string;
    status?: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
    delete_at?: string;
    slug?: string;
    friendship?:string
    profile?: Profile;
    contacts?: Contact[];
    places?: Place[];
    works_educations?: WorkAndEducation[];
}

interface Profile {
    id?:string
    gender?: string;
    dob?: string;
    cover_image_url?: string;
    introduce?: string;
    friends_count?: number;
    followers_count?: number;
}

interface Contact {
    id?: string;
    content?: string;
    type?: string;
    status?: string;
}

interface Place {
    id?: string;
    name?: string;
    type?: string;
    status?: string;
}

interface WorkAndEducation {
    id?: string;
    name?: string;
    type?: string;
    year_start?: string;
    year_end?: string;
    status?: string;
}

const initialState: State = {
    status: "idle",
    message: "",
    isOwner: false,
    friendship: "", 
    data: {},
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setOwner: (state, actions: PayloadAction<boolean>) => {
            state.isOwner = actions.payload;
            return state;
        },
        updateFriendship: (state, actions: PayloadAction<string>) =>{
            state.friendship = actions.payload;
            return state;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProfile.pending, (state, actions) => {
                state.data = {}
                state.status = "loading";
            })
            .addCase(fetchProfile.fulfilled, (state, actions) => {
                state.status = "success";
                state.data = actions.payload;
            })
            .addCase(fetchProfile.rejected, (state, actions) => {
                state.status = "reject";
                state.data = {};
            })
            .addCase(updateProfileAttribute.fulfilled, (state, actions) => {
                state.status = "success";
                switch (actions.payload.attribute) {
                    case "dob":
                        if(state.data.profile){
                            state.data.profile.dob=actions.payload.data;
                            state.message = "Update your birthday successfull"
                        }
                        break;
                    case "introduce":
                        if(state.data.profile){
                            state.data.profile.introduce=actions.payload.data;
                            state.message = "Update your introduce successfull"
                        }   
                        break;

                }
                
            })
            .addCase(addContact.fulfilled, (state, actions) => {
                state.status = "success";
                state.message = "Add contact successfull";
                state.data.contacts?.push(actions.payload);
            })
            .addCase(addPlace.fulfilled, (state, actions) => {
                state.status = "success";
                state.message = "Add place successfull";
                state.data.places?.push(actions.payload);
            })
            .addCase(addWorkEducation.fulfilled, (state, actions) => {
                state.status = "success";
                state.message = "Add work & education successfull";
                state.data.works_educations?.push(actions.payload);
            })
            .addCase(deleteByService.fulfilled, (state, actions) => {
                state.status = "success";
                switch (actions.payload.service) {
                    case "contact":
                        state.data.contacts = removeItemByID(
                            state.data.contacts,
                            actions.payload.id
                        );
                        state.message = "Delete contact successfull";
                        break;
                    case "place":
                        state.data.places = removeItemByID(
                            state.data.places,
                            actions.payload.id
                        );
                        state.message = "Delete place successfull";
                        break;
                    case "work_education":
                        state.data.works_educations = removeItemByID(
                            state.data.works_educations,
                            actions.payload.id
                        );
                        state.message = "Delete work & education successfull";
                        break;
                    default:
                        break;
                }
            })
            .addCase(updateContact.fulfilled, (state, actions) => {
                state.status = "success";
                const newContacts = state.data.contacts?.map((item) => {
                    if (item.id == actions.payload.id) {
                        return actions.payload;
                    }
                    return item;
                });
                state.data.contacts = newContacts;
                state.message = "Update contact successfull";
            })
            .addCase(udpatePlace.fulfilled, (state, actions) => {
                state.status = "success";
                const newPlaces = state.data.places?.map((item) => {
                    if (item.id == actions.payload.id) {
                        return actions.payload;
                    }
                    return item;
                });
                state.data.places = newPlaces;
                state.message = "Update place successfull";
            })
            .addCase(updateWorkEducation.fulfilled, (state, actions) => {
                state.status = "success";
                const newWorkEducations = state.data.works_educations?.map(
                    (item) => {
                        if (item.id == actions.payload.id) {
                            return actions.payload;
                        }
                        return item;
                    }
                );
                state.data.works_educations = newWorkEducations;
                state.message = "Update work & education successfull";
            })
            .addCase(updateAvatar.pending, (state, actions) => {
                state.status = "loading";
                state.message = "Updating your avatar";
            })
            .addCase(updateAvatar.fulfilled, (state, actions) => {
                state.data.avatar_url = actions.payload.url;
                state.status = "success";
                state.message = "Update avatar successfull";
            })
            .addCase(updateCover.pending, (state, actions) => {
                state.status = "loading";
                state.message = "Updating your cover picture";
            })
            .addCase(updateCover.fulfilled, (state, actions) => {
                if(state.data.profile){
                    state.data.profile.cover_image_url = actions.payload.url;
                    state.status = "success";
                    state.message = "Update cover picture successfull";
                }
            })
    },
});

const removeItemByID = (userProfileService: any[] | undefined, id: string) => {
    if (userProfileService) {
        const newService = userProfileService.filter((item) => {
            return item.id != id;
        });
        return newService;
    }
};

export const fetchProfile = createAsyncThunk(
    "profile/fetch",
    async (slug: string) => {
        try {
            const profile = new UserService();
            console.log("checking");
            let result = await profile.getProfile(slug);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const updateProfileAttribute = createAsyncThunk(
    "profile/updateAtribute",
    async (data: any) => {
        try {
            const profile = new UserService();
            const { formData, id, attribute } = data;
            let result = await profile.udpateProfileAttribute(
                formData,
                id,
                attribute
            );
            return { data: result.data, attribute };
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const addContact = createAsyncThunk(
    "profile/addContact",
    async (data: any) => {
        try {
            const profile = new UserService();
            let result = await profile.addContact(data);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const addPlace = createAsyncThunk(
    "profile/addPlace",
    async (data: any) => {
        try {
            const profile = new UserService();
            let result = await profile.addPlace(data);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const addWorkEducation = createAsyncThunk(
    "profile/addWorkEducation",
    async (data: any) => {
        try {
            const profile = new UserService();
            let result = await profile.addWorkEducation(data);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const updateContact = createAsyncThunk(
    "profile/updateContact",
    async (data: any) => {
        try {
            const profile = new UserService();
            let { formdata, id } = data;
            let result = await profile.updateContact(formdata, id);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const udpatePlace = createAsyncThunk(
    "profile/udpatePlace",
    async (data: any) => {
        try {
            const profile = new UserService();
            let { formdata, id } = data;
            let result = await profile.updatePlace(formdata, id);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const updateWorkEducation = createAsyncThunk(
    "profile/updateWorkEducation",
    async (data: any) => {
        try {
            const profile = new UserService();
            let { formdata, id } = data;
            let result = await profile.updateWorkEducation(formdata, id);
            return result.data;
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const deleteByService = createAsyncThunk(
    "profile/deleteByService",
    async (data: any) => {
        try {
            const profile = new UserService();
            let { id, service } = data;
            let result = await profile.deleteByService(id, service);
            return { id, service };
        } catch (error: any) {
            throw error.data.message;
        }
    }
);

export const updateAvatar = createAsyncThunk(
    "profile/updateAvatar",
    async (data: any) => {
        try {
            const user = new UserService();
            const formData = new FormData()
            let { file, id } = data;
            formData.append("image",file)
            let result = await user.updateAvatar(formData,id)
            return {url: result.data};
        } catch (error: any) {
            throw error.data.message;
        }
    }
)

export const updateCover = createAsyncThunk(
    "profile/updateCover",
    async (data: any) => {
        try {
            const user = new UserService();
            const formData = new FormData()
            let { file, id } = data;
            formData.append("image",file)
            let result = await user.updateCover(formData,id)
            return {url: result.data};
        } catch (error: any) {
            throw error.data.message;
        }
    }
)

export const { setOwner,updateFriendship } = profileSlice.actions;
export default profileSlice;
