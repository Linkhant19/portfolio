// src/components/villager/VillagerSection.jsx

import { useState } from "react";
import LinProfessionalPhoto from "../../assets/images/villager/lin_professional.jpg";
import LinGradPhoto from "../../assets/images/villager/lin_grad.jpg";

export default function VillagerSection() {

    const [isStoryOpen, setIsStoryOpen] = useState(false);

    return (
        <section
            id="projects"
            className="min-h-screen scroll-mt-16 px-6 py-20"
        >
            <div className="mx-auto max-w-6xl">

                <p className="font-major-mono text-sm">
                    character 04 / The Villager
                </p>

                <h2 className="mt-6 font-caslon text-5xl md:text-7xl">
                    Just Another Townsfolk,
                </h2>

                <p className="mt-6 max-w-3xl font-caslon text-xl italic">
                    making a living out of loving the living
                </p>

                <div className="
                    mt-16
                    grid items-center gap-6
                    sm:grid-cols-2
                    lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.5fr)]
                    lg:gap-8
                    xl:grid-cols-[320px_320px_minmax(0,1fr)]
                ">

                    <figure className="w-full max-w-80">

                        <div className="aspect-[4/5] overflow-hidden rounded-lg">

                            <img
                                src={LinProfessionalPhoto}
                                alt="Lin Photo 1"
                                className="h-full w-full object-cover"
                            />

                        </div>

                    </figure>

                    <figure className="w-full max-w-80">

                        <div className="aspect-[4/5] overflow-hidden rounded-lg">

                            <img
                                src={LinGradPhoto}
                                alt="Lin Photo 2"
                                className="h-full w-full object-cover"
                            />

                        </div>

                    </figure>

                    <div className="
                        space-y-6
                        font-caslon text-lg leading-relaxed
                        sm:col-span-2
                        lg:col-span-1
                    ">

                        <h3 className="font-caslon text-4xl">
                            Hi, I'm Lin!
                        </h3>

                        <p>
                            I'm a Computer Science and Psychology graduate from 
                            Boston University who enjoys creating things that bring people
                            together in some way. My interests take many forms, from
                            building software and web applications and designing puzzles to
                            writing poetry and organizing interactive experiences.
                        </p>

                        <p>
                            I grew up in Myanmar (Burma) and moved to Boston for college.
                            I 
                        </p>

                    </div>

                </div>

                {/* if users are interested, they can expanddddd to see more of my story */}

                <div className="mt-16">

                <button
                    type="button"
                    onClick={() => setIsStoryOpen(!isStoryOpen)}
                    aria-expanded={isStoryOpen}
                    aria-controls="villager-story"
                    className="
                        cursor-pointer
                        border-b pb-2
                        font-major-mono text-sm
                        transition-opacity hover:opacity-60
                    "
                >
                    {isStoryOpen ? "Less Of The Story ↑" : "Unlock The Full Story ↓"}
                </button>

                {isStoryOpen && (
                    <div
                        id="villager-story"
                        className="mt-12"
                    >

                        <h3 className="font-caslon text-4xl">
                            The Beginning
                        </h3>

                        <div className="mt-8 space-y-6 font-caslon text-lg leading-relaxed">

                            <p>
                                blah
                            </p>

                            <p>
                                blah blah
                            </p>

                            <p>
                                ahhh
                            </p>

                            <p>
                                more lore
                            </p>

                        </div>

                        { /* another section. maybe I put this on the right side to balance things out */}

                        <h3 className="font-caslon text-4xl text-end">
                            The Middle
                        </h3>

                        <div className="mt-8 space-y-6 font-caslon text-lg leading-relaxed text-end">

                            <p>
                                blah
                            </p>

                            <p>
                                blah blah
                            </p>

                            <p>
                                ahhh
                            </p>

                            <p>
                                more lore
                            </p>

                        </div>

                    </div>
                )}

                </div>

            </div>
        </section>
    );
}