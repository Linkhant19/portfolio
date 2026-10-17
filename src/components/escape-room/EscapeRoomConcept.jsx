// src/components/escape-room/EscapeRoomConcept.jsx
// the concept

export default function EscapeRoomConcept() {
    return (
        <section id="concept" className="mt-32 scroll-mt-20">

            <p className="font-major-mono text-sm">
                02 / the concept
            </p>

            <h2 className="mt-4 font-caslon text-5xl md:text-6xl">
                Three Caves. One Rescue Crew.
            </h2>

            <p className="mt-8 max-w-3xl font-caslon text-lg leading-relaxed">
                Lin has gone missing while trying to retrieve an item from Nyrein's basement.
                Luckily there are some people ready to help him out.
                However, the search will not be easy as they find out that
                Nyrein's basement is filled with surprises. 

                <br /> <br />
                In our escape room, the players must venture underground, navigating through
                three distinct cave environments and solving a series of puzzles to rescue Lin.
            </p>

            <div className="mt-16 grid gap-10 md:grid-cols-3">

                {/* ROOM 1 !! */}

                <article>
                    <p className="font-major-mono text-sm">
                        cave 01
                    </p>

                    <h3 className="mt-3 font-caslon text-3xl">
                        The Woodland Cave
                    </h3>

                    <p className="mt-4 font-caslon text-lg leading-relaxed">
                        An underground woodland filled with mushrooms,
                        flowers, vines, natural elements, and one big tree. Players begin
                        their journey by exploring the environment
                        and uncovering interconnected clues.
                    </p>
                </article>

                {/* ROOM 2 */}

                <article>
                    <p className="font-major-mono text-sm">
                        cave 02
                    </p>

                    <h3 className="mt-3 font-caslon text-3xl">
                        The Creature Cavern
                    </h3>

                    <p className="mt-4 font-caslon text-lg leading-relaxed">
                        A creature-filled cavern with spider webs,
                        insects, frogs, and a small pond. The change
                        in environment introduces a different
                        atmosphere as players continue their journey.
                    </p>
                </article>

                {/* ROOM 3 !*/}

                <article>
                    <p className="font-major-mono text-sm">
                        cave 03
                    </p>

                    <h3 className="mt-3 font-caslon text-3xl">
                        The Crystal Chamber
                    </h3>

                    <p className="mt-4 font-caslon text-lg leading-relaxed">
                        This part of the journey is filled with gem-filled caves and 
                        crystals that mark the final stage
                        of the adventure. 
                    </p>
                </article>

            </div>

        </section>
    );
}