// src/components/character/CharacterDisplay.jsx

export default function CharacterDisplay({ character }) {
    return (
        <section className="flex flex-1 items-center p-5 pl-30">
            <div className="w-full max-w-xl">
                <div className="w-130 overflow-hidden">
                    <img
                    src={character.image}
                    alt={character.title}
                    className="h-full w-full object-cover"
                    />
                </div>
        
                <div className="mt-0">
                    <h2 className="text-2xl font-semibold">
                    {character.title}
                    </h2>
        
                    <p className="mt-3 text-lg leading-relaxed">
                    {character.description}
                    </p>
                </div>
            </div>
        </section>
    );
}