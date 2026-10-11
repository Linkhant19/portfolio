// src/components/character/CharacterDisplay.jsx

function CharacterStat({ label, value }) {
    return (
        <div>
            <div className="mb-1.5 flex items-center justify-between">
                <span
                    className="
                        font-major-mono
                        text-[9px]
                        tracking-[0.12em]
                        text-stone-500
                    "
                >
                    {label}
                </span>
            </div>

            <div
                className="
                    relative h-2.5
                    overflow-hidden
                    rounded-sm
                    border border-stone-500
                    bg-[#edf2fb]
                "
            >

                <div
                    className="
                        h-full
                        bg-[#abc4ff]
                        transition-[width]
                        duration-500
                        ease-out
                    "
                    style={{
                        width: `${value * 10}%`,
                    }}
                />

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute inset-x-0 top-0
                        h-[35%]
                        bg-white/20
                    "
                />
            </div>
        </div>
    );
}

export default function CharacterDisplay({ character }) {
    return (
        <section className="w-full">

            <div className="w-full max-w-[500px] lg:mr-auto">

                <div className="mb-5 flex items-center justify-between">

                    <p
                        className="
                            font-major-mono
                            text-[10px]
                            tracking-[0.2em]
                            text-stone-500
                        "
                    >
                        Player Profile
                    </p>

                    <p
                        className="
                            font-major-mono
                            text-[9px]
                            text-stone-400
                        "
                    >
                        status / Active
                    </p>

                </div>

                <div
                    className="
                        flex h-[340px]
                        items-center justify-center
                        overflow-hidden
                        rounded-lg
                        border-1 black
                        bg-[#ffffff]
                        shadow-[0px_4px_0_#57534e]
                    "
                >
                    <img
                        src={character.image}
                        alt=""
                        className="
                            h-full w-400px
                            object-contain
                            p-4
                        "
                    />
                </div>

                <div className="mt-6">

                    <p
                        className="
                            font-major-mono
                            text-[9px]
                            tracking-[0.15em]
                            text-stone-400
                        "
                    >
                        Role
                    </p>

                    <h2
                        className="
                            mt-2
                            font-caslon
                            text-3xl
                        "
                    >
                        {character.title}
                    </h2>

                </div>

                <div className="mt-6 space-y-3">

                    <CharacterStat
                        label="Experience"
                        value={character.stats.experience}
                    />

                    <CharacterStat
                        label="Technical"
                        value={character.stats.technical}
                    />

                    <CharacterStat
                        label="Creativity"
                        value={character.stats.creativity}
                    />

                    <CharacterStat
                        label="Leadership"
                        value={character.stats.leadership}
                    />

                    <CharacterStat
                        label="Teamwork"
                        value={character.stats.teamwork}
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

                        inline-block
                        lg:hidden
                    "
                >
                    start ↓
                </a>

            </div>

        </section>
    );
}