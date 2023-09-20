import { AxiosInstance } from "axios";
import {
    UserAll,
    UserFetch,
    UserLogin,
    UserRegister,
    UserResponse,
} from "./models";

export default (api: AxiosInstance) => ({
    path: "/auth",
    register(data: UserRegister) {
        const route = this.path + "/register";
        return api.post<UserResponse>(route, data);
    },
    login(data: UserLogin) {
        const route = this.path + "/login";
        return api.post<UserResponse>(route, data);
    },
    user(token: string) {
        const route = this.path + `/${token}`;
        return api.get<UserResponse>(route);
    },
    getAllUsers() {
        const route = "/users";
        return api.get<UserAll[]>(route);
    },
    updateUser(user: Partial<UserResponse>, id: string) {
        const route = "/users" + `/${id}`;
        return api.patch<UserResponse>(route, user);
    },
});
