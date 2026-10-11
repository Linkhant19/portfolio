// src/components/character/CharacterOption.jsx

import LinApprovedSticker from "../../assets/images/ui/lin-approved-sticker.png";
import LinApprovedStickerTransparent from "../../assets/images/ui/lin-approved-transparent.png";

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
                w-full min-w-0 sm:w-[180px]
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
                    overflow-visible
                    rounded-lg
                    border-2

                    ${
                        isSelected
                            ? "border-[#000000]"
                            : "border-[#e2eafc]"
                    }
                `}
            >

                <div
                    className="
                        relative
                        aspect-[5/4]
                        overflow-hidden
                        rounded-t-[6px]
                        bg-[#ffd7ba]
                    "
                >

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
                                        saturate-[0.15]
                                        brightness-75
                                        group-hover:saturate-80
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
                            overflow-hidden
                        "
                    />

                </div>

                <div
                    className={`
                        relative
                        min-h-[54px]
                        px-3 py-3

                        border-t-2

                        ${
                            isSelected
                                ? `
                                    border-[#edf2fb]
                                    bg-gradient-to-b
                                    from-[#abc4ff]
                                    via-[#000000]
                                    to-[#000000]
                                `
                                : `
                                    border-[#ffffff]
                                    bg-gradient-to-b
                                    from-[#edf2fb]
                                    via-[#edf2fb]
                                    to-[#edf2fb]
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
                                        ? "text-[#ffffff]"
                                        : "text-[#000000]"
                                }
                            `}
                        >
                            {character.selectLabel ?? character.title}
                        </span>

                    </div>

                </div>

            </div>

            {isSelected && (
                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[-10%]
                            top-[40%]
                            z-30
                            rotate-[-10deg]
                        "
                    >
                        <img
                            src={LinApprovedStickerTransparent}
                            alt=""
                            aria-hidden="true"
                            className="
                                w-35
                                animate-sticker-slap
                            "
                        />
                    </div>
                )}

        </button>
    );
}