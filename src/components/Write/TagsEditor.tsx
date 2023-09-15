import React, { useState } from "react";

interface Props {
    name: string;
    placeholder: string;
    onOutPut: (val: string[]) => void;
}

export default function TagsEditor({ name, placeholder, onOutPut }: Props) {
    const [inputValue, setInputValue] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyPress = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            addTag();
        }
    };

    const addTag = () => {
        if (inputValue.trim() !== "") {
            const newTags = [...tags, inputValue.trim()];
            setTags(newTags);
            onOutPut(newTags);
            setInputValue("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        const newTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(newTags);
        onOutPut(newTags);
    };

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2 border border-gray-700 rounded-md p-2">
                <div className="flex flex-wrap gap-1 ">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex gap-2 items-center bg-theme-green bg-opacity-40 rounded-full  text-white  px-4  "
                        >
                            # {tag}
                            <button onClick={() => removeTag(tag)} className="">
                                X
                            </button>
                        </div>
                    ))}
                    <input
                        type="text"
                        name={name}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            handleInputKeyPress(e);
                        }}
                        className="bg-back-3 text-white focus:outline-none bg-background-dark rounded-md p-2 "
                    />
                </div>
            </div>
            <span className="text-theme-green text-sm px-1 tracking-wide">
                Enter tags separated by comma, or press enter after each tag
            </span>
        </div>
    );
}
