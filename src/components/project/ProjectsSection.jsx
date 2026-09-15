// src/components/project/ProjectsSection.jsx

import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
    return (
        <section id="projects" className="min-h-screen scroll-mt-16 px-8 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-10 text-3xl font-semibold">
                    Projects
                </h2>
        
                <div className="grid gap-6 md:grid-cols-2">
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