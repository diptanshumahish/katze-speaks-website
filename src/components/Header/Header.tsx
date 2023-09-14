import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
const aug = localFont({
    src: [
        {
            path: "../../../public/fonts/aug.otf",
        },
    ],
});
export default function Header() {
    return (
        <header className="pt-[30vh] md:px-[15%] px-[5%] flex flex-col gap-[20vh] justify-center items-center overflow-hidden">
            <Image
                src="/Home/gui.png"
                height={300}
                width={800}
                alt="home"
                className="w-[120vw] h-auto rounded-lg absolute top-[20vh]"
            />
            <div className={`${aug.className} z-10 `}>
                <h1 className={` text-white text-[90px] leading-[90px]`}>
                    katze speaks
                </h1>
                <span className="text-gray-400 tracking-[6px]">
                    a little bit of creepiness kills no one, maybe.
                </span>
            </div>
            <div className="border border-gray-600 w-full rounded-lg flex-col p-2 flex justify-center items-center z-10">
                <Image
                    src="/Home/home.jpg"
                    height={300}
                    width={800}
                    alt="home"
                    className="w-full h-auto rounded-lg"
                />
                <span className="text-gray-600">
                    of course this image is not related to anything
                </span>
            </div>
        </header>
    );
}
