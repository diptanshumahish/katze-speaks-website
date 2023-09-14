"use client";
import useUser from "@/state-management/state/user.state";
import { redirect } from "next/navigation";
import React from "react";

export default function ShowProtectedRoutes({
    children,
}: React.PropsWithChildren) {
    const { user } = useUser();

    if (user.client_ready) {
        if (user.logged_in) {
            return <div>{children}</div>;
        }
        return redirect("/onboard");
    }
    return (
        <div className="h-screen w-screen flex items-center justify-center text-4xl">
            Loading
        </div>
    );
}
