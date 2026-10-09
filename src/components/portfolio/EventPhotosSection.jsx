// src/components/portfolio/EventPhotosSection.jsx

import EventPhotoStack from "./EventPhotoStack";

export default function EventPhotosSection({ projects }) {
    if (!projects.length) return null;

    return (
        <section className="mt-24">

            <div className="mb-10">
                <p
                    className="
                        font-major-mono
                        text-[10px]
                        tracking-[0.18em]
                        text-stone-500
                    "
                >
                    collection:
                </p>

                <h2
                    className="
                        mt-2
                        font-caslon
                        text-3xl
                        text-stone-800
                    "
                >
                    More Photos from Events
                </h2>
            </div>

            <div
                className="
                    grid
                    gap-12

                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >
                {projects.map((project) => (
                    <EventPhotoStack
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>

        </section>
    );
}