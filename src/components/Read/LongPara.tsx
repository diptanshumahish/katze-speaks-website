import React from "react";

interface LongParaProps {
    postContent: string;
}

function LongPara({ postContent }: LongParaProps): JSX.Element {
    const paragraphs = postContent.split(/\s{2,}|\n/);

    return (
        <div className="text-gray-400">
            {paragraphs.map((paragraph, index) => (
                <>
                    <p key={index}>{paragraph}</p>
                    <br />
                </>
            ))}
        </div>
    );
}

export default LongPara;
