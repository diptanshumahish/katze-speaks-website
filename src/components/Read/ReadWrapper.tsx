"use client";
import { useGetALlPosts } from "@/api-management/endpoints/posts/query";
import TextHeading from "@/components/Texts/TextHeading";
import TrendingCards from "@/components/Trending/TrendingCards";
import { useRouter } from "next/navigation";
import React from "react";
import { BarLoader } from "react-spinners";

export default function ReadWrapper() {
    const router = useRouter();
    const posts = useGetALlPosts({
        onError: (e) => {
            console.log(e.message);
            router.replace("/");
        },
    });

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
