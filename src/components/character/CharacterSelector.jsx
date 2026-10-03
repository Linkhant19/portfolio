// src/components/character/CharacterSelector.jsx

import CharacterOption from "./CharacterOption";

export default function CharacterSelector({
    characters,
    selectedCharacterId,
    onSelect,
}) {
    const selectedIndex = characters.findIndex(
        (character) => character.id === selectedCharacterId
    );

    return (
        <section className="flex flex-1 items-center px-8 py-16 lg:px-15">

            <div className="w-full max-w-[550px]">

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
                        grid
                        grid-cols-[repeat(2,210px)]
                        justify-center
                        gap-6
                        rounded-xl
                        border border-stone-300
                        bg-stone-100/40
                        px-8 py-8
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

                <a
                    href="#projects"
                    className="
                        relative mt-10
                        inline-block
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
                    "
                >
                    start ↓
                </a>

            </div>

        </section>
    );
}