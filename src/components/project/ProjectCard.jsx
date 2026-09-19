// src/components/project/ProjectCard.jsx

import { Link } from "react-router-dom";

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

                {project.slug && (
                    <div className="mt-4">
                        <Link
                            to={`/projects/${project.slug}`}
                            className="inline-block font-major-mono text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
                        >
                            Explore Project →
                        </Link>
                    </div>
                )}
        
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