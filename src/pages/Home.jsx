// src/pages/Home.jsx

import { useState } from "react";

import CharacterDisplay from "../components/character/CharacterDisplay";
import CharacterSelector from "../components/character/CharacterSelector";
import ProjectsSection from "../components/project/ProjectsSection";
import { characters } from "../data/characters";
import { projects } from "../data/projects";


export default function Home() {

    // my select character logic to dynamically select the character
    const [selectedCharacterId, setSelectedCharacterId] = useState(
        characters[0].id
    );

    const selectedCharacter = characters.find(
        (character) => character.id === selectedCharacterId
    ) ?? characters[0];

    // select projects based on the character selected
    const selectedProjects = projects.filter((project) =>
        project.characterIds.includes(selectedCharacterId)
    );

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

            <ProjectsSection projects={selectedProjects} />
        </main>
    );
}