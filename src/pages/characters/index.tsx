import CharacterList from "./components/CharacterList";
import CharacterPaginator from "./components/CharacterPaginator";
import { useCharacter } from "./hook/useCharacter";

export default function Characters() {
    const { characters, loading, handlePrevious, handleNext } = useCharacter();

    return (
        <div className="bg-black p-20 text-white">
            <CharacterPaginator
                handleNext={handleNext}
                handlePrevious={handlePrevious}
            />
            <CharacterList characters={characters} loading={loading} />
        </div>
    )
}
