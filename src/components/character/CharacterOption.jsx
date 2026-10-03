// src/components/character/CharacterOption.jsx

import LinApprovedSticker from "../../assets/images/ui/lin-approved-sticker.png";

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
            aria-pressed={isSelected}
            className={`
                group relative
                w-[180px]
                cursor-pointer
                text-left

                transition-transform
                duration-100

                ${
                    isSelected
                        ? "translate-x-[3px] translate-y-[4px]"
                        : `
                            hover:-translate-y-1
                            active:translate-x-[3px]
                            active:translate-y-[4px]
                        `
                }

                motion-reduce:transition-none
            `}
        >

            <div
                className={`
                    relative
                    overflow-hidden
                    rounded-lg
                    border-2

                    ${
                        isSelected
                            ? "border-[#476857]"
                            : "border-[#77736B]"
                    }
                `}
            >

                <div className="aspect-[5/4] overflow-hidden bg-stone-200">

                    <img
                        src={
                            character.selectorImage ??
                            character.image
                        }
                        alt=""
                        className={`
                            h-full w-full
                            object-cover

                            transition-all
                            duration-200

                            ${
                                isSelected
                                    ? "scale-[1.03] saturate-100"
                                    : `
                                        saturate-[0.55]
                                        brightness-95
                                        group-hover:saturate-90
                                    `
                            }
                        `}
                    />

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute inset-0
                            bg-gradient-to-b
                            from-white/10
                            via-transparent
                            to-black/10
                        "
                    />

                </div>

                {isSelected && (
                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[-20%]
                            top-[30%]
                            z-30
                            rotate-[-10deg]
                        "
                    >
                        <img
                            src={LinApprovedSticker}
                            alt=""
                            aria-hidden="true"
                            className="
                                w-50
                                animate-sticker-slap
                                drop-shadow-[0_6px_10px_rgba(0,0,0,0.22)]
                            "
                        />
                    </div>
                )}

                <div
                    className={`
                        relative
                        min-h-[54px]
                        px-3 py-3

                        border-t-2

                        ${
                            isSelected
                                ? `
                                    border-[#799982]
                                    bg-gradient-to-b
                                    from-[#769A82]
                                    via-[#5E806B]
                                    to-[#456453]
                                `
                                : `
                                    border-[#E8E1D5]
                                    bg-gradient-to-b
                                    from-[#D8D0C3]
                                    via-[#BDB5A8]
                                    to-[#958D82]
                                `
                        }

                        shadow-[inset_0_3px_0_rgba(255,255,255,0.3),inset_0_-4px_0_rgba(0,0,0,0.18)]
                    `}
                >

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            inset-x-2 top-1
                            h-[35%]
                            rounded-md
                            bg-white/10
                        "
                    />

                    <div className="relative flex items-start gap-2">

                        <span
                            className={`
                                font-major-mono
                                text-[10px]
                                leading-relaxed

                                ${
                                    isSelected
                                        ? "text-[#F3F7F1]"
                                        : "text-stone-800"
                                }
                            `}
                        >
                            {character.selectLabel ?? character.title}
                        </span>

                    </div>

                </div>

            </div>

        </button>
    );
}