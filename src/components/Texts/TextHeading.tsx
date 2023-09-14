import React from "react";

interface Props {
    heading: string;
    subheading: string;
}
export default function TextHeading({ heading, subheading }: Props) {
    return (
        <div className="text-white md:py-[5vh] py-[2vh]">
            <h1 className="lg:text-[40px] md:text-[35px] text-[30px] font-semibold">
                {heading}{" "}
            </h1>
            <span className="tracking-wide opacity-60">{subheading}</span>
        </div>
    );
}
