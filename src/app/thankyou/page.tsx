import React from "react";
import Link from "next/link";
import localFont from "next/font/local";
const aug = localFont({
    src: [
        {
            path: "../../../public/fonts/aug.otf",
        },
    ],
});

export default function page() {
    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col text-white gap-3">
            <h2 className={`${aug.className} text-4xl`}>Thank you</h2>
            <span className="tracking-wide">
                Thanks for posting your experience with us, hope to see you
                again with even more content
            </span>
            <Link
                href="/"
                className="w-fit bg-white py-1 px-4 rounded-full text-black"
            >
                Back to home
            </Link>
        </div>
    );
}
