import axios, { AxiosInstance } from "axios";
import { getBaseUrl } from "./common";
import { cookies } from "next/headers";

export default function UseServerRoute<T>(
    endpoints: (api: AxiosInstance) => T
) {
    const token = cookies().get("token")?.value ?? "";
    const namespace = cookies().get("namespace")?.value ?? "";
    const api = apiService(token, namespace);

    return endpoints(api);
}

export function apiService(token = "unprotected", namespace = "") {
    const baseUrl = getBaseUrl();
    const instance = axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            "x-namespace-ul": namespace,
            Accept: "*/*",
            "Access-Control-Allow-Origin": baseUrl,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "X-Environment": process.env.NODE_ENV,
        },
    });
    return instance;
}
