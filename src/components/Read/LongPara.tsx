import React from "react";
import { twMerge } from "tailwind-merge";

interface LongParaProps {
    postContent: string;
}

function LongPara({ postContent }: LongParaProps): JSX.Element {
    const paragraphs = postContent.split(/\s{2,}|\n/);

    return (
        <div className="text-gray-400 flex flex-col gap-2">
            {paragraphs.map((paragraph, index) => (
                <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                    className={twMerge(
                        index === 0
                            ? "first-letter:mt-3  lg:first-letter:text-[60px] first-letter:text-[50px] first-letter:font-semibold first-letter:font-serif first-letter:text-white first-letter:float-left first-letter:leading-[20px] lg:leading-8 leading-6 lg:text-[20px] text-[16px] first-letter:-mb-3 first-letter:mr-2 first-letter:uppercase"
                            : "lg:leading-8 leading-6 lg:text-[20px] text-[15px]"
                    )}
                ></p>
            ))}
        </div>
    );
}

export default LongPara;
