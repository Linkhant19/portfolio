// src/components/portfolio/PoetryBook.jsx
// I did use AI in this component to research and help me implement the structure of the poem books
// I tried to change the desgin to my liking and added some details myself

import { Link } from "react-router-dom";

export default function PoetryBook({ project }) {
    return (
        <article
            className="
                grid items-center gap-12
                py-10 md:grid-cols-2
            "
        >

            {/* BOOK */}

            <div className="group mx-auto w-full max-w-[320px]">

                <div className="relative aspect-[3/4] w-full">

                    {/* STACKED PAGES */}

                    <div
                        className="
                            absolute inset-0
                            translate-x-[14px] translate-y-[10px]
                            rounded-r-md
                            bg-[#C8BFB0]
                            shadow-md
                        "
                    />

                    <div
                        className="
                            absolute inset-0
                            translate-x-[8px] translate-y-[5px]
                            rounded-r-md
                            bg-[#F0E9DC]
                        "
                    />

                    {/* FRONT COVER */}

                    <div
                        className="
                            absolute inset-0
                            overflow-hidden rounded-r-md
                            border-l-[12px]
                            bg-[#D8C8B3]
                            shadow-[10px_12px_20px_rgba(0,0,0,0.25)]
                            transition-transform duration-300
                            group-hover:-translate-y-3
                            group-hover:-rotate-2
                            motion-reduce:transition-none
                        "
                        style={{
                            borderLeftColor: project.spineColor || "#675449",
                        }}
                    >

                        <img
                            src={project.image}
                            alt={`Cover art for ${project.title}`}
                            className="h-full w-full object-cover"
                        />

                    </div>

                </div>

            </div>

            {/* RIGHT SIDE: PAPER NOTE + POEM EXCERPT */}

            <div>

                {/* TYPEWRITTEN NOTE */}

                <div
                    className="
                        bg-[#F8F3E9]
                        p-7 text-[#453B33]
                        shadow-[5px_7px_0px_#D1C6B6]
                        md:-rotate-1
                    "
                >

                    <p className="font-major-mono text-xs text-[#786E64]">
                        POEM COLLECTION
                    </p>

                    <div className="my-5 border-t border-[#C9BEAF]" />

                    <h3 className="font-caslon text-3xl">
                        {project.title}
                    </h3>

                    <p className="mt-6 font-caslon text-base leading-relaxed">
                        {project.description}
                    </p>

                    {/* READING LINKS */}

                    <div className="mt-8 flex flex-wrap gap-5">

                        {project.slug && (
                            <Link
                                to={`/projects/${project.slug}`}
                                className="
                                    font-major-mono text-xs
                                    underline underline-offset-4
                                    hover:opacity-60
                                "
                            >
                                Open Collection →
                            </Link>
                        )}

                        {project.links?.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    font-major-mono text-xs
                                    underline underline-offset-4
                                    hover:opacity-60
                                "
                            >
                                {link.label} ↗
                            </a>
                        ))}

                    </div>

                </div>

                {/* POEM EXCERPT */}

                {project.quote && (
                    <blockquote
                        className="
                            mx-auto mt-7 max-w-md px-6
                            text-center
                        "
                    >
                        <p
                            className="
                                whitespace-pre-line
                                font-caslon text-xl italic
                                leading-relaxed text-stone-600
                                md:text-[0.95rem]
                                text-end
                            "
                        >
                            “{project.quote}”
                        </p>

                        <p
                            className="
                                mt-5 font-major-mono
                                text-[10px] tracking-[0.2em]
                                text-[#C8A26D]
                            "
                        >
                            — FROM THE COLLECTION —
                        </p>
                    </blockquote>
                )}

            </div>

        </article>
    );
}