// src/pages/Home.jsx

import CharacterDisplay from "../components/character/CharacterDisplay";
import CharacterSelector from "../components/character/CharacterSelector";

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="flex min-h-screen">
                <CharacterDisplay />
                <CharacterSelector />
            </div>
        </main>
    );
}