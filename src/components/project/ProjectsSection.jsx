// src/components/project/ProjectsSection.jsx

export default function ProjectsSection({ projects }) {
    return (
        <section id="projects" className="min-h-screen scroll-mt-16 px-8 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-10 text-3xl font-semibold">
                    Projects
                </h2>
        
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="border border-neutral-300 p-6"
                        >
                            <h3 className="text-xl font-semibold">
                                {project.title}
                            </h3>
            
                            <p className="mt-3 text-neutral-600">
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
  }