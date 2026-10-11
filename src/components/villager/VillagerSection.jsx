// src/components/villager/VillagerSection.jsx

import {
    Github,
    Linkedin,
    Mail,
} from "iconoir-react";

import LinProfessionalPhoto from "../../assets/images/villager/lin_professional.jpg";
import LinGradPhoto from "../../assets/images/villager/lin_grad.jpg";

export default function VillagerSection({ character }) {

    return (
        <section
            id="projects"
            className="min-h-screen scroll-mt-16 px-4 py-16"
        >
            <div className="mx-auto max-w-7xl">

                <p className="font-major-mono text-sm">
                    character 04 / The Villager
                </p>

                <h2 className="mt-6 font-caslon text-5xl md:text-[50px]">
                    Just Another Townsfolk,
                </h2>

                <p className="mt-6 max-w-3xl font-caslon text-[15px] italic text-stone-600">
                    making a living out of loving the living
                </p>

                <div className="
                    mt-16
                    grid items-center gap-6
                    sm:grid-cols-2
                    lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.5fr)]
                    lg:gap-8
                    xl:grid-cols-[320px_320px_minmax(0,1fr)]
                ">

                    <figure className="w-full max-w-80 hidden lg:block">

                        <div className="aspect-[4/5] overflow-hidden rounded-lg border border-black">

                            <img
                                src={LinProfessionalPhoto}
                                alt="Lin Photo 1"
                                className="h-full w-full object-cover"
                            />

                        </div>

                    </figure>

                    <figure className="w-full max-w-80">

                        <div className="lg:aspect-[4/5] overflow-hidden rounded-lg border border-black">

                            <img
                                src={LinGradPhoto}
                                alt="Lin Photo 2"
                                className="h-full w-full object-cover"
                            />

                        </div>

                    </figure>

                    <div className="
                        space-y-6
                        font-caslon text-lg leading-relaxed
                        sm:col-span-2
                        lg:col-span-1
                    ">

                        <h3 className="font-caslon text-4xl">
                            Hey, this is Lin!
                        </h3>

                        <p>
                            I am a Software Developer and Consultant at Fast Enterprises. I graduated from Boston University in May 2025 with a double major in Computer Science and Psychology. 
                        </p>

                        <p>
                            I’m intrigued by how technology and design shape the way people think, feel, and interact, and I’m motivated by finding ways to apply what I learn to build systems that are both helpful and enjoyable to use.
                        </p>

                        <p>
                            Outside of software, I enjoy designing puzzles, hosting large events, playing board games, writing, and building interactive experiences.
                        </p>

                    </div>

                </div>

                <div>
                    <p
                        className="
                            font-major-mono
                            text-xs
                            tracking-[0.15em]
                            text-stone-500
                            text-center
                            mt-16
                        "
                    >
                        More ways to interact
                    </p>

                    <div className="mt-5 flex justify-center gap-4">

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

            </div>
        </section>
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

                bg-[#CCDBFD]

                border border-[#EDF2FB]
                rounded-full

                hover:shadow-[0px_5px_0_#CCDBFD]

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
