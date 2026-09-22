// src/components/escape-room/EscapeRoomReflection.jsx

export default function EscapeRoomReflection() {
    return (
        <section className="mt-32 mb-24">

            <p className="font-major-mono text-sm">
                07 / reflection
            </p>

            <h2 className="mt-4 font-caslon text-5xl md:text-6xl">
                What I Learned
            </h2>

            <div className="mt-12 grid gap-12 md:grid-cols-2">

                <div className="space-y-6 font-caslon text-lg leading-relaxed">

                    <p>
                        Taking on this particular project was a new challenge
                        for both of us and taught us a lot about
                        the puzzle design process and user experience.
                    </p>

                    <p>
                        Some of the ideas and solutions that felt obvious to us
                        as designers were interpreted very
                        differently by the players. Watching people
                        interact with the room made me think more
                        carefully about discoverability, feedback,
                        pacing, and how much information a player
                        needs at any given moment. It allowed me to understand
                        the puzzles in different perspectives and creatively integrate
                        more hints into the environment.
                    </p>

                    <p>
                        I also learned how much the environment
                        itself can become part of an interaction.
                        The strongest moments were not always
                        isolated and difficult puzzles, but moments when the
                        physical space, story, and puzzle mechanics
                        worked together.
                    </p>

                </div>

                <div className="space-y-10">

                    <div>
                        <p className="font-major-mono text-sm">
                            if I built it again
                        </p>

                        <p className="mt-4 font-caslon text-lg leading-relaxed">
                            I ... do something. Maybe accessibility?
                        </p>
                    </div>

                    <div>
                        <p className="font-major-mono text-sm">
                            what I want to explore next
                        </p>

                        <p className="mt-4 font-caslon text-lg leading-relaxed">
                            I would like to design more interactive experiences
                            that combine technology, perspectives, puzzles, storytelling,
                            and human experience.

                            I would also like to take on a bigger project after
                            more research and experience. It would also be interesting to
                            apply this to a non-escape room setting like a Murder Mystery Experience.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}