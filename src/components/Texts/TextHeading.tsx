import React from "react";

interface Props {
    heading: string;
    subheading: string;
}
export default function TextHeading({ heading, subheading }: Props) {
    return (
        <div className="text-white flex flex-col md:py-[2vh] py-[2vh]">
            <h1 className="lg:text-[80px] md:text-[40px] text-[30px] font-semibold">
                {heading}
            </h1>
            <span className="tracking-wide opacity-60">{subheading}</span>
        </div>
    );
}
