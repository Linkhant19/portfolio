// src/components/escape-room/EscapeRoomProgress.tsx
// the progress slideshow to show the gradual progression of our project

import { useEffect, useState } from "react";
import React from "react";

import ProgressOne from "../../assets/images/escaperoom/empty_room_1.jpg";
import ProgressTwo from "../../assets/images/escaperoom/empty_room_2.jpg";
import ProgressThree from "../../assets/images/escaperoom/empty_room_3.jpg";

const progressImages = [
    {
        src: ProgressOne,
        alt: "Basement room 1 before construction",
        caption: "The basement before we began.",
    },
    {
        src: ProgressTwo,
        alt: "Basement room 2 before construction",
        caption: "The basement before we began.",
    },
    {
        src: ProgressThree,
        alt: "Basement room 2 before construction",
        caption: "The basement before we began.",
    },
];

export default function EscapeRoomProgress() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((previousImage) =>
                (previousImage + 1) % progressImages.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const image = progressImages[currentImage];

    return (
        <figure>
            <div className="aspect-[4/5] overflow-hidden">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                />
            </div>

            <figcaption className="mt-3 font-caslon text-sm italic text-end">
                {image.caption}
            </figcaption>
        </figure>
    );
}