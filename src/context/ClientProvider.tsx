"use client";
import auth from "@/api-management/endpoints/auth";
import ApiProvider from "@/api-management/interceptor/Provider";
import {
    Provider as StateProvider,
    UserState,
    userState,
} from "@/state-management/";
import { getCookie, hasCookie, setCookie } from "cookies-next";

import React, { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function saveUserData(data: UserState) {
    localStorage.setItem("user", JSON.stringify(data));
    setCookie("token", data.token);
}
export default function ClientProvider({ children }: React.PropsWithChildren) {
    return (
        <>
            <StateProvider
                listener={(data) => {
                    const user = data["user-slice"];
                    saveUserData(user);
                }}
            >
                <ApiProvider>
                    <MainApp>{children}</MainApp>
                </ApiProvider>
            </StateProvider>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

function MainApp({ children }: React.PropsWithChildren) {
    const { user, setUser } = userState();
    const fetched = useRef<StartupApis[]>([]);
    type StartupApis = "user";
    const user_query = auth.queries.useUser(user.token, {
        onError: (err) => {
            console.log(err);
        },
        enabled: false,
        onSuccess: (data: { data: any }) => {
            fetched.current = [...fetched.current, "user"];
            const userData = data.data;
            console.log(userData);
            setUser({
                email: userData.email,
                username: userData.username,
                userId: userData.userId,
                profilePicture: userData.profilePicture,
                writtenBlogs: userData.writtenBlogs,
            });
        },
    });

    useEffect(() => {
        const localData = localStorage.getItem("user");
        if (!localData) {
            if (hasCookie("token")) {
                const token = getCookie("token")?.toString();
                if (token) {
                    setUser({
                        token: token,
                        logged_in: true,
                        client_ready: true,
                    });
                    return;
                }
            }

            setUser({
                logged_in: false,
                client_ready: true,
            });
        } else {
            const data = JSON.parse(localData);
            setUser({
                ...data,
                client_ready: true,
            });
        }
    }, []);

    useEffect(() => {
        if (!user.client_ready) return;
        if (!user.logged_in) return;
        if (!fetched.current.includes("user")) {
            user_query.refetch();
        }
    }, [user.logged_in, user.client_ready, user_query]);

    if (!user.client_ready)
        return (
            <div className="h-screen w-screen flex-col flex items-center justify-center text-white">
                Loading
            </div>
        );

    return <>{children}</>;
}
