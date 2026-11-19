// src/components/escape-room/EscapeRoomPuzzleDesign.jsx
// the puzzle design portion

// my images
import PuzzleDraftOneImage from "../../assets/images/escaperoom/puzzle_draft_1.jpg";
import PuzzleDraftTwoImage from "../../assets/images/escaperoom/puzzle_draft_2.jpg";
import PuzzleDraftThreeImage from "../../assets/images/escaperoom/puzzle_draft_3.jpg";
import PuzzleDraftFourImage from "../../assets/images/escaperoom/puzzle_draft_4.jpg";
import RoomPathImage from "../../assets/images/escaperoom/room_path.png";

export default function EscapeRoomPuzzleDesign() {
    return (
        <section id="puzzle-design" className="mt-32 scroll-mt-20">

            <p className="font-major-mono text-sm">
                03 / puzzle design
            </p>

            <h2 className="mt-4 font-caslon text-5xl md:text-6xl">
                Designing the Adventure
            </h2>

            <div className="mt-12 max-w-3xl space-y-6 font-caslon text-lg leading-relaxed">

                <p>
                    One of my main contributions to the project
                    was puzzle ideation and design, particularly
                    for the first and third rooms.
                </p>

                <p>
                    I explored puzzle videos, games, and other
                    interactive experiences for inspiration,
                    sketching early concepts on my iPad before
                    sharing and discussing them with Nyrein.
                </p>

                <p>
                    As the ideas developed, we considered how
                    each puzzle would fit into its environment
                    and connect with the rest of the adventure.
                </p>

                </div>

                <div className="mt-12">

                <p className="mb-6 font-major-mono text-sm">
                    early puzzle sketches
                </p>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                    <img
                        src={PuzzleDraftOneImage}
                        alt="Early escape room puzzle sketch one"
                        className="w-full rounded-lg object-contain"
                    />

                    <img
                        src={PuzzleDraftTwoImage}
                        alt="Early escape room puzzle sketch two"
                        className="w-full rounded-lg object-contain"
                    />

                    <img
                        src={PuzzleDraftThreeImage}
                        alt="Early escape room puzzle sketch three"
                        className="w-full rounded-lg object-contain"
                    />

                    <img
                        src={PuzzleDraftFourImage}
                        alt="Early escape room puzzle sketch four"
                        className="w-full rounded-lg object-contain"
                    />

                </div>

                <p className="mt-4 font-caslon text-sm italic opacity-70 text-end">
                    * Early puzzle concepts sketched on my iPad during
                    the ideation process.
                </p>

            </div>

            <div className="mt-24">

                <p className="font-major-mono text-sm">
                    puzzle architecture
                </p>

                <h3 className="mt-4 font-caslon text-4xl">
                    Pathing Drafts
                </h3>

                <p className="mt-6 max-w-3xl font-caslon text-lg leading-relaxed">
                    The escape room features 9 puzzles across
                    three environments. While the second and third
                    rooms follow a mostly linear progression, the
                    first room uses interconnected puzzles to let
                    players approach the challenge in different ways
                    and engage all individuals.
                </p>

                <div className="mt-12 aspect-video overflow-hidden">
                    <img
                        src={RoomPathImage}
                        alt="Testers solving the tree puzzle"
                        className="h-full w-full"
                    />
                </div>

            </div>

        </section>
    );
}