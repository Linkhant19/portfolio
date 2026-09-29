// src/components/portfolio/EventPhotoStack.jsx

// I did use AI in this component to research and help me implement the structure of the Event Photo Stack
// The idea of the component designs are my own
// I tried to change the desgin to my liking and added some details myself

// I prob want to include some visual indicators to distinguish between each event type (muder myster, escape room, etc...) without users having to read.


import { useState } from "react";

export default function EventPhotoStack({ project }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const photos = project.photos || [];

    const nextIndex =
        photos.length > 0
            ? (currentIndex + 1) % photos.length
            : 0;

    const thirdIndex =
        photos.length > 0
            ? (currentIndex + 2) % photos.length
            : 0;

    function showNextPhoto() {
        if (photos.length <= 1) return;

        setCurrentIndex(
            (currentIndex + 1) % photos.length
        );
    }

    if (photos.length === 0) return null;

    return (
        <article className="mx-auto w-full max-w-xl py-10">

            {/* PHOTO STACK */}

            <button
                type="button"
                onClick={showNextPhoto}
                aria-label={`Show next photo from ${project.title}`}
                className="
                    group relative block
                    aspect-[4/3] w-full
                    cursor-pointer
                    focus-visible:outline-2
                    focus-visible:outline-offset-8
                    focus-visible:outline-stone-500
                "
            >

                {/* BACK PHOTO */}

                {photos.length > 2 && (
                    <div
                        className="
                            absolute inset-0
                            translate-x-4 translate-y-3
                            rotate-3
                            overflow-hidden
                            bg-white p-2
                            shadow-md
                        "
                    >
                        <img
                            src={photos[thirdIndex]}
                            alt=""
                            className="
                                h-full w-full
                                object-cover
                                opacity-70
                            "
                        />
                    </div>
                )}

                {/* MIDDLE PHOTO */}

                {photos.length > 1 && (
                    <div
                        className="
                            absolute inset-0
                            -translate-x-3 translate-y-2
                            -rotate-2
                            overflow-hidden
                            bg-white p-2
                            shadow-md
                        "
                    >
                        <img
                            src={photos[nextIndex]}
                            alt=""
                            className="
                                h-full w-full
                                object-cover
                                opacity-80
                            "
                        />
                    </div>
                )}

                {/* CURRENT PHOTO */}

                <div
                    className="
                        absolute inset-0 z-10
                        overflow-hidden
                        bg-white p-3

                        shadow-[0_12px_30px_rgba(0,0,0,0.18)]

                        transition-transform duration-300
                        group-hover:-translate-y-2
                        group-hover:-rotate-1
                        motion-reduce:transition-none
                    "
                >
                    <img
                        src={photos[currentIndex]}
                        alt={`${project.title} photo ${currentIndex + 1}`}
                        className="
                            h-full w-full
                            object-cover
                        "
                    />

                    {/* PHOTO COUNTER */}

                    {photos.length > 1 && (
                        <span
                            className="
                                absolute bottom-5 right-5
                                bg-white/90 px-2 py-1
                                font-major-mono
                                text-[9px]
                                tracking-wider
                                text-stone-600
                            "
                        >
                            {currentIndex + 1} / {photos.length}
                        </span>
                    )}

                </div>

            </button>

            {/* EVENT INFORMATION */}

            <div className="mt-10">

                <div className="flex items-center justify-between gap-5">

                    <p
                        className="
                            font-major-mono
                            text-[12px]
                            tracking-[0.18em]
                            text-stone-400
                        "
                    >
                        Events / Leadership
                    </p>

                    {photos.length > 1 && (
                        <p
                            className="
                                font-major-mono
                                text-[9px]
                                text-stone-400
                            "
                        >
                            click photo to show next
                        </p>
                    )}

                </div>

                <h3
                    className="
                        mt-3 font-caslon
                        text-3xl
                    "
                >
                    {project.title}
                </h3>

                <p
                    className="
                        mt-4 font-caslon
                        text-[14px] leading-relaxed
                    "
                >
                    {project.description}
                </p>

            </div>

        </article>
    );
}