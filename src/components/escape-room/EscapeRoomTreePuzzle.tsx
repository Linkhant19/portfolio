// src/components/escape-room/EscapeRoomTreePuzzle.tsx

import React from "react";
import { useEffect, useRef } from "react";

import TreePuzzleImage1 from "../../assets/images/escaperoom/tree_puzzle_1.jpg";
import MainTreeVideo from "../../assets/images/escaperoom/main_tree_video.mp4";

export default function EscapeRoomTreePuzzle() {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.currentTime = 0;
                    video.play();
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <article className="mt-24">

            <p className="font-major-mono text-sm text-end">
                featured puzzle 01 / puzzle design
            </p>

            <h3 className="mt-4 font-caslon text-4xl md:text-5xl text-end">
                The Tree of Operations
            </h3>

            <p className="mt-6 ml-auto max-w-3xl font-caslon text-lg leading-relaxed text-end">
                For the Woodland Cave's final challenge, I wanted
                players to do more than find another combination.
                I wanted them to learn a new system, gradually
                build their understanding, and eventually realize
                that the final puzzle had been part of their
                surroundings all along.
            </p>

            <div className="mt-12 aspect-video overflow-hidden">
                <img
                    src={TreePuzzleImage1}
                    alt="Testers solving the tree puzzle"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="mt-20">

                <p className="font-major-mono text-sm text-end">
                    the design
                </p>

                <h4 className="mt-4 font-caslon text-4xl text-end">
                    Learning the Language of Trees
                </h4>

                <div className="mt-8 ml-auto max-w-3xl space-y-6 font-caslon text-lg leading-relaxed text-end">

                    <p>
                        At the beginning of the room, players receive
                        an illustration of a tree without branches.
                        As they solve other puzzles, they collect
                        additional illustrations, each introducing
                        another branch and a new mathematical rule.
                    </p>

                    <p>
                        The first illustration establishes that the
                        number represented by a tree is determined
                        by its leaves. Subsequent illustrations
                        introduce multiplication, subtraction,
                        and division through additional branches.
                    </p>

                    <p>
                        Rather than presenting the complete system
                        at once, I designed the clues to reveal
                        its rules progressively as players move
                        through the room and solve puzzles.
                    </p>

                </div>

            </div>

            <div className="mt-12">

                <p className="mb-6 font-major-mono text-sm">
                    the rules / one branch at a time
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {[
                        {
                            stage: "01",
                            title: "No Branches",
                            description: "Count the leaves.",
                        },
                        {
                            stage: "02",
                            title: "One Branch",
                            description: "Discover multiplication.",
                        },
                        {
                            stage: "03",
                            title: "Two Branches",
                            description: "Introduce subtraction.",
                        },
                        {
                            stage: "04",
                            title: "Three Branches",
                            description: "Apply division.",
                        },
                    ].map((step) => (

                        <div
                            key={step.stage}
                            className="rounded-lg border p-6"
                        >

                            <p className="font-major-mono text-sm">
                                {step.stage}
                            </p>

                            <div className="my-8 flex aspect-square items-center justify-center bg-neutral-100">

                                <p className="font-major-mono text-xs text-neutral-500">
                                    tree illustration
                                </p>

                            </div>

                            <h5 className="font-caslon text-2xl">
                                {step.title}
                            </h5>

                            <p className="mt-3 font-caslon text-lg">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

            <div className="mt-24">

                <p className="font-major-mono text-sm">
                    the final reveal
                </p>

                <h4 className="mt-4 max-w-4xl font-caslon text-5xl md:text-6xl">
                    The Answer All Along
                </h4>

                { /* one thing i added is the video not auto playing in the background and playing from the start whenever the user scrolls to the section */}
                <div className="mt-12 aspect-video overflow-hidden">
                    <video
                        ref={videoRef}
                        src={MainTreeVideo}
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="mt-12 grid gap-12 md:grid-cols-2">

                    <div>

                        <p className="font-major-mono text-sm">
                            from paper to physical space
                        </p>

                        <p className="mt-4 font-caslon text-lg leading-relaxed">
                            After collecting and interpreting the illustrated
                            clues, players must recognize that the final
                            tree is not on another sheet of paper.

                            Instead, it is the physical tree that
                            I am tied to. The physical tree will have the same leaves
                            and branches as the illustrations, and will require the players
                            to apply the rules they have learned.
                        </p>

                    </div>

                    <div>

                        <p className="font-major-mono text-sm">
                            connecting the puzzle to the story
                        </p>

                        <p className="mt-4 font-caslon text-lg leading-relaxed">
                            Throughout the experience, I will draw attention
                            to the tree through dialogue, providing subtle
                            hints about its importance.

                            The final challenge will bring together the rules
                            players have learned from the illustrations, the environment they
                            have explored, and the puzzles they solved.
                        </p>

                    </div>

                </div>

            </div>

        </article>
    );
}