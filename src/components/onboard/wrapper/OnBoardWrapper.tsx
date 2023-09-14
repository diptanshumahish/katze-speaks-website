"use client";
import Login from "@/components/onboard/Login";
import Register from "@/components/onboard/Register";
import localFont from "next/font/local";
import Link from "next/link";
import React, { useState } from "react";
const aug = localFont({
    src: [
        {
            path: "../../../../public/fonts/aug.otf",
        },
    ],
});
const ele = [<Login key="1212" />, <Register key="918391" />];
export default function OnboardWrapper() {
    const [active, setActive] = useState(0);
    return (
        <div className="z-10 flex flex-col items-center justify-center w-screen h-[90vh]">
            <div className="bg-white flex flex-col gap-2 bg-opacity-5 border border-gray-500 lg:w-[30vw] w-[90vw] p-4 rounded-md">
                <h2
                    className={`${aug.className} text-white lg:text-4xl text-2xl`}
                >
                    Welcome Human, or aren&apos;t you?
                </h2>
                <span className="text-white opacity-90">
                    Let&apos; get going
                </span>
                {ele[active]}
                <div className="text-white">
                    {active === 0 ? (
                        <button
                            onClick={() => {
                                setActive(1);
                            }}
                        >
                            Register instead?
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setActive(0);
                            }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
            <div className="py-4 text-white font-semibold">
                <Link href="/read">Read some stuff instead</Link>
            </div>
        </div>
    );
}
