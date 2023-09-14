import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
    username: string;
    email: string;
    writtenBlogs?: string[];
    profilePicture: string;
    userId: string;
    client_ready: boolean;
    token: string;
    logged_in: boolean;
}
export const initialState: UserState = {
    client_ready: false,
    email: "",
    profilePicture: "",
    token: "",
    userId: "",
    logged_in: false,
    username: "",
    writtenBlogs: [],
};

export const userSlice = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Partial<UserState>>) => {
            console.log(action);
            state.client_ready =
                action.payload.client_ready ?? state.client_ready;
            state.email = action.payload.email ?? state.email;
            state.profilePicture =
                action.payload.profilePicture ?? state.profilePicture;
            state.userId = action.payload.userId ?? state.userId;
            state.username = action.payload.username ?? state.username;
            state.writtenBlogs =
                action.payload.writtenBlogs ?? state.writtenBlogs;
            state.token = action.payload.token ?? state.token;
            state.logged_in = action.payload.logged_in ?? state.logged_in;
        },
    },
});
