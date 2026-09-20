// src/pages/EscapeRoom.jsx

import EscapeRoomHero from "../components/escape-room/EscapeRoomHero";
import EscapeRoomDetails from "../components/escape-room/EscapeRoomDetails";
import EscapeRoomBeginnings from "../components/escape-room/EscapeRoomBeginnings";
import EscapeRoomConcept from "../components/escape-room/EscapeRoomConcept";
import EscapeRoomPuzzleDesign from "../components/escape-room/EscapeRoomPuzzleDesign";
import EscapeRoomPuzzleFlow from "../components/escape-room/EscapeRoomPuzzleFlow";

export default function EscapeRoom() {
    return (
        <main className="min-h-screen px-6 py-20">
            <div className="mx-auto max-w-6xl">

                <EscapeRoomHero />
                <EscapeRoomDetails />
                <EscapeRoomBeginnings />
                <EscapeRoomConcept />
                <EscapeRoomPuzzleDesign />
                <EscapeRoomPuzzleFlow />

            </div>
        </main>
    );
}