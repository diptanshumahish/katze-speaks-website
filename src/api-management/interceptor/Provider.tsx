import {
    QueryClient,
    QueryClientProvider,
    UseInfiniteQueryOptions,
    UseMutationOptions,
    UseQueryOptions,
} from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { AxiosResponse } from "axios";
import { ErrorResponseModel } from "../models/response.model";

const client = new QueryClient();

export default function ApiProvider(props: { children: ReactNode }) {
    return (
        <QueryClientProvider client={client}>
            {props.children}
        </QueryClientProvider>
    );
}

export type AppMutationOptions<
    TData = unknown,
    TVariables = void,
    TContext = unknown
> = Omit<
    UseMutationOptions<
        AxiosResponse<TData>,
        ErrorResponseModel,
        TVariables,
        TContext
    >,
    "mutationKey" | "mutationFn"
>;

export type AppQueryOption<TData = unknown> = Omit<
    UseQueryOptions<
        AxiosResponse<TData>,
        ErrorResponseModel,
        AxiosResponse<TData>,
        string[]
    >,
    "queryKey" | "queryFn"
>;

export type AppInfiniteQueryOption<TData = unknown> = Omit<
    UseInfiniteQueryOptions<
        AxiosResponse<TData>,
        ErrorResponseModel,
        AxiosResponse<TData>,
        AxiosResponse<TData>,
        string[]
    >,
    "queryKey" | "queryFn"
>;
