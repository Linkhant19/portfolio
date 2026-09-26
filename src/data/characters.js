// src/data/characters.js
// this will be where my characters data will be stored
// 1. id
// 2. title
// 3. image
// 4. description

import developerImage from "../assets/images/characters/testing.gif"
import writerImage from "../assets/images/characters/writer.gif"
import puzzleDesignerImage from "../assets/images/characters/puzzle_designer.gif"
import HumanImage from "../assets/images/characters/human.gif"

export const characters = [
    {
        id: "developer",
        title: "Software Developer",
        projectHeading: "Software Development & Consulting Experiences",
        image: writerImage,
        description: "with his combined knowledge in Computer Science and Psychology, \
        he develops and implements software solutions that create different ways people could enjoy this world.",
    },
    {
        id: "puzzle-designer",
        title: "Events and Puzzles/Games Designer",
        projectHeading: "Puzzle and Game Design Experiences",
        image: puzzleDesignerImage,
        description: "once the President of the Board Games Club, he found his passion in \
        hosting various interactive events, and designing puzzles and games, including escape rooms.",
    },
    {
        id: "writer",
        title: "Creative Writer",
        projectHeading: "Creative Writing Pieces",
        image: writerImage,
        description: "he saddles up the wildest things whenever and wherever they come. \
        their footprints are marked in all forms. poetry. short stories. plays.",
    },
    {
        id: "villager",
        title: "Villager",
        projectHeading: "Villager",
        image: HumanImage,
        description: "just a normal townsperson who built all of this and more",
    },
]