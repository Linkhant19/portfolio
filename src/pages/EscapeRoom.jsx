// src/pages/EscapeRoom.jsx

import { Link } from "react-router-dom";
import { useEffect } from "react";

import EscapeRoomNavigation from "../components/escape-room/EscapeRoomNavigation";

import EscapeRoomHero from "../components/escape-room/EscapeRoomHero";
import EscapeRoomDetails from "../components/escape-room/EscapeRoomDetails";
import EscapeRoomBeginnings from "../components/escape-room/EscapeRoomBeginnings";
import EscapeRoomConcept from "../components/escape-room/EscapeRoomConcept";
import EscapeRoomPuzzleDesign from "../components/escape-room/EscapeRoomPuzzleDesign";
import EscapeRoomPuzzleFlow from "../components/escape-room/EscapeRoomPuzzleFlow";
import EscapeRoomFeaturedPuzzles from "../components/escape-room/EscapeRoomFeaturedPuzzles";
import EscapeRoomBuilding from "../components/escape-room/EscapeRoomBuilding";
import EscapeRoomPlaytesting from "../components/escape-room/EscapeRoomPlaytesting";
import EscapeRoomReflection from "../components/escape-room/EscapeRoomReflection";

export default function EscapeRoom() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen px-6 py-20">

            <EscapeRoomNavigation />

            <div className="mx-auto max-w-6xl">
                <EscapeRoomHero />
                <EscapeRoomDetails />
                <EscapeRoomBeginnings />
                <EscapeRoomConcept />
                <EscapeRoomPuzzleDesign />
                <EscapeRoomPuzzleFlow />
                <EscapeRoomFeaturedPuzzles />
                <EscapeRoomBuilding />
                <EscapeRoomPlaytesting />
                <EscapeRoomReflection />

                <Link
                    to="/?character=puzzle-designer#projects"
                    className="font-major-mono text-sm cursor-pointer hover:opacity-60"
                >
                    ← Explore More Projects
                </Link>
            </div>

        </main>
    );
}