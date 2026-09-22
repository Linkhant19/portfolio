// src/components/escape-room/EscapeRoomPlaytesting.jsx

export default function EscapeRoomPlaytesting() {
    return (
        <section className="mt-32">

            <p className="font-major-mono text-sm">
                06 / playtesting
            </p>

            <h2 className="mt-4 font-caslon text-5xl md:text-6xl">
                Watching Players Think
            </h2>

            <p className="mt-8 max-w-3xl font-caslon text-lg leading-relaxed">
                Before opening the experience to larger groups,
                we ran two initial playtests with coworkers and a friend.
                Watching people interact with the puzzles gave us
                a perspective that designing them ourselves could not.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2">

                <div className="flex aspect-video items-center justify-center bg-neutral-200 text-neutral-600">
                    <p className="font-major-mono text-sm">
                        playtesting photo / video
                    </p>
                </div>

                <div className="flex aspect-video items-center justify-center bg-neutral-200 text-neutral-600">
                    <p className="font-major-mono text-sm">
                        playtesting photo / video
                    </p>
                </div>

            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-3">

                <div>
                    <p className="font-major-mono text-sm">
                        01 / observation
                    </p>

                    <h3 className="mt-4 font-caslon text-3xl">
                        Not Everything Was Discoverable
                    </h3>

                    <p className="mt-5 font-caslon text-lg leading-relaxed">
                        The 3D-printed branch puzzle showed us that
                        an idea could make sense to its designers
                        while still being difficult for players to
                        interpret. We found out that players did not immediately
                        understand that the two branches needed
                        to be combined.
                    </p>
                </div>

                <div>
                    <p className="font-major-mono text-sm">
                        02 / iteration
                    </p>

                    <h3 className="mt-4 font-caslon text-3xl">
                        Updating the Puzzle
                    </h3>

                    <p className="mt-5 font-caslon text-lg leading-relaxed">
                        We responded by adding Polaroid-style images
                        that suggested the relationship between the
                        branches. The goal was not to reveal the
                        answer, but to make the intended interaction
                        easier to discover.
                    </p>
                </div>

                <div>
                    <p className="font-major-mono text-sm">
                        03 / feedback
                    </p>

                    <h3 className="mt-4 font-caslon text-3xl">
                        Memorable Feedback
                    </h3>

                    <p className="mt-5 font-caslon text-lg leading-relaxed">
                        The Tree of Operations received particularly
                        positive feedback during our testing. We were told that
                        the players enjoyed the challenge of finding out how the puzzle interacted
                        with the physical decorations.
                    </p>
                </div>

            </div>

            <div className="mt-20 border-t pt-10">

                <p className="font-major-mono text-sm">
                    what's next
                </p>

                <p className="mt-5 max-w-3xl font-caslon text-lg leading-relaxed">
                    These tests are part of an ongoing design process.
                    We are currently finalizing the experience before
                    running it with a larger group of coworkers, which
                    will give us another opportunity to observe player
                    behavior and refine the room.
                </p>

            </div>

        </section>
    );
}