// src/components/character/CharacterDisplay.jsx

export default function CharacterDisplay({ character }) {
    return(
        <section className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-lg">
                <img
                    src={character.image}
                    alt={character.title}
                    className="aspect-square w-full object-cover"
                />

                <h2 className="mt-6 text-2xl font-semibold">
                    {character.title}
                </h2>

                <p className="mt-3 text-lg leading-relaxed text-neutral-600">
                    {character.description}
                </p>
            </div>
        </section>
    );
}