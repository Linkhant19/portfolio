// src/components/portfolio/WorkBadge.jsx
// I did use AI in this component to research and help me implement the structure of the work badge
// The idea of the component designs are my own
// I tried to change the desgin to my liking and added some details myself

import { useState } from "react";
import { Link } from "react-router-dom";

export default function WorkBadge({ project }) {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <article className="group mx-auto w-full max-w-lg">

            {/* LANYARD */}

            <div className="flex flex-col items-center">

                <div className="h-8 w-1.5 bg-[#9FB7C2]" />

                <div className="
                    h-4 w-10 rounded-t-lg
                    border-2 border-stone-500
                    bg-stone-300
                " />

            </div>

            {/* 3D BADGE CONTAINER */}

            <div
                className="
                    w-full
                    transition-transform duration-300
                    group-hover:-translate-y-2
                    motion-reduce:transition-none
                "
                style={{
                    perspective: "1200px",
                }}
            >

                {/* ROTATING BADGE */}

                <div
                    className="
                        relative h-[430px] w-full
                        transition-transform duration-700
                        motion-reduce:transition-none
                    "
                    style={{
                        transformStyle: "preserve-3d",
                        transform: isFlipped
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                    }}
                >

                    {/* FRONT OF BADGE */}

                    <button
                        type="button"
                        onClick={() => setIsFlipped(true)}
                        tabIndex={isFlipped ? -1 : 0}
                        aria-hidden={isFlipped}
                        aria-label={`Show details for ${project.title}`}
                        className="
                            absolute inset-0
                            flex w-full cursor-pointer
                            flex-col rounded-xl
                            border-2 border-stone-400
                            bg-[#D9E2E6] p-6
                            text-left text-[#292D2B]
                            shadow-[6px_8px_0px_#1F2A30]
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[#F6F7F5]
                        "
                        style={{
                            backfaceVisibility: "hidden",
                        }}
                    >

                        {/* BADGE HOLE */}

                        <span className="
                            mx-auto mb-8 block
                            h-2 w-12 rounded-full
                            border border-stone-500
                            bg-white
                        " />

                        {/* HEADER */}

                        <span className="
                            block font-major-mono
                            text-xs text-stone-500
                        ">
                            Work Experience / Id Card
                        </span>

                        {/* LOGO AND ROLE */}

                        <span className="
                            mt-8 flex items-center gap-5
                        ">

                            {/* COMPANY LOGO */}

                            <span className="
                                flex h-20 w-20 shrink-0
                                items-center justify-center
                                overflow-hidden rounded-lg
                                bg-transparent
                            ">

                                <img
                                    src={project.image}
                                    alt=""
                                    className="
                                        h-full w-full
                                        object-contain
                                    "
                                />

                            </span>

                            {/* ROLE INFORMATION */}

                            <span className="min-w-0">

                                <span className="
                                    block font-major-mono
                                    text-xs text-stone-500
                                ">
                                    lin khant ko
                                </span>

                                <span className="mt-2 block whitespace-pre-line font-caslon text-2xl leading-tight">
                                    {project.title}
                                </span>

                            </span>

                        </span>

                        {/* DATE */}

                        <span className="
                            mt-8 block border-t
                            border-stone-400 pt-5
                        ">

                            <span className="
                                block font-major-mono
                                text-xs text-stone-500
                            ">
                                Duration
                            </span>

                            <span className="
                                mt-2 block font-caslon
                                text-lg
                            ">
                                {project.dates}
                            </span>

                        </span>

                        {/* FLIP INDICATOR */}

                        <span className="
                            mt-auto block pt-5
                            text-center font-major-mono
                            text-xs text-[#345544]
                        ">
                            flip to inspect ↻
                        </span>

                    </button>

                    {/* BACK OF BADGE */}

                    <div
                        aria-hidden={!isFlipped}
                        className="
                            absolute inset-0
                            flex flex-col
                            rounded-xl border-2
                            border-[#F6F7F5]
                            bg-[#4F6D7A] p-6
                            text-[#E7F5E9]
                            shadow-[6px_8px_0px_#1F2A30]
                        "
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >

                        <p className="font-major-mono text-xs text-[#A9D4BA]">
                            EXPERIENCE DETAILS
                        </p>

                        <h3 className="
                            mt-4 font-caslon
                            text-3xl
                        ">
                            {project.title}
                        </h3>

                        <div className="
                            mt-6 min-h-0 flex-1
                            overflow-y-auto
                            font-caslon text-lg
                            leading-relaxed
                        ">
                            {project.description}
                        </div>

                        {/* FLIP BACK */}

                        <button
                            type="button"
                            onClick={() => setIsFlipped(false)}
                            tabIndex={isFlipped ? 0 : -1}
                            className="
                                mt-5 w-full cursor-pointer
                                border-t border-[#F6F7F5]
                                pt-4 text-center
                                font-major-mono text-xs
                                text-[#A9D4BA]
                                hover:opacity-60
                                focus-visible:outline-2
                            "
                        >
                            ↶ flip back
                        </button>

                    </div>

                </div>

            </div>

            {/* PROJECT LINKS. I PROBABLY WON'T HAVE FOR MOST OF MY WORK EXPERIENCES. */}

            <div className="mt-8 flex flex-wrap gap-5">

                {project.slug && (
                    <Link
                        to={`/projects/${project.slug}`}
                        className="
                            cursor-pointer font-major-mono
                            text-sm underline underline-offset-4
                            hover:opacity-60
                        "
                    >
                        Explore Experience →
                    </Link>
                )}

                {project.links?.map((link) => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            cursor-pointer font-major-mono
                            text-sm underline underline-offset-4
                            hover:opacity-60
                        "
                    >
                        {link.label} ↗
                    </a>
                ))}

            </div>

        </article>
    );
}