import { useAppDispatch, useAppSelector } from "../Provider";
import { initialState, userSlice, UserState } from "../store/user.store";

export default function useUser() {
    const state = useAppSelector((state) => state[userSlice.name]);
    const dispatch = useAppDispatch();

    return {
        user: state,
        setUser: (data: Partial<UserState>) => {
            dispatch(userSlice.actions.set(data));
        },
        logOut: initialState,
    };
}
