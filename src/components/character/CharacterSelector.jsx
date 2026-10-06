// src/components/character/CharacterSelector.jsx

import CharacterOption from "./CharacterOption";
import HoldingCharacter from "../../assets/images/ui/holdingman.png";
import { useEffect, useRef, useState } from "react";

export default function CharacterSelector({
    characters,
    selectedCharacterId,
    onSelect,
}) {
    const selectedIndex = characters.findIndex(
        (character) => character.id === selectedCharacterId
    );

    const [tickerItems, setTickerItems] = useState([]);
    const nextTickerId = useRef(0);

    useEffect(() => {
        function addTickerItem() {
            setTickerItems((currentItems) => [
                ...currentItems,
                {
                    id: nextTickerId.current++,
                    label: "Play",
                },
            ]);
        }

        addTickerItem();

        const interval = setInterval(() => {
            addTickerItem();
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function removeTickerItem(id) {
        setTickerItems((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
    }

    return (
        <section className="w-full">

            <div className="w-full max-w-[550px] lg:ml-auto">

                <div className="mb-8">

                    <div className="flex items-end justify-between gap-4">

                        <div>
                            <p
                                className="
                                    font-major-mono
                                    text-[10px]
                                    tracking-[0.2em]
                                    text-stone-500
                                "
                            >
                                PLAYER SELECT
                            </p>

                            <h1
                                className="
                                    mt-2 font-major-mono
                                    text-2xl
                                    leading-tight
                                    sm:text-3xl
                                "
                            >
                                SELECT CHARACTER
                            </h1>
                        </div>

                        <p
                            className="
                                shrink-0
                                font-major-mono
                                text-xs
                                text-stone-400
                            "
                        >
                            {String(selectedIndex + 1).padStart(2, "0")}
                            {" / "}
                            {String(characters.length).padStart(2, "0")}
                        </p>

                    </div>

                </div>

                <div
                    className="
                        relative
                        w-full
                        overflow-visible
                        rounded-xl
                        border border-stone-300
                        bg-stone-100/40
                        px-8 py-5
                        sm:px-8 sm:py-8
                    "
                >
                    {/* text moving thingy. opposite from rightside one. */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            left-2
                            top-3
                            bottom-3
                            z-0
                            w-5
                            overflow-hidden
                        "
                    >
                        {tickerItems.map((item) => (
                            <div
                                key={item.id}
                                onAnimationEnd={() =>
                                    removeTickerItem(item.id)
                                }
                                className="
                                    absolute
                                    bottom-[-80px]
                                    left-1/2

                                    animate-selector-stream-item
                                "
                            >
                                <span
                                    className="
                                        block
                                        rotate-180
                                        whitespace-nowrap

                                        font-major-mono
                                        text-[7px]
                                        tracking-[0.18em]

                                        [writing-mode:vertical-rl]
                                    "
                                >
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* four characters for now. I might want more later */}

                    <div
                        className="
                            relative z-10
                            mx-auto
                            grid
                            w-full
                            grid-cols-2

                            gap-x-3 gap-y-5

                            sm:w-fit
                            sm:gap-x-10
                            sm:gap-y-8
                        "
                    >
                        {characters.map((character, index) => (
                            <CharacterOption
                                key={character.id}
                                character={character}
                                index={index}
                                isSelected={
                                    character.id === selectedCharacterId
                                }
                                onSelect={onSelect}
                            />
                        ))}
                    </div>

                    {/* man holding the panel up! */}

                    <img
                        src={HoldingCharacter}
                        alt=""
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            -bottom-[130px]
                            -right-[95px]
                            -z-2
                            rotate-17
                            hidden
                            w-[150px]
                            select-none
                            lg:block
                            animate-holder-idle
                        "
                    />
                </div>

                <a
                    href="#projects"
                    className="
                        relative mt-10
                        cursor-pointer

                        rounded-md
                        border-2 border-[#6D685F]

                        bg-gradient-to-b
                        from-[#D8D0C3]
                        via-[#BDB5A8]
                        to-[#958D82]

                        px-7 py-3

                        font-major-mono
                        text-xs text-stone-800

                        shadow-[
                            inset_0_3px_0_rgba(255,255,255,0.3),
                            inset_0_-4px_0_rgba(0,0,0,0.18),
                            5px_6px_0_#3B3834
                        ]

                        transition-transform
                        duration-100

                        hover:-translate-y-1

                        active:translate-x-[3px]
                        active:translate-y-[3px]

                        motion-reduce:transition-none

                        hidden
                        lg:inline-block
                    "
                >
                    start ↓
                </a>

            </div>

        </section>
    );
}