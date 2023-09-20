import {
    AppMutationOptions,
    AppQueryOption,
} from "@/api-management/interceptor/Provider";
import { useApiRoute } from "@/api-management/interceptor/client";
import routes from "./routes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserAll, UserLogin, UserRegister, UserResponse } from "./models";

export function useRegister(
    options?: AppMutationOptions<UserResponse, UserRegister>
) {
    const api = useApiRoute(routes);
    const keys = [api.path, "register"];
    return useMutation(keys, (data) => api.register(data), options);
}
export function useLogin(
    options?: AppMutationOptions<UserResponse, UserLogin>
) {
    const api = useApiRoute(routes);
    const keys = [api.path, "login"];
    return useMutation(keys, (data) => api.login(data), options);
}
export function useUser(token: string, options?: AppQueryOption<UserResponse>) {
    const api = useApiRoute(routes);
    const key = [api.path, "user"];
    return useQuery(key, () => api.user(token), options);
}
export function useGetUser(options?: AppQueryOption<UserAll[]>) {
    const api = useApiRoute(routes);
    const key = [api.path, "user-all"];
    return useQuery(key, () => api.getAllUsers(), options);
}

export function useUpdateUser(
    id: string,
    options?: AppMutationOptions<UserResponse, Partial<UserResponse>>
) {
    const api = useApiRoute(routes);
    const key = [api.path, "update-user"];
    return useMutation(key, (data) => api.updateUser(data, id), options);
}
