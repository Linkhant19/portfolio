// src/components/escape-room/EscapeRoomPuzzleFlow.jsx

export default function EscapeRoomPuzzleFlow() {
    return (
        <div className="mt-12 rounded-xl border p-6 md:p-10">

            <p className="mb-8 text-center font-major-mono text-sm">
                woodland cave / puzzle flow
            </p>

            <div className="grid grid-cols-2 gap-4">

                <div className="rounded-lg border p-6 text-center">
                    <p className="font-major-mono text-sm">
                        puzzle 01
                    </p>
                    <p className="mt-3 font-caslon text-lg">
                        Independent starting puzzle
                    </p>
                </div>

                <div className="rounded-lg border p-6 text-center">
                    <p className="font-major-mono text-sm">
                        puzzle 02
                    </p>
                    <p className="mt-3 font-caslon text-lg">
                        Independent starting puzzle
                    </p>
                </div>

            </div>

            <p className="my-6 text-center text-3xl">
                ↓
            </p>

            <div className="rounded-lg border p-6 text-center">

                <p className="font-major-mono text-sm">
                    puzzle 03
                </p>

                <p className="mt-3 font-caslon text-lg">
                    Combines information from puzzles 1 and 2
                </p>

            </div>

            <p className="my-6 text-center text-3xl">
                ↓
            </p>

            <div className="rounded-lg border p-6 text-center">

                <p className="font-major-mono text-sm">
                    puzzle 04 / room finale
                </p>

                <p className="mt-3 font-caslon text-lg">
                    Uses the results of the first three puzzles
                </p>

            </div>

            <p className="my-6 text-center text-3xl">
                ↓
            </p>

            <div className="rounded-lg bg-neutral-200 p-6 text-center text-black">

                <p className="font-major-mono text-sm">
                    next destination
                </p>

                <p className="mt-3 font-caslon text-2xl">
                    The Creature Cavern
                </p>

            </div>

        </div>
    );
}