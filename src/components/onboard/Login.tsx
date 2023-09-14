import auth from "@/api-management/endpoints/auth";
import { useLogin } from "@/api-management/endpoints/auth/query";
import useUser from "@/state-management/state/user.state";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Login() {
    const { setUser, user } = useUser();
    const qery = auth.queries.useUser(user.token);
    const router = useRouter();
    const login = useLogin({
        onError: (e) => {
            toast.warn(e.message);
        },
        onSuccess: async (data) => {
            const token = data.data;
            console.log(token);
            if (!token) return;
            setUser({
                email: token.email,
                profilePicture: token.profilePicture,
                userId: token._id,
                logged_in: true,
                token: token.authentication.sessionToken,
                username: token.username,
                writtenBlogs: token.writtenBlogs,
            });
            await qery.refetch();
            router.replace("/");
            toast.success("Logged in");
        },
    });
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const email = formData.get("email")?.toString() ?? "email";
        const password = formData.get("password")?.toString();

        if (!email || !password) {
            toast.warn("Email and password are required");
            return;
        }

        login.mutate({
            email,
            password,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
                <h3 className="text-3xl font-bold text-white">Login</h3>
            </div>
            <div className="flex flex-col gap-1 text-white">
                <span>enter your registered email</span>
                <input
                    type="text"
                    name="email"
                    placeholder="spookytales@email.com"
                    className="bg-white bg-opacity-10 p-2 rounded-md focus:outline-none text-white"
                />
            </div>
            <div className="flex flex-col gap-1 text-white">
                <span>enter your password</span>
                <input
                    type="password"
                    name="password"
                    placeholder="password goes here"
                    className="bg-white bg-opacity-10 p-2 rounded-md focus:outline-none text-white"
                />
            </div>
            <button
                type="submit"
                className="bg-white text-black p-2 rounded-md flex items-center justify-center"
            >
                {!login.isLoading ? (
                    <span>Login</span>
                ) : (
                    <BarLoader color="black" />
                )}
            </button>
        </form>
    );
}
