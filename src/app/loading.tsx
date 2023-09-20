import React from "react";
import { BarLoader } from "react-spinners";

export default function loading() {
    return (
        <div className="h-screen w-screen text-white flex items-center justify-center flex-col">
            <div>Loading</div>
            <BarLoader color="white" />
        </div>
    );
}
