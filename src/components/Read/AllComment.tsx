import { Comment } from "@/api-management/endpoints/posts/models";
import React from "react";
import Image from "next/image";
import CommentBody from "./CommentBody";
import useUser from "@/state-management/state/user.state";
import Link from "next/link";
interface Props {
    comment: Comment[];
    id: string;
}
export default function AllComment({ comment, id }: Props) {
    const { user } = useUser();
    return (
        <div className="font-semibold text-2xl ">
            Comments ({comment.length})
            {comment.length > 0 && (
                <div className="py-4 flex gap-1 flex-col">
                    {comment.map((ele, idx) => (
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
                    ))}
                    {user.logged_in && (
                        <CommentBody comments={comment} id={id} />
                    )}
                </div>
            )}
            {comment.length === 0 && user.logged_in && (
                <CommentBody comments={comment} id={id} />
            )}
            {!user.logged_in && (
                <Link href="/onboard" className="text-sm text-theme-green">
                    Log in to start commenting
                </Link>
            )}
        </div>
    );
}
