// src/components/project/ProjectsSection.jsx

import ProjectCard from "./ProjectCard";
import RetroComputer from "../portfolio/RetroComputer";
import WorkBadge from "../portfolio/WorkBadge";
import PoetryBook from "../portfolio/PoetryBook";
import WritingManuscript from "../portfolio/WritingManuscript";
import EventStage from "../portfolio/EventStage";
import EventPhotoStack from "../portfolio/EventPhotoStack";
import ProjectIntro from "./ProjectIntro";

export default function ProjectsSection({ projects, character }) {

    // 999. this should handle if I forgot to add order to a project
    const sortedProjects = [...projects].sort((a, b) => {
        const orderA = a.order?.[character.id] ?? 999;
        const orderB = b.order?.[character.id] ?? 999;
    
        return orderA - orderB;
    });

    return (
        <section
            id="projects"
            className="min-h-screen scroll-mt-16 px-4 py-16"
        >
            <div className="mx-auto max-w-7xl">
    
                <ProjectIntro character={character} />
            
                <div
                    id="project-list"
                    className="
                        mt-24
                        grid
                        gap-25 gap-y-15
                        md:grid-cols-2
                        text-end
                        scroll-mt-16
                    "
                >
                    {sortedProjects.map((project) => {
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