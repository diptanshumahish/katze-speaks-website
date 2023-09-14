import auth from "@/api-management/endpoints/auth";
import { useRegister } from "@/api-management/endpoints/auth/query";
import useUser from "@/state-management/state/user.state";
import { getProfilePicture } from "@/util/getProfilePicture";
import { useRouter } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Register() {
    const { setUser, user } = useUser();
    const router = useRouter();
    const qery = auth.queries.useUser(user.token);
    const register = useRegister({
        onError: (e) => {
            toast.error(e.message);
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
            toast.success("Registered!");
        },
    });
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();
        const username = formData.get("username")?.toString();
        const pp = getProfilePicture();

        if (!email || !password || !username) {
            toast.warn("Email and password are required");
            return;
        }
        register.mutate({
            email: email,
            password: password,
            profilePicture: pp,
            username: username,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
                <h3 className="text-3xl font-bold text-white">Register</h3>
            </div>
            <div className="flex flex-col gap-1 text-white">
                <span>enter your email</span>
                <input
                    type="text"
                    name="email"
                    placeholder="spookytales@email.com"
                    className="bg-white bg-opacity-10 p-2 rounded-md focus:outline-none text-white"
                />
            </div>
            <div className="flex flex-col gap-1 text-white">
                <span>Set a unique username</span>
                <input
                    type="text"
                    name="username"
                    placeholder="spooky-guy-23"
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
                className="bg-white text-black p-2 rounded-md disabled:opacity-40 flex items-center justify-center"
            >
                {!register.isLoading ? (
                    <span>Register</span>
                ) : (
                    <BarLoader color="black" />
                )}
            </button>
        </form>
    );
}
