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
                    bg-stone-300
                "
            >

                <div
                    className="
                        h-full
                        bg-[#5E806B]
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
                        border-2 border-stone-500
                        bg-stone-100
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

            </div>

        </section>
    );
}