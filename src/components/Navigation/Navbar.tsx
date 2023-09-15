"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useUser from "@/state-management/state/user.state";
import DropdownMenu from "./Dropdown";
import auth from "@/api-management/endpoints/auth";

export default function Navbar() {
    const { user } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const userQuery = auth.queries.useUser(user.token);

    return (
        <nav className="sticky top-0 right-0 px-[4%] py-4 flex justify-between items-center z-20">
            <Link href="/">
                <div className="flex items-center text-white gap-2">
                    <Image
                        src="/favicon.svg"
                        height={40}
                        width={40}
                        alt="icon"
                    />
                    <span className="font-medium">Katze Speaks.</span>
                </div>
            </Link>

            <div className="flex w-max text-white gap-4 items-center">
                <Link href="/read" className="hidden lg:block">
                    read
                </Link>
                <Link href="/write" className="hidden lg:block">
                    write
                </Link>
                <div className="relative">
                    {user.logged_in ? (
                        <div
                            onClick={() => {
                                setIsOpen((prev) => !prev);
                            }}
                            className="text-white flex justify-center cursor-pointer items-center px-3 py-1 border border-white rounded-full gap-2"
                        >
                            <Image
                                src={user.profilePicture}
                                height={50}
                                width={50}
                                alt={user.userId}
                                className="rounded-full h-5 w-5"
                            />

                            <div>{user.username}</div>
                        </div>
                    ) : (
                        <Link href="/onboard">
                            <div className="text-white flex justify-center cursor-pointer items-center px-3 py-1 border border-white rounded-full gap-2">
                                Login
                            </div>
                        </Link>
                    )}
                    {isOpen && (
                        <DropdownMenu
                            isOpen={isOpen}
                            onSelect={() => {
                                setIsOpen(false);
                            }}
                        />
                    )}
                </div>
            </div>
        </nav>
    );
}
