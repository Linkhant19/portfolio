// src/components/villager/MoreAboutMe.jsx

import { useState } from "react";
import MoreAboutMeLetter from "../../assets/images/villager/more_about_lin.png";

export default function MoreAboutMe() {
    const [showTypedVersion, setShowTypedVersion] = useState(false);

    return (
        <section className="mt-30">
            <div className="flex items-center justify-between gap-4">
                <div>
                <p className="font-major-mono text-xs tracking-[0.15em] text-stone-500">
                    if you are interested...
                </p>
                <h3 className="mt-2 font-caslon text-xl italic">
                    a little bit more about me
                </h3>
                </div>

                <button
                type="button"
                onClick={() => setShowTypedVersion((current) => !current)}
                className="
                    rounded-md border border-stone-500
                    px-4 py-2
                    font-major-mono text-[10px] tracking-[0.12em]
                    text-stone-700
                    transition-transform duration-100
                    hover:-translate-y-1
                    hover:cursor-pointer
                "
                >
                {showTypedVersion ? "View handwritten letter" : "Read typed version"}
                </button>
            </div>

            <div className="mt-15">
                {showTypedVersion ? (
                <div className="max-w-3xl mx-auto space-y-6 font-caslon text-[17px] leading-relaxed">
                    <p className="font-bold">
                        From the pages of my memories,
                    </p>

                    <p>
                        I am Lin, and I was born in Meiktila, a small town in the middle of Myanmar.
                    </p>

                    <p>
                        My earliest experience with game design came when I was about 5. I remember carefully tearing out square pieces of characters from weekly comic journals that my dad would bring home every Wednesday. I wasn’t allowed to use scissors yet, so I used the edge of a wooden ruler that was passed down to me from my sister. I gave the characters imaginary stats (health, attack, power, ...) and made them battle across the wooden floor. Sometimes there were currencies, shops, items, and different locations to advance through. I don’t think I knew what game design was. I just knew I liked creating little systems and watching them come alive.
                    </p>

                    <p className="italic">
                        // person growing up
                    </p>

                    <p>
                        2021–22: I was lucky to be presented with an opportunity to apply for an Event Coordinator position at BU’s Board Games Club. I proposed a Murder Mystery Event in my interview, which got me the position, which led to me running for the President position the following year. I spent the next two years working with a team to create larger, stranger, and more interactive events. Game shows, Escape Rooms, Murder Mysteries, and more...!
                    </p>

                    <p>
                        Scribbling ideas on the board, bouncing ideas back and forth, transforming classrooms into something more magical, standing there... taking it in as I watched everyone smiling and laughing, taking part in our events... I found my happy place in life.
                    </p>

                    <p>
                    I also found a family-like warmth in a place about 8000 miles away from home.
                    </p>

                    <div className="space-y-2">
                    <p>I want to go back to school.</p>
                    <p>I want to do research. learn more.</p>
                    <p>I want to build bigger and better things.</p>
                    </div>

                    <p>Lin.</p>
                </div>
                ) : (
                <img
                    src={MoreAboutMeLetter}
                    alt="A handwritten letter titled 'From the pages of my memory' by Lin Khant Ko."
                    className="w-full max-w-3xl mx-auto align-middle"
                />
                )}
            </div>
        </section>
    );
}