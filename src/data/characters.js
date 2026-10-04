// src/data/characters.js
// this will be where my characters data will be stored
// 1. id
// 2. title
// 3. image
// 4. description

import developerImage from "../assets/images/characters/developer.gif"
import writerImage from "../assets/images/characters/writer.gif"
import puzzleDesignerImage from "../assets/images/characters/puzzle_designer.gif"
import villagerImage from "../assets/images/characters/human.gif"

import puzzleDesignerCharacterImage from "../assets/images/projects/Mystery24_1.jpg"
import writerCharacterImage from "../assets/images/villager/lin_writer.jpg"
import developerCharacterImage from "../assets/images/villager/lin_professional.jpg"
import villagerCharacterImage from "../assets/images/villager/lin_happy.jpg"

export const characters = [
    {
        id: "developer",
        title: "Software Developer",
        selectLabel: "software developer",
        projectHeading: "Software Development & Consulting Experiences",
        image: developerImage,
        selectorImage: developerCharacterImage,
        streamColor: "#647D8A",
        streamLabel: "developer",
        stats: {
            experience: 7,
            technical: 9,
            creativity: 5,
            leadership: 6, 
            teamwork: 7, 
        },
        description: "with his combined knowledge in Computer Science and Psychology, \
        he develops and implements software solutions that create different ways people could enjoy this world.",
        socials: {
            linkedin: "https://www.linkedin.com/in/linkhantko/",
            github: "https://github.com/Linkhant19/",
            email: "mailto:linix.linkhant19@gmail.com",
        },
        traits: [
            {
                icon: "technical",
                label: "Technical Builder",
                description:
                    "Enjoys turning ideas and requirements into working software systems.",
            },
            {
                icon: "creative",
                label: "Problem Solver",
                description:
                    "Likes exploring different approaches instead of stopping at the first solution.",
            },
            {
                icon: "collaboration",
                label: "Collaborator",
                description:
                    "Works closely with teammates, testers, and users throughout the development process.",
            },
            {
                icon: "playful",
                label: "Human-Centered",
                description:
                    "Often thinks about how technology feels to the person actually using it.",
            },
        ],
    },
    {
        id: "puzzleDesigner",
        title: "Events and Puzzles/Games Designer",
        selectLabel: "puzzle designer",
        projectHeading: "Puzzle and Game Design Experiences",
        image: puzzleDesignerImage,
        selectorImage: puzzleDesignerCharacterImage,
        streamColor: "#A26B62",
        streamLabel: "puzzles",
        stats: {
            experience: 6,
            technical: 5,
            creativity: 7,
            leadership: 9, 
            teamwork: 8, 
        },
        description: "once the President of the Board Games Club, he found his passion in \
        hosting various interactive events, and designing puzzles and games, including escape rooms.",
        socials: {
            linkedin: "https://www.linkedin.com/in/linkhantko/",
            github: "https://github.com/Linkhant19/",
            email: "mailto:linix.linkhant19@gmail.com",
        },
        traits: [
            {
                icon: "technical",
                label: "Technical Builder",
                description:
                    "Enjoys turning ideas and requirements into working software systems.",
            },
            {
                icon: "creative",
                label: "Problem Solver",
                description:
                    "Likes exploring different approaches instead of stopping at the first solution.",
            },
            {
                icon: "collaboration",
                label: "Collaborator",
                description:
                    "Works closely with teammates, testers, and users throughout the development process.",
            },
            {
                icon: "playful",
                label: "Human-Centered",
                description:
                    "Often thinks about how technology feels to the person actually using it.",
            },
        ],
    },
    {
        id: "writer",
        title: "Creative Writer",
        selectLabel: "writer",
        projectHeading: "Creative Writing Pieces",
        image: writerImage,
        selectorImage: writerCharacterImage,
        streamColor: "#7B6D88",
        streamLabel: "writer",
        stats: {
            experience: 8,
            technical: 4,
            creativity: 10,
            leadership: 1, 
            teamwork: 1, 
        },
        description: "he saddles up the wildest things whenever and wherever they come. \
        their footprints are marked in all forms. poetry. short stories. plays.",
        socials: {
            linkedin: "https://www.linkedin.com/in/linkhantko/",
            github: "https://github.com/Linkhant19/",
            email: "mailto:linix.linkhant19@gmail.com",
        },
        traits: [
            {
                icon: "technical",
                label: "Technical Builder",
                description:
                    "Enjoys turning ideas and requirements into working software systems.",
            },
            {
                icon: "creative",
                label: "Problem Solver",
                description:
                    "Likes exploring different approaches instead of stopping at the first solution.",
            },
            {
                icon: "collaboration",
                label: "Collaborator",
                description:
                    "Works closely with teammates, testers, and users throughout the development process.",
            },
            {
                icon: "playful",
                label: "Human-Centered",
                description:
                    "Often thinks about how technology feels to the person actually using it.",
            },
        ],
    },
    {
        id: "villager",
        title: "Villager",
        selectLabel: "villager",
        projectHeading: "Villager",
        image: villagerImage,
        selectorImage: villagerCharacterImage,
        streamColor: "#9A8464",
        streamLabel: "linix",
        stats: {
            experience: 10,
            technical: 3,
            creativity: 4,
            leadership: 4, 
            teamwork: 4, 
        },
        description: "just a normal townsperson who built all of this and more",
        socials: {
            linkedin: "https://www.linkedin.com/in/linkhantko/",
            github: "https://github.com/Linkhant19/",
            email: "mailto:linix.linkhant19@gmail.com",
        },
        traits: [
            {
                icon: "technical",
                label: "Technical Builder",
                description:
                    "Enjoys turning ideas and requirements into working software systems.",
            },
            {
                icon: "creative",
                label: "Problem Solver",
                description:
                    "Likes exploring different approaches instead of stopping at the first solution.",
            },
            {
                icon: "collaboration",
                label: "Collaborator",
                description:
                    "Works closely with teammates, testers, and users throughout the development process.",
            },
            {
                icon: "playful",
                label: "Human-Centered",
                description:
                    "Often thinks about how technology feels to the person actually using it.",
            },
        ],
    },
]