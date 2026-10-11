// src/components/portfolio/WritingManuscript.jsx
// I did use AI in this component to research and help me implement the structure of the writing manuscript
// The idea of the component designs are my own
// I tried to change the desgin to my liking and added some details myself

export default function WritingManuscript({ project }) {
    return (
        <article className="group mx-auto w-full max-w-lg py-8">

            <a
                href={project.links?.find(
                    (link) => link.label === "PDF"
                )?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${project.title} (PDF opens in a new tab)`}
                className="
                    block cursor-pointer
                    focus-visible:rounded-sm
                    focus-visible:outline-2
                    focus-visible:outline-offset-8
                    focus-visible:outline-stone-600
                "
            >

                {/* STACK OF MANUSCRIPT PAGES */}

                <div className="relative pr-4 pb-4">

                    {/* BACK PAGE */}

                    <div
                        className="
                            absolute inset-0
                            translate-x-4 translate-y-4
                            border border-[#C9C0B3]
                            bg-[#C9C0B3]
                        "
                    />

                    {/* MIDDLE PAGE */}

                    <div
                        className="
                            absolute inset-0
                            translate-x-2 translate-y-2
                            border border-[#D8D0C4]
                            bg-[#E8E1D6]
                        "
                    />

                    {/* FRONT PAGE */}

                    <div
                        className="
                            relative min-h-[400px]
                            border border-[#D7CEC1]
                            bg-[#FAF8F2]
                            p-7 text-[#352F29]

                            shadow-lg

                            transition-transform duration-300
                            group-hover:-translate-y-2
                            group-hover:-rotate-1
                            motion-reduce:transition-none

                            sm:p-9
                        "
                    >

                        {/* DOCUMENT METADATA */}

                        <div className="flex items-center justify-between gap-4">

                            <span
                                className="
                                    font-mono text-[10px]
                                    tracking-widest text-[#827669]
                                "
                            >
                                {project.format || "WRITTEN WORK"}
                            </span>

                            <span
                                className="
                                    font-mono text-[10px]
                                    text-[#827669]
                                "
                            >
                                PDF / 001
                            </span>

                        </div>

                        <div className="my-6 border-t border-[#D7CEC1]" />

                        {/* TITLE */}

                        <h3 className="font-caslon text-3xl leading-tight text-start">
                            {project.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p
                            className="
                                mt-5 font-caslon text-lg
                                leading-relaxed text-[#675B50]
                                text-start
                            "
                        >
                            {project.description}
                        </p>

                        {/* OPTIONAL EXCERPT */}

                        {project.excerpt && (
                            <blockquote
                                className="
                                    mt-8 border-l-2
                                    border-[#B7A99B] pl-5
                                "
                            >
                                <p
                                    className="
                                        whitespace-pre-line
                                        font-caslon text-[15px] italic
                                        leading-relaxed text-[#76695C]
                                    "
                                >
                                    “{project.excerpt}”
                                </p>
                            </blockquote>
                        )}

                        {/* DOCUMENT FOOTER */}

                        <div className="mt-10 border-t border-[#D7CEC1] pt-5">

                            <p
                                className="
                                    mb-5 font-mono text-[10px]
                                    tracking-widest text-[#827669]
                                    text-start
                                "
                            >
                                LIN KHANT KO / MANUSCRIPT
                            </p>

                            <div className="flex flex-wrap gap-5">

                                {project.pdf && (
                                    <span
                                        className="
                                            font-mono text-xs
                                            underline underline-offset-4
                                            transition-colors duration-200
                                            group-hover:text-[#9B7863]
                                        "
                                    >
                                        READ PDF ↗
                                    </span>
                                )}

                                {project.links?.map((link) => (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            font-mono text-xs
                                            underline underline-offset-4
                                            hover:opacity-60
                                        "
                                    >
                                        {link.label} ↗
                                    </a>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </a>

        </article>
    );
}