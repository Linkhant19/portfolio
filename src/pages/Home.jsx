// src/pages/Home.jsx

import { useState } from "react";

import CharacterDisplay from "../components/character/CharacterDisplay";
import CharacterSelector from "../components/character/CharacterSelector";
import { characters } from "../data/characters";

export default function Home() {
    const [selectedCharacterId, setSelectedCharacterId] = useState(
        characters[0].id
    );

    const selectedCharacter = characters.find(
        (character) => character.id === selectedCharacterId
    ) ?? characters[0];

    //console.log("characters:", characters);
    //console.log("selectedCharacterId:", selectedCharacterId);
    //console.log("selectedCharacter:", selectedCharacter);

    return (
        <main className="min-h-screen">
            <div className="flex min-h-screen flex-col lg:flex-row">
            <CharacterDisplay character={selectedCharacter} />

            <CharacterSelector
                characters={characters}
                selectedCharacterId={selectedCharacterId}
                onSelect={setSelectedCharacterId}
            />
            </div>
        </main>
    );
}