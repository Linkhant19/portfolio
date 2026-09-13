// src/components/character/CharacterSelector.jsx

import CharacterOption from "./CharacterOption";

export default function CharacterSelector({
    characters,
    selectedCharacterId,
    onSelect,
}) {
    return (
        <section className="flex flex-1 items-center p-8">
            <div className="w-full max-w-xl">
                <h1 className="font-major-mono text-5xl mb-8">
                    SELECT YOUR CHARACTER
                </h1>

                <div className="flex flex-col">
                    {characters.map((character, index) => (
                        <CharacterOption
                        key={character.id}
                        character={character}
                        index={index}
                        isSelected={character.id === selectedCharacterId}
                        onSelect={onSelect}
                        />
                    ))}
                </div>

                <a
                    href="#projects"
                    className="mt-10 inline-block border border-current px-6 py-3 font-major-mono"
                >
                    Begin Your Adventure ↓
                </a>
            </div>
        </section>
    )
}