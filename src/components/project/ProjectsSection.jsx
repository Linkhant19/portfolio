// src/components/project/ProjectsSection.jsx

import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects, character }) {
    return (
        <section
            id="projects"
            className="min-h-screen scroll-mt-16 px-8 py-20"
        >
            <div className="mx-auto max-w-6xl">
    
                <p className="font-major-mono text-sm">
                    current path:
                </p>
        
                <h2 className="font-major-mono text-sm">
                    {character.title}
                </h2>
        
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
    
            </div>
        </section>
    );
}