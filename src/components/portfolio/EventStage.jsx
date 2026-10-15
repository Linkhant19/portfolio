// src/components/portfolio/EventStage.jsx
// I did use AI in this component to research and help me implement the structure of the Event Stage
// The idea of the component designs are my own
// I tried to change the desgin to my liking and added some details myself

import { useState } from "react";
import { Link } from "react-router-dom";

export default function EventStage({ project }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article className="mx-auto w-full max-w-xl">

            <div className="relative">

                {/* STAGE OPENING */}

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label={
                        isOpen
                            ? `Close curtain for ${project.title}`
                            : `Open curtain for ${project.title}`
                    }
                    className="
                        group relative block
                        aspect-[4/3] w-full
                        cursor-pointer overflow-hidden
                        bg-[#171210]
                        text-left

                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[#B65F59]
                    "
                >

                    {/* EVENT PHOTO */}

                    <img
                        src={project.image}
                        alt=""
                        className="
                            absolute inset-0
                            h-full w-full object-cover

                            transition-transform duration-700
                            group-hover:scale-[1.03]
                            motion-reduce:transition-none
                        "
                    />

                    {/* DARK GRADIENT FOR TEXT */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute inset-0 z-10
                            bg-gradient-to-t
                            from-black/95
                            via-black/65
                            to-black/30
                        "
                    />

                    {/* EVENT DESCRIPTION ON PHOTO */}

                    <div
                        onClick={(event) => event.stopPropagation()}
                        className={`
                            absolute
                            inset-x-[8%]
                            bottom-4
                            z-20

                            max-h-[70%]
                            overflow-y-auto
                            overscroll-contain
                            touch-pan-y

                            px-3 py-4
                            text-center text-white

                            sm:inset-x-[12%]
                            sm:p-6

                            transition-all duration-500

                            ${
                                isOpen
                                    ? `
                                        pointer-events-auto
                                        translate-y-0
                                        opacity-100
                                    `
                                    : `
                                        pointer-events-none
                                        translate-y-4
                                        opacity-0

                                        group-hover:translate-y-0
                                        group-hover:opacity-100
                                    `
                            }
                        `}
                    >
                        <p
                            className="
                                font-major-mono
                                text-[9px]
                                tracking-[0.2em]
                                text-white/70
                            "
                        >
                            interactive experience project
                        </p>

                        <h3
                            className="
                                mt-2
                                font-caslon
                                text-xl
                                leading-tight

                                sm:text-3xl
                            "
                        >
                            {project.title}
                        </h3>

                        <p
                            className="
                                mx-auto mt-3 max-w-md
                                font-caslon
                                text-sm
                                leading-relaxed
                                text-white/90

                                sm:text-base
                            "
                        >
                            {project.description}
                        </p>
                    </div>

                    {/* LEFT CURTAIN */}

                    <div
                        aria-hidden="true"
                        className={`
                            absolute inset-y-0 left-0 z-30
                            w-[52%]
                            bg-[#a7c2e0]

                            shadow-[inset_-20px_0_30px_rgba(65,20,20,0.22)]

                            transition-transform
                            duration-700 ease-in-out
                            motion-reduce:transition-none

                            ${
                                isOpen
                                    ? "-translate-x-[82%]"
                                    : "translate-x-0 group-hover:-translate-x-[82%]"
                            }
                        `}
                    >
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: `
                                    repeating-linear-gradient(
                                        90deg,
                                        transparent 0px,
                                        transparent 34px,
                                        rgba(70, 20, 20, 0.4) 35px,
                                        transparent 54px
                                    )
                                `,
                            }}
                        />
                    </div>

                    {/* RIGHT CURTAIN */}

                    <div
                        aria-hidden="true"
                        className={`
                            absolute inset-y-0 right-0 z-30
                            w-[52%]
                            bg-[#a7c2e0]

                            shadow-[inset_20px_0_30px_rgba(65,20,20,0.22)]

                            transition-transform
                            duration-700 ease-in-out
                            motion-reduce:transition-none

                            ${
                                isOpen
                                    ? "translate-x-[82%]"
                                    : "translate-x-0 group-hover:translate-x-[82%]"
                            }
                        `}
                    >
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: `
                                    repeating-linear-gradient(
                                        90deg,
                                        transparent 0px,
                                        transparent 34px,
                                        rgba(70, 20, 20, 0.4) 35px,
                                        transparent 54px
                                    )
                                `,
                            }}
                        />
                    </div>

                    {/* TOP CURTAIN */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute inset-x-0 top-0 z-40
                            h-3
                            bg-[#dddddd]
                            opacity-30
                            shadow-[0_5px_10px_rgba(0,0,0,0.2)]
                        "
                    />

                    {/* CLOSED CURTAIN TITLE */}

                    <div
                        className={`
                            pointer-events-none
                            absolute inset-0 z-40
                            flex items-center justify-center
                            px-10 text-center

                            transition-opacity duration-300

                            ${
                                isOpen
                                    ? "opacity-0"
                                    : "opacity-100 group-hover:opacity-0"
                            }
                        `}
                    >
                        <div>
                            <p
                                className="
                                    font-major-mono text-[9px]
                                    tracking-[0.2em]
                                    text-[#3333333]
                                "
                            >
                                events and puzzles/games
                            </p>

                            <h3
                                className="
                                    mt-5 font-caslon
                                    text-3xl text-[#000000]
                                "
                            >
                                {project.title}
                            </h3>

                            <p
                                className="
                                    mt-10 font-major-mono
                                    text-[9px]
                                    text-black
                                "
                            >
                                click to open curtain / <br /> click below to enter experience
                            </p>
                        </div>
                    </div>

                </button>

                {/* STAGE FLOOR */}

                <div className="relative mx-[-5%]">

                    {/* TOP SURFACE */}

                    <div
                        aria-hidden="true"
                        className="
                            relative z-10
                            h-12
                            bg-[#666666]
                        "
                        style={{
                            clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0 100%)",
                        }}
                    >
                        {/* FLOOR BOARDS */}
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: `
                                    repeating-linear-gradient(
                                        90deg,
                                        transparent 0px,
                                        transparent 72px,
                                        rgba(30, 10, 0, 0.15) 71px,
                                        transparent70px
                                    )
                                `,
                            }}
                        />
                    </div>

                    {/* FRONT FACE OF STAGE */}

                    <div
                        className="
                            relative z-20
                            -mt-px
                            flex min-h-16
                            items-center justify-center
                            bg-[#444444]
                            px-6
                        "
                    >
                        {project.slug ? (
                            <Link
                                to={`/projects/${project.slug}`}
                                className="
                                    font-major-mono
                                    text-[17px]
                                    tracking-[0.16em]
                                    text-[#F5E8D3]
                                    transition-opacity
                                    hover:opacity-60
                                "
                            >
                                enter experience →
                            </Link>
                        ) : (
                            <span
                                className="
                                    font-major-mono
                                    text-[10px]
                                    tracking-[0.16em]
                                    text-[#F5E8D3]/60
                                "
                            >
                                soon
                            </span>
                        )}
                    </div>

                </div>

            </div>

        </article>
    );
}