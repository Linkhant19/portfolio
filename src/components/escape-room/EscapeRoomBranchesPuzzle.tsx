// src/components/escape-room/EscapeRoomBranchesPuzzle.tsx

import React from "react";
import BranchesPuzzleImage1 from "../../assets/images/escaperoom/banches_puzzle_1.jpg";

export default function EscapeRoomBranchesPuzzle() {
    return (
        <article className="mt-32 border-t pt-20">

            <p className="font-major-mono text-sm text-end">
                featured puzzle 02 / design iteration
            </p>

            <h3 className="mt-4 font-caslon text-4xl md:text-5xl text-end">
                The Hidden Branches
            </h3>

            <p className="mt-6 ml-auto max-w-3xl font-caslon text-lg leading-relaxed text-end">
                This puzzle challenges players to discover how
                two separate 3D-printed branches interact.
                When stacked in the correct arrangement,
                the branches reveal a hidden four-digit
                combination.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

                <figure>
                    <div className="aspect-[4/3] overflow-hidden">
                        <img
                            src={BranchesPuzzleImage1}
                            alt="Two 3D-printed branch pieces used in the Hidden Branches puzzle"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <figcaption className="mt-3 font-caslon text-sm italic">
                        The original branches puzzle being tested by players.
                    </figcaption>
                </figure>

                <figure>

                    <div className="flex aspect-[4/3] items-center justify-center bg-neutral-200 text-neutral-600">
                        <p className="font-major-mono text-sm">
                            photograph of the polaroid hint
                        </p>
                    </div>

                    <figcaption className="mt-3 font-caslon text-sm italic">
                        The visual hint introduced after playtesting.
                    </figcaption>

                </figure>

            </div>

            <div className="mt-20">

                <p className="font-major-mono text-sm">
                    from observation to iteration
                </p>

                <h4 className="mt-4 font-caslon text-4xl">
                    Making the Interaction Discoverable
                </h4>

                <div className="mt-10 grid gap-10 md:grid-cols-3">

                    <div>

                        <p className="font-major-mono text-sm">
                            01 / initial design
                        </p>

                        <p className="mt-4 font-caslon text-lg leading-relaxed">
                            The original puzzle relied on players
                            experimenting with two separate
                            branches until they discovered that
                            stacking them revealed a number.
                        </p>

                    </div>

                    <div>

                        <p className="font-major-mono text-sm">
                            02 / playtesting
                        </p>

                        <p className="mt-4 font-caslon text-lg leading-relaxed">
                            During our initial test runs, we
                            noticed that players struggled to
                            recognize how the branches were
                            meant to interact.
                        </p>

                    </div>

                    <div>

                        <p className="font-major-mono text-sm">
                            03 / iteration
                        </p>

                        <p className="mt-4 font-caslon text-lg leading-relaxed">
                            To address this, we introduced
                            Polaroid-style photographs depicting
                            the branches stacked together,
                            providing a visual hint without
                            directly revealing the combination.
                        </p>

                    </div>

                </div>

            </div>

        </article>
    );
}