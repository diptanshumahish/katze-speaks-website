import auth from "@/api-management/endpoints/auth";
import useUser from "@/state-management/state/user.state";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface DropdownMenuProps {
    onSelect: () => void;
    isOpen: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    onSelect,
    isOpen,
}: DropdownMenuProps) => {
    const { user } = useUser();
    const query = auth.queries.useUser(user.token);
    const router = useRouter();
    const { logOut } = useUser();
    return (
        <div
            className={twMerge(
                isOpen
                    ? "absolute top-[6vh] lg:w-[10.5vw] w-[35vw] h-fit p-2 left-0 overflow-hidden  bg-background-dark border border-gray-600  rounded-md shadow-sm transition-all duration-300 ease-in-out"
                    : "w-0 h-0 overflow-hidden "
            )}
        >
            <h3 className="pb-1 text-[14px] text-font-tertiary">Menu</h3>
            <div className="flex flex-col gap-2 py-1">
                <Link
                    href="/write"
                    className="flex items-center justify-between bg-back-3 px-2 py-1 rounded-md text-[14px] text-text-primary border hover:bg-white hover:text-black border-gray-600"
                >
                    write
                </Link>
                <Link
                    href="/read"
                    className="flex items-center justify-between bg-back-3 px-2 py-1 rounded-md text-[14px] text-text-primary border  hover:bg-white hover:text-black  border-gray-600"
                >
                    read
                </Link>
                <button
                    className="flex items-center justify-between  bg-back-3 px-2 py-1 rounded-md text-[14px] text-text-primary   hover:bg-white hover:text-black border  border-gray-600"
                    onClick={async () => {
                        deleteCookie("token");
                        localStorage.clear();

                        logOut;
                        onSelect();

                        router.replace("/");
                    }}
                >
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default DropdownMenu;
