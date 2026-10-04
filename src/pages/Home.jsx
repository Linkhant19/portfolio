// src/pages/Home.jsx

import CharacterDisplay from "../components/character/CharacterDisplay";
import CharacterSelector from "../components/character/CharacterSelector";
import ProjectsSection from "../components/project/ProjectsSection";
import VillagerSection from "../components/villager/VillagerSection";
import SideSignature from "../components/ui/SideSignature";
import Footer from "../components/ui/Footer";
import { characters } from "../data/characters";
import { projects } from "../data/projects";
import { useSearchParams } from "react-router-dom";

export default function Home() {

    // my select character logic to dynamically select the character
    const [searchParams, setSearchParams] = useSearchParams();

    const characterFromUrl = searchParams.get("character");

    const selectedCharacterId = characters.some(
        (character) => character.id === characterFromUrl
    )
        ? characterFromUrl
        : characters[0].id;

    const selectedCharacter = characters.find(
        (character) => character.id === selectedCharacterId
    ) ?? characters[0];

    function handleCharacterSelect(characterId) {
        setSearchParams(
            { character: characterId },
            { replace: true }
        );
    }

    // select projects based on the character selected
    const selectedProjects = projects.filter((project) =>
        project.characterIds.includes(selectedCharacterId)
    );

    return (
        <main className="min-h-screen lg:pr-4">
            <SideSignature selectedCharacter={selectedCharacter} />
            <div
                className="
                    mx-auto grid
                    min-h-screen
                    w-full max-w-[1500px]
                    items-start
                    gap-16
                    px-8 py-14

                    lg:grid-cols-2
                    lg:gap-35
                "
            >
                <CharacterSelector
                    characters={characters}
                    selectedCharacterId={selectedCharacterId}
                    onSelect={handleCharacterSelect}
                />
                
                <CharacterDisplay
                    character={selectedCharacter}
                />

                
            </div>

            {selectedCharacterId === "villager" ? (
                <VillagerSection />
            ) : (
                <ProjectsSection
                    projects={selectedProjects}
                    character={selectedCharacter}
                />
            )}

            <Footer />

            
        </main>
    );
}