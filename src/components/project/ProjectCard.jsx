// src/components/project/ProjectCard.jsx

export default function ProjectCard({ project }) {
    return (
        <article>
            <div className="aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
    
            <h3 className="mt-5 text-xl font-semibold">
                {project.title}
            </h3>
    
            <p className="mt-3 text-neutral-600">
                {project.description}
            </p>
        </article>
    );
}