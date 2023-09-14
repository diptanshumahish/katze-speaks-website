import Provider, {
    allStore,
    reducer,
    createStore,
    useAppDispatch,
    useAppSelector,
    RootState,
    AppDispatch,
} from "./Provider";

import { UserState, userSlice } from "./store/user.store";
import userState from "./state/user.state";

export type { RootState, AppDispatch, UserState };
export {
    Provider,
    allStore,
    reducer,
    createStore,
    useAppDispatch,
    useAppSelector,
    userSlice,
    userState,
};
