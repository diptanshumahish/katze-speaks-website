"use client";
import { useGetALlPosts } from "@/api-management/endpoints/posts/query";
import TextHeading from "@/components/Texts/TextHeading";
import TrendingCards from "@/components/Trending/TrendingCards";
import React from "react";
import { BarLoader } from "react-spinners";

export default function ReadWrapper() {
    const posts = useGetALlPosts();

    return (
        <div className="md:px-[15%] px-[5%]">
            <TextHeading
                heading="Read our Posts"
                subheading="Check out the cool stuff, you all would love to see"
            />
            {posts.isFetched && <TrendingCards cards={posts.data?.data!} />}
            {posts.isLoading && <BarLoader color="white" />}
        </div>
    );
}
