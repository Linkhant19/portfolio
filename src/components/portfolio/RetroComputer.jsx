// src/components/portfolio/RetroComputer.jsx
// I did use AI in this component to research and help me implement the structure of the computer
// I tried to change the desgin to my liking and added some details myself

import { useState } from "react";
import { Link } from "react-router-dom";

export default function RetroComputer({ project }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="w-full max-w-xl">

            {/* COMPUTER BODY */}

            <div
                className="
                    rounded-[20px]
                    bg-[#E2DDD1]
                    p-5
                "
            >

                {/* INTERACTIVE SCREEN */}

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label={
                        isOpen
                            ? `Hide details for ${project.title}`
                            : `Show details for ${project.title}`
                    }
                    className="
                        group relative block
                        aspect-[4/3] w-full
                        cursor-pointer overflow-hidden
                        rounded-xl border-[5px]
                        border-[#5D625D]
                        bg-[#242F2C]
                        text-left
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[#5D625D]
                        transition-shadow duration-300
                        hover:shadow-[0_0_45px_rgba(126,255,179,0.35)]
                        focus-visible:shadow-[0_0_45px_rgba(126,255,179,0.35)]
                        motion-reduce:transition-none
                    "
                >

                    {/* PROJECT SCREENSHOT */}

                    <img
                        src={project.image}
                        alt=""
                        className="
                            h-full w-full object-cover
                            brightness-90
                            contrast-110
                            saturate-75
                            sepia-[0.12]
                            transition-all duration-300
                            motion-reduce:transition-none
                        "
                    />

                    {/* RETRO COLOR TINT */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute inset-0
                            bg-emerald-400/8
                            mix-blend-screen
                        "
                    />

                    {/* DESCRIPTION OVERLAY */}

                    <div
                        className={`
                            absolute inset-0
                            overflow-y-auto
                            bg-[#142A23]/95
                            p-5 sm:p-7
                            text-[#B9F8D2]
                            transition-opacity duration-300

                            ${
                                isOpen
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                            }
                        `}
                    >

                        <p className="font-major-mono text-xs">
                            PROJECT DETAILS
                        </p>

                        <h4 className="mt-5 font-caslon text-2xl">
                            {project.title}
                        </h4>

                        <p className="mt-4 font-caslon text-base leading-relaxed">
                            {project.description}
                        </p>

                    </div>

                    {/* CRT SCANLINES */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute inset-0 z-30
                        "
                        style={{
                            backgroundImage: `
                                repeating-linear-gradient(
                                    to bottom,
                                    transparent 0px,
                                    transparent 3px,
                                    rgba(0, 0, 0, 0.14) 4px
                                )
                            `,
                        }}
                    />

                </button>

                {/* COMPUTER DETAILS */}

                <div className="mt-4 flex items-center justify-between gap-4">

                    <h3
                        className="
                            font-major-mono text-xs
                            text-[#565A55] sm:text-sm
                        "
                    >
                        {project.title}
                    </h3>

                    <span
                        aria-hidden="true"
                        className="shrink-0 text-2xl text-[#565A55]"
                    >
                        ⏻
                    </span>

                </div>

            </div>

            {/* PROJECT LINKS */}

            <div className="mt-6 flex flex-wrap gap-5">

                {project.slug && (
                    <Link
                        to={`/projects/${project.slug}`}
                        className="
                            cursor-pointer
                            font-major-mono text-sm
                            underline underline-offset-4
                            hover:opacity-60
                        "
                    >
                        Explore Project →
                    </Link>
                )}

                {project.links?.map((link) => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            cursor-pointer
                            font-major-mono text-sm
                            underline underline-offset-4
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