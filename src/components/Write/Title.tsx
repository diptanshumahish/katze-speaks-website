import { getRandomTitle } from "@/util/getRandomTitle";
import localFont from "next/font/local";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const aug = localFont({
    src: [
        {
            path: "../../../public/fonts/aug.otf",
        },
    ],
});

interface Props {
    name: string;
}

export default function Title({ name }: Props) {
    const [text, setText] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    function autoResize() {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }

    useEffect(() => {
        autoResize();
    }, [text]);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <div className="flex flex-col">
            <textarea
                value={text}
                onChange={handleTextChange}
                name={name}
                rows={1}
                ref={textareaRef}
                autoCapitalize="sentence"
                className={`text-[50px]  w-full no-scrollbar bg-background-dark overflow-visible py-2 border-b  border-gray-600 focus:outline-none caret-white resize-none  text-white font-bold ${aug.className}`}
                placeholder={getRandomTitle()}
            ></textarea>
            <span className="text-theme-green text-sm px-1 tracking-wide">
                Edit your title by changing this text (The above default title
                is random, don;t bother it :))
            </span>
        </div>
    );
}
