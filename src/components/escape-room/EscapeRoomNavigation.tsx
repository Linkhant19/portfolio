// src/components/escape-room/EscapeRoomNavigation.tsx
// this should handle my sidebar and navigation

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

const sections = [
    { id: "overview", label: "Overview", number: "00" },
    { id: "beginning", label: "The Beginning", number: "01" },
    { id: "concept", label: "The Concept", number: "02" },
    { id: "puzzle-design", label: "Puzzle Design", number: "03" },
    { id: "featured-puzzles", label: "Featured Puzzles", number: "04" },
    { id: "building", label: "Building the Caves", number: "05" },
    { id: "playtesting", label: "Playtesting", number: "06" },
    { id: "reflection", label: "Reflection", number: "07" },
];

export default function EscapeRoomNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        function updateActiveSection() {
            const offset = window.innerHeight * 0.3;
    
            let currentSection = sections[0].id;
    
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
    
                if (
                    element &&
                    element.getBoundingClientRect().top <= offset
                ) {
                    currentSection = section.id;
                }
            });
    
            setActiveSection(currentSection);
        }
    
        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });
    
        updateActiveSection();
    
        return () => {
            window.removeEventListener(
                "scroll",
                updateActiveSection
            );
        };
    }, []);

    return (
        <>
            {/* My Menu button */}

            <button
                onClick={() => setIsOpen(true)}
                aria-label="Open case study navigation"
                aria-expanded={isOpen}
                className="
                    fixed right-6 top-6 z-50
                    flex cursor-pointer items-center gap-4
                    font-major-mono text-sm
                "
            >
                <span className="hidden sm:inline">
                    {sections.find(
                        (section) => section.id === activeSection
                    )?.number}

                    {" / "}

                    {sections.find(
                        (section) => section.id === activeSection
                    )?.label}
                </span>

                <span>☰ menu</span>
            </button>

            <div
                onClick={() => setIsOpen(false)}
                className={`
                    fixed inset-0 z-40 cursor-pointer bg-black/30
                    transition-opacity duration-300
                    ${
                        isOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                    }
                `}
            />

            <aside
                className={`
                    fixed right-0 top-0 z-50
                    h-screen w-full max-w-sm
                    bg-white p-8 shadow-xl
                    transition-transform duration-300
                    ${
                        isOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }
                `}
            >

                <div className="flex justify-end">
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close case study navigation"
                        className="cursor-pointer font-major-mono text-sm"
                    >
                        ✕ close
                    </button>
                </div>

                <div className="mt-12">
                    <p className="font-major-mono text-xs">
                        case study
                    </p>

                    <h2 className="mt-2 font-caslon text-3xl">
                        The Caves:
                        <br />
                        A World Below
                    </h2>
                </div>

                {/* SECTION LINKS SECTION */}

                <nav className="mt-12">
                    <ul className="space-y-5">

                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                onClick={() => setIsOpen(false)}
                                aria-current={
                                    activeSection === section.id
                                        ? "location"
                                        : undefined
                                }
                                className={`
                                    group flex cursor-pointer items-center gap-4
                                    transition-opacity
                                    ${
                                        activeSection === section.id
                                            ? "opacity-100"
                                            : "opacity-50 hover:opacity-100"
                                    }
                                `}
                            >
                                <span className="font-major-mono text-xs">
                                    {section.number}
                                </span>

                                <span
                                    className={`
                                        font-caslon text-xl
                                        ${
                                            activeSection === section.id
                                                ? "font-bold"
                                                : ""
                                        }
                                    `}
                                >
                                    {section.label}
                                </span>

                                {activeSection === section.id && (
                                    <span aria-hidden="true">←</span>
                                )}
                            </a>
                        </li>
                    ))}

                    </ul>
                </nav>

                <div className="mt-12 border-t pt-8">
                    <Link
                        to="/?character=puzzle-designer#projects"
                        className="font-major-mono text-sm cursor-pointer hover:opacity-60"
                    >
                        ← back to character select
                    </Link>
                </div>

            </aside>
        </>
    );
}