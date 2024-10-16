import { DEFAULT_LIMIT } from "@/constants";
import { Pokemon, PokemonByType, PokemonType } from "@/types/pokemon";

export type PaginateParams = {
    data: Pokemon[];
    page: number;
    pokemonByType: PokemonByType;
    selectTypes: string[];
};

export type PaginateResult = {
    pokemon: Pokemon[];
    totalPage: number;
    count: number;
};

function getCommonPokemon(pokemonTypes: PokemonType[][]): PokemonType[] {
    if (pokemonTypes.length === 0) return [];

    return pokemonTypes.reduce((acc, curr) => {
        return acc.filter(pokemon =>
            curr.some(({ pokemon: currPokemon }) => currPokemon.url === pokemon.pokemon.url)
        );
    });
}

export const paginate = ({ data, page, pokemonByType, selectTypes }: PaginateParams): PaginateResult => {
    let result: Pokemon[] = [];

    if (selectTypes.length === 0) {
        result = data;
    } else {
        const pokemonTypes = selectTypes.map(type => pokemonByType[type]);
        result = getCommonPokemon(pokemonTypes).map(({ pokemon }) => pokemon);
    }

    const start = (page - 1) * DEFAULT_LIMIT;
    const end = page * DEFAULT_LIMIT;

    return {
        pokemon: result.slice(start, end),
        totalPage: Math.ceil(result.length / DEFAULT_LIMIT),
        count: result.length,
    };
};
