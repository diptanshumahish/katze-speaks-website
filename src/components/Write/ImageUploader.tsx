import { ImagePlus, XCircle } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

interface ImageUploaderProps {
    onImageUpload: (base64Image: string) => void;
}

export default function ImageUploader({ onImageUpload }: ImageUploaderProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const base64Image = event.target?.result as string;
                setSelectedImage(base64Image);
                onImageUpload(base64Image);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-input"
            />

            {selectedImage && (
                <div>
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-h-[30vh] w-full object-cover rounded-md border border-gray-700"
                        />
                        <label
                            htmlFor="image-input"
                            className="bg-black absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-white text-opacity-40 hover:text-opacity-100 transition-opacity z-10 cursor-pointer"
                        >
                            <ImagePlus />
                            <div>Upload new Image</div>
                        </label>
                    </div>
                    <button
                        className="flex text-gray-400 py-1 gap-2 text-sm"
                        onClick={() => {
                            setSelectedImage(null);
                        }}
                    >
                        <XCircle size={20} />
                        Delete image
                    </button>
                </div>
            )}
            {!selectedImage && (
                <div className="w-full h-[30vh] border border-dashed border-gray-500 rounded-md  relative">
                    <label
                        htmlFor="image-input"
                        className="absolute cursor-pointer opacity-40 hover:opacity-100 transition-opacity inset-0 flex flex-col text-gray-100 items-center justify-center"
                    >
                        <ImagePlus />
                        Choose an Image
                    </label>
                </div>
            )}
        </div>
    );
}
