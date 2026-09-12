// src/components/character/CharacterDisplay.jsx

export default function CharacterDisplay() {
    return(
        <section className="flex-1 flex items-center justify-center">
            <div>
                <div className="h-80 w-80">
                    <p className="mt-6 max-w-md">
                        I will include here: <br />
                        1. dynamic image<br />
                        2. small intro<br />
                        that changes with the character
                    </p>
                </div>
            </div>
        </section>
    );
}