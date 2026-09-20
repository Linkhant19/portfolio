// src/components/escape-room/EscapeRoomBeginnings.jsx
// how it all started part of my project

import React from "react";


export default function EscapeRoomBeginnings() {
    return (
        <section className="mt-32">

            <p className="font-major-mono text-sm">
                01 / the beginning
            </p>

            <h2 className="mt-4 font-caslon text-5xl md:text-6xl">
                How It All Began
            </h2>

            <div className="mt-12 grid gap-12 md:grid-cols-2">

                <div className="space-y-6 font-caslon text-lg leading-relaxed">

                    <p>
                        While working at FAST Enterprises, I met Nyrein
                        and we bonded over our shared love for escape rooms. 
                        By then, I had completed around 25 escape rooms in Boston alone and about 30 worldwide, and
                        I was surprised and elated to meet another person who 
                        had done the same. We found ourselves discussing 
                        puzzles and creative ideas during lunch and breaks. 
                    </p>

                    <p>
                        I had previously organized smaller escape
                        room experiences for events as the President of Boston University's Board Games Club, 
                        but I always wanted to explore
                        what I could create with more space and
                        creative freedom (and budget).
                    </p>

                    <p>
                        When Nyrein began preparing a house for
                        rental, I suggested that we build our own escape room in the basement.
                        He didn't need much convincing, and before long,
                        I was driving over 30 minutes to Nyrein's place
                        every weekend to work on the project.
                    </p>

                    <p>
                        With time, the project evolved into this
                        multi-room escape experience adventure with
                        multiple original puzzles (with inspirations from different media), 
                        interactive technologies, and a unique atmosphere.
                    </p>

                </div>

                {/* I put my image here soon */}

                <div className="flex aspect-[4/5] items-center justify-center bg-neutral-200 text-neutral-600">

                    <p className="font-major-mono text-sm">
                        basement before photo
                    </p>

                </div>

            </div>

        </section>
    );
}