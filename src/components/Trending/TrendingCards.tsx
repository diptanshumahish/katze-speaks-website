import { PostResponse } from "@/api-management/endpoints/posts/models";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    cards: PostResponse[];
}
export default function TrendingCards({ cards }: Props) {
    return (
        <div className="w-full grid md:grid-cols-2  gap-5 py-[5vh]">
            {cards.map((ele) => {
                return (
                    <Link
                        key={ele._id}
                        href={`/posts/${ele._id}`}
                        className="w-full h-[350px] relative rounded-lg overflow-hidden border border-gray-600"
                    >
                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black" />
                        <Image
                            src={ele.coverImage}
                            height={400}
                            width={500}
                            className="h-full w-full absolute inset-0 object-cover"
                            alt={ele.miniDescription}
                        />
                        <div className="absolute bottom-0 left-0 text-white z-10 p-4 flex flex-col gap-1">
                            <h3 className="text-[20px] font-semibold">
                                {ele.postHeading}
                            </h3>
                            <span className="font-bold leading-[15px]">
                                {ele.postedByUserName}
                            </span>
                            <span className="md:text-[16px] text-[15px] opacity-70 leading-[18px]">
                                {ele.miniDescription}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
