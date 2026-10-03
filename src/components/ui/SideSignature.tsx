// src/components/ui/SideSignature.tsx
// my name on the side of the page

import React from "react";

export default function SideSignature() {
    const repeats = Array(6).fill("Lin Khant Ko");

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
                items-center
                overflow-hidden
                lg:flex
            "
        >
            <div
                className="
                    flex
                    gap-5
                    font-major-mono
                    text-[9px]
                    tracking-[0.3em]
                    text-stone-500/70
                    [writing-mode:vertical-rl]
                "
            >
                {repeats.map((name, index) => (
                    <span
                        key={index}
                        className="whitespace-nowrap"
                    >
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
