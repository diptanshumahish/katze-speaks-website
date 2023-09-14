import ShowProtectedRoutes from "@/components/ProtectedRoutes/ShowProtectedRoutes";
import TextHeading from "@/components/Texts/TextHeading";
import WriteComponent from "@/components/Write/WriteComponent";
import React from "react";

export default function page() {
    return (
        <ShowProtectedRoutes>
            <div className="md:px-[15%] px-[5%]">
                <TextHeading
                    heading="Write your thoughts"
                    subheading="Here's the space you needed, share your experience the way you want, add images, tags and all details, we will get your content posted asap."
                />
                <WriteComponent />
            </div>
        </ShowProtectedRoutes>
    );
}
