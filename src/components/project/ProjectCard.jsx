// src/components/project/ProjectCard.jsx

export default function ProjectCard({ project }) {
    return (
        <article className="group relative">
    
            <img
                src={project.image}
                alt=""
                className="w-full object-cover"
            />
    
            <div>
                <h3 className="mt-4 font-caslon text-2xl">{project.title}</h3>
        
                <p className="mt-2 font-caslon">{project.description}</p>
        
                <div className="mt-4 flex flex-wrap gap-4">
                    {project.links?.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:opacity-60"
                        >
                            {link.label} ↗
                        </a>
                    ))}
                </div>
            </div>
    
        </article>
    );
}