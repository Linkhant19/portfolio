// src/components/character/CharacterSelector.jsx

export default function CharacterSelector() {
    return (
        <section className="flex-1 flex items-center">
            <div>
                <h1 className="text-4xl font-bold mb-8">
                    SELECT YOUR CHARACTER
                </h1>

                <div className="flex flex-col gap-4 items-start">
                    <button>Software Developer</button>
                    <button>Events and Puzzles Designer</button>
                    <button>Creative Writer</button>
                    <button>Human</button>
                </div>
            </div>
        </section>
    )
}