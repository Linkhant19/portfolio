// src/data/characters.js
// this will be where my characters data will be stored
// 1. id
// 2. title
// 3. image
// 4. description


// trait colors avaiable right now 
// blue 
// violet
// green
// amber

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
                color: "amber",
                description:
                    "Turns ideas and requirements into working software systems.",
            },
            {
                icon: "creative",
                label: "Problem Solver",
                color: "amber",
                description:
                    "Explores multiple solutions and perspectives for a given problem.",
            },
            {
                icon: "collaboration",
                label: "Team Player",
                color: "amber",
                description:
                    "Works closely with teammates, leads, testers, and users throughout the development process.",
            },
            {
                icon: "brain",
                label: "Human-Centered",
                color: "amber",
                description:
                    "Implements a deep understanding of Social Psychology and perception in the development process.",
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
                icon: "build",
                label: "The Artificer",
                color: "amber",
                description:
                    "Designs puzzles around logic, discovery, sequencing, and satisfying aha moments.",
            },
            {
                icon: "magic",
                label: "The Sorcerer",
                color: "amber",
                description:
                    "Creates moments of surprise and wonder through reveals, interactive effects, and unexpected ways for players to influence the experience.",
            },
            {
                icon: "host",
                label: "The Bard",
                color: "amber",
                description:
                    "Enjoys planning and hosting large events and gameshows with interactive elements.",
            },
            {
                icon: "tree",
                label: "The Druid",
                color: "amber",
                description:
                    "Uses space, atmosphere, props, and environmental storytelling to make each experience feel grounded in its own world.",
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
                icon: "potion",
                label: "The Alchemist",
                color: "amber",
                description:
                    "Transforms memories, feelings, and seemingly ordinary experiences into imagery, metaphor, and story.",
            },
            {
                icon: "lights",
                label: "All The Lights",
                color: "amber",
                description:
                    "Experiments with new voice, perspective, tone, and form to find the theme and style that best fits each piece.",
            },
            {
                icon: "laptop",
                label: "The Raven",
                color: "amber",
                description:
                    "Integrate software engineering skills to create websites that further supports the vision of a project.",
            },
            {
                icon: "arrow",
                label: "Labyrinth",
                color: "amber",
                description:
                    "Explores small moments, emotions, and details lost in the corner of the mind, and turns them into something worth remembering.",
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
        streamLabel: "villager",
        stats: {
            experience: 10,
            technical: 3,
            creativity: 4,
            leadership: 4, 
            teamwork: 4, 
        },
        description: "just a normal townsperson who built all of this. his role has no special abilities or powers, but his contributions often make a difference.",
        socials: {
            linkedin: "https://www.linkedin.com/in/linkhantko/",
            github: "https://github.com/Linkhant19/",
            email: "mailto:linix.linkhant19@gmail.com",
        },
        traits: [
            {
                icon: "curious",
                label: "Curious",
                color: "amber",
                description:
                    "Frequently responsible for starting multiple side quests.",
            },
            {
                icon: "sunshine",
                label: "Sunshine",
                color: "amber",
                description:
                    "Wears a positive attitude to every situation and group he encounters.",
            },
            {
                icon: "communicate",
                label: "Communicator",
                color: "amber",
                description:
                    "Communicates effectively with other townspeople and villagers.",
            },
            {
                icon: "heart",
                label: "Heart",
                color: "amber",
                description:
                    "Builds things with kindess and heart.",
            },
        ],
    },
]