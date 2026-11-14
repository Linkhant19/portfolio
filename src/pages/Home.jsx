// src/pages/Home.jsx

import CharacterDisplay from "../components/character/CharacterDisplay";
import CharacterSelector from "../components/character/CharacterSelector";
import ProjectsSection from "../components/project/ProjectsSection";
import VillagerSection from "../components/villager/VillagerSection";
import SideSignature from "../components/ui/SideSignature";
import Footer from "../components/ui/Footer";
import RooftopBackground from "../assets/images/rooftop.gif";
import RooftopBackgroundDark from "../assets/images/rooftop_nbg.gif";

import { characters } from "../data/characters";
import { projects } from "../data/projects";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Home() {

    // I want my cursor movement to "color" the background
    const backgroundRef = useRef(null);

    useEffect(() => {
        function handlePointer(event) {
            if (!backgroundRef.current) return;
    
            backgroundRef.current.style.setProperty(
                "--mouse-x",
                `${event.clientX}px`
            );
    
            backgroundRef.current.style.setProperty(
                "--mouse-y",
                `${event.clientY}px`
            );
        }
    
        window.addEventListener("pointermove", handlePointer);
        window.addEventListener("pointerdown", handlePointer);
    
        return () => {
            window.removeEventListener("pointermove", handlePointer);
            window.removeEventListener("pointerdown", handlePointer);
        };
    }, []);

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
        <main className="relative min-h-screen overflow-x-clip lg:pr-4">

        <div
            ref={backgroundRef}
            aria-hidden="true"
            className="
                spotlight-background
                pointer-events-none
                fixed
                inset-0
                z-[-10]
                overflow-hidden
            "
            style={{
                "--mouse-x": "50vw",
                "--mouse-y": "50vh",
            }}
        >
                <img
                    src={RooftopBackgroundDark}
                    alt=""
                    className="
                        absolute
                        left-0
                        top-[30px]
                        h-[calc(100%+30px)]
                        w-full
                        object-cover
                        opacity-20
                        blur-[2px]
                    "
                />

                {/* second background I will use for the cursor effect */}
                <img
                    src={RooftopBackground}
                    alt=""
                    className="
                        absolute
                        left-0
                        top-[30px]
                        h-[calc(100%+30px)]
                        w-full
                        object-cover
                    "
                    style={{
                        WebkitMaskImage: `
                            radial-gradient(
                                circle var(--spotlight-size) at var(--mouse-x) var(--mouse-y),
                                black 0%,
                                black 35%,
                                transparent 100%
                            )
                        `,
                        maskImage: `
                            radial-gradient(
                                circle var(--spotlight-size) at var(--mouse-x) var(--mouse-y),
                                black 0%,
                                black 35%,
                                transparent 100%
                            )
                        `,
                    }}
                />
            </div>

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
                <VillagerSection
                    character={selectedCharacter}
                />
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