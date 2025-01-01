import { Character } from '../models/Character.model'

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
    return (
      <div className="p-4">
          <img
            src={character.image}
            alt={character.name}
            className={`rounded-lg w-full h-64 object-cover bg-slate-600 ${!character.image ? "animate-pulse": ""}`}
          />
          <div className="mt-2">
              <h2 className="text-xl font-bold">{character.name}</h2>
              <p>{character.species}</p>
          </div>
      </div>
    )
}
