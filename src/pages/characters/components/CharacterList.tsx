import CharacterCard from './CharacterCard'
import { Character } from '../models/Character.model'

interface CharacterListProps {
    characters: Character[],
    loading: boolean
}

export default function CharacterList ({ characters, loading }: CharacterListProps) {
  return (
    <div className="grid grid-cols-5">
        {
            loading
                ? <p>Loading...</p>
                : characters && characters.length > 0 
                    ? characters.map((character: Character) => (
                        <CharacterCard key={character.id} character={character} />
                    )) : <p>No characters found</p>
        }
    </div>
  )
}
