import {
    AppMutationOptions,
    AppQueryOption,
} from "@/api-management/interceptor/Provider";
import { CreatePost, PostResponse } from "./models";
import { useApiRoute } from "@/api-management/interceptor/client";
import routes from "./routes";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetALlPosts(options?: AppQueryOption<PostResponse[]>) {
    const api = useApiRoute(routes);
    const key = [api.path, "all-posts"];
    return useQuery(key, () => api.getAllPosts(), options);
}
export function useGetLimitedPosts(
    count: number,
    options?: AppQueryOption<PostResponse[]>
) {
    const api = useApiRoute(routes);
    const key = [api.path, "limited posts"];
    return useQuery(key, () => api.getLimitedPosts(count), options);
}
export function useGetFullPost(
    id: string,
    options?: AppQueryOption<PostResponse>
) {
    const api = useApiRoute(routes);
    const key = [api.path, `${id}fullpost`];
    return useQuery(key, () => api.getFullPost(id), options);
}
export function useCreatePost(
    options?: AppMutationOptions<PostResponse, CreatePost>
) {
    const api = useApiRoute(routes);
    const key = [api.path, "created-post"];
    return useMutation(key, (data) => api.createPost(data), options);
}

export function useUpdatePost(
    id: string,
    options?: AppMutationOptions<PostResponse, Partial<PostResponse>>
) {
    const api = useApiRoute(routes);
    const key = [api.path, "post-update"];
    return useMutation(key, (data) => api.updatePost(id, data), options);
}
