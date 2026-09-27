// src/data/projects.js
// all projects of mine will go here for now
// catergory is how the project will be displayed (design-wise)
// 1. project
// 2. work
// 3. event
// 4. poem collection
// 5. writing
// maybe more if I need later.

import CommuteBeatGif from "../assets/images/projects/commutebeat.gif";
import LivableStreetsGif from "../assets/images/projects/livablestreets.gif";
import FullStackGif from "../assets/images/projects/fullstackjourney.gif";
import FastLogo from "../assets/images/projects/fast_enterprises.jpg";
import The360edLogo from "../assets/images/projects/360ed.jpg";
import BoardGamesClubLogo from "../assets/images/projects/board_games_club.jpg";
import BostonUniversityLogo from "../assets/images/projects/boston_university.jpg";

export const projects = [
    {
        id: "portfolio",
        title: "Interactive Portfolio",
        characterIds: ["developer"],
        category: "project",
        description: "THIS WEBSITE!!!!!",
        image: CommuteBeatGif,
    },

    {
        id: "implementation-consultant",
        title: "Implementation Consultant -\nFast Enterprises",
        characterIds: ["developer"],
        category: "work",
        description: "adding later",
        image: FastLogo,
    },
  
    {
        id: "escape-room",
        title: "Escape Room",
        slug: "escape-room",
        characterIds: ["puzzle-designer"],
        category: "event",
        description: "escape room I did with Nyrein",
        image: CommuteBeatGif,
    },
    {
        id: "commute-beat",
        title: "Commute Beat - Full Stack Web App",
        characterIds: ["developer"],
        category: "project",
        description:
            "My team and I developed a user-centric web application that provides personalized travel route and music recommendations based on a user's preferred mode of transportation and the distance of the trip. We built the application with Flask and React and integrated Spotify, weather, and geolocation APIs to create recommendations tailored to each user's journey.",

        highlights: [
            "personalized travel and music recommendations",
            "Flask",
            "React",
            "Spotify",
            "weather",
            "geolocation APIs",
        ],
        image: CommuteBeatGif,
    },
    {
        id: "livable-streets",
        title: "Livable Streets - Data Analysis and Visualization",
        characterIds: ["developer"],
        category: "project",
        description:
            "As Team Representative for a data science project with the Massachusetts Bay Transportation Authority (MBTA), I helped lead my team in analyzing potential relationships between displacement and bike-lane development. We cleaned and analyzed data from multiple sources using Python, pandas, NumPy, Matplotlib, and Seaborn, transforming raw datasets into visualizations and identifying potential correlations for our final client report.",

        highlights: [
            "Team Representative",
            "MBTA",
            "displacement and bike-lane development",
            "Python",
            "pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "data visualizations",
            "potential correlations",
        ],
        image: LivableStreetsGif,
    },
    {
        id: "full-stack-journey",
        title: "My Full-Stack Development Journey - Fall 2024",
        characterIds: ["developer"],
        category: "project",
        description:
            "During my Full-Stack Development class at Boston University, I created multiple full-stack web applications \
        as I learned Python, JavaScript, and HTML/CSS, and learned about APIs, Django framework, Git, Heroku, Databases, Data Visualization, and more.",

        highlights: [
            "Python",
            "JavaScript",
            "HTML/CSS",
            "APIs",
            "Django",
            "Git",
            "Heroku",
            "Databases",
            "Data Visualization",
        ],
        image: FullStackGif,

    },
    {
        id: "tetris-agent",
        title: "AI Tetris Agent - Neural Network",
        characterIds: ["developer"],
        category: "project",
        description:
            "I developed an AI learning agent in Java that learns to play Tetris through iterative training and improves its decision-making over time. I designed five features to represent game states and guide the agent's behavior, incorporating reward signals, state-action representations, and Q-value predictions.",
        
        highlights: [
            "AI learning agent",
            "Java",
            "iterative training",
            "five features",
            "reward signals",
            "state-action representations",
            "Q-value predictions",
        ],
        image: LivableStreetsGif,
    },
    {
        id: "teaching-assistant",
        title: "CS Teaching Assistant -\nBoston University",
        characterIds: ["developer"],
        category: "work",
        description:
            "As a Teaching Assistant, I supported approximately 100 students across three lab sections and held office hours to provide individualized guidance. I taught Python, algorithms, problem-solving and debugging techniques, helping students build the skills needed to develop a Connect Four AI player as their final project.",

        highlights: [
            "Teaching Assistant",
            "approximately 100 students",
            "Python",
            "algorithms",
            "problem-solving",
            "debugging",
            "Connect Four AI player",
        ],
        image: BostonUniversityLogo,
    },
    {
        id: "board-games-club",
        title: "President -\nBoston University Board Games Club",
        characterIds: ["puzzle-designer"],
        category: "work",
        description: `As the first elected Asian President of Boston University's
            Board Games Club, I led a team of 10 executive board members
            and organized weekly gatherings for 70–110 members. Alongside
            managing the club's finances and inventory, I focused on
            creating a welcoming community where people could connect
            through games and new events (including Escape Rooms, 
            Murder Mysteries, and more), helping grow our committed membership by 42%.
   
            I also developed interactive websites to promote our events,
            combining my interests in software development and event design
            and helping increase event sales by up to 145%.`,
        highlights: [
            "first elected Asian President",
            "10 executive board members",
            "70–110 members",
            "welcoming community",
            "42%",
            "interactive websites",
            "145%",
            "Escape Rooms",
            "Murder Mysteries",
        ],
        image: BoardGamesClubLogo,
    },
    {
        id: "360ed-internship",
        title: "Application Development Intern -\n360ed",
        characterIds: ["developer", "puzzle-designer"],
        category: "work",
        description:
            "As an Application Development Intern at 360ed, I collaborated remotely with a cross-functional team to enhance two existing Augmented Reality (AR) educational applications for children affected by educational disruptions in Myanmar. I researched educational data and user engagement, contributed ideas for game-like features, and helped explore ways to make the applications more interactive and engaging for young learners.",
        highlights: [
            "cross-functional team",
            "Augmented Reality (AR)",
            "educational applications",
            "Myanmar",
            "user engagement",
            "game-like features",
            "interactive and engaging",
        ],
        image: The360edLogo,
    },
    {
        id: "shadows-of-you",
        title: "Shadows of You",
        characterIds: ["writer"],
        category: "poem-collection",
        description: "- written in March 2024",
        image: LivableStreetsGif,
        links: [
            {
                label: "Website",
                url: "https://linkhant19.github.io/ShadowsOfYou",
            },
        ]
    },
    {
        id: "seven-ways-to-heaven",
        title: "Seven Ways To Heaven",
        characterIds: ["writer"],
        category: "poem-collection",
        description: "- written in January 2025",
        image: LivableStreetsGif,
        links: [
            {
                label: "Website",
                url: "https://seven-ways-to-heaven-a241a7b892e1.herokuapp.com",
            },
        ]
    },
    {
        id: "the-midnight-friendship-service",
        title: "The Midnight Friendship Service",
        characterIds: ["writer"],
        category: "poem-collection",
        description: "- written in June 2025",
        image: LivableStreetsGif,
        links: [
            {
                label: "Website",
                url: "https://midnightfriendshipservice.vercel.app",
            },
            {
                label: "GitHub",
                url: "https://github.com/Linkhant19/midnightfriendshipservice",
            },
        ]
    },
    {
        id: "midnight-friendship-service-short-story",
        title: "The Midnight Friendship Service - A Short Story",
        characterIds: ["writer"],
        category: "writing",
        description: "- written as a class assignment in Spring 2025. This is different from The Midnight Friendship Service poetry collection (even though they have the same title). This is a story set in a distopian future with an Artificial Intelligence company called 'The Midnight Friendship Service'.",
        image: LivableStreetsGif,
        links: [
            {
                label: "PDF",
                url: "/writings/THE-MIDNIGHT-FRIENDSHIP-SERVICE-SHORT-STORY.pdf",
            },
        ]
    },
    {
        id: "phoenix.inc",
        title: "Phoenix.Inc - A Short Play",
        characterIds: ["writer"],
        category: "writing",
        description: "- written in Fall 2024 for a PlayWriting class. Haunted by regrets and bad memories, \
        the old man Dick visits a healthcare company called Phoenix.Inc. \
        Their treatments offer a new way of changing and reliving past situations with the help of generative AI. \
        Will Dick be able to change his past successfully?",
        image: LivableStreetsGif,
        links: [
            {
                label: "PDF",
                url: "/writings/Phoenix.Inc-Playwriting.pdf",
            },
        ]
    }
];