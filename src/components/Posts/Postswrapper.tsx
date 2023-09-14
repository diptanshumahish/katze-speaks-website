"use client";
import { useGetFullPost } from "@/api-management/endpoints/posts/query";
import React from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import ReadBody from "@/components/Read/ReadBody";
import { BarLoader } from "react-spinners";

export default function PostsWrapper() {
    const path = usePathname().split("/");

    const post = useGetFullPost(path[path.length - 1], {
        onError: (e) => {
            toast.warn(e.message);
        },
    });
    return (
        <section>
            <div className="md:px-[15%] px-[5%]">
                {post.isFetched && <ReadBody post={post.data?.data!} />}
                {post.isLoading && <BarLoader color="white" />}
                {post.isError && <span>Error fetching post</span>}
            </div>
        </section>
    );
}
