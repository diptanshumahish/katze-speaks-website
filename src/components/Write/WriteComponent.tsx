"use client";
import localFont from "next/font/local";
import React, { useState } from "react";
import MediumDescription from "./MediumDescription";
import MainContent from "./MainContent";
import TagsEditor from "./TagsEditor";
import ImageUploader from "./ImageUploader";
import { useCreatePost } from "@/api-management/endpoints/posts/query";
import useUser from "@/state-management/state/user.state";
import { toast } from "react-toastify";
import { CheckCircle2 } from "lucide-react";
import { BarLoader } from "react-spinners";
import { redirect, useRouter } from "next/navigation";
import { getRandomTitle } from "@/util/getRandomTitle";

const aug = localFont({
    src: [
        {
            path: "../../../public/fonts/aug.otf",
        },
    ],
});

export default function WriteComponent() {
    const [tags, setTags] = useState<string[]>([]);
    const [image, setImage] = useState<string | null>(null);
    const router = useRouter();
    const createPost = useCreatePost({
        onSuccess: () => {
            toast.success("Posted");
            router.replace("/thankyou");
        },
        onError: (e) => {
            toast.error(e.message);
        },
    });
    const { user } = useUser();

    function submit(event: React.FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const Formimage =
            image ??
            "https://img.playbook.com/sInFsuMOi9mlDp5tGzEhHatM_rW-M63VjWZDJR2IL8U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EwNzQxZTY4/LTliZDEtNGMyMS1i/MmJjLWU4NzJlYmZm/MTVhZg";
        const title = formData.get("title")?.toString();
        const formTags = tags;
        const md = formData.get("minidesc")?.toString();
        const cont = formData.get("maincontent")?.toString();
        if (title === "") {
            toast.warn("You haven't filled the title field");
            return;
        }
        if (formTags.length === 0) {
            toast.warn(
                "Please enter some comma separated tags, without tags we cant organize stuff"
            );
            return;
        }
        if (md === "") {
            toast.warn("You forgot to enter the mini description");
            return;
        }
        if (cont === "") {
            toast.warn("I guess you didn't write any content 🙂");
            return;
        }

        console.log(user);
        createPost.mutate({
            coverImage: Formimage,
            miniDescription: md!,
            postContent: cont!,
            postedById: user.userId,
            postedByUserName: user.username,
            postHeading: title!,
            tags: tags,
        });
    }

    return (
        <div className="pb-[10vh]">
            <form onSubmit={submit} className="flex flex-col gap-6">
                <ImageUploader
                    onImageUpload={(val) => {
                        setImage(val);
                    }}
                />
                <div>
                    <input
                        type="text"
                        className={`text-[50px] w-full bg-background-dark py-2 border-b overflow-hidden border-gray-600 focus:outline-none caret-white text-white font-bold ${aug.className}`}
                        placeholder={getRandomTitle()}
                        name="title"
                    />
                    <span className="text-theme-green text-sm px-1 tracking-wide">
                        Edit your title by changing this text (The above default
                        title is random, don;t bother it :))
                    </span>
                </div>
                <TagsEditor
                    name="tags"
                    onOutPut={(val) => {
                        setTags(val);
                    }}
                    placeholder="Enter tags"
                />
                <MediumDescription
                    initialText="Write your mini description over here"
                    name="minidesc"
                />
                <MainContent
                    initialText="The stage is here, start sharing your thoughts!"
                    name="maincontent"
                />
                <div className="w-full bg-white bg-opacity-10 rounded-md p-4 flex flex-col gap-4 text-white">
                    <div>
                        Ready to submit? Hit the Submit button after you fill up
                        all fields
                    </div>
                    <div className="flex gap-2 items-center">
                        <button
                            type="submit"
                            disabled={createPost.isLoading}
                            className="w-fit bg-white py-1 px-6 disabled:opacity-25 pl-3 text-lg rounded-full text-black flex gap-2 items-center font-semibold"
                        >
                            <CheckCircle2 />
                            Submit
                        </button>
                        {createPost.isLoading && <BarLoader color="white" />}
                    </div>
                </div>
            </form>
        </div>
    );
}
