import {
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="text-white flex items-center justify-center w-full py-4 border-t border-gray-600">
            <div className="flex flex-col items-center gap-2">
                <span>&copy; Diptanshu Mahish 2023</span>
                <div className="flex gap-2 ">
                    <Link
                        href="https://imstagram.com/_diptanshuu_"
                        className="opacity-60 hover:opacity-100"
                    >
                        <InstagramIcon />
                    </Link>
                    <Link
                        href="https://github.com/diptanshumahish"
                        className="opacity-60 hover:opacity-100"
                    >
                        <GithubIcon />
                    </Link>
                    <Link href="/" className="opacity-60 hover:opacity-100">
                        <FacebookIcon />
                    </Link>
                    <Link href="/" className="opacity-60 hover:opacity-100">
                        <MessageCircleIcon />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
