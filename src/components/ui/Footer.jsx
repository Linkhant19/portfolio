// src/components/ui/Footer.jsx

export default function Footer() {
    return (
        <footer
            className="
                mt-10
                px-6 py-10
                text-center
            "
        >
            <a
                href="#top"
                className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-md
                    border-2 border-stone-500
                    bg-stone-100

                    px-5 py-3

                    font-major-mono
                    text-[10px]
                    tracking-[0.14em]
                    text-stone-700


                    transition-all
                    duration-500

                    opacity-40
                    hover:opacity-100
                    hover:-translate-y-0.5

                    active:translate-x-[2px]
                    active:translate-y-[2px]
                "
            >
                ↑ back to main menu
            </a>
            <p
                className="
                    font-caslon
                    text-[12px] italic
                    tracking-[0.16em]
                    mt-6
                "
            >
                ⓒ 2026 Written and Designed by
            </p>

            <p
                className="
                    mt-2
                    font-major-mono
                    text-[14px]
                "
            >
                lin khant ko
            </p>
        </footer>
    );
}