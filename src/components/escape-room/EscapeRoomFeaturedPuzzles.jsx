// src/components/escape-room/EscapeRoomFeaturedPuzzles.jsx

import EscapeRoomTreePuzzle from "./EscapeRoomTreePuzzle";
import EscapeRoomBranchesPuzzle from "./EscapeRoomBranchesPuzzle";

export default function EscapeRoomFeaturedPuzzles() {
    return (
        <section id="featured-puzzles" className="mt-32 scroll-mt-20">

            <p className="font-major-mono text-sm">
                04 / featured puzzles
            </p>

            <h2 className="mt-4 font-caslon text-5xl md:text-6xl">
                Behind the Puzzles
            </h2>

            <p className="mt-8 max-w-3xl font-caslon text-lg leading-relaxed">
                A closer look at two puzzles that shaped the
                Woodland Cave (the first cave) experience, from designing an
                interconnected challenge to refining an interaction
                through playtesting.
            </p>

            <EscapeRoomTreePuzzle />

            <EscapeRoomBranchesPuzzle />

        </section>
    );
}