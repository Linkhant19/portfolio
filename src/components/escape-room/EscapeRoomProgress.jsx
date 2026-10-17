// src/components/escape-room/EscapeRoomProgress.jsx
// the progress slideshow to show the gradual progression of our project

import { useEffect, useState } from "react";

import EmptyOne from "../../assets/images/escaperoom/empty_room_1.jpg";
import EmptyTwo from "../../assets/images/escaperoom/empty_room_2.jpg";
import EmptyThree from "../../assets/images/escaperoom/empty_room_3.jpg";

import ProgressOne from "../../assets/images/escaperoom/progress_room_1.jpg";
import ProgressTwo from "../../assets/images/escaperoom/progress_room_2.jpg";
import ProgressThree from "../../assets/images/escaperoom/progress_room_3.jpg";

const roomPhotos = [
    {
        room: "The Woodland Cave",
        before: EmptyOne,
        progress: ProgressOne,
    },
    {
        room: "The Creature Cavern",
        before: EmptyTwo,
        progress: ProgressTwo,
    },
    {
        room: "The Crystal Chamber",
        before: EmptyThree,
        progress: ProgressThree,
    },
];

export default function EscapeRoomProgress() {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentImage((previousImage) =>
                (previousImage + 1) % roomPhotos.length
            );

        }, 1800);

        return () => clearInterval(interval);

    }, []);

    const currentRoom = roomPhotos[currentImage];

    return (

        <div className="w-full mt-10 scroll-mt-20">

            <div className="mb-6 flex items-center justify-between">

                <p className="font-major-mono text-sm">
                    the transformation
                </p>

                <p className="font-major-mono text-sm opacity-60">
                    {String(currentImage + 1).padStart(2, "0")}
                    {" / "}
                    {String(roomPhotos.length).padStart(2, "0")}
                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                <figure>

                    <div className="aspect-video overflow-hidden bg-neutral-200">

                        <img
                            src={currentRoom.before}
                            alt={`${currentRoom.room} before construction`}
                            className="h-full w-full object-cover"
                        />

                    </div>

                    <figcaption className="mt-4">

                        <p className="font-major-mono text-sm">
                            01 / before
                        </p>

                        <p className="mt-2 font-caslon text-lg italic">
                            The original basement
                        </p>

                    </figcaption>

                </figure>

                <figure>

                    <div className="aspect-video overflow-hidden bg-neutral-200">

                        <img
                            src={currentRoom.progress}
                            alt={`${currentRoom.room} during construction`}
                            className="h-full w-full object-cover"
                        />

                    </div>

                    <figcaption className="mt-4">

                        <p className="font-major-mono text-sm">
                            02 / in progress
                        </p>

                        <p className="mt-2 font-caslon text-lg italic">
                            Building the escape room
                        </p>

                    </figcaption>

                </figure>

            </div>

            <div className="mt-8 border-t pt-5">

                <p className="font-major-mono text-sm opacity-60 text-end">
                    room {String(currentImage + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 font-caslon text-3xl text-end">
                    {currentRoom.room}
                </h3>

            </div>

        </div>

    );

}