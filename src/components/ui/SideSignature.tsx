// src/components/ui/SideSignature.tsx
// my name on the side of the page

import React from "react";
import { useEffect, useRef, useState } from "react";

export default function SideSignature({ selectedCharacter }) {
    const repeats = Array(6).fill("Lin Khant Ko");

    type StreamItem = {
        id: number;
        label: string;
        color: string;
    };
    
    const [streamItems, setStreamItems] = useState<StreamItem[]>([]);

    const nextId = useRef(0);

    useEffect(() => {
        if (!selectedCharacter) return;

        function addStreamItem() {
            const newItem = {
                id: nextId.current++,

                label:
                    selectedCharacter.streamLabel ??
                    selectedCharacter.selectLabel ??
                    selectedCharacter.title,

                color:
                    selectedCharacter.streamColor ??
                    "#78716c",
            };

            setStreamItems((currentItems) => [
                ...currentItems,
                newItem,
            ]);
        }

        // I want to add the character title to the stream as soon as users click but...
        // if users spam click, its just a mess.
        // not sure if I will keep it.
        // addStreamItem();

        const interval = setInterval(() => {
            addStreamItem();
        }, 1700);

        return () => {
            clearInterval(interval);
        };
    }, [
        selectedCharacter?.id,
        selectedCharacter?.title,
        selectedCharacter?.selectLabel,
        selectedCharacter?.streamColor,
    ]);

    function removeStreamItem(id) {
        setStreamItems((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
    }

    return (
        <aside
            aria-hidden="true"
            className="
                pointer-events-none
                fixed
                right-3
                top-0
                z-50

                hidden
                h-dvh
                w-16

                lg:block
            "
        >

            {/* moving ones */}

            <div
                className="
                    absolute
                    inset-y-0
                    right-8
                    w-5
                    overflow-hidden
                "
            >
                {streamItems.map((item) => (
                    <span
                        key={item.id}
                        onAnimationEnd={() =>
                            removeStreamItem(item.id)
                        }
                        className="
                            absolute
                            left-1/2
                            top-full

                            whitespace-nowrap

                            font-major-mono
                            text-[8px]
                            tracking-[0.25em]

                            [writing-mode:vertical-rl]

                            animate-character-stream

                            motion-reduce:hidden
                        "
                        style={{
                            color: item.color,
                        }}
                    >
                        {item.label}
                    </span>
                ))}
            </div>

            {/* my static name on the side */}

            <div
                className="
                    absolute
                    right-0
                    top-1/2

                    flex
                    -translate-y-1/2
                    gap-5

                    whitespace-nowrap

                    font-major-mono
                    text-[9px]
                    tracking-[0.3em]
                    text-stone-500/70

                    [writing-mode:vertical-rl]
                "
            >
                {repeats.map((name, index) => (
                    <span key={index}>
                        {name}

                        <span className="mx-3">
                            ◆
                        </span>
                    </span>
                ))}
            </div>

        </aside>
    );
}