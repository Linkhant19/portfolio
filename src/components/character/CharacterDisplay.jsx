// src/components/character/CharacterDisplay.jsx

export default function CharacterDisplay({ character }) {
    return (
        <section className="flex flex-1 items-center justify-center p-8">
            <div className="w-full max-w-sm">
                <div className="aspect-[4/5] w-50 overflow-hidden">
                    <img
                    src={character.image}
                    alt={character.title}
                    className="h-full w-full object-cover"
                    />
                </div>
        
                <div className="mt-6 min-h-20">
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