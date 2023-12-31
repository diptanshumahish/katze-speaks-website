import React, { ChangeEvent, useEffect, useRef, useState } from "react";

interface TextareaProps {
    initialText: string;
    name: string;
}

export default function MainContent({ initialText, name }: TextareaProps) {
    const [text, setText] = useState<string>(initialText);
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
                ref={textareaRef}
                placeholder={text}
                name={name}
                onChange={handleTextChange}
                className="bg-white bg-opacity-5 p-4 focus:outline-none caret-white text-white text-opacity-80 font-medium tracking-wide overflow-visible resize-none rounded-lg"
            />
            <span className="text-theme-green text-sm px-1 tracking-wide">
                Enter the full content over here.{" "}
                <span className="font-semibold">No word limits.</span> go as far
                as you want.
            </span>
        </div>
    );
}
