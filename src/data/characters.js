// src/data/characters.js
// this will be where my characters data will be stored
// 1. id
// 2. title
// 3. image
// 4. description

import developerImage from "../assets/images/characters/testing.gif"
import writerImage from "../assets/images/characters/writer.gif"
import puzzleDesignerImage from "../assets/images/characters/puzzle_designer.gif"
import { Puzzle } from "iconoir-react"

export const characters = [
    {
        id: "developer",
        title: "Software Developer",
        projectHeading: "Software Development & Consulting Experiences",
        image: writerImage,
        description: "developer",
    },
    {
        id: "puzzle-designer",
        title: "Events and Puzzles/Games Designer",
        projectHeading: "Puzzle and Game Design Experiences",
        image: puzzleDesignerImage,
        description: "puzzle designer",
    },
    {
        id: "writer",
        title: "Creative Writer",
        projectHeading: "Creative Writing Pieces",
        image: writerImage,
        description: "writer",
    },
    {
        id: "human",
        title: "Human",
        projectHeading: "Human",
        image: developerImage,
        description: "human",
    },
]