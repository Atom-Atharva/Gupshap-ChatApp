import React, { useRef, useState } from "react";

const PictureDP = () => {
    const inputRef = useRef();
    const [image, setImage] = useState();

    const handleInputClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imgname = event.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    (maxSize - img.width) / 2,
                    (maxSize - img.height) / 2
                );
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: "image/png",
                            lastModified: Date.now(),
                        });

                        console.log(file);
                        setImage(file);
                    },
                    "image/jpeg",
                    0.8
                );
            };
        };
    };

    return (
        <div
            className="h-36 w-36 cursor-pointer bg-white rounded-full flex justify-center items-center"
            onClick={handleInputClick}
        >
            {image ? (
                <img
                    src={URL.createObjectURL(image)}
                    alt="img"
                    className="h-36 w-36 rounded-full"
                />
            ) : (
                <div className="text-center font-semibold opacity-40">
                    + Add Picture
                </div>
            )}
            <input
                type="file"
                name="myImage"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
                required
            />
        </div>
    );
};

export default PictureDP;
