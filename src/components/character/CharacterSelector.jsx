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
                <h1 className="font-major-mono text-5xl">
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
            </div>
        </section>
    )
}