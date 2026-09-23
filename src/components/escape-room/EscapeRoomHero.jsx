// src/components/escape-room/EscapeRoomHero.jsx
// overview page for my escape room project

export default function EscapeRoomHero() {
    return (
        <section id="overview">
            <p className="font-major-mono text-sm">
                selected adventure:
            </p>

            <h1 className="mt-6 font-caslon text-6xl md:text-8xl">
                The Caves: A World Below
            </h1>

            <p className="mt-4 font-caslon text-2xl italic">
                An Escape Room Adventure by Lin and Nyrein
            </p>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed font-caslon">
                This project was an ambitious collaboration between
                me and my coworker, Ashtanyrein Duncan. Fueled by our common
                love for escape rooms, we transformed an ordinary basement into
                a three-room cave adventure with puzzles that challenged players' 
                perspectives and creative problem-solving skills.
            </p>
        </section>
    );
}