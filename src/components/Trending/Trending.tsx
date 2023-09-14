"use client";
import React from "react";
import TextHeading from "../Texts/TextHeading";
import TrendingCards from "./TrendingCards";
import posts from "@/api-management/endpoints/posts";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Trending() {
    const post = posts.queries.useGetLimitedPosts(4, {
        onError: (e) => {
            toast.warn(e.message);
        },
    });
    return (
        <div className="md:py-[10%] py-[5%] md:px-[15%] px-[5%]">
            <TextHeading
                heading="Trending reads."
                subheading="Explore the trending stories"
            />
            {post.isLoading && (
                <div className="w-full h-[15vh] text-white">Loading</div>
            )}
            {post.isFetched && <TrendingCards cards={post.data?.data ?? []} />}
            {post.isFetchedAfterMount && (
                <div className="w-full flex items-center justify-center">
                    <Link
                        href="/"
                        className="border border-white rounded-full text-white py-1 px-4 text-[18px] flex items-center justify-center leading-[22px] hover:bg-white hover:text-background-dark transition-all "
                    >
                        show more
                    </Link>
                </div>
            )}
        </div>
    );
}
