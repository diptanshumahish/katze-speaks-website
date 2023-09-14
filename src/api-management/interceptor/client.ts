"use client";
import axios, { AxiosProgressEvent } from "axios";
import { getBaseUrl } from "./common";
import { AxiosInstance } from "axios";
import { useEffect, useRef } from "react";
import { userState } from "@/state-management";

export function apiService(
    token = "unprotected",
    abortController: AbortController,
    onUploadProgress?: (e: AxiosProgressEvent) => void,
    onDownloadProgress?: (e: AxiosProgressEvent) => void
) {
    const baseUrl = getBaseUrl();
    const instance = axios.create({
        signal: abortController.signal,
        baseURL: baseUrl,
        onUploadProgress,
        onDownloadProgress,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
            "Access-Control-Allow-Origin": baseUrl,
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "X-Environment": process.env.NODE_ENV,
        },
    });
    return instance;
}

export function useApiRoute<T>(
    endPoints: (api: AxiosInstance) => T,
    onUploadProgress?: (e: AxiosProgressEvent) => void,
    onDownloadProgress?: (e: AxiosProgressEvent) => void
) {
    const { user } = userState();
    const abortController = useRef(new AbortController());
    const api = apiService(
        user.token,
        abortController.current,
        onUploadProgress,
        onDownloadProgress
    );

    useEffect(() => {
        /* if (!user.client_ready) abortController.current.abort(); */
    }, [user.client_ready]);

    return endPoints(api);
}
