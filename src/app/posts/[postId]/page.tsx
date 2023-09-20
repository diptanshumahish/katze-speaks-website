import PostsWrapper from "@/components/Posts/Postswrapper";
import React from "react";
import postRoute from "@/api-management/endpoints/posts/routes";
import { apiCalls } from "@/api-management/interceptor/common";
import { Metadata, ResolvingMetadata } from "next";
import UseServerRoute from "@/api-management/interceptor/server";

type Props = { params: { postId: string } };

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const postData = UseServerRoute(postRoute);
    const query = await apiCalls(() => postData.getFullPost(params.postId));
    const meta = query.data;
    return {
        title: meta?.postHeading,
        description: meta?.miniDescription,
        openGraph: {
            type: "article",
            description: meta?.miniDescription,
            title: meta?.postHeading,
            images: meta?.coverImage,
        },
    };
}

export default function page({ params }: Props) {
    return (
        <div>
            <PostsWrapper />
        </div>
    );
}
