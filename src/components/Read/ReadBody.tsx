import { PostResponse } from "@/api-management/endpoints/posts/models";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import CommentBody from "./CommentBody";
const aug = localFont({
    src: [
        {
            path: "../../../public/fonts/aug.otf",
        },
    ],
});
interface Props {
    post: PostResponse;
}

export default function ReadBody({ post }: Props) {
    return (
        <div className="flex flex-col gap-4 py-[5vh]">
            <div className="border border-gray-500 rounded-lg p-2">
                <Image
                    src={post.coverImage}
                    width={600}
                    height={500}
                    className="md:h-[40vh] h-[30vh] w-full object-cover rounded-md "
                    alt="image"
                />
            </div>
            <h1
                className={`${aug.className} text-white lg:text-[70px] md:text-[60px] text-[40px] lg:leading-[72px] md:leading-[61px] leading-[41px] `}
            >
                {post.postHeading}
            </h1>
            <span className="text-white font-bold text-lg">
                by {post.postedByUserName}
            </span>
            <div className="flex gap-2">
                {post.tags.map((ele) => {
                    return (
                        <div
                            key={ele}
                            className="bg-white bg-opacity-5 text-white rounded-md px-2 py-1 border border-gray-600"
                        >
                            # {ele}
                        </div>
                    );
                })}
            </div>
            <div className="text-gray-400">{post.postContent}</div>
            <div className="border border-gray-600 p-2 rounded-md text-white">
                <h3 className="font-semibold text-2xl">
                    Comments ({post.comments.length})
                    {post.comments.length > 0 && (
                        <div className="py-4 flex gap-1 flex-col">
                            {post.comments.map((ele, idx) => {
                                return (
                                    <div key={idx} className="flex flex-col">
                                        <div className="flex gap-2 w-max items-center">
                                            <div>
                                                <Image
                                                    src={ele.imageLink}
                                                    height={20}
                                                    width={20}
                                                    alt={ele.userName}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <span className="text-sm">
                                                {ele.userName}{" "}
                                                <span className="font-normal">
                                                    at {ele.commentedAt}
                                                </span>
                                            </span>
                                        </div>
                                        <span className="text-sm pl-7 font-normal">
                                            {ele.commentBody}
                                        </span>
                                    </div>
                                );
                            })}
                            <CommentBody
                                comments={post.comments}
                                id={post._id}
                            />
                        </div>
                    )}
                    {post.comments.length === 0 && (
                        <CommentBody comments={post.comments} id={post._id} />
                    )}
                </h3>
            </div>
            <div className="bg-white flex flex-col gap-2 bg-opacity-5 text-white  p-2 rounded-md border border-gray-600">
                <span>Liked the story?</span>
                <Link
                    href="/read"
                    className="bg-white md:w-fit rounded-md py-1 text-black px-3 font-semibold"
                >
                    Read more blogs
                </Link>
                <Link
                    href="/write"
                    className="bg-white md:w-fit rounded-md py-1 text-black px-3 font-semibold"
                >
                    write your own blog
                </Link>
            </div>
        </div>
    );
}
