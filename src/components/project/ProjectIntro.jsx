// src/components/project/ProjectIntro.jsx

import {
    Github,
    Linkedin,
    Mail,
    Code,
    LightBulb,
    Group,
    CubeDots,
    OpenBook,
    Tree,
    MagicWand,
    CircleSpark,
    BrainElectricity,
    Potion,
    AirplaneHelix45deg,
    LaptopDevMode,
    PathArrow,
} from "iconoir-react";
import { useState } from "react";

const traitIcons = {
    technical: Code,
    creative: LightBulb,
    collaboration: Group,
    brain: BrainElectricity,

    build: CubeDots,
    magic: MagicWand,
    host: CircleSpark,
    tree: Tree,

    potion: Potion,
    lights: AirplaneHelix45deg,
    laptop: LaptopDevMode,
    arrow: PathArrow,


    book: OpenBook,

};

export default function CharacterProjectIntro({ character }) {
    return (
        <div
            className="
                grid gap-14
                lg:grid-cols-[1fr_1fr]
                lg:items-start
                pl-5
            "
        >

            <div
                className="
                    min-h-[350px]
                    rounded-xl
                    border border-stone-400
                    bg-stone-50/50
                    p-8
                "
            >
                <p
                    className="
                        font-major-mono
                        text-[10px]
                        tracking-[0.2em]
                        text-stone-500
                    "
                >
                    CharaCTer:
                </p>

                <h2
                    className="
                        mt-5
                        font-major-mono
                        text-2xl
                        leading-relaxed
                    "
                >
                    {character.title}
                </h2>

                <div className="my-7 flex items-center gap-3">
                    <div className="h-px flex-1 bg-stone-400" />

                    <span className="font-major-mono text-xs text-stone-400">
                        ×
                    </span>

                    <div className="h-px flex-1 bg-stone-400" />
                </div>

                <p
                    className="
                        max-w-lg
                        font-caslon
                        text-lg
                        leading-relaxed
                        text-stone-700
                    "
                >
                    {character.description}
                </p>
            </div>

            {/* right side I put 
            traits,
            socials,
            link to projects below */}

            <div className="flex min-h-[350px] flex-col items-end text-end pr-5">

                <div>
                    <p
                        className="
                            font-major-mono
                            text-xs
                            tracking-[0.15em]
                            text-stone-500
                        "
                    >
                        More ways to interact
                    </p>

                    <div className="mt-5 flex justify-end gap-4">

                        <SocialButton
                            href={character.socials?.linkedin}
                            label="LinkedIn"
                            icon={Linkedin}
                        />

                        <SocialButton
                            href={character.socials?.github}
                            label="GitHub"
                            icon={Github}
                        />

                        <SocialButton
                            href={character.socials?.email}
                            label="Email"
                            icon={Mail}
                        />

                    </div>
                </div>

                <div className="mt-12">

                    <p
                        className="
                            font-major-mono
                            text-xs
                            tracking-[0.15em]
                            text-stone-500
                        "
                    >
                        Traits
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4">

                        {character.traits?.map((trait) => {
                            const Icon =
                                traitIcons[trait.icon] ??
                                LightBulb;

                            return (
                                <Trait
                                    key={trait.label}
                                    icon={Icon}
                                    label={trait.label}
                                    description={trait.description}
                                />
                            );
                        })}

                    </div>

                </div>

                <a
                    href="#project-list"
                    className="
                        mt-auto
                        pt-12
                        font-major-mono
                        text-sm
                        tracking-[0.12em]

                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-[#B65F59]
                        hover:border-b-2
                    "
                >
                    Work Experiences & Projects ↓
                </a>

            </div>
        </div>
    );
}


function SocialButton({
    href,
    label,
    icon: Icon,
}) {
    if (!href) return null;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="
                flex h-12 w-12
                items-center justify-center

                border-2 border-stone-500
                bg-stone-100

                shadow-[4px_4px_0_#57534e]

                transition-transform
                duration-100

                hover:-translate-y-1

                active:translate-x-[2px]
                active:translate-y-[2px]
            "
        >
            <Icon
                width={24}
                height={24}
                strokeWidth={1.5}
            />
        </a>
    );
}


function Trait({
    icon: Icon,
    label,
    description,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="group relative">

            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                onBlur={() => setIsOpen(false)}
                aria-expanded={isOpen}
                aria-label={`${label}: ${description}`}
                className="
                    flex h-14 w-14
                    cursor-pointer
                    items-center justify-center

                    rounded-md
                    border-2 border-stone-500
                    bg-stone-100

                    shadow-[0px_0px_4=0px_#78716c]

                    transition-transform
                    duration-150

                    hover:-translate-y-1

                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-stone-500

                    active:translate-x-[2px]
                    active:translate-y-[2px]
                "
            >
                <Icon
                    width={26}
                    height={26}
                    strokeWidth={1.4}
                />
            </button>

            <div
                className={`
                    pointer-events-none
                    absolute
                    bottom-[calc(100%+14px)]
                    right-0
                    z-40

                    w-48
                    max-w-[calc(100vw-2rem)]

                    sm:left-1/2
                    sm:right-auto
                    sm:-translate-x-1/2

                    border border-stone-400
                    bg-[#F5F1E8]
                    p-3

                    shadow-md

                    transition-all
                    duration-150

                    ${
                        isOpen
                            ? "translate-y-0 opacity-100"
                            : `
                                translate-y-2
                                opacity-0
                                group-hover:translate-y-0
                                group-hover:opacity-100
                            `
                    }
                `}
            >
                <p
                    className="
                        font-major-mono
                        text-[9px]
                        tracking-[0.12em]
                    "
                >
                    {label}
                </p>

                <p
                    className="
                        mt-2
                        font-caslon
                        text-sm
                        leading-relaxed
                        text-stone-600
                    "
                >
                    {description}
                </p>

            </div>

        </div>
    );
}