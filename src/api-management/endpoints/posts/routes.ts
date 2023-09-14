import { AxiosInstance } from "axios";
import { CreatePost, PostResponse } from "./models";

export default (api: AxiosInstance) => ({
    path: "/posts",
    getAllPosts() {
        return api.get<PostResponse[]>(this.path);
    },
    getLimitedPosts(count: number) {
        const route = `${this.path}/get/${count}`;
        return api.get<PostResponse[]>(route);
    },
    getFullPost(id: string) {
        const route = `${this.path}/fullpost/${id}`;
        return api.get<PostResponse>(route);
    },
    createPost(data: CreatePost) {
        const route = this.path + "/create";
        return api.post<PostResponse>(route, data);
    },
});
