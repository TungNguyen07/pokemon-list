import { Pokemon, PokemonByType } from "@/types/pokemon";

export interface PokemonListProps {
    pokemonByType: PokemonByType;
    pokemonList: Pokemon[];
    selectTypes: string[];
}