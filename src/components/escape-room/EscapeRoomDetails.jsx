// src/components/escape-room/EscapeRoomDetails.jsx

export default function EscapeRoomDetails() {
    return (
        <section className="mt-20 border-t pt-10 font-caslon font-bold">
            <div className="grid gap-8 md:grid-cols-2">

                <div>
                    <p className="font-major-mono text-sm">
                        project type
                    </p>
                    <p className="mt-2 text-lg">
                        Physical Escape Room
                    </p>
                </div>

                <div>
                    <p className="font-major-mono text-sm">
                        collaborators
                    </p>
                    <p className="mt-2 text-lg">
                        Ashtanyrein Duncan & Lin Khant Ko
                    </p>
                </div>

                <div>
                    <p className="font-major-mono text-sm">
                        experience
                    </p>
                    <p className="mt-2 text-lg">
                        3 Themed Rooms / 9 Puzzles
                    </p>
                </div>

                <div>
                    <p className="font-major-mono text-sm">
                        status
                    </p>
                    <p className="mt-2 text-lg">
                        Playtested · Finalizing
                    </p>
                </div>

            </div>
        </section>
    );
}