"use client";
import { Comment } from "@/api-management/endpoints/posts/models";
import React from "react";
import Image from "next/image";
import useUser from "@/state-management/state/user.state";
import { useUpdatePost } from "@/api-management/endpoints/posts/query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import moment from "moment";

interface Props {
    comments: Comment[];
    id: string;
}
export default function CommentBody({ comments, id }: Props) {
    const { user } = useUser();
    const router = useRouter();
    const addComment = useUpdatePost(id, {
        onError: (e) => {
            toast.warn(e.message);
        },
        onSuccess: () => {
            toast.success("Posted");
            router.refresh();
        },
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const comment = formData.get("cmt")?.toString();

        if (!comment) {
            toast.warn("Don't submit empty comment ");
            return;
        }

        addComment.mutate({
            comments: [
                ...comments,
                {
                    commentBody: comment,
                    commentedAt: moment().format("Do MMM, YYYY h:mma"),
                    imageLink: user.profilePicture,
                    userName: user.username,
                },
            ],
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="text-sm flex gap-2 py-2 w-full"
        >
            <div>
                <Image
                    src={user.profilePicture}
                    height={20}
                    width={20}
                    alt={user.username}
                    className="rounded-full"
                />
            </div>
            <input
                type="text"
                name="cmt"
                className="bg-white bg-opacity-5 font-normal p-2 rounded-md w-full focus:outline-none"
                placeholder="Comment your thoughts"
            />
            <button
                type="submit"
                className="bg-white text-black px-4 py-1 rounded-md"
            >
                Post
            </button>
        </form>
    );
}
