// src/components/escape-room/EscapeRoomBuilding.tsx

import React from "react";
export default function EscapeRoomBuilding() {
    return (
        <section id="building" className="mt-32 scroll-mt-20">

            <p className="font-major-mono text-sm">
                05 / bringing the world to life
            </p>

            <h2 className="mt-4 font-caslon text-5xl md:text-6xl">
                How We Transformed the Basement
            </h2>

            <p className="mt-8 max-w-3xl font-caslon text-lg leading-relaxed">
                Designing the puzzles was not the only part of
                our project. We also needed to transform
                an ordinary basement into a cave-like
                environment where we could integrate our puzzles.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2">

                <figure>
                    <div className="flex aspect-[4/3] items-center justify-center bg-neutral-200 text-neutral-600">

                        <p className="font-major-mono text-sm">
                            basement before construction
                        </p>

                    </div>

                    <figcaption className="mt-3 font-caslon text-sm italic">
                        The basement before our transformation.
                    </figcaption>
                </figure>

                <figure>
                    <div className="flex aspect-[4/3] items-center justify-center bg-neutral-200 text-neutral-600">

                        <p className="font-major-mono text-sm">
                            construction in progress
                        </p>

                    </div>

                    <figcaption className="mt-3 font-caslon text-sm italic">
                        Building the physical structure of the escape room.
                    </figcaption>
                </figure>

            </div>

            <div className="mt-20 grid gap-12 md:grid-cols-2">

                <div>

                    <p className="font-major-mono text-sm">
                        construction & technology
                    </p>

                    <h3 className="mt-4 font-caslon text-4xl">
                        Building the Physical Experience
                    </h3>

                    <p className="mt-6 font-caslon text-lg leading-relaxed">
                        Nyrein led much of the physical
                        construction, building the walls that
                        separated our three caves
                        and implementing interactive mechanisms,
                        including laser-based installations
                        connected to lights.
                    </p>

                </div>

                <div>

                    <p className="font-major-mono text-sm">
                        environmental and puzzle design
                    </p>

                    <h3 className="mt-4 font-caslon text-4xl">
                        Creating the Atmosphere
                    </h3>

                    <p className="mt-6 font-caslon text-lg leading-relaxed">
                        Once the room structures were in place,
                        I worked on decorating the environments
                        to establish the atmosphere of each cave.

                        From woodland elements to swampy creatures
                        and crystals, I utilized affordable materials
                        and cohesive color palettes to create
                        visually engaging environments that our players could explore.
                    </p>

                </div>

            </div>

        </section>
    );
}