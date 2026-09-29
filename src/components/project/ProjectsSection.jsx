// src/components/project/ProjectsSection.jsx

import ProjectCard from "./ProjectCard";
import RetroComputer from "../portfolio/RetroComputer";
import WorkBadge from "../portfolio/WorkBadge";
import PoetryBook from "../portfolio/PoetryBook";
import WritingManuscript from "../portfolio/WritingManuscript";
import EventStage from "../portfolio/EventStage";
import EventPhotoStack from "../portfolio/EventPhotoStack";

export default function ProjectsSection({ projects, character }) {
    return (
        <section
            id="projects"
            className="min-h-screen scroll-mt-16 px-4 py-16"
        >
            <div className="mx-auto max-w-7xl">
    
                <div className="grid gap-8 md:grid-cols-2">
            
                    {/* Left side will include my current path: x */}
                    <div>
                        <p className="font-major-mono text-sm">
                            current path:
                        </p>

                        <p className="mt-2 font-major-mono text-lg">
                            {character.title}
                        </p>
                    </div>

                    {/* Right side will have the experience title */}
                    <div>
                        <h2 className="font-major-mono text-lg italic lowercase text-end">
                        {character.projectHeading}
                        </h2>
                    </div>

                </div>
            
                <div className="mt-17 grid gap-25 md:grid-cols-2 text-end">
                    {projects.map((project) => {
                        if (project.category === "project") {
                            return (
                                <RetroComputer
                                    key={project.id}
                                    project={project}
                                />
                            );
                        }

                        if (project.category === "work") {
                            return (
                                <WorkBadge
                                    key={project.id}
                                    project={project}
                                />
                            );
                        }

                        if (project.category === "poem-collection") {
                            return (
                                <PoetryBook
                                    key={project.id}
                                    project={project}
                                />
                            );
                        }

                        if (project.category === "writing") {
                            return (
                                <WritingManuscript
                                    key={project.id}
                                    project={project}
                                />
                            );
                        }

                        if (
                            project.category === "event" &&
                            project.presentation === "photo-stack"
                        ) {
                            return (
                                <EventPhotoStack
                                    key={project.id}
                                    project={project}
                                />
                            );
                        }
                        
                        if (
                            project.category === "event" &&
                            project.presentation === "stage"
                        ) {
                            return (
                                <EventStage
                                    key={project.id}
                                    project={project}
                                />
                            );
                        }

                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        );
                    })}
                </div>
    
            </div>
        </section>
    );
}