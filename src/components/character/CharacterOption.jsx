// src/components/character/CharacterOption.jsx

export default function CharacterOption({
    character,
    index,
    isSelected,
    onSelect,
}) {
    return (
        <button
            type="button"
            onClick={() => onSelect(character.id)}
            className={`
                flex w-full items-center justify-between
                border-b border-neutral-300
                py-5 text-left
                transition-opacity
                ${isSelected ? "opacity-100" : "opacity-50 hover:opacity-100"}
            `}
            >
            <span className="flex items-center gap-5">
                <span className="text-sm text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-major-mono text-sm">
                    {character.title}
                </span>
            </span>

            <span aria-hidden="true">→</span>
    </button>
    );
}